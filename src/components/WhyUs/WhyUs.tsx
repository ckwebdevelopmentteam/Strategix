'use client';

import { useEffect, useRef } from 'react';
import { FiAward, FiTarget, FiClock, FiArrowRight } from 'react-icons/fi';
import { IoRocketOutline } from 'react-icons/io5';

export default function WhyUs() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
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
    <section id="why-us" className="py-24 bg-[#FAF7F2] relative overflow-hidden bg-grid-lines-light">
      {/* Delicate organic silk ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#EFECE1]/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-6 md:px-8">

        {/* HEADER SECTION */}
        <div ref={headRef} className="text-left mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white border border-[#E6DFD3] rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8905B] animate-pulse" />
            <p className="text-[#968051] text-xs font-semibold uppercase tracking-wider">
              Why Choose Us
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[44px] font-bold text-[#1C1A17] tracking-tight leading-tight">
            Why Strategix is The Right Choice for You
          </h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Left Columns (Col 1 & 2) Container */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1: Regulatory Compliance */}
            <Card
              icon={FiAward}
              title="Regulatory Compliance Experts"
              desc="Secure approvals seamlessly across DHA, DOH, and MOH. Our specialist consultants handle every step of your licensing, ensuring 100% compliance with UAE healthcare regulations."
              index={0}
            />

            {/* Card 2: On-Time Project Delivery */}
            <Card
              icon={IoRocketOutline}
              title="On-Time Project Delivery"
              desc="Time is critical in healthcare setup. We commit to strict project timelines to secure your licenses and permits on schedule, getting your facility operational without costly delays."
              index={1}
            />

            {/* Card 3: Complete Turnkey Solutions (Spans 2 columns) */}
            <Card
              icon={FiTarget}
              title="Complete Turnkey Solutions"
              desc="We handle your entire journey end-to-end. From feasibility studies, floor plan approvals, and premium fit-outs to medical equipment procurement and recruitment, we deliver a fully operational facility."
              index={2}
              isWide
            />
          </div>

          {/* Right Column: Custom Consultation Roadmap (Tall Card) */}
          <TallCard
            icon={FiClock}
            title="Custom Consultation Roadmap"
            desc1="At Strategix, we understand the complexity of launching a medical facility. That's why our consulting roadmaps are fully tailored to fit your specific budget, scope, and timeline, allowing you to launch at your own pace."
            desc2="Whether you are a medical practitioner starting your first clinic or an investor establishing a multi-specialty hospital, we adapt our expertise to match your exact goals."
            index={3}
          />

        </div>
      </div>
    </section>
  );
}

interface CardProps {
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
  index: number;
  isWide?: boolean;
}

function Card({ icon: Icon, title, desc, index, isWide = false }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`group bg-white border border-[#E6DFD3]/60 p-8 md:p-10 rounded-[32px] transition-all duration-300 hover:border-[#A8905B]/40 hover:shadow-[0_15px_40px_rgba(150,128,81,0.08)] hover:-translate-y-1 flex flex-col justify-between min-h-[250px] ${isWide ? 'md:col-span-2' : ''
        }`}
    >
      <div>
        {/* Icon Circle */}
        <div className="w-14 h-14 rounded-full border border-[#DBCA93] flex items-center justify-center text-[#A8905B] group-hover:bg-[#A8905B] group-hover:text-white transition-all duration-300 mb-6">
          <Icon size={22} />
        </div>
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#1C1A17] mb-4 tracking-tight group-hover:text-[#A8905B] transition-colors duration-300">
          {title}
        </h3>
        {/* Description */}
        <p className="text-[#5C574F] text-sm md:text-[15px] leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

interface TallCardProps {
  icon: React.ComponentType<any>;
  title: string;
  desc1: string;
  desc2: string;
  index: number;
}

function TallCard({ icon: Icon, title, desc1, desc2, index }: TallCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="group bg-[#191919] border border-white/5 p-8 md:p-10 rounded-[32px] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:border-gold/30 hover:-translate-y-1 flex flex-col justify-between h-full min-h-[460px] lg:min-h-full"
    >
      <div>
        {/* Icon Circle */}
        <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300 mb-8">
          <Icon size={22} />
        </div>
        {/* Title */}
        <h3 className="text-2xl sm:text-[28px] font-bold text-white mb-5 tracking-tight leading-tight group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        {/* Description 1 */}
        <p className="text-[#B5B5B5] text-sm md:text-[15px] leading-relaxed mb-4">
          {desc1}
        </p>
        {/* Description 2 */}
        <p className="text-[#B5B5B5] text-sm md:text-[15px] leading-relaxed mb-8">
          {desc2}
        </p>
      </div>
      {/* Button Container */}
      <div className="self-start">
        <button
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('open-lead-modal'));
          }}
          className="inline-flex items-center gap-2 bg-gradient-to-br from-[#efe9d1] via-[#DBCA93] to-[#c9b87e] text-black font-semibold text-sm rounded-full px-7 py-3.5 hover:scale-[1.03] transition-all duration-300 shadow-[0_10px_25px_rgba(219,202,147,0.15)] group/btn cursor-pointer"
        >
          <span>Book Free Consultation</span>
          <FiArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

