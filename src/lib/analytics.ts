type DataLayerEvent = {
  event: string;
  [key: string]: any;
};

// Global declarations for TypeScript
declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

/**
 * Centralized utility to push events to Google Tag Manager dataLayer
 */
export const pushToDataLayer = (data: DataLayerEvent) => {
  try {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(data);
    }
  } catch (error) {
    console.warn("Analytics dataLayer error:", error);
  }
};

/**
 * GA4 Event Tracking Helper
 */
export const trackEvent = ({
  event,
  category,
  action,
  label,
  value,
}: {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number | string;
}) => {
  try {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event, {
        event_category: category,
        event_action: action,
        event_label: label,
        value: value,
      });
    }
    
    // Also push to dataLayer for GTM fallback
    pushToDataLayer({
      event: "custom_event",
      event_name: event,
      category,
      action,
      label,
      value,
    });
  } catch (error) {
    console.warn("Analytics trackEvent error:", error);
  }
};

/**
 * Google Ads Conversion Tracking Helper
 */
export const trackConversion = () => {
  try {
    const conversionId = "AW-XXXXXXXX";
    const conversionLabel = "XXXXXXXXXX";

    if (typeof window !== "undefined" && window.gtag && conversionId && conversionLabel) {
      window.gtag("event", "conversion", {
        send_to: `${conversionId}/${conversionLabel}`,
      });
    }
    
    // Also push to dataLayer
    pushToDataLayer({
      event: "conversion",
      conversion_type: "lead",
    });
  } catch (error) {
    console.warn("Analytics trackConversion error:", error);
  }
};
