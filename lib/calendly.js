// Calendly integration utility
export const handleBookCallClick = (e) => {
  e.preventDefault();
  const url = "https://calendly.com/abhishek-stemorbit";
  if (typeof window === "undefined") return false;

  // Ensure CSS is present
  if (!document.getElementById("calendly-widget-css")) {
    const link = document.createElement("link");
    link.id = "calendly-widget-css";
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }

  const openPopup = () => {
    try {
      if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
        window.Calendly.initPopupWidget({ url });
        return true;
      }
    } catch (_) {}
    return false;
  };

  if (openPopup()) return false;

  // If Calendly not loaded yet, load script on demand and open when ready
  let script = document.getElementById("calendly-widget-script");
  if (!script) {
    script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.type = "text/javascript";
    script.onload = () => openPopup();
    document.body.appendChild(script);
  } else {
    script.addEventListener("load", () => openPopup(), { once: true });
  }

  // Final fallback after short delay
  setTimeout(() => {
    if (!openPopup()) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }, 1200);

  return false;
};

// Alternative function for different Calendly URLs if needed
export const handleBookCallClickWithUrl = (calendlyUrl) => (e) => {
  e.preventDefault();
  if (typeof window === "undefined") return false;

  // Ensure CSS is present
  if (!document.getElementById("calendly-widget-css")) {
    const link = document.createElement("link");
    link.id = "calendly-widget-css";
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }

  const openPopup = () => {
    try {
      if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
        window.Calendly.initPopupWidget({ url: calendlyUrl });
        return true;
      }
    } catch (_) {}
    return false;
  };

  if (openPopup()) return false;

  // If Calendly not loaded yet, load script on demand and open when ready
  let script = document.getElementById("calendly-widget-script");
  if (!script) {
    script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.type = "text/javascript";
    script.onload = () => openPopup();
    document.body.appendChild(script);
  } else {
    script.addEventListener("load", () => openPopup(), { once: true });
  }

  // Final fallback after short delay
  setTimeout(() => {
    if (!openPopup()) {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    }
  }, 1200);

  return false;
};

