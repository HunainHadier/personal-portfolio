import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-D1R_Np6y.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { i as Lock } from "../_libs/lucide-react.mjs";
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
const cases = [{
  tag: "Enterprise Dashboard",
  title: "Fintech Command Center",
  challenge: "A major financial institution needed a unified dashboard to manage risk, view real-time market data, and execute trades across multiple platforms simultaneously.",
  solution: "Architected a highly performant React application using WebSockets for sub-millisecond data updates. Implemented a complex state machine to handle concurrent trade executions and risk calculations locally.",
  impact: "Reduced trade execution time by 40% and replaced 3 legacy systems with a single pane of glass.",
  stack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "WebSockets"]
}, {
  tag: "SaaS Product",
  title: "Healthcare Compliance CRM",
  challenge: "Medical practitioners lacked a modern, intuitive CRM that strictly adhered to HIPAA compliance requirements for patient data storage and communication.",
  solution: "Built a full-stack Next.js application with a robust Postgres backend. Implemented end-to-end encryption for messaging and strict audit logging for all database interactions.",
  impact: "Acquired 50+ clinics in the first 3 months. Passed rigorous third-party security audits with zero critical findings.",
  stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "AWS KMS"]
}, {
  tag: "Internal Tooling",
  title: "Global Logistics Router",
  challenge: "A shipping company's dispatchers were manually calculating routes, leading to inefficiencies, high fuel costs, and missed delivery windows.",
  solution: "Developed a custom routing engine in Go integrated with a React frontend map interface. Automated route assignment based on real-time traffic, truck capacity, and delivery windows.",
  impact: "Decreased average delivery time by 15% and reduced dispatcher manual workload by 30 hours per week.",
  stack: ["React", "Go", "PostGIS", "Mapbox GL", "Docker"]
}];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page pt-14 pb-12 md:pt-20 md:pb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-extrabold tracking-tight text-foreground md:text-7xl", children: "Case Studies" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground", children: "A selection of complex applications engineered for scale. I focus on domains where performance, security, and user experience are critical." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page space-y-6 pb-20", children: cases.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-primary", children: c.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl", children: c.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3" }),
          " Protected Asset"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-8 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { label: "The Challenge", body: c.challenge }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { label: "The Solution", body: c.solution }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { label: "The Impact", body: c.impact })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2 border-t border-border pt-6", children: c.stack.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-foreground", children: t }, t)) })
    ] }, c.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-gradient-to-br from-accent/60 to-background p-10 text-center md:p-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-extrabold tracking-tight text-foreground md:text-4xl", children: "Have a similar project in mind?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-lg text-muted-foreground", children: "Let's discuss your requirements." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90", children: "Book a Consultation" })
    ] }) })
  ] });
}
function Block({
  label,
  body
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold uppercase tracking-[0.14em] text-primary/80", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[15px] leading-relaxed text-foreground/90", children: body })
  ] });
}
export {
  Projects as component
};
