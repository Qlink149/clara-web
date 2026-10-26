import React from "react";
import App from "@/App";
import ServicePage from "@/ServicePage";
import { findServicePage } from "@/servicePages";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WhatsAppTextContext, DEFAULT_WA_TEXT } from "@/lib/whatsapp";

export default function Root({ pathname }) {
  const page = findServicePage(pathname);
  return (
    <WhatsAppTextContext.Provider value={(page && page.waText) || DEFAULT_WA_TEXT}>
      {page ? <ServicePage page={page} /> : <App />}
      <WhatsAppFloat />
    </WhatsAppTextContext.Provider>
  );
}
