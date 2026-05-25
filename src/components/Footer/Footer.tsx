'use client';

import Link from 'next/link';
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  { icon: FaInstagram, href: 'https://instagram.com/strategixuae', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/company/strategixuae', label: 'LinkedIn' },
  { icon: FaFacebookF, href: 'https://facebook.com/strategixuae', label: 'Facebook' },
  { icon: FaXTwitter, href: 'https://x.com/strategixuae', label: 'X' },
  { icon: FaYoutube, href: 'https://youtube.com/@strategixuae', label: 'YouTube' },
];

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Healthcare Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Turnkey Setups', href: '#turnkey' },
  { label: 'Contact Us', href: '#about' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-6 relative overflow-hidden bg-grid-lines">

      {/* Top CTA Row */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-8 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-10 border-b border-white/10">
          <div className="flex-1 max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-tight leading-tight mb-3"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.85)'
              }}
            >
              Explore Our Main Corporate Website
            </h2>
            <p className="text-white/60 text-sm md:text-[15px] leading-relaxed">
              This landing page showcases our core healthcare setups in the UAE. To access our complete corporate directory, detailed client case studies, and additional consultancy capabilities, please visit our main corporate website at <strong className="text-[#DBCA93] font-semibold">strategixuae.com</strong>.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://strategixuae.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#DBCA93] hover:bg-[#c9b87e] text-black font-semibold text-sm rounded-full px-8 py-3.5 transition-all duration-300 hover:scale-[1.03] cursor-pointer border-0 whitespace-nowrap"
            >
              Go to Main Website
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 items-start">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <img
                src="/Logo.png"
                alt="Strategix Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-[#B5B5B5] text-[13px] md:text-sm leading-relaxed mb-6 max-w-sm">
              At Strategix, we specialize in providing comprehensive Project Management
              services. Our turnkey project solutions ensure a seamless and stress-free
              process from concept to completion.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-white/20 hover:border-gold/50 flex items-center justify-center text-white/70 hover:text-gold transition-all duration-300 bg-transparent"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 lg:pl-5">
            <h4 className="text-gold font-bold text-[15px] mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#B5B5B5] hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Globe Image with Pulsing Location Marks (GCC & India) */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
              <img
                src="/globe-ai.png"
                alt="Globe"
                className="w-full h-full object-contain opacity-75 hover:opacity-100 transition-opacity duration-500"
              />
              {/* Pulsing Target 1: GCC/UAE */}
              <div className="absolute top-[49%] left-[54%] w-3 h-3 flex items-center justify-center group/pin cursor-pointer">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#DBCA93]/80 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DBCA93] shadow-[0_0_8px_rgba(219,202,147,0.8)]" />
                {/* Interactive Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 opacity-0 scale-90 group-hover/pin:opacity-100 group-hover/pin:scale-100 transition-all duration-300 pointer-events-none z-10">
                  <div className="relative bg-[#1F1F1F]/95 backdrop-blur-sm border border-white/10 text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded shadow-2xl whitespace-nowrap">
                    GCC
                    {/* Small triangle arrow */}
                    <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-[#1F1F1F]/95 absolute top-full left-1/2 -translate-x-1/2" />
                  </div>
                </div>
              </div>
              {/* Pulsing Target 2: India */}
              <div className="absolute top-[55%] left-[63%] w-3 h-3 flex items-center justify-center group/pin cursor-pointer">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#DBCA93]/60 opacity-55 animate-ping" style={{ animationDelay: '0.6s' }} />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DBCA93] shadow-[0_0_6px_rgba(219,202,147,0.6)]" />
                {/* Interactive Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 opacity-0 scale-90 group-hover/pin:opacity-100 group-hover/pin:scale-100 transition-all duration-300 pointer-events-none z-10">
                  <div className="relative bg-[#1F1F1F]/95 backdrop-blur-sm border border-white/10 text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded shadow-2xl whitespace-nowrap">
                    India
                    {/* Small triangle arrow */}
                    <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-[#1F1F1F]/95 absolute top-full left-1/2 -translate-x-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Contact */}
          <div className="lg:col-span-3 lg:pl-6">
            <h4 className="text-gold font-bold text-[15px] mb-6 uppercase tracking-wider">
              Quick Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@strategixuae.com"
                className="flex items-center gap-3 text-[#B5B5B5] hover:text-gold transition-colors text-sm group"
              >
                <div className="w-5 h-5 flex items-center justify-center text-white/50 group-hover:text-gold transition-colors">
                  <FaEnvelope size={14} />
                </div>
                <span className="break-all">info@strategixuae.com</span>
              </a>
              <a
                href="tel:+971585214600"
                className="flex items-center gap-3 text-[#B5B5B5] hover:text-gold transition-colors text-sm group"
              >
                <div className="w-5 h-5 flex items-center justify-center text-white/50 group-hover:text-gold transition-colors">
                  <FaPhone size={14} />
                </div>
                <span>+971 58 521 4600</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-[#555] text-xs">
            © {new Date().getFullYear()} Strategix UAE. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[#555] text-xs font-medium">
            <span>DHA Approved</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#333] self-center" />
            <span>DOH Approved</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#333] self-center" />
            <span>MOH Approved</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
