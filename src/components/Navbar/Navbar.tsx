'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#hero', hasStar: true },
  { label: 'About Us', href: '#about' },
  { label: 'Healthcare Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Turnkey Setups', href: '#turnkey' },
  { label: 'Contact Us', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-[#1F1F1F]/95 backdrop-blur-md border-b border-white/5 py-1.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-3'
      }`}
    >
      <div
        className={`max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20 md:h-24'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src="/Logo.png"
            alt="Strategix Logo"
            className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] ${
              scrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[13px] md:text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-1.5 ${link.hasStar
                ? 'text-white hover:text-gold font-semibold'
                : 'text-[#D1D1D1] hover:text-gold'
                }`}
            >
              {link.hasStar && <span className="text-gold text-[10px] animate-pulse">✦</span>}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Support CTA */}
        <div className="hidden xl:flex items-center">
          <a
            href="tel:+971585214600"
            className="flex items-center gap-3 group text-white hover:text-gold transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
              <FaPhoneAlt className="text-white group-hover:text-gold transition-colors duration-300" size={14} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-white/50 font-semibold leading-none mb-1">
                Support
              </span>
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-gold transition-colors duration-300">
                +971 58 521 4600
              </span>
            </div>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-white p-2 hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          } bg-[#1F1F1F]/98 backdrop-blur-md border-t border-white/5`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              className={`text-sm font-medium transition-colors py-1 flex items-center gap-2 ${link.hasStar ? 'text-white font-semibold' : 'text-[#D1D1D1] hover:text-gold'
                }`}
            >
              {link.hasStar && <span className="text-gold text-[10px]">✦</span>}
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/5">
            <a
              href="tel:+971585214600"
              className="flex items-center gap-3 text-white hover:text-gold transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                <FaPhoneAlt className="text-white" size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-white/50 font-semibold leading-none mb-1">
                  Support
                </span>
                <span className="text-sm font-bold tracking-tight">
                  +971 58 521 4600
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
