import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { toast } from "sonner";
import {
  ChevronRight,
  ChevronLeft,
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  Briefcase,
  Building,
  CheckCircle2,
  Video,
  Sparkles,
  Globe,
  Loader2,
  FileText,
} from "lucide-react";

import { useBooking } from "./BookingContext";
import { getActiveServices, getAvailableSlots, createBooking } from "@/lib/api/booking.functions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

const DEFAULT_SERVICES = [
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

const INDUSTRIES = [
  { name: "SaaS", icon: Sparkles },
  { name: "E-Commerce", icon: Briefcase },
  { name: "Real Estate", icon: Building },
  { name: "Startup", icon: Globe },
  { name: "Healthcare", icon: CheckCircle2 },
  { name: "Education", icon: FileText },
  { name: "Agency", icon: User },
];

const DURATIONS = [30, 45, 60];

const DEFAULT_TIME_SLOTS = [
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

function resolveServiceName(candidate: string, services: string[]) {
  if (!candidate) return "";

  const exactMatch = services.find((srv) => srv.toLowerCase() === candidate.toLowerCase());
  if (exactMatch) return exactMatch;

  const partialMatch = services.find((srv) => {
    const normalizedService = srv.toLowerCase();
    const normalizedCandidate = candidate.toLowerCase();
    return normalizedService.includes(normalizedCandidate) || normalizedCandidate.includes(normalizedService);
  });

  return partialMatch || "";
}

export function BookingModal() {
  const { isOpen, selectedService, closeBooking } = useBooking();

  // Multi-step state (1 to 6)
  const [step, setStep] = useState(1);

  // Form Fields
  const [service, setService] = useState("");
  const [availableServices, setAvailableServices] = useState<string[]>(DEFAULT_SERVICES);
  const [industry, setIndustry] = useState("");
  const [duration, setDuration] = useState(30);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  // Server Integration State
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>(DEFAULT_TIME_SLOTS);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<any>(null);

  // Timezone detection
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

  // Pre-fill service name when it changes from the context
  useEffect(() => {
    if (selectedService) {
      setService(resolveServiceName(selectedService, availableServices) || selectedService);
      // Auto-detect matching industry if possible (e.g. "Product Engineering" might match "SaaS")
      if (selectedService.toLowerCase().includes("web")) {
        setIndustry("Agency");
      } else if (selectedService.toLowerCase().includes("app")) {
        setIndustry("Startup");
      } else if (selectedService.toLowerCase().includes("product")) {
        setIndustry("SaaS");
      } else {
        setIndustry("");
      }
    } else {
      setService("");
      setIndustry("");
    }
  }, [selectedService, availableServices, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;

    getActiveServices()
      .then((services) => {
        if (cancelled) return;

        if (Array.isArray(services) && services.length > 0) {
          setAvailableServices(services);

          if (selectedService) {
            setService(resolveServiceName(selectedService, services) || selectedService);
          }
        }
      })
      .catch((err) => {
        console.error("Error loading services:", err);
        toast.error("Failed to load services from the database.");
      });

    return () => {
      cancelled = true;
    };
  }, [isOpen, selectedService]);

  // Reset modal state on close
  useEffect(() => {
    if (!isOpen) {
      // Small timeout to prevent flashing during close animation
      const timer = setTimeout(() => {
        setStep(1);
        setService("");
        setIndustry("");
        setDuration(30);
        setSelectedDate(undefined);
        setSelectedTime("");
        setAvailableTimeSlots(DEFAULT_TIME_SLOTS);
        setBookedSlots([]);
        setFullName("");
        setEmail("");
        setPhone("");
        setDescription("");
        setBookingResult(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Fetch occupied slots from server when date changes
  useEffect(() => {
    if (!selectedDate) {
      setBookedSlots([]);
      setAvailableTimeSlots(DEFAULT_TIME_SLOTS);
      return;
    }
    const dateStr = format(selectedDate, "yyyy-MM-dd");
    setLoadingSlots(true);
    setSelectedTime(""); // Reset time slot when date changes

    getAvailableSlots({ data: { date: dateStr } })
      .then((result) => {
        setBookedSlots(result.bookedSlots);
        setAvailableTimeSlots(result.allSlots?.length ? result.allSlots : DEFAULT_TIME_SLOTS);
      })
      .catch((err) => {
        console.error("Error loading slots:", err);
        toast.error("Failed to query slot availability.");
        setAvailableTimeSlots(DEFAULT_TIME_SLOTS);
      })
      .finally(() => {
        setLoadingSlots(false);
      });
  }, [selectedDate]);

  // Form Validation checks
  const canGoNext = () => {
    if (step === 1) return !!service;
    if (step === 2) return !!industry;
    if (step === 3) return !!selectedDate && !!selectedTime;
    if (step === 4) {
      return !!fullName && !!email && email.includes("@");
    }
    return true;
  };

  const nextStep = () => {
    if (canGoNext()) {
      setStep((s) => s + 1);
    } else {
      toast.warning("Please complete the required details before proceeding.");
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(1, s - 1));
  };

  // Submit Booking transaction
  const handleConfirmBooking = async () => {
    if (!selectedDate) return;
    setSubmitting(true);
    const dateStr = format(selectedDate, "yyyy-MM-dd");

    try {
      const result = await createBooking({
        data: {
          fullName,
          email,
          phone: phone || undefined,
          serviceName: service,
          industry,
          date: dateStr,
          time: selectedTime,
          duration,
          message: description || undefined,
        },
      });

      if (result.success) {
        setBookingResult(result);
        setStep(6);
        toast.success("Consultation successfully scheduled!");
      } else {
        toast.error("Failed to schedule booking. Please try again.");
      }
    } catch (error) {
      console.error("Booking submission error:", error);
      toast.error("An error occurred during booking. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeBooking()}>
      <DialogContent className="max-w-xl border border-border/80 bg-background/95 p-0 shadow-2xl backdrop-blur-xl md:rounded-2xl overflow-hidden w-[calc(100vw-1rem)] max-h-[calc(100dvh-1rem)] overflow-y-auto sm:w-full">
        
        {/* Progress Header Indicator */}
        {step < 6 && (
          <div className="relative h-1.5 w-full bg-accent/30">
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-primary transition-all duration-500 ease-out"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        )}

        <div className="p-4 sm:p-6 md:p-8">
          {step < 6 && (
            <DialogHeader className="mb-6">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Scheduling Consultation</span>
                <span className="text-primary font-bold">Step {step} of 5</span>
              </div>
              <DialogTitle className="text-2xl font-bold tracking-tight text-foreground mt-2">
                {step === 1 && "Choose Your Service"}
                {step === 2 && "Select Niche Industry"}
                {step === 3 && "Pick Date & Available Slot"}
                {step === 4 && "Provide Details"}
                {step === 5 && "Review & Secure Booking"}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-1">
                {step === 1 && "Select the core capability you require for your business."}
                {step === 2 && "Choose your industry context to align technical requirements."}
                {step === 3 && "Select duration and pick a convenient slot in your local timezone."}
                {step === 4 && "Provide your contact and project details to prepare for our call."}
                {step === 5 && "Review your consultation details before finalizing."}
              </DialogDescription>
            </DialogHeader>
          )}

          {/* STEP 1: SERVICE SELECTOR */}
          {step === 1 && (
            <div className="space-y-4 py-2">
              <div className="grid grid-cols-1 gap-3">
                {availableServices.map((srv) => {
                  const isSelected = service === srv;
                  const lockedService = selectedService ? resolveServiceName(selectedService, availableServices) : "";
                  const isLocked = !!lockedService && lockedService !== srv;
                  return (
                    <button
                      key={srv}
                      disabled={isLocked}
                      onClick={() => setService(srv)}
                      className={`flex items-center justify-between rounded-xl border p-4 text-left font-medium transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5 text-primary shadow-sm shadow-primary/10"
                          : isLocked
                          ? "border-border/40 bg-accent/20 text-muted-foreground opacity-50 cursor-not-allowed"
                          : "border-border/60 bg-accent/30 text-foreground hover:border-border hover:bg-accent/60"
                      }`}
                    >
                      <span className="text-sm font-semibold">{srv}</span>
                      {isSelected && (
                        <CheckCircle2 className="h-5 w-5 text-primary fill-primary/10" />
                      )}
                    </button>
                  );
                })}
              </div>
              {service && selectedService && (
                <p className="text-[11px] text-muted-foreground text-center">
                  Service is prefilled from the card you clicked. Close the scheduler to choose a different one.
                </p>
              )}
            </div>
          )}

          {/* STEP 2: INDUSTRY SELECTOR */}
          {step === 2 && (
            <div className="py-2">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {INDUSTRIES.map((ind) => {
                  const Icon = ind.icon;
                  const isSelected = industry === ind.name;
                  return (
                    <button
                      key={ind.name}
                      onClick={() => setIndustry(ind.name)}
                      className={`flex flex-col items-center justify-center rounded-xl border p-4 text-center transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5 text-primary shadow-sm"
                          : "border-border/60 bg-accent/30 text-foreground hover:border-border hover:bg-accent/60"
                      }`}
                    >
                      <div className={`rounded-lg p-2.5 mb-2.5 transition-colors ${
                        isSelected ? "bg-primary/10 text-primary" : "bg-accent text-muted-foreground"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold">{ind.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: CALENDAR & TIME SLOTS */}
          {step === 3 && (
            <div className="space-y-5 py-2">
              {/* Duration Toggle */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-muted-foreground uppercase">Duration:</span>
                <div className="flex rounded-lg bg-accent/50 p-1">
                  {DURATIONS.map((dur) => (
                    <button
                      key={dur}
                      onClick={() => setDuration(dur)}
                      className={`rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                        duration === dur
                          ? "bg-background text-primary shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {dur} Min
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid: Calendar Left, Slots Right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
                <div className="rounded-xl border border-border/80 bg-accent/20 p-2 flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => {
                      const day = date.getDay();
                      // Disable weekends (Saturday=6, Sunday=0) and past dates
                      const today = new Date();
                      today.setHours(0,0,0,0);
                      return day === 0 || day === 6 || date < today;
                    }}
                    className="p-1"
                  />
                </div>

                {/* Slots section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Available Times
                    </span>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Monday - Friday
                    </span>
                  </div>

                  {!selectedDate ? (
                    <div className="flex h-44 flex-col items-center justify-center rounded-xl border border-dashed border-border/60 text-center p-4">
                      <CalendarIcon className="h-6 w-6 text-muted-foreground opacity-60 mb-2" />
                      <p className="text-xs text-muted-foreground font-medium">Select a date to view available time slots.</p>
                    </div>
                  ) : loadingSlots ? (
                    <div className="flex h-44 items-center justify-center">
                      <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[176px] overflow-y-auto pr-1">
                      {availableTimeSlots.map((timeSlot) => {
                        const isBooked = bookedSlots.includes(timeSlot);
                        const isSelected = selectedTime === timeSlot;
                        return (
                          <button
                            key={timeSlot}
                            disabled={isBooked}
                            onClick={() => setSelectedTime(timeSlot)}
                            className={`rounded-lg py-2.5 text-center text-xs font-semibold transition-all ${
                              isSelected
                                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                                : isBooked
                                ? "bg-accent/10 text-muted-foreground/30 line-through cursor-not-allowed border border-transparent"
                                : "bg-accent/40 border border-border/40 text-foreground hover:border-primary/40 hover:bg-accent/80"
                            }`}
                          >
                            {timeSlot}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {selectedDate && (
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <Globe className="h-3.5 w-3.5" />
                      <span>Slots shown in timezone: <strong>{timezone}</strong></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT & DETAILS FORM */}
          {step === 4 && (
            <div className="space-y-4 py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase" htmlFor="fullName">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full rounded-lg border border-border/80 bg-accent/20 py-2.5 pl-10 pr-3 text-sm font-medium text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase" htmlFor="email">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full rounded-lg border border-border/80 bg-accent/20 py-2.5 pl-10 pr-3 text-sm font-medium text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase" htmlFor="phone">
                    Phone / WhatsApp <span className="text-[10px] text-muted-foreground">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 012-3456"
                      className="w-full rounded-lg border border-border/80 bg-accent/20 py-2.5 pl-10 pr-3 text-sm font-medium text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase" htmlFor="description">
                  Project Scope & Description
                </label>
                <textarea
                  id="description"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Outline key targets, required technologies, or specific challenges..."
                  className="w-full rounded-lg border border-border/80 bg-accent/20 px-3 py-2.5 text-sm font-medium text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* STEP 5: REVIEW & SUMMARY */}
          {step === 5 && (
            <div className="space-y-5 py-2">
              <div className="rounded-xl border border-border bg-accent/25 p-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                  <div>
                    <span className="text-[11px] font-bold text-muted-foreground uppercase block">Client Name</span>
                    <span className="font-semibold text-foreground mt-0.5 block">{fullName}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-muted-foreground uppercase block">Email Address</span>
                    <span className="font-semibold text-foreground mt-0.5 block truncate">{email}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-muted-foreground uppercase block">Service Request</span>
                    <span className="font-semibold text-foreground mt-0.5 block">{service}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-muted-foreground uppercase block">Niche Context</span>
                    <span className="font-semibold text-foreground mt-0.5 block">{industry}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-muted-foreground uppercase block">Time Slot</span>
                    <span className="font-semibold text-foreground mt-0.5 block flex items-center gap-1.5 text-primary">
                      <Clock className="h-4 w-4" />
                      {selectedDate && format(selectedDate, "MMM d, yyyy")} @ {selectedTime} ({duration}m)
                    </span>
                  </div>
                </div>

                {description && (
                  <div className="mt-4 pt-4 border-t border-border/80">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase block mb-1">Project Brief</span>
                    <p className="text-xs text-muted-foreground leading-relaxed italic">"{description}"</p>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-xs text-blue-400">
                <Video className="h-4.5 w-4.5 flex-shrink-0" />
                <span>Upon confirmation, a <strong>Google Meet link</strong> will be generated and sent directly to your inbox.</span>
              </div>
            </div>
          )}

          {/* STEP 6: SUCCESS PANEL */}
          {step === 6 && bookingResult && (
            <div className="py-6 text-center space-y-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">Consultation Scheduled!</h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
                  A meeting event was generated on Google Calendar. Confirmation details have been sent to <strong>{email}</strong>.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-accent/20 p-5 text-left text-sm max-w-md mx-auto">
                <div className="space-y-2.5">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Presenter:</span>
                    <span className="font-semibold text-foreground">Hunain Haider</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Topic:</span>
                    <span className="font-semibold text-foreground">{bookingResult.details.serviceName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Scheduled:</span>
                    <span className="font-semibold text-primary">
                      {selectedDate && format(selectedDate, "MMMM d, yyyy")} at {selectedTime} ({duration} min)
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2.5 border-t border-border/60">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Video className="h-4 w-4" /> Google Meet:
                    </span>
                    <a
                      href={bookingResult.meetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-blue-500 hover:text-blue-400 hover:underline bg-blue-500/10 px-2.5 py-1 rounded"
                    >
                      Join Meeting Room
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button onClick={closeBooking} size="lg" className="w-full max-w-xs font-semibold">
                  Return to Dashboard
                </Button>
              </div>
            </div>
          )}

          {/* Dialog Action Footer */}
          {step < 6 && (
            <div className="mt-8 flex items-center justify-between gap-3 pt-4 border-t border-border/60">
              {step > 1 ? (
                <button
                  onClick={prevStep}
                  disabled={submitting}
                  className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <Button
                  onClick={nextStep}
                  className="font-bold flex items-center gap-1"
                >
                  Continue <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleConfirmBooking}
                  disabled={submitting}
                  className="font-bold bg-gradient-to-r from-blue-500 to-primary text-primary-foreground flex items-center gap-1.5"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Securing Call...
                    </>
                  ) : (
                    <>
                      Confirm Call <Sparkles className="h-4.5 w-4.5" />
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
