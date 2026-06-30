'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaTimes, FaArrowRight, FaFileAlt } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { pushToDataLayer, trackConversion } from '@/lib/analytics';
import { defaultCountries } from 'react-international-phone';

const getFlagEmoji = (iso2: string) => {
  try {
    const codePoints = iso2
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  } catch (e) {
    return '🏳️';
  }
};

const countries = defaultCountries
  .map((c: any) => {
    let countryData;
    if (Array.isArray(c)) {
      countryData = {
        name: c[0],
        iso2: c[1],
        dialCode: `+${c[2]}`,
      };
    } else {
      countryData = {
        name: c.name,
        iso2: c.iso2,
        dialCode: c.dialCode.startsWith('+') ? c.dialCode : `+${c.dialCode}`,
      };
    }
    return {
      ...countryData,
      flag: getFlagEmoji(countryData.iso2),
    };
  })
  .sort((a, b) => {
    if (a.iso2 === 'ae') return -1;
    if (b.iso2 === 'ae') return 1;
    return a.name.localeCompare(b.name);
  });

type LeadFormData = {
  name: string;
  phone: string;
  email: string;
  facilityType: string;
  emirate: string;
  budget?: string;
  isWhatsapp: boolean;
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
  'Others',
];



export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<LeadFormData>({
    defaultValues: {
      isWhatsapp: false,
    }
  });

  const isWhatsapp = watch('isWhatsapp', false);

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
      const fullPhone = `${selectedCountry.dialCode} ${data.phone.replace(/^\+/, '')}`;
      const message = `*New Lead Submission*
*Name:* ${data.name}
*Phone:* ${fullPhone}
*WhatsApp Confirmed:* Yes
*Email:* ${data.email}
*Facility Type:* ${data.facilityType}
*Emirate:* ${data.emirate}
*Budget:* ${data.budget || 'N/A'}`;

      // Send to internal API route in the background (DO NOT await, otherwise mobile browsers block WhatsApp popup)
      fetch('/api/sheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          phone: fullPhone,
          isWhatsapp: true,
        })
      }).catch(err => console.error('Failed to send to Google Sheet:', err));

      // Live number from website: 971585214600
      const whatsappUrl = `https://wa.me/971585214600?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      // Tracking
      pushToDataLayer({
        event: 'form_submit',
        form_name: 'Business Analysis Report',
        page_path: pathname,
      });
      trackConversion();

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
                {/* FULL NAME */}
                <div>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="Full Name *"
                    className="w-full h-12 rounded-xl bg-white/[0.06] border border-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-all"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.name.message}</p>
                  )}
                </div>

                {/* PHONE NUMBER & COUNTRY CODE */}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    {/* Country Code Selector (Dropdown) */}
                    <div className="relative flex items-center justify-center px-3 h-12 rounded-xl bg-white/[0.06] border border-white/10 text-sm text-white select-none min-w-[95px]">
                      <select
                        onChange={(e) => {
                          const found = countries.find((c) => c.iso2 === e.target.value);
                          if (found) setSelectedCountry(found);
                        }}
                        value={selectedCountry.iso2}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-black"
                      >
                        {countries.map((c) => (
                          <option key={c.iso2} value={c.iso2} className="text-black bg-white">
                            {c.flag} {c.dialCode} ({c.name})
                          </option>
                        ))}
                      </select>
                      <div className="flex items-center gap-1.5 pointer-events-none">
                        <img
                          src={`https://flagcdn.com/w40/${selectedCountry.iso2.toLowerCase()}.png`}
                          alt={selectedCountry.name}
                          className="w-5.5 h-3.5 object-cover rounded-sm flex-shrink-0"
                        />
                        <span className="font-medium text-white/90">{selectedCountry.dialCode}</span>
                        <svg className="w-3 h-3 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Phone Number Input */}
                    <div className="flex-1">
                      <input
                        {...register('phone', { required: 'Phone is required' })}
                        type="tel"
                        placeholder="Phone Number *"
                        className="w-full h-12 rounded-xl bg-white/[0.06] border border-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-all"
                      />
                    </div>
                  </div>
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone.message}</p>
                  )}

                  {/* WhatsApp Checkbox */}
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer mt-1 self-start select-none">
                      <input
                        {...register('isWhatsapp', { required: 'Please confirm this is your WhatsApp number' })}
                        type="checkbox"
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                        isWhatsapp
                          ? 'bg-[#25D366]/15 border-[#25D366]'
                          : 'bg-white/5 border-white/20'
                      }`}>
                        {isWhatsapp && (
                          <svg className="w-2.5 h-2.5 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs text-white/85 font-medium">Yes, this is my WhatsApp number</span>
                    </label>
                    {errors.isWhatsapp && (
                      <p className="text-red-400 text-xs mt-1 ml-1">{errors.isWhatsapp.message}</p>
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
                    className="w-full h-12 rounded-xl bg-white/[0.06] border border-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.email.message}</p>
                  )}
                </div>

                {/* FACILITY & EMIRATE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <div className="relative">
                      <select
                        {...register('facilityType', { required: 'Facility type is required' })}
                        className="w-full h-12 rounded-xl bg-white/[0.06] border border-white/10 px-4 pr-10 text-sm text-white outline-none focus:border-gold transition-all cursor-pointer appearance-none"
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
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.facilityType && (
                      <p className="text-red-400 text-xs mt-1 ml-1">{errors.facilityType.message}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <select
                        {...register('emirate', { required: 'Preferred emirate is required' })}
                        className="w-full h-12 rounded-xl bg-white/[0.06] border border-white/10 px-4 pr-10 text-sm text-white outline-none focus:border-gold transition-all cursor-pointer appearance-none"
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
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
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
                    className="w-full h-12 rounded-xl bg-white/[0.06] border border-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-all"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-xl bg-gold hover:bg-[#d6b45f] text-black text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {loading ? 'Sending...' : 'Get My Business Analysis Report'}
                  {!loading && (
                    <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
