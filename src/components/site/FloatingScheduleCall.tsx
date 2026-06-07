import { Calendar } from "lucide-react";
import { useBooking } from "../booking/BookingContext";
import { useLocation } from "@tanstack/react-router";

export function FloatingScheduleCall() {
  const { isOpen, openBooking } = useBooking();
  const location = useLocation();

  // Hide the CTAs if the modal is open, or if the user is already on the contact page
  if (isOpen || location.pathname === "/contact") {
    return null;
  }

  return (
    <>
      {/* Desktop Floating Button - Bottom Left */}
      <button
        onClick={() => openBooking()}
        className="fixed bottom-6 left-6 z-50 hidden md:flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-600 px-4.5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/35"
      >
        <Calendar className="h-4 w-4" />
        <span>Schedule Call</span>
      </button>

      {/* Mobile Sticky CTA Bar - Sits right above the mobile bottom nav bar */}
      <div className="fixed bottom-14 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-md px-4 py-2.5 flex items-center justify-between md:hidden shadow-lg">
        <div className="flex flex-col">
          <p className="text-[11px] font-bold text-foreground">Ready to scale your project?</p>
          <p className="text-[9px] text-muted-foreground">Schedule a free consultation call</p>
        </div>
        <button
          onClick={() => openBooking()}
          className="rounded-lg bg-gradient-to-r from-primary to-blue-500 px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-md transition-transform active:scale-95"
        >
          Book Call
        </button>
      </div>
    </>
  );
}
