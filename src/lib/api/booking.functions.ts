import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSupabase } from "../supabase.server";
import { createGoogleEvent } from "../google-calendar.server";
import { sendConfirmationEmail } from "../email.server";

const DEFAULT_SERVICE_NAMES = [
  "Mobile App Development",
  "Web Development",
  "Shopify Development",
  "Amazon Services",
  "Graphic Design",
  "Video Editing",
  "Digital Marketing",
  "Data Solutions",
  "SEO Services",
  "SaaS Development",
  "WordPress Development",
  "AI Development",
  "UI/UX Design",
  "Custom Web App Development",
  "E-Commerce Business Startup",
  "Website Maintenance & Support",
  "Consultation",
];

const WEBSITE_SERVICE_ORDER = [
  "Mobile App Development",
  "Web Development",
  "Shopify Development",
  "Amazon Services",
  "Graphic Design",
  "Video Editing",
  "Digital Marketing",
  "Data Solutions",
  "SEO Services",
  "SaaS Development",
  "WordPress Development",
  "AI Development",
  "UI/UX Design",
  "Custom Web App Development",
  "E-Commerce Business Startup",
  "Website Maintenance & Support",
  "Consultation",
];

const DEFAULT_SLOT_TIMES = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

function buildDefaultSlotRows(date: string) {
  return DEFAULT_SLOT_TIMES.map((time) => ({
    date,
    time,
    is_booked: false,
  }));
}

function sortServicesToWebsiteOrder(services: string[]) {
  const order = new Map(WEBSITE_SERVICE_ORDER.map((name, index) => [name.toLowerCase(), index]));
  return [...services].sort((a, b) => {
    const aIndex = order.get(a.toLowerCase());
    const bIndex = order.get(b.toLowerCase());

    if (aIndex !== undefined && bIndex !== undefined) return aIndex - bIndex;
    if (aIndex !== undefined) return -1;
    if (bIndex !== undefined) return 1;
    return a.localeCompare(b);
  });
}

// Server function to fetch active services dynamically from Supabase
export const getActiveServices = createServerFn({ method: "GET" })
  .handler(async () => {
    const supabase = getSupabase();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("services")
          .select("name")
          .eq("active", true)
          .order("name", { ascending: true });

        if (error) throw error;
        if (data && data.length > 0) {
          return sortServicesToWebsiteOrder(data.map((s) => s.name));
        }
      } catch (err) {
        console.error("Failed to query services from Supabase:", err);
      }
    }

    return DEFAULT_SERVICE_NAMES;
  });

// Server function to fetch available and booked slots for a selected date
export const getAvailableSlots = createServerFn({ method: "POST" })
  .validator(z.object({ date: z.string() })) // date format "YYYY-MM-DD"
  .handler(async ({ data }) => {
    const supabase = getSupabase();
    if (supabase) {
      try {
        // 1. Fetch slots defined for this day from slots table
        const { data: dbSlots, error: slotsError } = await supabase
          .from("slots")
          .select("time, is_booked")
          .eq("date", data.date)
          .order("time", { ascending: true });

        if (slotsError) {
          console.error("Supabase Slots Query Error:", slotsError);
          throw slotsError;
        }

        // If the DB does not yet have slots for that day, seed the default working hours.
        if (!dbSlots || dbSlots.length === 0) {
          const { error: insertError } = await supabase
            .from("slots")
            .upsert(buildDefaultSlotRows(data.date), { onConflict: "date,time" });

          if (insertError) {
            console.error("Supabase Slot Seed Error:", insertError);
            throw insertError;
          }

          const { data: seededSlots, error: seededError } = await supabase
            .from("slots")
            .select("time, is_booked")
            .eq("date", data.date)
            .order("time", { ascending: true });

          if (seededError) {
            console.error("Supabase Seeded Slots Query Error:", seededError);
            throw seededError;
          }

          return {
            allSlots: (seededSlots ?? []).map((s) => s.time),
            bookedSlots: (seededSlots ?? []).filter((s) => s.is_booked).map((s) => s.time),
          };
        }

        // 2. Fetch bookings for this day from bookings table to prevent double booking
        const { data: bookingsData, error: bookingsError } = await supabase
          .from("bookings")
          .select("time")
          .eq("date", data.date);

        if (bookingsError) {
          console.error("Supabase Bookings Query Error:", bookingsError);
          throw bookingsError;
        }

        const allSlots = dbSlots.map((s) => s.time);
        const bookedTimes = new Set<string>();
        // Add already booked slots
        bookingsData?.forEach((b) => {
          if (b.time) bookedTimes.add(b.time);
        });

        dbSlots.forEach((s) => {
          if (s.is_booked) bookedTimes.add(s.time);
        });

        return {
          allSlots,
          bookedSlots: Array.from(bookedTimes),
          availableSlots: allSlots.filter((time) => !bookedTimes.has(time)),
        };
      } catch (err) {
        console.error("Failed to query booked slots from Supabase:", err);
      }
    }

    // DEVELOPMENT MOCK MODE FALLBACK:
    // Block "10:00" and "14:00" for visual verification
    return {
      allSlots: DEFAULT_SLOT_TIMES,
      bookedSlots: ["10:00", "14:00"],
      availableSlots: DEFAULT_SLOT_TIMES.filter((time) => !["10:00", "14:00"].includes(time)),
    };
  });

// Server function to process a booking transaction
export const createBooking = createServerFn({ method: "POST" })
  .validator(
    z.object({
      fullName: z.string().min(1, "Full name is required"),
      email: z.string().email("Invalid email address"),
      phone: z.string().optional(),
      serviceName: z.string().min(1, "Service selection is required"),
      industry: z.string().min(1, "Industry selection is required"),
      date: z.string(), // "YYYY-MM-DD"
      time: z.string(), // "HH:MM"
      duration: z.number().int().positive(), // 30, 45, or 60 minutes
      message: z.string().optional(),
    })
  )
  .handler(async ({ data }) => {
    const supabase = getSupabase();

    // Guard against duplicate bookings before creating external side effects.
    if (supabase) {
      const { data: existingBooking, error: existingBookingError } = await supabase
        .from("bookings")
        .select("id")
        .eq("date", data.date)
        .eq("time", data.time)
        .maybeSingle();

      if (existingBookingError) {
        throw existingBookingError;
      }

      if (existingBooking) {
        throw new Error("Selected time slot is already booked.");
      }

      const { data: existingSlot, error: existingSlotError } = await supabase
        .from("slots")
        .select("is_booked")
        .eq("date", data.date)
        .eq("time", data.time)
        .maybeSingle();

      if (existingSlotError) {
        throw existingSlotError;
      }

      if (existingSlot?.is_booked) {
        throw new Error("Selected time slot is already booked.");
      }
    }

    // 1. Calculate event duration timestamps in ISO
    const startDateTime = new Date(`${data.date}T${data.time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + data.duration * 60 * 1000);

    const startIso = startDateTime.toISOString();
    const endIso = endDateTime.toISOString();

    // 2. Create Google Calendar Event (Service Account integration)
    const calResult = await createGoogleEvent({
      serviceName: data.serviceName,
      clientName: data.fullName,
      clientEmail: data.email,
      phone: data.phone,
      industry: data.industry,
      description: data.message || "",
      startIso,
      endIso,
    });

    // 3. Save booking payload into Supabase Table
    let databaseRecordId = null;
    if (supabase) {
      try {
        const { data: inserted, error: insertError } = await supabase
          .from("bookings")
          .insert({
            full_name: data.fullName,
            email: data.email,
            phone: data.phone || null,
            service: data.serviceName,
            industry: data.industry,
            date: data.date,
            time: data.time,
            duration: data.duration,
            message: data.message || null,
            meet_link: calResult.meetLink,
            calendar_event_id: calResult.eventId,
            status: "confirmed", // Auto confirm appointments
          })
          .select("id")
          .single();

        if (insertError) {
          throw insertError;
        }
        databaseRecordId = inserted?.id;
        console.log(`Saved booking into Supabase bookings table: ID = ${databaseRecordId}`);

        // Mark the selected slot as booked in the slots table, or create it if it does not exist yet.
        const { error: slotUpsertError } = await supabase
          .from("slots")
          .upsert(
            {
              date: data.date,
              time: data.time,
              is_booked: true,
            },
            { onConflict: "date,time" }
          );

        if (slotUpsertError) {
          console.error("Failed to mark slot as booked in slots table:", slotUpsertError);
        }
      } catch (err) {
        console.error("Failed to insert booking record in Supabase:", err);
        throw err;
      }
    } else {
      console.log("Supabase client is not initialized. Skipping database save (Mock Mode).");
    }

    // 4. Send Confirmation Email via Resend API
    const emailSent = await sendConfirmationEmail({
      clientEmail: data.email,
      clientName: data.fullName,
      serviceName: data.serviceName,
      date: data.date,
      time: data.time,
      duration: data.duration,
      meetLink: calResult.meetLink,
      message: data.message,
      industry: data.industry,
      phone: data.phone,
    });

    return {
      success: true,
      bookingId: databaseRecordId || "mock_id_" + Math.random().toString(36).substring(2, 9),
      meetLink: calResult.meetLink,
      emailSent,
      details: {
        fullName: data.fullName,
        serviceName: data.serviceName,
        date: data.date,
        time: data.time,
        duration: data.duration,
        meetLink: calResult.meetLink,
      },
    };
  });

export const createContactSubmission = createServerFn({ method: "POST" })
  .validator(
    z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email address"),
      company: z.string().optional(),
      message: z.string().min(1, "Message is required"),
    })
  )
  .handler(async ({ data }) => {
    const supabase = getSupabase();
    if (!supabase) {
      console.warn("Supabase client not available — contact form submission NOT saved to database.");
      return { success: true, saved: false };
    }

    const { error } = await supabase.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      message: data.message,
      source: "website",
    });

    if (error) {
      throw error;
    }

    return { success: true, saved: true, table: "contact_messages" };
  });

// Keep getBookedSlots as a deprecated fallback just in case other files use it
export const getBookedSlots = createServerFn({ method: "POST" })
  .validator(z.object({ date: z.string() }))
  .handler(async ({ data }) => {
    const res = await getAvailableSlots({ data: { date: data.date } });
    return res.bookedSlots;
  });
