import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { Mail, Phone, Linkedin, ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hunain Haider" },
      {
        name: "description",
        content:
          "Send a message or book a meeting with Hunain Haider. Discovery calls, project consultations, and SaaS strategy sessions.",
      },
      { property: "og:title", content: "Contact — Hunain Haider" },
      { property: "og:description", content: "Get in touch or schedule a meeting." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const EMAIL = "hunainhaider811@gmail.com";
const PHONE = "+92 318 2484396";
const WHATSAPP = "923182484396";
const LINKEDIN = "https://www.linkedin.com/in/hunain-haider-658956257/";

function Contact() {
  const [tab, setTab] = useState<"message" | "book">("message");
  return (
    <SiteLayout>
      <section className="container-page pt-14 pb-12 md:pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
            Let's build something exceptional.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Currently accepting new projects. Schedule a consultation or drop me
            a message.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-10 pb-24 lg:grid-cols-[1fr_1.6fr]">
        <ContactInfo />

        <div className="rounded-2xl border border-border bg-card p-2 shadow-sm">
          <div className="flex gap-1 rounded-xl bg-secondary p-1">
            <TabBtn active={tab === "message"} onClick={() => setTab("message")}>
              Send a Message
            </TabBtn>
            <TabBtn active={tab === "book"} onClick={() => setTab("book")}>
              Book a Meeting
            </TabBtn>
          </div>
          <div className="p-6 md:p-8">
            {tab === "message" ? <MessageForm /> : <BookingFlow />}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function TabBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
        active
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function ContactInfo() {
  const items = [
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, label: "Phone / WhatsApp", value: PHONE, href: `https://wa.me/${WHATSAPP}` },
    { icon: Linkedin, label: "LinkedIn", value: "Hunain Haider", href: LINKEDIN },
  ];
  return (
    <div className="space-y-3">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <a
            key={it.label}
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm"
          >
            <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent text-primary">
              <Icon className="h-4.5 w-4.5" />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {it.label}
              </div>
              <div className="mt-1 truncate text-[15px] font-medium text-foreground">
                {it.value}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

function MessageForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message sent. I'll get back to you within 24 hours.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 2500);
  };
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" required placeholder="John Doe" />
        <Field label="Email" name="email" type="email" required placeholder="john@example.com" />
      </div>
      <Field label="Company (Optional)" name="company" placeholder="Acme Inc." />
      <div>
        <label className="block text-sm font-medium text-foreground">Project Details</label>
        <textarea
          name="details"
          required
          rows={5}
          placeholder="Tell me about your project, timeline, and goals..."
          className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <button
        type="submit"
        disabled={sent}
        className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70 md:w-auto"
      >
        {sent ? "Sent ✓" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

/* -------- Booking flow -------- */

const MEETING_TYPES = [
  { id: "discovery", name: "Discovery Call", duration: 30, desc: "Brief chat to see if we're a good fit for your project." },
  { id: "project", name: "Project Consultation", duration: 60, desc: "In-depth discussion about your upcoming project needs." },
  { id: "technical", name: "Technical Discussion", duration: 45, desc: "Architecture and technical feasibility review." },
  { id: "strategy", name: "SaaS Strategy Session", duration: 60, desc: "High-level product and scaling strategy." },
];

const TIMES = ["09:00", "11:00", "14:00", "16:00", "17:00"];

function buildDates() {
  const dates: Date[] = [];
  const d = new Date();
  while (dates.length < 10) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) dates.push(new Date(d));
  }
  return dates;
}

function BookingFlow() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [meeting, setMeeting] = useState<(typeof MEETING_TYPES)[number] | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const dates = buildDates();

  if (step === 4) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Check className="h-7 w-7" strokeWidth={2.5} />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-foreground">Booking confirmed</h3>
        <p className="mt-2 text-muted-foreground">
          A Google Meet link and calendar invite have been sent to your email.
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {meeting?.name} ·{" "}
          {date?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} at {time}
        </p>
        <button
          onClick={() => {
            setStep(1);
            setMeeting(null);
            setDate(null);
            setTime(null);
          }}
          className="mt-8 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
        >
          Book another
        </button>
      </div>
    );
  }

  return (
    <div>
      {step > 1 && (
        <button
          onClick={() => setStep((step - 1) as 1 | 2 | 3)}
          className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
      )}

      {step === 1 && (
        <div>
          <h3 className="text-lg font-bold text-foreground">Select Meeting Type</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {MEETING_TYPES.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setMeeting(m);
                  setStep(2);
                }}
                className="rounded-xl border border-border bg-card p-5 text-left transition-all hover:border-primary/40 hover:shadow-sm"
              >
                <div className="text-xs font-semibold text-primary">{m.duration} min</div>
                <div className="mt-1.5 text-base font-bold text-foreground">{m.name}</div>
                <div className="mt-1.5 text-sm text-muted-foreground">{m.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && meeting && (
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            {meeting.name}
          </div>
          <h3 className="mt-1 text-lg font-bold text-foreground">Select a date and time</h3>

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              Available Dates
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {dates.map((d) => {
                const active = date?.toDateString() === d.toDateString();
                return (
                  <button
                    key={d.toISOString()}
                    onClick={() => setDate(d)}
                    className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground hover:border-primary/40"
                    }`}
                  >
                    {d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                  </button>
                );
              })}
            </div>
          </div>

          {date && (
            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Available Times
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {TIMES.map((t) => {
                  const active = time === t;
                  return (
                    <button
                      key={t}
                      onClick={() => {
                        setTime(t);
                        setStep(3);
                      }}
                      className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-foreground hover:border-primary/40"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {step === 3 && meeting && date && time && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Confirmation email and Google Meet link sent.");
            setStep(4);
          }}
          className="space-y-5"
        >
          <div className="rounded-xl border border-border bg-secondary/60 p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              {meeting.name}
            </div>
            <div className="mt-1 text-base font-semibold text-foreground">
              {date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} at {time}
            </div>
          </div>
          <h3 className="text-lg font-bold text-foreground">Your Details</h3>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Company" name="company" />
            <Field label="Phone" name="phone" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground">
              What would you like to discuss?
            </label>
            <textarea
              required
              rows={4}
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 md:w-auto"
          >
            Confirm Booking
          </button>
        </form>
      )}
    </div>
  );
}
