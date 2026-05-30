'use client';

import { useEffect, useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface TurnkeyItem {
  title: string;
  description: string;
  approvals: string;
  image: string;
}

const turnkeySolutions: TurnkeyItem[] = [
  {
    title: 'Clinic',
    description:
      'Complete layouts, interior fit-outs, and professional licensing assistance for solo and multi-specialty clinical setups.',
    approvals: 'DHA / DOH | Dubai Municipality',
    image: '/clinic-lobby.png',
  },
  {
    title: 'Hospitals',
    description:
      'End-to-end structural planning, medical equipment procurement, and authority clearances for large-scale acute care tertiary hospitals.',
    approvals: 'DHA / DOH | MOH | Civil Defense',
    image: '/hospital-exterior.png',
  },
  {
    title: 'Home Care',
    description:
      'Establishing compliant home nursing care and field rehabilitation agencies, aligning staff schedules with health guidelines.',
    approvals: 'DHA / DOH | Operational Permits',
    image: '/home-care.png',
  },

  {
    title: 'Virtual Clinic',
    description:
      'Turnkey setup for digital-first medical practices, covering DHA/DOH licensing, secure video consultation portals, e-prescriptions, and remote monitoring integrations.',
    approvals: 'DHA / DOH | Telehealth Permits',
    image: '/Virtual Clinic.jpeg',
  },
  {
    title: 'Department Expansions',
    description:
      'Adding specialized new departments, clinical wards, operating rooms, or diagnostic suites to existing operational facilities.',
    approvals: 'DHA / DOH | MOH | Fit-out Permits',
    image: '/department-expansions.png',
  },
  {
    title: 'Radiology centre',
    description:
      'Advanced specialized layouts for lead-lined imaging chambers (X-Ray, MRI, CT Scans) with FANR nuclear radiation clearances.',
    approvals: 'DHA / DOH | FANR Licensing',
    image: '/radiology-center.png',
  },
  {
    title: 'Mobile Unit',
    description:
      'Custom heavy-vehicle modifications into clinical diagnostic centers, patient exam rooms, and mobile healthcare vans.',
    approvals: 'DHA / DOH | RTA Approvals | MOH',
    image: '/mobile-unit.png',
  },
  {
    title: 'Laboratory',
    description:
      'Highly sterile testing laboratories, pathology research labs, and blood processing hubs compliant with EIAC ISO standards.',
    approvals: 'DHA / DOH | EIAC Accreditation',
    image: '/medical-lab.png',
  },
  {
    title: 'Day Surgery Centers',
    description:
      'Setting up outpatient surgical operating theatres, complete with sterile HEPA HVAC laminar flow, recovery suites, and medical gas lines.',
    approvals: 'DHA / DOH | MOH | Civil Defense',
    image: '/surgery-suite.png',
  },
  {
    title: 'Medical Centres',
    description:
      'Comprehensive multi-disciplinary polyclinics providing outpatient services, general medicine, and specialized clinical chambers.',
    approvals: 'DHA / DOH | Ministry of Health',
    image: '/medical-center.png',
  },
  {
    title: 'Healthcare Mobile Apps',
    description:
      'Custom app development for online consultations, billing, appointments, and secure health data management.',
    approvals: 'UAE Cyber Laws | Telehealth Permits',
    image: '/healthcare-mobile-app.png',
  },
];

export default function TurnkeySolutions() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="turnkey" className="py-28 bg-[#191919] relative overflow-hidden bg-grid-lines">
      {/* Premium Ambient gold glow overlays */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gold/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div ref={headRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gold/5 border border-gold/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <p className="text-gold text-sm font-medium uppercase tracking-wider">
              Turnkey Solutions
            </p>
          </div>

          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Healthcare Turnkey
            <br />
            Setup Blueprints
          </h2>

          <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We deliver complete, end-to-end medical facility implementations. Explore our 12 turnkey
            setups engineered for compliance with DHA, DOH, and MOH specifications.
          </p>
        </div>

        {/* 3-Column Image Grid matching Services grid exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {turnkeySolutions.map((sol, index) => (
            <div
              key={index}
              className="group flex flex-col h-full bg-[#1F1F1F] border border-white/5 hover:border-gold/30 rounded-[24px] overflow-hidden transition-all duration-500 shadow-2xl hover:-translate-y-1.5"
            >
              {/* CONTENT (Top) */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug mb-4 group-hover:text-gold transition-colors duration-300">
                  {sol.title}
                </h3>

                {/* Animated Gold Divider */}
                <div className="w-12 h-[2px] bg-gold/50 mb-6 transition-all duration-300 group-hover:w-20" />

                <p className="text-white/60 text-[14px] md:text-[15px] leading-relaxed mb-8 flex-grow">
                  {sol.description}
                </p>

                {/* Regulatory Approvals Footer inside Content */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2 text-gold/60 text-[10px] font-mono tracking-wide uppercase">
                  <span className="w-1 h-1 rounded-full bg-gold/70" />
                  <span>{sol.approvals}</span>
                </div>
              </div>

              {/* IMAGE (Bottom - Fixed Landscape Banner to prevent stretching) */}
              <div
                className="relative w-full flex-shrink-0 overflow-hidden border-t border-white/5"
                style={{ height: '240px' }}
              >
                <img
                  src={sol.image}
                  alt={sol.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Elegant Dark Gradient overlay over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Centered Direct Action CTA Button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('open-lead-modal'));
            }}
            className="btn-gold shadow-gold-hover flex items-center gap-3 py-4 px-10 cursor-pointer text-sm tracking-wide font-bold"
          >
            <span>Initiate Turnkey Setup Blueprint</span>
            <FiArrowRight size={16} className="text-black" />
          </button>
        </div>

      </div>
    </section>
  );
}
