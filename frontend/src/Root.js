import React from "react";
import App from "@/App";
import ServicePage from "@/ServicePage";
import { findServicePage } from "@/servicePages";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Root({ pathname }) {
  const page = findServicePage(pathname);
  return (
    <>
      {page ? <ServicePage page={page} /> : <App />}
      <WhatsAppFloat />
    </>
  );
}
