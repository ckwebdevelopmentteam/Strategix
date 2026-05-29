'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaTimes, FaArrowRight, FaFileAlt } from 'react-icons/fa';

type LeadFormData = {
  name: string;
  phone: string;
  email: string;
  facilityType: string;
  emirate: string;
  budget?: string;
};

const facilityTypes = [
  'Clinic',
  'Hospital',
  'Medical Center',
  'Diagnostic Centre',
  'Pharmacy',
  'Laboratory',
  'Day Surgery Centre',
  'Home Healthcare',
  'Others',
];

const emirates = [
  'Dubai',
  'Abu Dhabi',
  'Sharjah',
  'Ajman',
  'Others',
];

export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>();

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSubmitted(false);
    };

    window.addEventListener('open-lead-modal', handleOpen);
    return () => window.removeEventListener('open-lead-modal', handleOpen);
  }, []);

  const close = () => {
    setIsOpen(false);
    reset();
  };

  const onSubmit = async (data: LeadFormData) => {
    setLoading(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: data.name,
          phone: data.phone,
          email: data.email,
          facility: data.facilityType,
          emirate: data.emirate,
          budget: data.budget,
        }),
      });

      setSubmitted(true);
      setTimeout(() => {
        close();
      }, 4000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={close}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-[480px] rounded-[32px] overflow-hidden border border-white/10 bg-[#1F1F1F]/95 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.85)] p-6 transition-all duration-300">
        {/* Glow background accent */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-gold/10 blur-3xl rounded-full pointer-events-none" />

        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors p-1.5 z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <FaTimes size={18} />
        </button>

        <div className="p-1">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <FaFileAlt className="text-gold" size={28} />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Report on Its Way!</h3>
              <p className="text-[#D1D1D1] text-sm leading-relaxed max-w-xs mx-auto">
                Your customized Business Analysis Report will be sent shortly to your email.
              </p>
            </div>
          ) : (
            <div>
              {/* HEADING */}
              <div className="relative z-10 mb-5 text-left">
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
              <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-3.5" noValidate>
                {/* FULL NAME & PHONE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      placeholder="Full Name *"
                      className="w-full h-12 rounded-xl bg-white/10 border border-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-all"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 ml-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register('phone', { required: 'Phone is required' })}
                      type="tel"
                      placeholder="Phone Number *"
                      className="w-full h-12 rounded-xl bg-white/10 border border-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-all"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    type="email"
                    placeholder="Email Address *"
                    className="w-full h-12 rounded-xl bg-white/10 border border-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.email.message}</p>
                  )}
                </div>

                {/* FACILITY & EMIRATE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <select
                      {...register('facilityType', { required: 'Facility type is required' })}
                      className="w-full h-12 rounded-xl bg-white/10 border border-white/10 px-4 text-sm text-white outline-none focus:border-gold transition-all cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-black bg-white">
                        Type of Facility *
                      </option>
                      {facilityTypes.map((f) => (
                        <option key={f} value={f} className="text-black bg-white">
                          {f}
                        </option>
                      ))}
                    </select>
                    {errors.facilityType && (
                      <p className="text-red-400 text-xs mt-1 ml-1">{errors.facilityType.message}</p>
                    )}
                  </div>

                  <div>
                    <select
                      {...register('emirate', { required: 'Preferred emirate is required' })}
                      className="w-full h-12 rounded-xl bg-white/10 border border-white/10 px-4 text-sm text-white outline-none focus:border-gold transition-all cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-black bg-white">
                        Preferred Emirate *
                      </option>
                      {emirates.map((em) => (
                        <option key={em} value={em} className="text-black bg-white">
                          {em}
                        </option>
                      ))}
                    </select>
                    {errors.emirate && (
                      <p className="text-red-400 text-xs mt-1 ml-1">{errors.emirate.message}</p>
                    )}
                  </div>
                </div>

                {/* BUDGET */}
                <div>
                  <input
                    {...register('budget')}
                    type="text"
                    placeholder="Approximate Investment Budget (Optional)"
                    className="w-full h-12 rounded-xl bg-white/10 border border-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-all"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-xl bg-gold hover:bg-[#d6b45f] text-black text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {loading ? 'Sending...' : 'Get My Free Business Analysis Report'}
                  {!loading && <FaArrowRight size={12} />}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
