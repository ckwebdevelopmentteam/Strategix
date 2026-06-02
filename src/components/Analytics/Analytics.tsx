"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { pushToDataLayer } from "@/lib/analytics";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Page View Tracking & Global Click Tracking
  useEffect(() => {
    if (pathname) {
      const fullUrl = window.location.origin + pathname + window.location.search;
      
      pushToDataLayer({
        event: "page_view",
        page_path: pathname,
        page_url: fullUrl,
        page_title: document.title,
      });
      
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "page_view", {
          page_path: pathname,
          page_location: fullUrl,
          page_title: document.title,
        });
      }
    }

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest("button, a") as HTMLElement;
      
      if (!clickable) return;

      const buttonText = clickable.innerText?.trim() || clickable.getAttribute("aria-label") || "Unknown";
      
      // Email click
      if (clickable.tagName === "A" && (clickable as HTMLAnchorElement).href.startsWith("mailto:")) {
        pushToDataLayer({
          event: "email_click",
          email: (clickable as HTMLAnchorElement).href.replace("mailto:", ""),
          page_path: pathname,
        });
        return;
      }

      // Phone click
      if (clickable.tagName === "A" && (clickable as HTMLAnchorElement).href.startsWith("tel:")) {
        pushToDataLayer({
          event: "phone_click",
          phone_number: (clickable as HTMLAnchorElement).href.replace("tel:", ""),
          page_path: pathname,
        });
        return;
      }

      // WhatsApp click
      if (clickable.tagName === "A" && (clickable as HTMLAnchorElement).href.includes("wa.me")) {
        pushToDataLayer({
          event: "whatsapp_click",
          button_text: buttonText,
          page_path: pathname,
        });
        return;
      }

      // Generic CTA click
      if (clickable.tagName === "BUTTON" || (clickable.tagName === "A" && clickable.className.includes("bg-"))) {
        pushToDataLayer({
          event: "cta_click",
          button_text: buttonText,
          page_path: pathname,
        });
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, [pathname, searchParams]);

  const gtmId = "GTM-KBPXN4T6";
  const ga4Id = "G-XXXXXXXXXX";
  const clarityId = "XXXXXXXX";

  return (
    <>
      {/* Google Tag Manager */}
      {gtmId && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {/* Google Analytics 4 */}
      {ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {/* Microsoft Clarity */}
      {clarityId && (
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `,
          }}
        />
      )}
    </>
  );
}
