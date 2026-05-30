'use client';

const services = [
  {
    title: 'Business Analysis Report for Healthcare Investors',
    description:
      'A clear and professional financial roadmap for healthcare investors planning to launch or expand in the UAE market. Get investment estimates, revenue projections, and market feasibility.',
    image: '/business-analysis-report.jpeg',
  },
  {
    title: 'Healthcare Turnkey Project Management',
    description:
      'Complete project execution from planning to successful launch.',
    image: 'https://strategixuae.com/wp-content/uploads/2026/04/business-people-teamwork-scaled.webp',
  },
  {
    title: 'Architecture, 3D Designing & Interior Fit-out',
    description:
      'Modern, compliant, and patient-centric healthcare facility designs.',
    image: 'https://strategixuae.com/wp-content/uploads/2026/04/Gemini_Generated_Image_g74j79g74j79g74j-1.png',
  },
  {
    title: 'Healthcare Facility Licensing',
    description:
      'Full support for DHA, DOH, and MOH approvals across the UAE.',
    image: 'https://strategixuae.com/wp-content/uploads/2026/04/Gemini_Generated_Image_1kudoo1kudoo1kud-1.png',
  },
  {
    title: 'Healthcare Professionals Licensing',
    description:
      'Efficient licensing for doctors, nurses, and allied health staff.',
    image: '/healthcare-facility-licensing.jpeg',
  },
  {
    title: 'Manpower Planning, Recruitment & PR Services',
    description:
      'Strategic staffing and government relations support.',
    image: 'https://strategixuae.com/wp-content/uploads/2026/04/Gemini_Generated_Image_qgxxqpqgxxqpqgxx-1.png',
  },
  {
    title: 'Medical Equipment Planning & Procurement',
    description:
      'Sourcing and supply of quality medical equipment.',
    image: '/medical-equipment-planning.jpeg',
  },
  {
    title: 'IT Infrastructure Setting Up (Hardware & Software)',
    description:
      'Complete digital infrastructure for healthcare operations.',
    image: '/it-infrastructure.jpeg',
  },
  {
    title: 'Website / Mobile App Development, Branding & Marketing',
    description:
      'Healthcare-focused digital presence and patient acquisition strategies.',
    image: '/healthcare-mobile-app.png',
  },
  {
    title: 'Quality Audit Assistance and Accreditations',
    description:
      'Support for JCI, DHA, and other quality standards.',
    image: 'https://strategixuae.com/wp-content/uploads/2026/04/Gemini_Generated_Image_lc14qelc14qelc14-1.png',
  },
  {
    title: 'Financial Services: VAT & Corporate Tax',
    description:
      'Expert financial and tax compliance services.',
    image: '/financial-services.jpeg',
  },
  {
    title: 'Healthcare Business Mergers & Acquisitions',
    description:
      'Support for strategic growth and investment opportunities.',
    image: 'https://strategixuae.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-27-at-4.06.50-PM-2.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#1F1F1F] py-24 overflow-hidden bg-grid-lines">
      {/* Premium Ambient Gold Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gold/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        {/* TOP BADGE & HEADING */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gold/5 border border-gold/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <p className="text-gold text-sm font-medium uppercase tracking-wider">
              Our Services
            </p>
          </div>

          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Healthcare Solutions Built
            <br />
            For Modern UAE Businesses
          </h2>

          <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end healthcare consultancy solutions
            designed to transform healthcare concepts into fully
            operational facilities with compliance, efficiency, and
            growth.
          </p>
        </div>

        {/* SPACIOUS WIDESCREEN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col h-full bg-[#191919] border border-white/5 hover:border-gold/30 rounded-[24px] overflow-hidden transition-all duration-500 shadow-2xl hover:-translate-y-1.5"
            >
              {/* CONTENT (Top) */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Animated Gold Divider */}
                <div className="w-12 h-[2px] bg-gold/50 mb-6 transition-all duration-300 group-hover:w-20" />

                <p className="text-white/60 text-[14px] md:text-[15px] leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-lead-modal'))}
                    className="flex items-center gap-2 text-gold text-sm font-medium hover:text-white transition-colors duration-300 group/btn cursor-pointer"
                  >
                    <span>Know More</span>
                    <span className="transform translate-y-[0.5px] group-hover/btn:translate-x-1.5 transition-transform duration-300 text-lg leading-none">→</span>
                  </button>
                </div>
              </div>

              {/* IMAGE (Bottom - Fixed Landscape Banner to prevent stretching) */}
              <div
                className="relative w-full flex-shrink-0 overflow-hidden border-t border-white/5"
                style={{ height: '240px' }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Elegant Dark Gradient overlay over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}