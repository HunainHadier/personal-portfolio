import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { MobileBottomNav } from "./MobileBottomNav";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { FloatingScheduleCall } from "./FloatingScheduleCall";
import { BookingModal } from "../booking/BookingModal";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <SiteFooter />
      <FloatingWhatsApp />
      <FloatingScheduleCall />
      <BookingModal />
      <MobileBottomNav />
    </div>
  );
}
