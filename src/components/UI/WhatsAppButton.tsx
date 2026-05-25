'use client';

import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_URL =
  'https://wa.me/971585214600?text=Hello%20Strategix%2C%20I%20am%20interested%20in%20healthcare%20facility%20setup%20in%20UAE.%20Please%20share%20more%20details.';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with our expert on WhatsApp"
      suppressHydrationWarning
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center sm:justify-start bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 animate-pulse-border w-14 h-14 sm:w-auto sm:h-14 sm:pr-6 sm:pl-1"
    >
      {/* Icon part */}
      <div className="w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center rounded-full flex-shrink-0">
        <FaWhatsapp className="text-3xl sm:text-[26px]" />
      </div>
      {/* Label — hidden on small screen, always shown on sm and up */}
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        Chat with Our Expert
      </span>
    </a>
  );
}
