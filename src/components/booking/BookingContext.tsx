import React, { createContext, useContext, useState, type ReactNode } from "react";

interface BookingContextType {
  isOpen: boolean;
  selectedService: string;
  openBooking: (serviceName?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openBooking = (serviceName = "Consultation") => {
    setSelectedService(serviceName);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setSelectedService("");
  };

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        selectedService,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
