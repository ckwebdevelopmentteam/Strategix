'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const WHATSAPP_URL =
  'https://wa.me/971585214600?text=Hello%20Strategix%2C%20I%20am%20interested%20in%20healthcare%20facility%20setup%20in%20UAE.%20Please%20share%20more%20details.';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-24 md:py-32 bg-[#F8F7EC] bg-grid-lines-light">

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT PANEL: Portrait High-Resolution Image Card */}
          <div className="w-full relative rounded-[32px] overflow-hidden min-h-[400px] lg:min-h-[500px] shadow-2xl border border-black/5 group">
            <img
              src="/hero-5.jpg"
              alt="Strategix UAE Boardroom"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle premium dark vignette to embed the image cleanly */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
          </div>

          {/* RIGHT PANEL: Brand-Gold Executive Text Card */}
          <div className="bg-[#DBCA93] text-[#111111] rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col justify-between shadow-2xl relative overflow-hidden group/card">

            {/* Decorative organic top-right light flare */}
            <div className="absolute top-[-150px] right-[-150px] w-96 h-96 rounded-full bg-white/20 blur-3xl pointer-events-none" />

            {/* Header copy and arrow emblem block */}
            <div>
              <div className="flex items-start justify-between gap-6 mb-8 md:mb-12">
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight">
                  Ready to launch? <br />
                  We're ready to go.
                </h2>

                {/* Asymmetric diagonal arrow badge matching screenshot layout */}
                <div className="w-14 h-14 rounded-2xl bg-black/10 border border-black/15 flex items-center justify-center text-black flex-shrink-0 transition-transform duration-500 group-hover/card:rotate-45">
                  <FiArrowUpRight size={28} />
                </div>
              </div>

              {/* Exact website copy, no modifications */}
              <p className="text-black/85 text-sm md:text-base font-medium leading-relaxed max-w-lg">
                Let our expert team help you from concept to successful operations in the UAE. Get your free consultation and business analysis report today.
              </p>
            </div>

            {/* Minimalist buttons matching screenshot: solid dark capsule with a separate arrow button */}
            <div className="flex flex-wrap gap-4 items-center mt-12 lg:mt-auto">

              {/* Primary: Solid black capsule with arrow */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('open-lead-modal'));
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#111111] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-black hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/10 cursor-pointer"
                >
                  Get Consultation
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('open-lead-modal'));
                  }}
                  className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold transition-all duration-300 hover:bg-black hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/10 cursor-pointer"
                >
                  <FiArrowUpRight size={18} />
                </button>
              </div>

              {/* Secondary Option: Plain outline button, no extra colors */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('open-lead-modal'));
                }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent text-black border border-black/20 font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-black/10 hover:border-black hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Get Consultation Report
              </button>

              {/* Tertiary Option: WhatsApp contact button, plain outline (no color) */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent text-black border border-black/20 font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-black/10 hover:border-black hover:scale-[1.02] active:scale-[0.98]"
              >
                Chat with Expert
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
