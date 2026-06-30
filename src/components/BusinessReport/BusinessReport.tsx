'use client';

import { FaCheck, FaArrowRight } from 'react-icons/fa';

export default function BusinessReport() {
  const reportBenefits = [
    'Estimated startup investment required',
    'Operational setup costs',
    'Revenue projections',
    'Expected ROI timelines',
    'Profitability analysis by segment',
  ];

  const projectOverviewItems = [
    'Business Overview',
    'Market Feasibility Study',
    'Project Phases',
    'Licensing Requirements',
    'Space Planning Strategy',
    'Manpower Planning Strategy',
    'Medical Equipment Planning',
    'IT & Technical Infrastructure',
    'Branding & Marketing Strategy',
    'Governance & Compliance',
    'Project Timeline',
    'Financial Planning',
    'Revenue Projections',
    'Financial Analysis',
  ];

  return (
    <section
      id="business-report"
      className="relative bg-[#121212] py-24 overflow-hidden bg-grid-lines"
    >
      {/* Ambient Gold Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1250px] mx-auto px-6 md:px-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/5 border border-gold/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <p className="text-gold text-sm font-medium uppercase tracking-wider">
              Business Report
            </p>
          </div>

          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Business Analysis Report For Investors
          </h2>

          <p className="text-[#B5B5B5] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            A clear and professional financial roadmap for healthcare investors planning to launch or
            expand in the UAE market.
          </p>
        </div>

        {/* TWO CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start mb-16">
          {/* LEFT CARD */}
          <div className="relative bg-[#1F1F1F] rounded-[32px] border border-[rgba(219,202,147,0.12)] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-gold/30 transition-all duration-300 group overflow-hidden">
            {/* Subtle top-right accent glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/5 blur-2xl rounded-full pointer-events-none group-hover:bg-gold/10 transition-all duration-300" />

            <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight mb-6">
              Business Analysis Report For Healthcare Investors
            </h3>

            <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed mb-8">
              <p>
                Planning to invest in a healthcare business in the UAE but unsure where to start,
                how much capital is required, or what ROI to expect?
              </p>
              <p>
                Our Business Analysis Report provides a clear financial roadmap to help you make
                informed investment decisions.
              </p>
            </div>

            <p className="text-white/90 font-semibold text-sm tracking-wider uppercase mb-5">
              This report helps you understand:
            </p>

            <div className="space-y-3">
              {reportBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-[#252525] border border-[rgba(219,202,147,0.06)] rounded-2xl px-5 py-4 transition-all duration-300 hover:border-gold/20"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                    <FaCheck size={10} className="text-gold" />
                  </span>
                  <span className="text-white/90 text-sm md:text-[15px] font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#1F1F1F] rounded-[32px] border border-[rgba(219,202,147,0.12)] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-gold/30 transition-all duration-300">
            <h3 className="text-[#DBCA93] text-xl md:text-2xl font-semibold leading-tight mb-8 text-center">
              Project Overview Includes
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {projectOverviewItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#252525] border border-[rgba(219,202,147,0.06)] border-l-4 border-l-gold rounded-r-2xl rounded-l-md px-5 py-3.5 text-center text-white/95 text-sm md:text-[15px] font-semibold transition-all duration-300 hover:bg-[#2a2a2a] hover:border-r-gold/20 hover:border-y-gold/20"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER & CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 italic">
            This service is ideal for investors seeking financial clarity before launching a clinic,
            hospital, laboratory, homecare, or medical center.
          </p>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-lead-modal'))}
            className="inline-flex items-center gap-3 bg-gold hover:bg-[#d6b45f] text-black font-bold text-sm md:text-base px-8 py-4 rounded-full shadow-lg shadow-gold/10 hover:shadow-gold/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
          >
            Get Free Consultation
            <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
              <FaArrowRight size={10} className="text-black" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
