'use client';

const clientLogos = [
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/Abudhabi-distribution-co@2x.webp',
    alt: 'Abu Dhabi Distribution Co',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/Department-of-health@2x.webp',
    alt: 'Department of Health',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/Dubai-Health-Authority@2x.webp',
    alt: 'Dubai Health Authority',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/Dubai-Healthcare-city@2x.webp',
    alt: 'Dubai Healthcare City',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/Dubai-Municipality@2x.webp',
    alt: 'Dubai Municipality',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/Ministry-Of-Health@2x.webp',
    alt: 'Ministry Of Health',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/Ministry-Of-Health-Eagle@2x.webp',
    alt: 'Ministry Of Health Eagle',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/Monitoring-controlling-cenrtre@2x.webp',
    alt: 'Monitoring Controlling Centre',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/Abudhabi-muncipality-@2x.webp',
    alt: 'Abu Dhabi Municipality',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/Abu-dhabi-Civil-Defense@2x.webp',
    alt: 'Abu Dhabi Civil Defense',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/ADHIC@2x.webp',
    alt: 'ADHIC',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/Department-of-economic-develpmnt@2x.webp',
    alt: 'Department of Economic Development',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/Dubai-Civil-Defense@2x.webp',
    alt: 'Dubai Civil Defense',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2024/08/IMA-Indian-Medical-Association-logo.webp',
    alt: 'Indian Medical Association',
  },
  {
    src: 'https://strategixuae.com/wp-content/uploads/2026/04/image-removebg-preview-150x150.png',
    alt: 'Healthcare Logo',
  },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-24 bg-[#F8F7EC] overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <p className="text-[#1F1F1F] text-sm font-semibold uppercase tracking-wider">
              Approved & Accredited
            </p>
          </div>
          
          <h2 className="text-[#1F1F1F] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-5">
            Accredited by Leading Regulatory Authorities
          </h2>
          
          <p className="text-[#555555] text-base md:text-lg leading-relaxed">
            Our setups, projects, and professional licensing operations are executed in strict compliance with the UAE's principal regulatory, licensing, and government institutions.
          </p>
        </div>

        {/* LOGOS Showcase GRID */}
        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
          {clientLogos.map((logo) => (
            <div
              key={logo.alt}
              className="w-[180px] sm:w-[220px] h-32 bg-white border border-black/5 rounded-2xl flex items-center justify-center p-3 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-108"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
