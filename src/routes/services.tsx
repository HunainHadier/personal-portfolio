import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useMemo, useState } from "react";
import { useBooking } from "@/components/booking/BookingContext";
import {
  Smartphone,
  Globe,
  ShoppingBag,
  Package,
  Palette,
  Video,
  Megaphone,
  Database,
  Search,
  Layers,
  FileCode,
  Cpu,
  Layout,
  Settings,
  Store,
  Wrench,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Hunain Haider" },
      {
        name: "description",
        content:
          "Filter premium engineering services by industry: SaaS, e-commerce, real estate, healthcare, education, agencies, logistics, and more.",
      },
      { property: "og:title", content: "Services — Hunain Haider" },
      {
        property: "og:description",
        content: "Enterprise-grade services filtered by your industry.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const NICHES = [
  "All Services",
  "Real Estate",
  "Education",
  "Healthcare",
  "E-Commerce",
  "Startups",
  "Agencies",
  "Logistics",
  "SaaS Businesses",
  "Personal Brands",
] as const;

type Niche = (typeof NICHES)[number];

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  bestFor: string;
  niches: Exclude<Niche, "All Services">[];
  timeline: string;
};

const SERVICES: Service[] = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Mobile and business apps designed for usability, speed, and long-term scale.",
    features: [
      "Android and iOS-ready builds",
      "Admin panel and CMS support",
      "API, payment, and CRM integrations",
    ],
    bestFor:
      "Startups, internal systems, booking flows, and service-based businesses.",
    niches: ["Startups", "Real Estate", "Healthcare", "Logistics", "Agencies"],
    timeline: "6–10 weeks",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Corporate websites, product sites, and landing pages built for credibility and conversion.",
    features: [
      "Responsive, accessible layouts",
      "SEO-ready architecture",
      "Core Web Vitals optimization",
    ],
    bestFor: "Company profiles, campaigns, and service businesses.",
    niches: ["Agencies", "Personal Brands", "Startups", "Real Estate", "Education"],
    timeline: "3–5 weeks",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description:
      "Custom Shopify stores built for premium design and conversion optimization.",
    features: [
      "Custom storefront design",
      "Product setup & catalog",
      "Conversion rate optimization",
    ],
    bestFor: "Product-based e-commerce brands.",
    niches: ["E-Commerce", "Personal Brands", "Startups"],
    timeline: "3–6 weeks",
  },
  {
    icon: Package,
    title: "Amazon Services",
    description: "Amazon marketplace growth and management services.",
    features: ["Product hunting", "Listing optimization", "PPC and SEO"],
    bestFor: "Amazon sellers and private-label businesses.",
    niches: ["E-Commerce", "Agencies"],
    timeline: "Ongoing",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Brand identity and marketing design solutions.",
    features: ["Social media creatives", "Branding assets", "Marketing visuals"],
    bestFor: "Businesses needing strong visual identity.",
    niches: ["Personal Brands", "Agencies", "Startups", "E-Commerce"],
    timeline: "1–3 weeks",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional editing for social and business content.",
    features: ["Reels & shorts editing", "Ads creation", "Brand videos"],
    bestFor: "Creators and businesses.",
    niches: ["Personal Brands", "Agencies", "E-Commerce"],
    timeline: "Per project",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Growth and lead generation systems.",
    features: ["Campaign planning", "Lead generation", "Funnel optimization"],
    bestFor: "Businesses needing more visibility and pipeline.",
    niches: ["Real Estate", "E-Commerce", "Education", "Agencies", "SaaS Businesses"],
    timeline: "Ongoing",
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "AI and business data structuring services.",
    features: ["Data labeling", "Dataset preparation", "Business analytics"],
    bestFor: "AI and analytics workflows.",
    niches: ["SaaS Businesses", "Healthcare", "Logistics", "Startups"],
    timeline: "Ongoing",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Google ranking and organic traffic optimization.",
    features: ["On-page SEO", "Technical SEO", "Keyword strategy"],
    bestFor: "Long-term organic growth.",
    niches: ["Agencies", "E-Commerce", "Education", "Real Estate", "Personal Brands"],
    timeline: "Ongoing",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description: "Full SaaS product development end-to-end.",
    features: [
      "Multi-tenant dashboards",
      "Subscription & billing systems",
      "User onboarding flows",
    ],
    bestFor: "Software startups and SaaS founders.",
    niches: ["SaaS Businesses", "Startups"],
    timeline: "8–16 weeks",
  },
  {
    icon: FileCode,
    title: "WordPress Development",
    description: "Custom WordPress websites and CMS systems.",
    features: ["Theme development", "Plugin setup", "CMS customization"],
    bestFor: "Content-driven businesses.",
    niches: ["Education", "Personal Brands", "Agencies"],
    timeline: "2–4 weeks",
  },
  {
    icon: Cpu,
    title: "AI Development",
    description: "Automation and AI-powered systems for modern teams.",
    features: ["Workflow automation", "Lead pipelines", "AI integrations"],
    bestFor: "Modern automated businesses.",
    niches: ["SaaS Businesses", "Startups", "Agencies", "Healthcare", "Logistics"],
    timeline: "4–10 weeks",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Product design and user experience systems.",
    features: ["Wireframes & prototypes", "Design systems", "UX optimization"],
    bestFor: "Apps and SaaS products.",
    niches: ["SaaS Businesses", "Startups", "Healthcare"],
    timeline: "2–6 weeks",
  },
  {
    icon: Settings,
    title: "Custom Web App Development",
    description: "Fully custom business systems and internal tools.",
    features: ["Operational dashboards", "Role-based access systems", "Internal tools"],
    bestFor: "Enterprise operations.",
    niches: ["Logistics", "Healthcare", "Real Estate", "SaaS Businesses", "Education"],
    timeline: "8–14 weeks",
  },
  {
    icon: Store,
    title: "E-Commerce Business Startup",
    description: "End-to-end online store setup for new entrepreneurs.",
    features: ["Store setup", "Product listing", "Payments integration"],
    bestFor: "New entrepreneurs launching online.",
    niches: ["E-Commerce", "Startups", "Personal Brands"],
    timeline: "3–5 weeks",
  },
  {
    icon: Wrench,
    title: "Website Maintenance & Support",
    description: "Ongoing system support and performance optimization.",
    features: ["Bug fixing", "Updates & patches", "Performance improvements"],
    bestFor: "Existing businesses keeping systems healthy.",
    niches: [
      "Agencies",
      "E-Commerce",
      "Real Estate",
      "Education",
      "Healthcare",
      "SaaS Businesses",
      "Startups",
      "Logistics",
      "Personal Brands",
    ],
    timeline: "Retainer",
  },
];

function Services() {
  const { openBooking } = useBooking();
  const [active, setActive] = useState<Niche>("All Services");

  const filtered = useMemo(() => {
    if (active === "All Services") return SERVICES;
    return SERVICES.filter((s) => s.niches.includes(active));
  }, [active]);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="container-page pt-14 pb-8 md:pt-20 md:pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          {SERVICES.length} services · filterable by industry
        </div>
        <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
          A service marketplace,
          <br />
          <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            tuned to your industry.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Pick your niche and instantly see the engineering & design services
          most relevant to your business. Book a consultation in one click.
        </p>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 -mx-4 border-y border-border/60 bg-background/85 px-4 backdrop-blur-md md:top-20">
        <div className="container-page py-3">
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 scrollbar-none">
            {NICHES.map((n) => {
              const isActive = active === n;
              const count =
                n === "All Services"
                  ? SERVICES.length
                  : SERVICES.filter((s) => s.niches.includes(n)).length;
              return (
                <button
                  key={n}
                  onClick={() => setActive(n)}
                  className={`group flex flex-none items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "border-primary bg-gradient-to-r from-primary to-blue-500 text-primary-foreground shadow-md shadow-primary/20"
                      : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-accent"
                  }`}
                >
                  {n}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container-page py-10 md:py-14">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {active}
            </div>
            <h2 className="mt-1 text-2xl font-bold text-foreground">
              {filtered.length} {filtered.length === 1 ? "service" : "services"} available
            </h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <p className="text-muted-foreground">
              No services tagged for this niche yet. Try another industry.
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/95 via-primary to-blue-600 p-10 text-center md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="relative">
            <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Don't see the exact fit?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Most engagements are scoped to the business — let's design the
              right one for yours.
            </p>
            <button
              onClick={() => openBooking("Consultation")}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl cursor-pointer"
            >
              Schedule a Strategy Session
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const { openBooking } = useBooking();
  return (
    <article
      style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
      className="group relative flex animate-[fadeUp_0.45s_ease-out_both] flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="flex items-start justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 text-primary ring-1 ring-primary/10">
          <Icon className="h-5 w-5" />
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
          <Clock className="h-3 w-3" />
          {service.timeline}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <ul className="mt-5 space-y-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-primary to-blue-500" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-border/70 pt-4">
        <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          Best for
        </div>
        <p className="mt-1 text-[13px] text-foreground">{service.bestFor}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {service.niches.slice(0, 4).map((n) => (
            <span
              key={n}
              className="rounded-md bg-accent px-2 py-0.5 text-[11px] font-medium text-primary"
            >
              {n}
            </span>
          ))}
          {service.niches.length > 4 && (
            <span className="rounded-md bg-accent px-2 py-0.5 text-[11px] font-medium text-primary">
              +{service.niches.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="mt-auto flex gap-2 pt-5">
        <button
          onClick={() => openBooking(service.title)}
          className="flex-1 rounded-lg bg-gradient-to-r from-primary to-blue-500 px-3 py-2.5 text-center text-[13px] font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md cursor-pointer"
        >
          Book Service
        </button>
        <Link
          to="/projects"
          className="flex-1 rounded-lg border border-border bg-background px-3 py-2.5 text-center text-[13px] font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-accent"
        >
          Explore
        </Link>
      </div>
    </article>
  );
}
