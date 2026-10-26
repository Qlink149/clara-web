import { createContext, useContext } from "react";

export const SALES_WA_NUMBER = "919549549339";
export const DEFAULT_WA_TEXT = "Hello,\nI am ready to implement AI in my business! [WEB]";
export const waLink = (text = DEFAULT_WA_TEXT) =>
  `https://wa.me/${SALES_WA_NUMBER}?text=${encodeURIComponent(text)}`;

// Pages set their own prefilled text (source tag) so every WhatsApp CTA on them carries it.
export const WhatsAppTextContext = createContext(DEFAULT_WA_TEXT);
export const useWhatsAppLink = () => waLink(useContext(WhatsAppTextContext));
