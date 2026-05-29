'use client';

import { FaArrowRight } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#f5f5f3] overflow-hidden"
    >
      <div className="max-w-[1250px] mx-auto px-6 md:px-10">
        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7">
            {/* BADGE */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1F1F1F] animate-pulse" />

              <p className="text-[#1F1F1F] text-sm font-semibold uppercase tracking-wider">
                About Us
              </p>
            </div>

            {/* HEADING */}
            <h2 className="text-[#1F1F1F] text-2xl md:text-3xl lg:text-[42px] xl:text-[46px] font-semibold tracking-tight leading-[1.3] mb-8">
              We deliver <span className="font-bold">innovative healthcare solutions</span> to help
              grow your healthcare business across UAE.
            </h2>

            {/* DESCRIPTION */}
            <div className="max-w-2xl">
              <p className="text-[#333333] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
                We’ve helped healthcare companies secure successful growth and operational excellence.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 lg:pt-16 xl:pt-20">
            <p className="text-[#555555] text-[16px] md:text-[17px] leading-relaxed mb-8">
              As a professional healthcare consultancy in UAE,
              we support healthcare providers with tailored
              strategies aligned with DHA, DOH, MOH, and SHA
              regulations and evolving market demands.
            </p>

            <p className="text-[#555555] text-[16px] md:text-[17px] leading-relaxed mb-10">
              Clients searching for healthcare consulting firms in
              Dubai seek expertise, affordability, and proven
              execution—and we deliver all three as experienced
              healthcare consultants Dubai.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-lead-modal'))}
              className="bg-[#1F1F1F] hover:bg-[#F5F5F3] border border-[#F1F1F1] transition-all duration-300 text-[#F5F5F3] hover:text-[#1F1F1F] rounded-full px-8 py-4 flex items-center gap-4 text-sm font-semibold shadow-md hover:shadow-lg hover:shadow-black/10 group cursor-pointer"
            >
              Get  Consultation

              <span className="w-8 h-8 rounded-full bg-[#F5F5F3] hover:bg-[#1F1F1F] flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                <FaArrowRight size={11} className="text-[#1F1F1F]" />
              </span>
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="overflow-hidden rounded-[26px]">
            <img
              src="/about image.webp"
              alt="About Strategix"
              className="w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[620px] object-cover"
            />
          </div>

          {/* FLOATING CARD */}

        </div>

        {/* LOGO SECTION */}
        <div className="pt-20 text-center overflow-hidden">
          <h3 className="text-black text-2xl font-semibold mb-3">
            Trusted By Healthcare Businesses Across UAE
          </h3>

          <p className="text-[#777777] text-sm mb-12">
            Connect with us & let’s build successful healthcare ventures together
          </p>

          {/* CAROUSEL */}
          <div className="relative w-full overflow-hidden">
            <div className="flex items-center gap-16 sm:gap-20 animate-[scroll_35s_linear_infinite] w-max">

              {[
                "https://strategixuae.com/wp-content/uploads/2024/08/Dubai-Health-Authority@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Department-of-health@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Dubai-Healthcare-city@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Ministry-Of-Health@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/ADHIC@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Dubai-Municipality@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Abu-dhabi-Civil-Defense@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Dubai-Civil-Defense@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Monitoring-controlling-cenrtre@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Department-of-economic-develpmnt@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Ministry-Of-Health-Eagle@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Abudhabi-distribution-co@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Abudhabi-muncipality-@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/IMA-Indian-Medical-Association-logo.webp",
                "https://strategixuae.com/wp-content/uploads/2026/04/image-removebg-preview-150x150.png",

                // DUPLICATE FOR PERFECT 50% LOOP
                "https://strategixuae.com/wp-content/uploads/2024/08/Dubai-Health-Authority@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Department-of-health@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Dubai-Healthcare-city@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Ministry-Of-Health@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/ADHIC@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Dubai-Municipality@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Abu-dhabi-Civil-Defense@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Dubai-Civil-Defense@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Monitoring-controlling-cenrtre@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Department-of-economic-develpmnt@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Ministry-Of-Health-Eagle@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Abudhabi-distribution-co@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/Abudhabi-muncipality-@2x.webp",
                "https://strategixuae.com/wp-content/uploads/2024/08/IMA-Indian-Medical-Association-logo.webp",
                "https://strategixuae.com/wp-content/uploads/2026/04/image-removebg-preview-150x150.png",
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 opacity-100 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt="Healthcare Partner"
                    className="h-24 sm:h-28 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}