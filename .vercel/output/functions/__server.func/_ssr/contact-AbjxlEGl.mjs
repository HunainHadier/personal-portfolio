import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, c as createContactSubmission } from "./SiteLayout-D1R_Np6y.mjs";
import { X as XIcon } from "./XIcon-DqQj3G7O.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { j as Mail, k as Phone, l as Linkedin, m as Check, n as ArrowLeft } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./router-BhPPQh_O.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-DcBPHt8D.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/date-fns.mjs";
import "../_libs/react-day-picker.mjs";
import "../_libs/date-fns__tz.mjs";
import "../_libs/zod.mjs";
const EMAIL = "hunainhaider811@gmail.com";
const PHONE = "+92 318 2484396";
const WHATSAPP = "923182484396";
const LINKEDIN = "https://www.linkedin.com/in/hunain-haider-658956257/";
function Contact() {
  const [tab, setTab] = reactExports.useState("message");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page pt-14 pb-12 md:pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-extrabold tracking-tight text-foreground md:text-7xl", children: "Let's build something exceptional." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg leading-relaxed text-muted-foreground", children: "Currently accepting new projects. Schedule a consultation or drop me a message." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page grid gap-10 pb-24 lg:grid-cols-[1fr_1.6fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactInfo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-2 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 rounded-xl bg-secondary p-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabBtn, { active: tab === "message", onClick: () => setTab("message"), children: "Send a Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabBtn, { active: tab === "book", onClick: () => setTab("book"), children: "Book a Meeting" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 md:p-8", children: tab === "message" ? /* @__PURE__ */ jsxRuntimeExports.jsx(MessageForm, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(BookingFlow, {}) })
      ] })
    ] })
  ] });
}
function TabBtn({
  active,
  onClick,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: `flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${active ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`, children });
}
function ContactInfo() {
  const items = [{
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`
  }, {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: PHONE,
    href: `https://wa.me/${WHATSAPP}`
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Hunain Haider",
    href: LINKEDIN
  }, {
    icon: XIcon,
    label: "X",
    value: "@SynapseStack",
    href: "https://x.com/SynapseStack"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: items.map((it) => {
    const Icon = it.icon;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: it.href, target: it.href.startsWith("http") ? "_blank" : void 0, rel: "noopener noreferrer", className: "flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4.5 w-4.5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground", children: it.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 truncate text-[15px] font-medium text-foreground", children: it.value })
      ] })
    ] }, it.label);
  }) });
}
function MessageForm() {
  const [sent, setSent] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const message = String(formData.get("details") || "").trim();
    setSubmitting(true);
    try {
      await createContactSubmission({
        data: {
          name,
          email,
          company: company || void 0,
          message
        }
      });
      setSent(true);
      toast.success("Message sent. I'll get back to you within 24 hours.");
      form.reset();
      setTimeout(() => setSent(false), 2500);
    } catch (error) {
      console.error("Contact submission error:", error);
      toast.error("Could not save your message right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true, placeholder: "John Doe" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true, placeholder: "john@example.com" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company (Optional)", name: "company", placeholder: "Acme Inc." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-foreground", children: "Project Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "details", required: true, rows: 5, placeholder: "Tell me about your project, timeline, and goals...", className: "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: sent || submitting, className: "w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70 md:w-auto", children: submitting ? "Sending..." : sent ? "Sent ✓" : "Send Message" })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, placeholder, className: "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" })
  ] });
}
const MEETING_TYPES = [{
  id: "discovery",
  name: "Discovery Call",
  duration: 30,
  desc: "Brief chat to see if we're a good fit for your project."
}, {
  id: "project",
  name: "Project Consultation",
  duration: 60,
  desc: "In-depth discussion about your upcoming project needs."
}, {
  id: "technical",
  name: "Technical Discussion",
  duration: 45,
  desc: "Architecture and technical feasibility review."
}, {
  id: "strategy",
  name: "SaaS Strategy Session",
  duration: 60,
  desc: "High-level product and scaling strategy."
}];
const TIMES = ["09:00", "11:00", "14:00", "16:00", "17:00"];
function buildDates() {
  const dates = [];
  const d = /* @__PURE__ */ new Date();
  while (dates.length < 10) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) dates.push(new Date(d));
  }
  return dates;
}
function BookingFlow() {
  const [step, setStep] = reactExports.useState(1);
  const [meeting, setMeeting] = reactExports.useState(null);
  const [date, setDate] = reactExports.useState(null);
  const [time, setTime] = reactExports.useState(null);
  const dates = buildDates();
  if (step === 4) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-7 w-7", strokeWidth: 2.5 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-2xl font-bold text-foreground", children: "Booking confirmed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "A Google Meet link and calendar invite have been sent to your email." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
        meeting?.name,
        " ·",
        " ",
        date?.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric"
        }),
        " at ",
        time
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setStep(1);
        setMeeting(null);
        setDate(null);
        setTime(null);
      }, className: "mt-8 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary", children: "Book another" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    step > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStep(step - 1), className: "mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back"
    ] }),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Select Meeting Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-3 sm:grid-cols-2", children: MEETING_TYPES.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        setMeeting(m);
        setStep(2);
      }, className: "rounded-xl border border-border bg-card p-5 text-left transition-all hover:border-primary/40 hover:shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold text-primary", children: [
          m.duration,
          " min"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 text-base font-bold text-foreground", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 text-sm text-muted-foreground", children: m.desc })
      ] }, m.id)) })
    ] }),
    step === 2 && meeting && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-primary", children: meeting.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg font-bold text-foreground", children: "Select a date and time" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground", children: "Available Dates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: dates.map((d) => {
          const active = date?.toDateString() === d.toDateString();
          return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDate(d), className: `rounded-lg border px-3.5 py-2 text-sm font-medium transition-all ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary/40"}`, children: d.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric"
          }) }, d.toISOString());
        }) })
      ] }),
      date && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground", children: "Available Times" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: TIMES.map((t) => {
          const active = time === t;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setTime(t);
            setStep(3);
          }, className: `rounded-lg border px-4 py-2 text-sm font-medium transition-all ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary/40"}`, children: t }, t);
        }) })
      ] })
    ] }),
    step === 3 && meeting && date && time && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      toast.success("Confirmation email and Google Meet link sent.");
      setStep(4);
    }, className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary/60 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-primary", children: meeting.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-base font-semibold text-foreground", children: [
          date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric"
          }),
          " at ",
          time
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Your Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-foreground", children: "What would you like to discuss?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 4, className: "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 md:w-auto", children: "Confirm Booking" })
    ] })
  ] });
}
export {
  Contact as component
};
