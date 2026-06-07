import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Globe, Layout, Database, Cpu } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Hunain Haider" },
      {
        name: "description",
        content:
          "Full-stack SaaS development, frontend architecture, backend & API engineering, and cloud infrastructure services.",
      },
      { property: "og:title", content: "Services — Hunain Haider" },
      { property: "og:description", content: "Expertise & services for SaaS founders and CTOs." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: Globe,
    title: "Full-Stack SaaS Development",
    body: "End-to-end engineering of your Software as a Service product. From database schema to the final pixel on the screen. Built for high availability, security, and scale.",
    bullets: [
      "Multi-tenant architecture",
      "Subscription & billing integration (Stripe)",
      "Role-based access control (RBAC)",
      "Real-time functionality",
    ],
  },
  {
    icon: Layout,
    title: "Frontend Architecture",
    body: "Crafting exceptional user interfaces that feel native. I specialize in complex state management, performance optimization, and creating component systems that teams can actually use.",
    bullets: [
      "React & Next.js mastery",
      "Complex state (Redux, Zustand, Jotai)",
      "WebSockets & real-time updates",
      "Accessible UI components",
    ],
  },
  {
    icon: Database,
    title: "Backend & API Engineering",
    body: "Designing robust server-side applications that process data efficiently and securely. I build APIs that are a joy for other developers to consume.",
    bullets: [
      "RESTful & GraphQL API design",
      "Microservices architecture",
      "Third-party API integration",
      "High-throughput data processing",
    ],
  },
  {
    icon: Cpu,
    title: "Cloud Infrastructure",
    body: "Setting up your application to scale seamlessly. Automating deployments so you can ship features faster and with confidence.",
    bullets: [
      "AWS / GCP / Vercel orchestration",
      "Docker & containerization",
      "CI/CD pipelines",
      "Database performance tuning",
    ],
  },
];

function Services() {
  return (
    <SiteLayout>
      <section className="container-page pt-14 pb-10 md:pt-20 md:pb-14">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
          Expertise &amp; Services
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I don't just write code. I solve complex business problems through
          precise engineering and architecture. Here is how I can help your team.
        </p>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-8 text-2xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[15px] text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/60 to-background p-10 text-center md:p-14">
          <h3 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Need a technical partner for your startup?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Whether you need an MVP built from scratch or a senior engineer to
            augment your existing team, let's discuss your requirements.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow"
          >
            Schedule a Strategy Session
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
