export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Hunain Haider. All rights reserved.
      </div>
    </footer>
  );
}
