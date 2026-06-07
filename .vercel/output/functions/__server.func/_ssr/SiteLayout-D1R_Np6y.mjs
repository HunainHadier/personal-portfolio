import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link, d as useLocation } from "../_libs/tanstack__react-router.mjs";
import { u as useBooking } from "./router-BhPPQh_O.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-DcBPHt8D.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { x as MessageCircle, t as Calendar$1, y as CircleCheck, g as Sparkles, z as Briefcase, B as Building, G as Globe, H as FileText, U as User, h as Clock, I as LoaderCircle, j as Mail, k as Phone, V as Video, J as ChevronLeft, v as ChevronRight, K as House, N as FolderKanban, X, O as ChevronDown } from "../_libs/lucide-react.mjs";
import { f as format } from "../_libs/date-fns.mjs";
import { g as getDefaultClassNames, D as DayPicker } from "../_libs/react-day-picker.mjs";
import { o as objectType, s as stringType, n as numberType } from "../_libs/zod.mjs";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `sticky top-0 z-40 w-full border-b transition-all ${scrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-background"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex h-16 items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "text-lg font-bold tracking-tight text-foreground", children: [
          "HH",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 md:flex", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            hash: "hash" in n ? n.hash : void 0,
            className: "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
            activeProps: { className: "text-foreground" },
            activeOptions: { exact: n.to === "/" && !("hash" in n) },
            children: n.label
          },
          n.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => openBooking(),
            className: "hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow md:inline-flex cursor-pointer",
            children: "Book Consultation"
          }
        )
      ] })
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-8 text-center text-sm text-muted-foreground", children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " Hunain Haider. All rights reserved."
  ] }) });
}
const items = [
  { to: "/", label: "Home", icon: House },
  { to: "/about", label: "About", icon: User },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/contact", label: "Contact", icon: Mail }
];
function MobileBottomNav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md md:hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-md grid-cols-5", children: items.map((it) => {
      const Icon = it.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: it.to,
          className: "flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-muted-foreground transition-colors",
          activeProps: { className: "text-primary" },
          activeOptions: { exact: it.to === "/" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", strokeWidth: 2 }),
            it.label
          ]
        },
        it.to
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[env(safe-area-inset-bottom)]" })
  ] });
}
function FloatingWhatsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: "https://wa.me/923182484396",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-20 right-5 z-50 inline-flex h-13 w-13 items-center justify-center rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105 md:bottom-6 md:right-6",
      style: { height: 52, width: 52 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" })
    }
  );
}
function FloatingScheduleCall() {
  const { isOpen, openBooking } = useBooking();
  const location = useLocation();
  if (isOpen || location.pathname === "/contact") {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => openBooking(),
        className: "fixed bottom-6 left-6 z-50 hidden md:flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-600 px-4.5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/35",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$1, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Schedule Call" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-14 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-md px-4 py-2.5 flex items-center justify-between md:hidden shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold text-foreground", children: "Ready to scale your project?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "Schedule a free consultation call" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => openBooking(),
          className: "rounded-lg bg-gradient-to-r from-primary to-blue-500 px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-md transition-transform active:scale-95",
          children: "Book Call"
        }
      )
    ] })
  ] });
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const getActiveServices = createServerFn({
  method: "GET"
}).handler(createSsrRpc("eaa70a2b922f85433adcdede7ed613103f61d2c78f00b134b8acb21497edc179"));
const getAvailableSlots = createServerFn({
  method: "POST"
}).validator(objectType({
  date: stringType()
})).handler(createSsrRpc("31c5a3d3afebec4ab63fa3354eabaf9639affbd798d736b246f829fda62c9e01"));
const createBooking = createServerFn({
  method: "POST"
}).validator(objectType({
  fullName: stringType().min(1, "Full name is required"),
  email: stringType().email("Invalid email address"),
  phone: stringType().optional(),
  serviceName: stringType().min(1, "Service selection is required"),
  industry: stringType().min(1, "Industry selection is required"),
  date: stringType(),
  // "YYYY-MM-DD"
  time: stringType(),
  // "HH:MM"
  duration: numberType().int().positive(),
  // 30, 45, or 60 minutes
  message: stringType().optional()
})).handler(createSsrRpc("d3806421c8cd5aa79208f45a3ee18d75679e4c670c44b608d027f6f3e1e322de"));
const createContactSubmission = createServerFn({
  method: "POST"
}).validator(objectType({
  name: stringType().min(1, "Name is required"),
  email: stringType().email("Invalid email address"),
  company: stringType().optional(),
  message: stringType().min(1, "Message is required")
})).handler(createSsrRpc("eecc189f949d59cd5c438e9d80d0a10ac2fa01fa86efad0e724b6f5d02a95381"));
createServerFn({
  method: "POST"
}).validator(objectType({
  date: stringType()
})).handler(createSsrRpc("930e0bbe89d26cfa8d88e5c6e821378acb4309e08a1b1cd65dde89be6c34c38c"));
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-slot": "calendar", ref: rootRef, className: cn(className2), ...props2 });
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: cn("size-4", className2), ...props2 });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { ...props2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
const DEFAULT_SERVICES = [
  "Mobile App Development",
  "Web Development",
  "Shopify Development",
  "Amazon Services",
  "Graphic Design",
  "Video Editing",
  "Digital Marketing",
  "Data Solutions",
  "SEO Services",
  "SaaS Development",
  "WordPress Development",
  "AI Development",
  "UI/UX Design",
  "Custom Web App Development",
  "E-Commerce Business Startup",
  "Website Maintenance & Support",
  "Consultation"
];
const INDUSTRIES = [
  { name: "SaaS", icon: Sparkles },
  { name: "E-Commerce", icon: Briefcase },
  { name: "Real Estate", icon: Building },
  { name: "Startup", icon: Globe },
  { name: "Healthcare", icon: CircleCheck },
  { name: "Education", icon: FileText },
  { name: "Agency", icon: User }
];
const DURATIONS = [30, 45, 60];
const DEFAULT_TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30"
];
function resolveServiceName(candidate, services) {
  if (!candidate) return "";
  const exactMatch = services.find((srv) => srv.toLowerCase() === candidate.toLowerCase());
  if (exactMatch) return exactMatch;
  const partialMatch = services.find((srv) => {
    const normalizedService = srv.toLowerCase();
    const normalizedCandidate = candidate.toLowerCase();
    return normalizedService.includes(normalizedCandidate) || normalizedCandidate.includes(normalizedService);
  });
  return partialMatch || "";
}
function BookingModal() {
  const { isOpen, selectedService, closeBooking } = useBooking();
  const [step, setStep] = reactExports.useState(1);
  const [service, setService] = reactExports.useState("");
  const [availableServices, setAvailableServices] = reactExports.useState(DEFAULT_SERVICES);
  const [industry, setIndustry] = reactExports.useState("");
  const [duration, setDuration] = reactExports.useState(30);
  const [selectedDate, setSelectedDate] = reactExports.useState(void 0);
  const [selectedTime, setSelectedTime] = reactExports.useState("");
  const [fullName, setFullName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = reactExports.useState(DEFAULT_TIME_SLOTS);
  const [bookedSlots, setBookedSlots] = reactExports.useState([]);
  const [loadingSlots, setLoadingSlots] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [bookingResult, setBookingResult] = reactExports.useState(null);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  reactExports.useEffect(() => {
    if (selectedService) {
      setService(resolveServiceName(selectedService, availableServices) || selectedService);
      if (selectedService.toLowerCase().includes("web")) {
        setIndustry("Agency");
      } else if (selectedService.toLowerCase().includes("app")) {
        setIndustry("Startup");
      } else if (selectedService.toLowerCase().includes("product")) {
        setIndustry("SaaS");
      } else {
        setIndustry("");
      }
    } else {
      setService("");
      setIndustry("");
    }
  }, [selectedService, availableServices, isOpen]);
  reactExports.useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;
    getActiveServices().then((services) => {
      if (cancelled) return;
      if (Array.isArray(services) && services.length > 0) {
        setAvailableServices(services);
        if (selectedService) {
          setService(resolveServiceName(selectedService, services) || selectedService);
        }
      }
    }).catch((err) => {
      console.error("Error loading services:", err);
      toast.error("Failed to load services from the database.");
    });
    return () => {
      cancelled = true;
    };
  }, [isOpen, selectedService]);
  reactExports.useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStep(1);
        setService("");
        setIndustry("");
        setDuration(30);
        setSelectedDate(void 0);
        setSelectedTime("");
        setAvailableTimeSlots(DEFAULT_TIME_SLOTS);
        setBookedSlots([]);
        setFullName("");
        setEmail("");
        setPhone("");
        setDescription("");
        setBookingResult(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  reactExports.useEffect(() => {
    if (!selectedDate) {
      setBookedSlots([]);
      setAvailableTimeSlots(DEFAULT_TIME_SLOTS);
      return;
    }
    const dateStr = format(selectedDate, "yyyy-MM-dd");
    setLoadingSlots(true);
    setSelectedTime("");
    getAvailableSlots({ data: { date: dateStr } }).then((result) => {
      setBookedSlots(result.bookedSlots);
      setAvailableTimeSlots(result.allSlots?.length ? result.allSlots : DEFAULT_TIME_SLOTS);
    }).catch((err) => {
      console.error("Error loading slots:", err);
      toast.error("Failed to query slot availability.");
      setAvailableTimeSlots(DEFAULT_TIME_SLOTS);
    }).finally(() => {
      setLoadingSlots(false);
    });
  }, [selectedDate]);
  const canGoNext = () => {
    if (step === 1) return !!service;
    if (step === 2) return !!industry;
    if (step === 3) return !!selectedDate && !!selectedTime;
    if (step === 4) {
      return !!fullName && !!email && email.includes("@");
    }
    return true;
  };
  const nextStep = () => {
    if (canGoNext()) {
      setStep((s) => s + 1);
    } else {
      toast.warning("Please complete the required details before proceeding.");
    }
  };
  const prevStep = () => {
    setStep((s) => Math.max(1, s - 1));
  };
  const handleConfirmBooking = async () => {
    if (!selectedDate) return;
    setSubmitting(true);
    const dateStr = format(selectedDate, "yyyy-MM-dd");
    try {
      const result = await createBooking({
        data: {
          fullName,
          email,
          phone: phone || void 0,
          serviceName: service,
          industry,
          date: dateStr,
          time: selectedTime,
          duration,
          message: description || void 0
        }
      });
      if (result.success) {
        setBookingResult(result);
        setStep(6);
        toast.success("Consultation successfully scheduled!");
      } else {
        toast.error("Failed to schedule booking. Please try again.");
      }
    } catch (error) {
      console.error("Booking submission error:", error);
      toast.error("An error occurred during booking. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isOpen, onOpenChange: (open) => !open && closeBooking(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-xl border border-border/80 bg-background/95 p-0 shadow-2xl backdrop-blur-xl md:rounded-2xl overflow-hidden w-[calc(100vw-1rem)] max-h-[calc(100dvh-1rem)] overflow-y-auto sm:w-full", children: [
    step < 6 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-1.5 w-full bg-accent/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-primary transition-all duration-500 ease-out",
        style: { width: `${step / 5 * 100}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 md:p-8", children: [
      step < 6 && /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scheduling Consultation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-bold", children: [
            "Step ",
            step,
            " of 5"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "text-2xl font-bold tracking-tight text-foreground mt-2", children: [
          step === 1 && "Choose Your Service",
          step === 2 && "Select Niche Industry",
          step === 3 && "Pick Date & Available Slot",
          step === 4 && "Provide Details",
          step === 5 && "Review & Secure Booking"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { className: "text-sm text-muted-foreground mt-1", children: [
          step === 1 && "Select the core capability you require for your business.",
          step === 2 && "Choose your industry context to align technical requirements.",
          step === 3 && "Select duration and pick a convenient slot in your local timezone.",
          step === 4 && "Provide your contact and project details to prepare for our call.",
          step === 5 && "Review your consultation details before finalizing."
        ] })
      ] }),
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3", children: availableServices.map((srv) => {
          const isSelected = service === srv;
          const lockedService = selectedService ? resolveServiceName(selectedService, availableServices) : "";
          const isLocked = !!lockedService && lockedService !== srv;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              disabled: isLocked,
              onClick: () => setService(srv),
              className: `flex items-center justify-between rounded-xl border p-4 text-left font-medium transition-all ${isSelected ? "border-primary bg-primary/5 text-primary shadow-sm shadow-primary/10" : isLocked ? "border-border/40 bg-accent/20 text-muted-foreground opacity-50 cursor-not-allowed" : "border-border/60 bg-accent/30 text-foreground hover:border-border hover:bg-accent/60"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: srv }),
                isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary fill-primary/10" })
              ]
            },
            srv
          );
        }) }),
        service && selectedService && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground text-center", children: "Service is prefilled from the card you clicked. Close the scheduler to choose a different one." })
      ] }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3", children: INDUSTRIES.map((ind) => {
        const Icon = ind.icon;
        const isSelected = industry === ind.name;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setIndustry(ind.name),
            className: `flex flex-col items-center justify-center rounded-xl border p-4 text-center transition-all ${isSelected ? "border-primary bg-primary/5 text-primary shadow-sm" : "border-border/60 bg-accent/30 text-foreground hover:border-border hover:bg-accent/60"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg p-2.5 mb-2.5 transition-colors ${isSelected ? "bg-primary/10 text-primary" : "bg-accent text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: ind.name })
            ]
          },
          ind.name
        );
      }) }) }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase", children: "Duration:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-lg bg-accent/50 p-1", children: DURATIONS.map((dur) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setDuration(dur),
              className: `rounded-md px-3 py-1 text-xs font-semibold transition-all ${duration === dur ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
              children: [
                dur,
                " Min"
              ]
            },
            dur
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border/80 bg-accent/20 p-2 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Calendar,
            {
              mode: "single",
              selected: selectedDate,
              onSelect: setSelectedDate,
              disabled: (date) => {
                const day = date.getDay();
                const today = /* @__PURE__ */ new Date();
                today.setHours(0, 0, 0, 0);
                return day === 0 || day === 6 || date < today;
              },
              className: "p-1"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider", children: "Available Times" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                " Monday - Friday"
              ] })
            ] }),
            !selectedDate ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-44 flex-col items-center justify-center rounded-xl border border-dashed border-border/60 text-center p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$1, { className: "h-6 w-6 text-muted-foreground opacity-60 mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium", children: "Select a date to view available time slots." })
            ] }) : loadingSlots ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-44 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[176px] overflow-y-auto pr-1", children: availableTimeSlots.map((timeSlot) => {
              const isBooked = bookedSlots.includes(timeSlot);
              const isSelected = selectedTime === timeSlot;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  disabled: isBooked,
                  onClick: () => setSelectedTime(timeSlot),
                  className: `rounded-lg py-2.5 text-center text-xs font-semibold transition-all ${isSelected ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20" : isBooked ? "bg-accent/10 text-muted-foreground/30 line-through cursor-not-allowed border border-transparent" : "bg-accent/40 border border-border/40 text-foreground hover:border-primary/40 hover:bg-accent/80"}`,
                  children: timeSlot
                },
                timeSlot
              );
            }) }),
            selectedDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Slots shown in timezone: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: timezone })
              ] })
            ] })
          ] })
        ] })
      ] }),
      step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold text-muted-foreground uppercase", htmlFor: "fullName", children: [
              "Full Name ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "fullName",
                  type: "text",
                  required: true,
                  value: fullName,
                  onChange: (e) => setFullName(e.target.value),
                  placeholder: "Jane Doe",
                  className: "w-full rounded-lg border border-border/80 bg-accent/20 py-2.5 pl-10 pr-3 text-sm font-medium text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold text-muted-foreground uppercase", htmlFor: "email", children: [
              "Email Address ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "email",
                  type: "email",
                  required: true,
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  placeholder: "jane@company.com",
                  className: "w-full rounded-lg border border-border/80 bg-accent/20 py-2.5 pl-10 pr-3 text-sm font-medium text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold text-muted-foreground uppercase", htmlFor: "phone", children: [
            "Phone / WhatsApp ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "(Optional)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "phone",
                type: "tel",
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                placeholder: "+1 (555) 012-3456",
                className: "w-full rounded-lg border border-border/80 bg-accent/20 py-2.5 pl-10 pr-3 text-sm font-medium text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase", htmlFor: "description", children: "Project Scope & Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              id: "description",
              rows: 3,
              value: description,
              onChange: (e) => setDescription(e.target.value),
              placeholder: "Outline key targets, required technologies, or specific challenges...",
              className: "w-full rounded-lg border border-border/80 bg-accent/20 px-3 py-2.5 text-sm font-medium text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
            }
          )
        ] })
      ] }),
      step === 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-accent/25 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-y-4 gap-x-6 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-muted-foreground uppercase block", children: "Client Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground mt-0.5 block", children: fullName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-muted-foreground uppercase block", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground mt-0.5 block truncate", children: email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-muted-foreground uppercase block", children: "Service Request" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground mt-0.5 block", children: service })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-muted-foreground uppercase block", children: "Niche Context" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground mt-0.5 block", children: industry })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-muted-foreground uppercase block", children: "Time Slot" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground mt-0.5 block flex items-center gap-1.5 text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
                selectedDate && format(selectedDate, "MMM d, yyyy"),
                " @ ",
                selectedTime,
                " (",
                duration,
                "m)"
              ] })
            ] })
          ] }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-muted-foreground uppercase block mb-1", children: "Project Brief" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed italic", children: [
              '"',
              description,
              '"'
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-xs text-blue-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-4.5 w-4.5 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Upon confirmation, a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Google Meet link" }),
            " will be generated and sent directly to your inbox."
          ] })
        ] })
      ] }),
      step === 6 && bookingResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 text-center space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Consultation Scheduled!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-2 max-w-sm mx-auto", children: [
            "A meeting event was generated on Google Calendar. Confirmation details have been sent to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: email }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-accent/20 p-5 text-left text-sm max-w-md mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Presenter:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Hunain Haider" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Topic:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: bookingResult.details.serviceName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Scheduled:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-primary", children: [
              selectedDate && format(selectedDate, "MMMM d, yyyy"),
              " at ",
              selectedTime,
              " (",
              duration,
              " min)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pt-2.5 border-t border-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-4 w-4" }),
              " Google Meet:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: bookingResult.meetLink,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-xs font-bold text-blue-500 hover:text-blue-400 hover:underline bg-blue-500/10 px-2.5 py-1 rounded",
                children: "Join Meeting Room"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: closeBooking, size: "lg", className: "w-full max-w-xs font-semibold", children: "Return to Dashboard" }) })
      ] }),
      step < 6 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between gap-3 pt-4 border-t border-border/60", children: [
        step > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: prevStep,
            disabled: submitting,
            className: "flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground disabled:opacity-50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }),
              " Back"
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
        step < 5 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: nextStep,
            className: "font-bold flex items-center gap-1",
            children: [
              "Continue ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleConfirmBooking,
            disabled: submitting,
            className: "font-bold bg-gradient-to-r from-blue-500 to-primary text-primary-foreground flex items-center gap-1.5",
            children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
              " Securing Call..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Confirm Call ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4.5 w-4.5" })
            ] })
          }
        )
      ] })
    ] })
  ] }) });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pb-20 md:pb-0", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingScheduleCall, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BookingModal, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileBottomNav, {})
  ] });
}
export {
  SiteLayout as S,
  createContactSubmission as c
};
