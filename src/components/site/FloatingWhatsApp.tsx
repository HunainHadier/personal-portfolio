import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923182484396"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-5 z-50 inline-flex h-13 w-13 items-center justify-center rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105 md:bottom-6 md:right-6"
      style={{ height: 52, width: 52 }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
