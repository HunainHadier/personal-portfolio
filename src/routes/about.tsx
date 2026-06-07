import { createFileRoute, Link } from "@tanstack/react-router";
import { XIcon } from "@/components/icons/XIcon";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useBooking } from "@/components/booking/BookingContext";
import {
  User,
  MapPin,
  Building,
  Link2,
  Check,
  ArrowDownToLine,
  Phone,
  Mail,
  Linkedin,
  ExternalLink,
  Calendar,
  Briefcase,
  Award,
  Sparkles,
  Globe,
  Layers,
  Smartphone,
  Cpu,
  Users,
  Database,
  Layout,
  Cloud,
  ChevronRight,
  ShieldCheck,

} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hunain Haider — Senior Full Stack Developer" },
      {
        name: "description",
        content:
          "Senior Full Stack Developer, .NET Developer, MERN Stack Developer, SaaS Builder & Software Solutions Consultant based in Karachi, Pakistan.",
      },
      { property: "og:title", content: "About Hunain Haider — Senior Full Stack Developer" },
      {
        property: "og:description",
        content: "I Help Businesses Save Time, Get More Clients & Run Smoother Operations Through Custom Software.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const WHAT_I_DO = [
  {
    icon: Globe,
    title: "Full Stack Development",
    desc: "End-to-end development of modern web applications using .NET Core, React, and Node.js.",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    desc: "Architecting multi-tenant platforms with secure subscriptions, billing, and dashboards.",
  },
  {
    icon: Building,
    title: "Enterprise Applications",
    desc: "Robust, secure, and high-performance software systems tailored for large business operations.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Developing responsive, fast, and feature-rich Android and iOS mobile applications.",
  },
  {
    icon: Cpu,
    title: "Business Automation",
    desc: "Automating manual processes and data synchronization to save hours of manual labor.",
  },
  {
    icon: Users,
    title: "CRM Systems",
    desc: "Custom customer relationship management tools focused on conversions and lead pipelines.",
  },
  {
    icon: Database,
    title: "ERP Solutions",
    desc: "Unified enterprise resource planning systems to streamline logistics, supply chain, and operations.",
  },
  {
    icon: Link2,
    title: "API Integrations",
    desc: "Building and consuming robust, secure rest APIs to connect disjointed systems seamlessly.",
  },
  {
    icon: Layout,
    title: "Dashboard Systems",
    desc: "Interactive, real-time analytics portals giving businesses clear data insight at a glance.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Deploying and scaling infrastructures on Microsoft Azure and Docker environments.",
  },
];

const SPECIALIZATIONS = [
  "SaaS Development",
  "Web Application Development",
  "Mobile Applications",
  "Business Automation",
  "CRM Development",
  "ERP Platforms",
  "Custom Software Solutions",
  "AI Integrations",
  "System Architecture",
  "Product Development",
];

const TOP_SKILLS = [
  "Full Stack Development",
  ".NET Development",
  "MERN Stack Development",
  "SaaS Development",
  "Business Automation",
  "Software Architecture",
  "API Development",
  "Database Design",
  "Cloud Solutions",
  "Problem Solving",
  "Project Management",
];

const TECH_STACK = {
  Frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  Backend: ["ASP.NET Core", "Node.js", "Express.js"],
  Databases: ["SQL Server", "PostgreSQL", "MongoDB", "Supabase"],
  "Cloud & DevOps": ["Azure", "Docker", "GitHub", "CI/CD"],
};

const WHY_WORK_WITH_ME = [
  {
    title: "Business-first approach",
    desc: "I focus on your operational metrics and growth, not just writing code.",
  },
  {
    title: "Scalable architecture",
    desc: "Designing database structures and microservices to support millions of queries.",
  },
  {
    title: "Modern technologies",
    desc: "Using the fastest, most secure, and most maintainable tech stack available.",
  },
  {
    title: "Clean user experiences",
    desc: "Creating interfaces that are highly intuitive, accessible, and fast.",
  },
  {
    title: "Long-term maintainability",
    desc: "Writing self-documenting code with comprehensive unit testing frameworks.",
  },
  {
    title: "Practical problem solving",
    desc: "Focusing on delivering maximum value with zero unnecessary engineering complexity.",
  },
  {
    title: "End-to-end development",
    desc: "Owning everything from infrastructure setup and database to pixel-perfect design.",
  },
];

function About() {
  const { openBooking } = useBooking();
  return (
    <SiteLayout>
      <div className="bg-secondary/35 min-h-screen py-10">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-12">
            
            {/* Left Main Content Area */}
            <div className="space-y-6 lg:col-span-8">
              
              {/* Profile Hero Card */}
              <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                {/* LinkedIn style Hero Banner */}
                <div className="h-40 w-full relative">
                  <img
                    src="/cover.png"
                    alt="Hero Cover"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/35 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold text-white uppercase tracking-wider">
                    <Sparkles className="h-3 w-3 text-emerald-400" />
                    Open For Engagements
                  </div>
                </div>
                
                <div className="px-6 pb-8">
                  {/* Profile Image & Verified Badge */}
                  <div className="relative -mt-16 mb-4 flex items-end justify-between">
                    <div className="relative">
                      <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-card bg-muted shadow-lg">
                        <img
                          src="/profile.jpg"
                          alt="Hunain Haider"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md border-2 border-card" title="Verified Professional">
                        <ShieldCheck className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90 shadow-sm"
                      >
                        Contact Me
                      </Link>
                    </div>
                  </div>

                  {/* Profile Meta Details */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                          Hunain Haider
                        </h1>
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          Senior Full Stack Developer
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">
                        Senior Full Stack Developer · .NET Developer · MERN Stack Developer · SaaS Builder · Software Solutions Consultant
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground border-t border-border/60 pt-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        Karachi, Sindh, Pakistan
                      </span>
                      <span className="flex items-center gap-1">
                        <Building className="h-3.5 w-3.5 text-primary" />
                        WebGaebel
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-primary" />
                        500+ Connections
                      </span>
                    </div>

                    <blockquote className="border-l-2 border-primary bg-primary/5 p-4 rounded-r-lg mt-4 text-[15px] leading-relaxed text-foreground/90 font-medium italic">
                      "I Help Businesses Save Time, Get More Clients & Run Smoother Operations Through Custom Software, SaaS Platforms, and Automation Systems."
                    </blockquote>
                  </div>
                </div>
              </section>

              {/* Who I Am Section */}
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  Who I Am
                </h2>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                  <p>
                    Most businesses lose time, opportunities, and revenue because they rely on disconnected systems, manual processes, and outdated workflows.
                  </p>
                  <p>
                    I help organizations transform those challenges into efficient digital solutions through custom software development, SaaS platforms, automation systems, and scalable business applications.
                  </p>
                  <p>
                    My focus is not just writing code. I work to understand how businesses operate, identify bottlenecks, and build systems that improve productivity, customer experience, and operational efficiency.
                  </p>
                  <p>
                    I have worked on solutions for startups, agencies, real estate businesses, educational institutions, healthcare organizations, service companies, and growing businesses that need scalable technology.
                  </p>
                  <p className="font-semibold text-foreground">
                    My goal is simple: Build technology that helps businesses operate better, grow faster, and reduce unnecessary complexity.
                  </p>
                </div>
              </section>

              {/* What I Do Section */}
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                    What I Do
                  </h2>
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {WHAT_I_DO.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
                      >
                        <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:scale-110">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Experience Section */}
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  Experience
                </h2>
                <div className="mt-6 border-l border-border/80 pl-6 space-y-8 relative">
                  
                  {/* WebGaebel Experience */}
                  <div className="relative">
                    {/* Bullet marker */}
                    <div className="absolute -left-[44px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-4 ring-card overflow-hidden shadow-sm border border-border/50">
                      <img src="/28c622e1-62ec-460f-8572-766f2527ba23_removalai_preview.png" alt="WebGaebel Logo" className="h-full w-full object-contain p-1" />
                    </div>
                    
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <a href="https://webgaebel.com/" target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-1.5">
                          <h3 className="text-lg font-bold text-foreground">WebGaebel</h3>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </a>
                        <p className="text-sm font-semibold text-primary">Founder & Full Stack Developer</p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        Feb 2024 – Present
                      </span>
                    </div>
                    
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      I help businesses turn ideas and manual processes into scalable digital systems that save time, improve efficiency, and support growth.
                    </p>
                    
                    <div className="mt-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                        Specializations:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {SPECIALIZATIONS.map((spec) => (
                          <span
                            key={spec}
                            className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-foreground border border-border/40 hover:border-primary/20 transition-colors"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* HakamTechSol Experience */}
                  <div className="relative">
                    {/* Bullet marker */}
                    <div className="absolute -left-[44px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-4 ring-card overflow-hidden shadow-sm border border-border/50">
                      <img src="/images.jfif" alt="HakamTechSol Logo" className="h-full w-full object-contain p-1" />
                    </div>
                    
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">HakamTechSol</h3>
                        <p className="text-sm font-semibold text-primary">Full Stack Developer</p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        Feb 2022 – Feb 2024
                      </span>
                    </div>
                    
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      Engineered robust full-stack software systems and web applications. Developed backend APIs and responsive frontend user interfaces, contributing to scalable digital solutions and business operational efficiency.
                    </p>
                    
                    <div className="mt-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                        Key Stack & Specializations:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["Full Stack Development", "ASP.NET Core", "React", "Node.js", "API Integrations", "Database Design"].map((spec) => (
                          <span
                            key={spec}
                            className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-foreground border border-border/40 hover:border-primary/20 transition-colors"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Skills Section */}
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  Top Skills
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Core capabilities backed by commercial experience and successful deliveries
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {TOP_SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-secondary"
                    >
                      <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Tech Stack Section */}
              <section id="technologies" className="scroll-mt-20 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  Technology Stack
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {Object.entries(TECH_STACK).map(([category, items]) => (
                    <div key={category} className="rounded-xl border border-border/50 bg-secondary/10 p-5">
                      <h3 className="text-sm font-bold text-foreground border-b border-border/80 pb-2 mb-3">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-card px-2.5 py-1 text-xs font-medium text-foreground shadow-sm border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Why Work With Me Section */}
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  Why Work With Me
                </h2>
                <div className="mt-6 space-y-4">
                  {WHY_WORK_WITH_ME.map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Sidebar Column */}
            <div className="space-y-6 lg:col-span-4">
              
              {/* Profile Card Summary */}
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  Personal Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-muted border border-border flex-none">
                      <img src="/profile.jpg" alt="Hunain Haider" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Hunain Haider</h4>
                      <p className="text-xs text-muted-foreground">Founder, WebGaebel</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-border/60 pt-4 space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-semibold text-foreground text-right">Karachi, Pakistan</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Experience</span>
                      <span className="font-semibold text-foreground text-right">Senior Level</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Current Company</span>
                      <span className="font-semibold text-foreground text-right text-primary">WebGaebel</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Consultation Booking Promo Card */}
              <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-blue-500/5 p-6 shadow-sm relative overflow-hidden">
                <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
                <h3 className="text-base font-bold text-foreground flex items-center gap-1.5">
                  <Award className="h-4.5 w-4.5 text-primary" />
                  Work Engagement
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Need an enterprise dashboard, business automation engine, or a full SaaS platform build? I'm available for full-time contracts and consultancy projects.
                </p>
                <div className="mt-5">
                  <button
                    onClick={() => openBooking("Consultation")}
                    className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-center text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 cursor-pointer"
                  >
                    Book Consultation
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </section>

              {/* Contact CTA Sidebar Card */}
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  Let's Connect
                </h3>
                
                <div className="space-y-3">
                  <a
                    href="mailto:hunainhaider811@gmail.com"
                    className="flex items-center gap-3 rounded-lg border border-border p-3.5 transition-all hover:border-primary/30 hover:bg-secondary/40"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary flex-none">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Email</div>
                      <div className="text-xs font-medium text-foreground truncate">hunainhaider811@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/923182484396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-border p-3.5 transition-all hover:border-primary/30 hover:bg-secondary/40"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100 text-emerald-600 flex-none">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">WhatsApp / Phone</div>
                      <div className="text-xs font-medium text-foreground truncate">+92 318 2484396</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/hunain-haider-658956257/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-border p-3.5 transition-all hover:border-primary/30 hover:bg-secondary/40"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100 text-blue-600 flex-none">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">LinkedIn</div>
                      <div className="text-xs font-medium text-foreground truncate flex items-center gap-1">
                        Connect on LinkedIn
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://x.com/SynapseStack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-border p-3.5 transition-all hover:border-primary/30 hover:bg-secondary/40"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 flex-none">
                      <XIcon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">X</div>
                      <div className="text-xs font-medium text-foreground truncate flex items-center gap-1">
                        @SynapseStack
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </div>
                    </div>
                  </a>
                </div>
              </section>

            </div>

          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
