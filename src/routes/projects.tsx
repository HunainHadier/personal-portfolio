import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Hunain Haider" },
      {
        name: "description",
        content:
          "Case studies of complex applications engineered for scale across fintech, healthcare, and logistics.",
      },
      { property: "og:title", content: "Projects — Hunain Haider" },
      { property: "og:description", content: "Case studies of complex applications engineered for scale." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const cases = [
  {
    tag: "Enterprise Dashboard",
    title: "Fintech Command Center",
    challenge:
      "A major financial institution needed a unified dashboard to manage risk, view real-time market data, and execute trades across multiple platforms simultaneously.",
    solution:
      "Architected a highly performant React application using WebSockets for sub-millisecond data updates. Implemented a complex state machine to handle concurrent trade executions and risk calculations locally.",
    impact:
      "Reduced trade execution time by 40% and replaced 3 legacy systems with a single pane of glass.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "WebSockets"],
  },
  {
    tag: "SaaS Product",
    title: "Healthcare Compliance CRM",
    challenge:
      "Medical practitioners lacked a modern, intuitive CRM that strictly adhered to HIPAA compliance requirements for patient data storage and communication.",
    solution:
      "Built a full-stack Next.js application with a robust Postgres backend. Implemented end-to-end encryption for messaging and strict audit logging for all database interactions.",
    impact:
      "Acquired 50+ clinics in the first 3 months. Passed rigorous third-party security audits with zero critical findings.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "AWS KMS"],
  },
  {
    tag: "Internal Tooling",
    title: "Global Logistics Router",
    challenge:
      "A shipping company's dispatchers were manually calculating routes, leading to inefficiencies, high fuel costs, and missed delivery windows.",
    solution:
      "Developed a custom routing engine in Go integrated with a React frontend map interface. Automated route assignment based on real-time traffic, truck capacity, and delivery windows.",
    impact:
      "Decreased average delivery time by 15% and reduced dispatcher manual workload by 30 hours per week.",
    stack: ["React", "Go", "PostGIS", "Mapbox GL", "Docker"],
  },
];

function Projects() {
  return (
    <SiteLayout>
      <section className="container-page pt-14 pb-12 md:pt-20 md:pb-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
          Case Studies
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A selection of complex applications engineered for scale. I focus on
          domains where performance, security, and user experience are critical.
        </p>
      </section>

      <section className="container-page space-y-6 pb-20">
        {cases.map((c) => (
          <article
            key={c.title}
            className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg md:p-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {c.tag}
                </span>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                  {c.title}
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                <Lock className="h-3 w-3" /> Protected Asset
              </span>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <Block label="The Challenge" body={c.challenge} />
              <Block label="The Solution" body={c.solution} />
              <Block label="The Impact" body={c.impact} />
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
              {c.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="container-page pb-24">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/60 to-background p-10 text-center md:p-14">
          <h3 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Have a similar project in mind?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Let's discuss your requirements.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/80">
        {label}
      </h4>
      <p className="mt-2 text-[15px] leading-relaxed text-foreground/90">{body}</p>
    </div>
  );
}
