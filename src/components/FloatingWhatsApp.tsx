import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5533984185744"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold hover:shadow-glow hover:scale-110 transition-all duration-300 animate-float-slow"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
      <MessageCircle className="relative w-6 h-6 text-primary-foreground" />
    </a>
  );
};
