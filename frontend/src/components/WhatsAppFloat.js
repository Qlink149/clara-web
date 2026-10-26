import React, { useEffect, useState } from "react";

import { useWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const href = useWhatsAppLink();
  // Hide the float while a page CTA sits in the lower part of the screen, so it never covers a button.
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const seen = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
      setHidden(seen.size > 0);
    }, { rootMargin: "-55% 0px 0px 0px" });
    document.querySelectorAll('[data-testid="strategy-button-link"], [data-hide-float]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Clara AI on WhatsApp"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : 0}
      title="Chat with us on WhatsApp"
      data-testid="whatsapp-float"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 9999,
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        transition: "opacity .2s",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
      }}
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="#fff" aria-hidden="true">
        <path d="M16.04 3C9.4 3 4 8.36 4 14.97c0 2.11.56 4.17 1.62 5.99L4 29l8.27-2.15a12.1 12.1 0 0 0 3.77.6C22.68 27.45 28 22.08 28 15.47 28 8.86 22.68 3 16.04 3zm0 22.4c-1.2 0-2.38-.2-3.5-.6l-.25-.09-4.9 1.28 1.3-4.75-.16-.25A9.86 9.86 0 0 1 6.1 14.97c0-5.47 4.46-9.92 9.94-9.92 5.47 0 9.92 4.6 9.92 10.42 0 5.47-4.45 9.93-9.92 9.93zm5.45-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
      </svg>
    </a>
  );
}
