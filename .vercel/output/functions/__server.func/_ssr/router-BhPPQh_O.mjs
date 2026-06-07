import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-DZZOv_sB.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const BookingContext = reactExports.createContext(void 0);
function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [selectedService, setSelectedService] = reactExports.useState("");
  const openBooking = (serviceName = "Consultation") => {
    setSelectedService(serviceName);
    setIsOpen(true);
  };
  const closeBooking = () => {
    setIsOpen(false);
    setSelectedService("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    BookingContext.Provider,
    {
      value: {
        isOpen,
        selectedService,
        openBooking,
        closeBooking
      },
      children
    }
  );
}
function useBooking() {
  const context = reactExports.useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Hunain Haider — Engineering SaaS platforms that scale" },
      {
        name: "description",
        content: "Hunain Haider is a senior software engineer partnering with founders and CTOs to architect, build, and scale world-class SaaS platforms."
      },
      { name: "author", content: "Hunain Haider" },
      { property: "og:title", content: "Hunain Haider — Engineering SaaS platforms that scale" },
      { property: "og:description", content: "This application serves as a personal developer portfolio and client acquisition platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hunain Haider — Engineering SaaS platforms that scale" },
      { name: "description", content: "This application serves as a personal developer portfolio and client acquisition platform." },
      { name: "twitter:description", content: "This application serves as a personal developer portfolio and client acquisition platform." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/edd47faa-e174-48b6-8c23-89e3ba8dcf24/id-preview-015f784d--cc018607-7688-4e56-8832-5cc3ee1c4838.lovable.app-1780829980866.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/edd47faa-e174-48b6-8c23-89e3ba8dcf24/id-preview-015f784d--cc018607-7688-4e56-8832-5cc3ee1c4838.lovable.app-1780829980866.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://webgaebel.com/#person",
              "name": "Hunain Haider",
              "jobTitle": "Senior Full Stack Developer & SaaS Builder",
              "url": "https://webgaebel.com/",
              "image": "https://webgaebel.com/profile.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/hunain-haider-658956257/",
                "https://x.com/SynapseStack"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://webgaebel.com/#website",
              "url": "https://webgaebel.com/",
              "name": "WebGaebel",
              "description": "Premium SaaS engineering, custom web design, Shopify development, and digital marketing automation services by Hunain Haider.",
              "publisher": {
                "@id": "https://webgaebel.com/#person"
              }
            }
          ]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BookingProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right" })
  ] }) });
}
const $$splitComponentImporter$4 = () => import("./services-BcYgR5a1.mjs");
const Route$4 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Shopify Store Development Agency & Web Design Services"
    }, {
      name: "description",
      content: "Explore services by WebGaebel & Hunain Haider. High-performance Shopify store development, affordable website design for small businesses, web design agency services for startups, technical SEO audits, and WhatsApp automation."
    }, {
      name: "keywords",
      content: "Shopify store development agency, affordable website design for small business, web design agency for startups, seo services for newly launched website, technical seo audit service, whatsapp marketing automation, WebGaebel"
    }, {
      property: "og:title",
      content: "Shopify Store Development Agency & Web Design Services"
    }, {
      property: "og:description",
      content: "Explore services by WebGaebel & Hunain Haider. High-performance Shopify store development, affordable website design for small businesses, web design agency services for startups, technical SEO audits, and WhatsApp automation."
    }, {
      property: "og:url",
      content: "https://webgaebel.com/services"
    }],
    links: [{
      rel: "canonical",
      href: "https://webgaebel.com/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./projects-5nGYYiYu.mjs");
const Route$3 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "SaaS MVP Development Projects & Portfolio | WebGaebel"
    }, {
      name: "description",
      content: "Browse case studies and software projects by Hunain Haider. High-performance custom web app development, SaaS MVP development services, and corporate website design solutions."
    }, {
      name: "keywords",
      content: "SaaS MVP development service, custom web app development, corporate website design agency, fintech dashboard, healthcare compliance CRM, Hunain Haider portfolio"
    }, {
      property: "og:title",
      content: "SaaS MVP Development Projects & Portfolio | WebGaebel"
    }, {
      property: "og:description",
      content: "Browse case studies and software projects by Hunain Haider. High-performance custom web app development, SaaS MVP development services, and corporate website design solutions."
    }, {
      property: "og:url",
      content: "https://webgaebel.com/projects"
    }],
    links: [{
      rel: "canonical",
      href: "https://webgaebel.com/projects"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-AbjxlEGl.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact WebGaebel | Hire Shopify Developer & SaaS Consultant"
    }, {
      name: "description",
      content: "Get in touch with Hunain Haider, Founder of WebGaebel. Contact us to hire a Shopify developer, schedule a technical SEO audit, or book a SaaS strategy session."
    }, {
      name: "keywords",
      content: "hire shopify developer for small business, contact WebGaebel, contact Hunain Haider, book saas strategy session, get technical seo audit"
    }, {
      property: "og:title",
      content: "Contact WebGaebel | Hire Shopify Developer & SaaS Consultant"
    }, {
      property: "og:description",
      content: "Get in touch with Hunain Haider, Founder of WebGaebel. Contact us to hire a Shopify developer, schedule a technical SEO audit, or book a SaaS strategy session."
    }, {
      property: "og:url",
      content: "https://webgaebel.com/contact"
    }],
    links: [{
      rel: "canonical",
      href: "https://webgaebel.com/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-Bz_ziIJw.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Hunain Haider | Senior Full Stack Developer & SaaS Builder"
    }, {
      name: "description",
      content: "Hunain Haider is a Senior Full Stack Developer, .NET/MERN specialist, and Founder of WebGaebel in Karachi, Pakistan. Helping businesses scale with custom software, SaaS MVP development, and automation."
    }, {
      name: "keywords",
      content: "About Hunain Haider, Senior Full Stack Developer, SaaS Builder, .NET Developer, MERN Stack Developer, WebGaebel Founder, Karachi Pakistan developer, Software Solutions Consultant"
    }, {
      property: "og:title",
      content: "About Hunain Haider | Senior Full Stack Developer & SaaS Builder"
    }, {
      property: "og:description",
      content: "Hunain Haider is a Senior Full Stack Developer, .NET/MERN specialist, and Founder of WebGaebel in Karachi, Pakistan. Helping businesses scale with custom software, SaaS MVP development, and automation."
    }, {
      property: "og:url",
      content: "https://webgaebel.com/about"
    }],
    links: [{
      rel: "canonical",
      href: "https://webgaebel.com/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-JYZFh6-T.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Hunain Haider | Senior Full Stack Developer & Shopify Store Development Agency"
    }, {
      name: "description",
      content: "Partner with Hunain Haider, Founder of WebGaebel. Specialist in SaaS MVP development services, custom Shopify store development, web design for startups, B2B lead generation, and technical SEO audits."
    }, {
      name: "keywords",
      content: "Hunain Haider, Senior Full Stack Developer, SaaS MVP development service, Shopify store development agency, web design agency for startups, affordable website design for small business, technical SEO audit service, WebGaebel, Karachi Pakistan developer"
    }, {
      property: "og:title",
      content: "Hunain Haider | Senior Full Stack Developer & Shopify Store Development Agency"
    }, {
      property: "og:description",
      content: "Partner with Hunain Haider, Founder of WebGaebel. Specialist in SaaS MVP development services, custom Shopify store development, web design for startups, B2B lead generation, and technical SEO audits."
    }, {
      property: "og:url",
      content: "https://webgaebel.com/"
    }],
    links: [{
      rel: "canonical",
      href: "https://webgaebel.com/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$5
});
const ProjectsRoute = Route$3.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$5
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$5
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$5
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ProjectsRoute,
  ServicesRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  router as r,
  useBooking as u
};
