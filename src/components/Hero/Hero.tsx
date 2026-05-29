'use client';

import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const slides = [
  {
    title: 'Leading Healthcare Consultants Dubai For End-To-End Solutions',
    subtitle: 'Healthcare Business Setup Across UAE',
    description:
      'We help organizations turn ambitious ideas into high-performing enterprises by delivering tailored strategies, cutting-edge technology solutions, and seamless digital transformation. With a focus on innovation, efficiency, and long-term success, we partner with you to build scalable systems that drive real business impact.',
  },
  {
    title: 'Transforming Your Vision Into Successful Enterprise',
    subtitle: 'Enterprise & Healthcare Excellence',
    description:
      'We are a leading Turnkey Healthcare Project Management Consultancy in the UAE, specializing in complete healthcare business setup and operational solutions. Our expert healthcare consultants deliver end-to-end services for Hospitals, Clinics, Medical centers, Pharmacies, Diagnostic centres, Day surgical centres, and Home Healthcare providers across the UAE.',
  },

];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const goTo = (idx: number) => {
    if (fading || idx === current) return;

    setFading(true);

    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 350);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      fullName: formData.get('fullName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      facility: formData.get('facility'),
      emirate: formData.get('emirate'),
      budget: formData.get('budget'),
    };

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setSubmitted(true);

      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen xl:h-screen overflow-hidden flex items-center pt-36 sm:pt-24 pb-16"
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videoplayback.mp4" type="video/mp4" />
      </video>

      {/* OVERLAYS */}
      <div className="absolute inset-0" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#191919] to-transparent" />

      {/* CONTENT */}
      <div className="relative z-30 w-full">
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 text-left lg:pr-4 xl:pr-6">
              {/* SUBTITLE */}
              <div
                className={`hidden sm:flex items-center gap-3 mb-5 transition-all duration-300 ${fading
                  ? 'opacity-0 translate-y-3'
                  : 'opacity-100 translate-y-0'
                  }`}
              >
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />

                <p className="text-white/90 text-xs md:text-sm font-medium tracking-wide uppercase">
                  {slides[current].subtitle}
                </p>
              </div>

              {/* HEADING */}
              <h1
                className={`text-white font-semibold leading-[1.12] text-3xl sm:text-4xl md:text-5xl lg:text-[58px] mb-5 max-w-4xl transition-all duration-300 ${fading
                  ? 'opacity-0 translate-y-3'
                  : 'opacity-100 translate-y-0'
                  }`}
              >
                {slides[current].title}
              </h1>

              {/* DESCRIPTION */}
              <p
                className={`text-white/75 text-sm md:text-lg leading-relaxed max-w-2xl mb-7 transition-all duration-300 ${fading
                  ? 'opacity-0 translate-y-3'
                  : 'opacity-100 translate-y-0'
                  }`}
              >
                {slides[current].description}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full sm:w-auto gap-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('open-lead-modal'));
                  }}
                  className="w-full sm:w-auto justify-center bg-gold text-black hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-300 rounded-full px-7 py-3.5 flex items-center gap-3 text-sm font-semibold group border-0 shadow-lg shadow-gold/10 cursor-pointer"
                >
                  Get Consultation
                  <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:bg-black/20">
                    <FaArrowRight size={11} className="text-black" />
                  </span>
                </button>


              </div>

              {/* TRUST BAR */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-4 gap-x-8 text-white/90 text-sm md:text-base lg:text-lg font-medium">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span><strong className="text-white font-extrabold">100+</strong> Happy Clients</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span><strong className="text-white font-extrabold">DHA | DOH | MOH</strong> Approved</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span><strong className="text-white font-extrabold">On-Time</strong> Delivery</span>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
              <div className="relative w-full max-w-[480px] rounded-[32px] overflow-hidden border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-5 md:p-6 transition-all duration-300">
                {/* GLOW */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-gold/10 blur-3xl rounded-full pointer-events-none" />

                {/* HEADING */}
                <div className="relative z-10 mb-5">
                  <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight mb-2">
                    Get Your Business Analysis Report
                  </h3>

                  <p className="text-white/65 text-xs md:text-sm leading-relaxed">
                    Planning to invest in healthcare in the UAE? Receive a
                    professional customized Business Analysis Report with clear
                    investment estimates, revenue projections, ROI analysis,
                    and market feasibility study.
                  </p>
                </div>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-3"
                >
                  {/* FULL NAME & PHONE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      required
                      className="w-full h-12 rounded-xl bg-white/10 border border-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-all"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="w-full h-12 rounded-xl bg-white/10 border border-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-all"
                    />
                  </div>

                  {/* EMAIL */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full h-12 rounded-xl bg-white/10 border border-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-all"
                  />

                  {/* FACILITY & EMIRATE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select
                      name="facility"
                      required
                      className="w-full h-12 rounded-xl bg-white/10 border border-white/10 px-4 text-sm text-white outline-none focus:border-gold transition-all"
                    >
                      <option value="" className="text-black">
                        Type of Facility
                      </option>
                      <option className="text-black">Clinic</option>
                      <option className="text-black">Hospital</option>
                      <option className="text-black">Medical Center</option>
                      <option className="text-black">Diagnostic Centre</option>
                      <option className="text-black">Pharmacy</option>
                      <option className="text-black">Laboratory</option>
                      <option className="text-black">Day Surgery Centre</option>
                      <option className="text-black">Home Healthcare</option>
                      <option className="text-black">Others</option>
                    </select>

                    <select
                      name="emirate"
                      required
                      className="w-full h-12 rounded-xl bg-white/10 border border-white/10 px-4 text-sm text-white outline-none focus:border-gold transition-all"
                    >
                      <option value="" className="text-black">
                        Preferred Emirate
                      </option>
                      <option className="text-black">Dubai</option>
                      <option className="text-black">Abu Dhabi</option>
                      <option className="text-black">Sharjah</option>
                      <option className="text-black">Ajman</option>
                      <option className="text-black">Others</option>
                    </select>
                  </div>

                  {/* BUDGET */}
                  <input
                    type="text"
                    name="budget"
                    placeholder="Approximate Investment Budget (Optional)"
                    className="w-full h-12 rounded-xl bg-white/10 border border-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-all"
                  />

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-gold hover:bg-[#d6b45f] text-black text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get My Business Analysis Report
                    <FaArrowRight size={12} />
                  </button>

                  {/* SUCCESS */}
                  {submitted && (
                    <div className="bg-green-500/15 border border-green-500/30 rounded-xl p-3 text-center">
                      <p className="text-green-300 text-xs">
                        Thank you! Your Business Analysis Report will be sent shortly.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex md:hidden items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${current === index
              ? 'w-10 h-2 bg-gold'
              : 'w-2 h-2 bg-white/40'
              }`}
          />
        ))}
      </div>
    </section>
  );
}