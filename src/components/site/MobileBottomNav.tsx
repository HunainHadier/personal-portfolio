import { Link } from "@tanstack/react-router";
import { Home, Briefcase, FolderKanban, Mail } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <Link
              key={it.to}
              to={it.to}
              className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-muted-foreground transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: it.to === "/" }}
            >
              <Icon className="h-5 w-5" strokeWidth={2} />
              {it.label}
            </Link>
          );
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
