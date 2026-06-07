import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-D1R_Np6y.mjs";
import { u as useBooking } from "./router-BhPPQh_O.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, m as Check, L as Layers, w as Server, C as Cpu } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductEngineering, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndToEnd, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
  ] });
}
function Hero() {
  const {
    openBooking
  } = useBooking();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page pt-12 pb-20 md:pt-24 md:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-4xl flex-col items-center text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-500" })
      ] }),
      "Accepting new enterprise & startup clients"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[42px] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[76px]", children: [
      "SaaS MVP Development & ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Web Design Agency" }),
      " for Startups."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl", children: "I am Hunain Haider, Founder of WebGaebel. As a Senior Full Stack Developer, I help brands grow by delivering affordable website design for small businesses, custom Shopify store development, and high-performance SaaS MVP engineering." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col gap-3 sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openBooking("Consultation"), className: "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md cursor-pointer", children: [
        "Book a Strategy Session ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary", children: "View Capabilities" })
    ] })
  ] }) });
}
function Stack() {
  const items = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary/80", children: "Built with modern enterprise standards" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 items-center gap-6 md:grid-cols-6", children: items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-base font-medium text-muted-foreground/80 transition-colors hover:text-foreground", children: s }, s)) })
  ] }) });
}
function ProductEngineering() {
  const bullets = ["Architecture designed for scale from day one", "Pixel-perfect, accessible UI implementation", "Zero technical debt approach to iteration", "Deep focus on business metrics and conversion"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 md:grid-cols-2 md:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl", children: [
        "Not just code.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Product engineering." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg leading-relaxed text-muted-foreground", children: "Writing code is the easy part. Building a product that users love, that scales under load, and that generates revenue requires deep domain expertise and product intuition." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-4", children: bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-primary/30 bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-primary", strokeWidth: 3 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] font-medium text-foreground", children: b })
      ] }, b)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MockDashboard, {})
  ] }) });
}
function MockDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-2xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-gradient-to-br from-secondary to-background p-4 shadow-xl shadow-primary/5 md:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-background p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 h-3 w-24 rounded bg-secondary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 rounded-lg bg-secondary" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-40 rounded-lg bg-secondary" })
    ] }) })
  ] });
}
function EndToEnd() {
  const cards = [{
    icon: Layers,
    title: "Frontend Engineering",
    body: "High-performance React & Next.js applications. State management, complex UI patterns, and obsessive attention to detail."
  }, {
    icon: Server,
    title: "Backend Architecture",
    body: "Robust API design. Scalable databases. Secure authentication flows. Built to handle enterprise loads without breaking a sweat."
  }, {
    icon: Cpu,
    title: "Infrastructure",
    body: "AWS/Vercel deployments, CI/CD pipelines, Docker containerization. Ensuring your product is highly available and performant."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-dark-section text-dark-section-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-20 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-extrabold tracking-tight md:text-5xl", children: "End-to-end expertise." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-white/65", children: "From database schema design to the final CSS animation. I own the entire stack." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: cards.map((c) => {
      const Icon = c.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/8 bg-dark-card p-7 transition-all hover:border-white/15 hover:bg-white/[0.04]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-9 w-9 text-white/90", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-xl font-bold text-white", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[15px] leading-relaxed text-white/65", children: c.body })
      ] }, c.title);
    }) })
  ] }) });
}
function Process() {
  const steps = [{
    n: "01",
    t: "Discovery",
    d: "Deep dive into your business goals, technical constraints, and market."
  }, {
    n: "02",
    t: "Architecture",
    d: "Designing the database schema, API contracts, and technology stack."
  }, {
    n: "03",
    t: "Execution",
    d: "Rapid, iterative development with weekly milestones and transparency."
  }, {
    n: "04",
    t: "Launch",
    d: "Deployment, monitoring setup, and hand-off to your team."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-4xl font-extrabold tracking-tight text-foreground md:text-5xl", children: "How we work together" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-10 md:grid-cols-4 md:gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl font-extrabold leading-none text-primary/8", children: s.n }),
      i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-7 hidden h-px w-1/2 bg-border md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-bold text-foreground", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[15px] leading-relaxed text-muted-foreground", children: s.d })
    ] }, s.n)) })
  ] });
}
function CTA() {
  const {
    openBooking
  } = useBooking();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-20 text-center md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-extrabold tracking-tight md:text-6xl", children: "Ready to scale?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl text-lg text-white/85", children: "Stop worrying about technical debt and start focusing on growth. Let's build the platform your business deserves." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openBooking("Consultation"), className: "inline-flex items-center justify-center rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-sm transition-transform hover:scale-[1.02] cursor-pointer", children: "Book a Consultation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hunainhaider811@gmail.com", className: "inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10", children: "Email Me" })
    ] })
  ] }) });
}
function AboutPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20 md:py-28 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 md:grid-cols-12 md:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative md:col-span-5 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square w-72 md:w-80 overflow-hidden rounded-2xl border border-border shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/profile.jpg", alt: "Hunain Haider - Senior Full Stack Developer & Founder of WebGaebel", className: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-primary shadow-lg border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse" }),
        "Verified Professional"
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-[0.18em] text-primary", children: "About Hunain Haider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl", children: [
        "Founder & ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent", children: "Senior Full Stack Developer" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg leading-relaxed text-muted-foreground", children: "I help businesses save time, get more clients, and run smoother operations through custom software, SaaS platforms, and automation systems. Based in Karachi, Pakistan, I work with startups, agencies, and enterprise clients worldwide." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2", children: ["SaaS Platform Development", "Custom Business Automation", "Enterprise Architecture", "End-to-End Product Engineering"].map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3", strokeWidth: 3 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14.5px] font-medium text-foreground", children: skill })
      ] }, skill)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md", children: [
        "Read Full About Page ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] })
  ] }) });
}
export {
  Index as component
};
