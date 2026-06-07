import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight, Check, Layers, Server, Cpu } from "lucide-react";
import { useBooking } from "@/components/booking/BookingContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hunain Haider — Engineering SaaS platforms that scale" },
      {
        name: "description",
        content:
          "Senior software engineer partnering with founders and CTOs to architect, build, and scale world-class SaaS platforms.",
      },
      { property: "og:title", content: "Hunain Haider — Engineering SaaS platforms that scale" },
      { property: "og:description", content: "World-class SaaS engineering for ambitious teams." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Stack />
      <ProductEngineering />
      <AboutPreview />
      <EndToEnd />
      <Process />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  const { openBooking } = useBooking();
  return (
    <section className="container-page pt-12 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Accepting new enterprise clients
        </div>
        <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[88px]">
          Engineering <span className="text-primary">SaaS platforms</span>{" "}
          that scale.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          I am Hunain Haider. I partner with ambitious founders and CTOs to
          architect, build, and scale world-class software products.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => openBooking("Consultation")}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md cursor-pointer"
          >
            Book a Strategy Session <ArrowRight className="h-4 w-4" />
          </button>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            View Capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const items = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container-page py-14">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
          Built with modern enterprise standards
        </p>
        <div className="mt-8 grid grid-cols-3 items-center gap-6 md:grid-cols-6">
          {items.map((s) => (
            <div
              key={s}
              className="text-center text-base font-medium text-muted-foreground/80 transition-colors hover:text-foreground"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductEngineering() {
  const bullets = [
    "Architecture designed for scale from day one",
    "Pixel-perfect, accessible UI implementation",
    "Zero technical debt approach to iteration",
    "Deep focus on business metrics and conversion",
  ];
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            Not just code.
            <br />
            <span className="text-primary">Product engineering.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Writing code is the easy part. Building a product that users love,
            that scales under load, and that generates revenue requires deep
            domain expertise and product intuition.
          </p>
          <ul className="mt-8 space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                </span>
                <span className="text-[15px] font-medium text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <MockDashboard />
      </div>
    </section>
  );
}

function MockDashboard() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-2xl" />
      <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary to-background p-4 shadow-xl shadow-primary/5 md:p-6">
        <div className="rounded-xl border border-border bg-background p-5">
          <div className="mb-5 h-3 w-24 rounded bg-secondary" />
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-20 rounded-lg bg-secondary" />
            ))}
          </div>
          <div className="mt-3 h-40 rounded-lg bg-secondary" />
        </div>
      </div>
    </div>
  );
}

function EndToEnd() {
  const cards = [
    {
      icon: Layers,
      title: "Frontend Engineering",
      body: "High-performance React & Next.js applications. State management, complex UI patterns, and obsessive attention to detail.",
    },
    {
      icon: Server,
      title: "Backend Architecture",
      body: "Robust API design. Scalable databases. Secure authentication flows. Built to handle enterprise loads without breaking a sweat.",
    },
    {
      icon: Cpu,
      title: "Infrastructure",
      body: "AWS/Vercel deployments, CI/CD pipelines, Docker containerization. Ensuring your product is highly available and performant.",
    },
  ];
  return (
    <section className="bg-dark-section text-dark-section-foreground">
      <div className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            End-to-end expertise.
          </h2>
          <p className="mt-5 text-lg text-white/65">
            From database schema design to the final CSS animation. I own the
            entire stack.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-2xl border border-white/8 bg-dark-card p-7 transition-all hover:border-white/15 hover:bg-white/[0.04]"
              >
                <Icon className="h-9 w-9 text-white/90" strokeWidth={1.5} />
                <h3 className="mt-8 text-xl font-bold text-white">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Discovery", d: "Deep dive into your business goals, technical constraints, and market." },
    { n: "02", t: "Architecture", d: "Designing the database schema, API contracts, and technology stack." },
    { n: "03", t: "Execution", d: "Rapid, iterative development with weekly milestones and transparency." },
    { n: "04", t: "Launch", d: "Deployment, monitoring setup, and hand-off to your team." },
  ];
  return (
    <section className="container-page py-20 md:py-28">
      <h2 className="text-center text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
        How we work together
      </h2>
      <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
        {steps.map((s, i) => (
          <div key={s.n} className="relative">
            <div className="text-6xl font-extrabold leading-none text-primary/8">
              {s.n}
            </div>
            {i < steps.length - 1 && (
              <div className="absolute right-0 top-7 hidden h-px w-1/2 bg-border md:block" />
            )}
            <h3 className="mt-5 text-lg font-bold text-foreground">{s.t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              {s.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  const { openBooking } = useBooking();
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page py-20 text-center md:py-28">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          Ready to scale?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
          Stop worrying about technical debt and start focusing on growth. Let's
          build the platform your business deserves.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => openBooking("Consultation")}
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-sm transition-transform hover:scale-[1.02] cursor-pointer"
          >
            Book a Consultation
          </button>
          <a
            href="mailto:hunainhaider811@gmail.com"
            className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="container-page py-20 md:py-28 border-t border-border">
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <div className="relative md:col-span-5 flex justify-center">
          <div className="relative group">
            <div className="relative aspect-square w-72 md:w-80 overflow-hidden rounded-2xl border border-border shadow-xl">
              <img
                src="/profile.jpg"
                alt="Hunain Haider"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-primary shadow-lg border border-border">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Verified Professional
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            About Hunain Haider
          </div>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Founder & <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Senior Full Stack Developer</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I help businesses save time, get more clients, and run smoother operations through custom software, SaaS platforms, and automation systems. Based in Karachi, Pakistan, I work with startups, agencies, and enterprise clients worldwide.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "SaaS Platform Development",
              "Custom Business Automation",
              "Enterprise Architecture",
              "End-to-End Product Engineering",
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-[14.5px] font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Read Full About Page <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
