'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  FileUp,
  Send,
  CheckCircle2,
  Building2,
  ExternalLink,
  Check,
  Copy,
} from 'lucide-react';

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState('quote');
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'Custom Coil Winding',
    volume: '100 - 1,000 pcs (Pilot)',
    leadTime: 'Standard (3-4 weeks)',
    message: '',
  });

  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#06101e] text-slate-100">
      <Header />
      <main className="pt-20">
        {/* Contact Hero: Theme Color (Dark Navy #06101e) */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-orange-600/10 rounded-full blur-[140px]" />
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-orange-400 text-xs font-mono mb-4 font-bold">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Engineering Support &amp; RFQ Portal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white">
              Connect With Our <br />
              <span className="text-orange-400">
                Magnetics Engineering Team
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Whether you need rapid prototype DFM verification or
              mass-production quotations, our engineering desk in Klang is ready
              to review your files within 24 to 48 hours.
            </p>

            {/* Quick Interactive Direct Channels Ribbon */}
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
              <a
                href="https://wa.me/60331761234?text=Hi%20Seimitsu%20Electronic%21%20I%20have%20an%20enquiry%20about%20your%20coil%20winding%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1eb954] text-white font-mono text-xs font-bold shadow-lg shadow-green-500/20 transition-all hover:scale-102"
              >
                <span>💬 WhatsApp Desk (+60 3-3176 1234)</span>
              </a>

              <a
                href="mailto:sales@seimitsu.com.my"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0b172a] hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-xs font-bold shadow-md transition-all"
              >
                <span>✉️ sales@seimitsu.com.my</span>
              </a>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0b172a] border border-slate-800 text-orange-400 font-mono text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>24 – 48h DFM Turnaround</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid: Form + Info */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Interactive RFQ Form (7 Cols) */}
              <div className="lg:col-span-7 bg-[#fafaf9] p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-2">
                    Inquiry Category
                  </div>
                  {/* Category switcher */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'quote', label: 'RFQ & Pricing' },
                      { id: 'dfm', label: 'DFM Review' },
                      { id: 'rd', label: 'R&D Lab' },
                      { id: 'general', label: 'General' },
                    ].map((tab) => (
                      <button
                        type="button"
                        key={tab.id}
                        onClick={() => setInquiryType(tab.id)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                          inquiryType === tab.id
                            ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Dr. Alex Chen"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          placeholder="e.g. Advanced Electronics Corp"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+60 12 345 6789"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                          Project Capability
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              projectType: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500 transition-colors"
                        >
                          <option>Custom Coil Winding</option>
                          <option>GaN/SiC Planar Transformers</option>
                          <option>RF & Common-Mode Inductors</option>
                          <option>Cleanroom Encapsulation & Potting</option>
                          <option>Turnkey PCB & Box-Build Assembly</option>
                          <option>FEA Simulation & R&D Joint Study</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                          Estimated Production Volume
                        </label>
                        <select
                          value={formData.volume}
                          onChange={(e) =>
                            setFormData({ ...formData, volume: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500 transition-colors"
                        >
                          <option>1 - 25 pcs (Prototype)</option>
                          <option>100 - 1,000 pcs (Pilot Run)</option>
                          <option>5,000 - 50,000 pcs (Scaling)</option>
                          <option>100,000+ pcs (Mass Annual Volume)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                        Technical Requirements & Target Specs
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Please include target inductance, frequency, operating voltage/current, dimensional envelope, and any special insulation criteria..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    {/* File Attachment Dropzone */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                        Attach Drawings / CAD / STEP Models (Optional)
                      </label>
                      <div className="relative border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-2xl p-4 text-center transition-colors bg-white">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.step,.stp,.dwg,.dxf,.zip,.rar"
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <div className="flex flex-col items-center">
                          <FileUp className="w-6 h-6 text-amber-600 mb-1.5" />
                          <div className="text-xs text-slate-800 font-semibold">
                            {selectedFile ? (
                              <span className="text-emerald-700 flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> {selectedFile}{' '}
                                (Attached)
                              </span>
                            ) : (
                              <span>
                                Drag and drop your files, or browse from
                                computer
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono mt-1">
                            Accepted formats: STEP, STP, DWG, PDF, ZIP (Max
                            50MB) • Protected by strict NDA
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-bold rounded-xl h-12 text-sm shadow-lg shadow-amber-600/20"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Transmitting Specifications...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-4 h-4" />
                          Submit RFQ to Engineering Desk
                        </span>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4 animate-in fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-950">
                      Inquiry Successfully Dispatched
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you,{' '}
                      <span className="text-amber-800 font-bold">
                        {formData.name}
                      </span>
                      . Your engineering request has been assigned reference ID:
                    </p>
                    <div className="inline-block px-4 py-2 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 font-mono text-sm font-bold">
                      {referenceId}
                    </div>
                    <p className="text-xs text-slate-500 max-w-md mx-auto">
                      Our Senior Magnetics Engineer in Klang will review your
                      requirements and reach out at{' '}
                      <span className="text-slate-900 font-medium">
                        {formData.email}
                      </span>{' '}
                      within 24 to 48 hours.
                    </p>
                    <div className="pt-4">
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setSelectedFile(null);
                        }}
                        variant="outline"
                        className="border-slate-300 text-slate-800 hover:bg-slate-100 rounded-xl text-xs font-bold"
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Contact Details, Facility Photo, Google Map */}
              <div className="lg:col-span-5 space-y-6">
                {/* Facility Photo Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 group">
                  <img
                    src="/images/factory-floor.jpg"
                    alt="Seimitsu Port Klang Manufacturing Facility"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-amber-600/90 text-white font-mono text-[10px] font-bold shadow-md">
                      🇲🇾 Klang Operations Centre
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="font-bold text-base">
                      Seimitsu Electronic (M) Sdn. Bhd.
                    </div>
                    <div className="text-xs text-slate-300">
                      Port Klang Industrial Free Zone vicinity
                    </div>
                  </div>
                </div>

                <div className="bg-[#fafaf9] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-amber-600" />
                      Headquarters & Plant
                    </h3>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          'No. 12, Jalan Sultan Mohamed 3, Kawasan Perindustrian Bandar Sultan Suleiman, 42000 Port Klang, Selangor Darul Ehsan, Malaysia',
                        );
                        setCopiedAddress(true);
                        setTimeout(() => setCopiedAddress(false), 2000);
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-700 hover:bg-amber-50 hover:border-amber-300 transition-all shadow-sm"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">
                            Copied!
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-slate-500" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-slate-900 block">
                          Seimitsu Electronic (M) Sdn. Bhd.
                        </span>
                        <span className="text-slate-600 leading-relaxed block">
                          No. 12, Jalan Sultan Mohamed 3, Kawasan Perindustrian
                          Bandar Sultan Suleiman, 42000 Port Klang, Selangor
                          Darul Ehsan, Malaysia
                        </span>
                        <span className="text-[10px] text-amber-800 font-mono font-semibold block mt-1">
                          GPS: 3.0182° N, 101.3912° E
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                      <Mail className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <div>
                        <span className="text-slate-500 block text-[11px]">
                          Primary Engineering Desk
                        </span>
                        <a
                          href="mailto:sales@seimitsu.com.my"
                          className="text-slate-900 hover:text-amber-700 transition-colors font-semibold"
                        >
                          sales@seimitsu.com.my
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                      <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <div>
                        <span className="text-slate-500 block text-[11px]">
                          Main Switchboard & WhatsApp
                        </span>
                        <span className="text-slate-900 font-semibold">
                          +60 3-3176 1234 / +60 3-3176 5678
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                      <Clock className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-slate-500 block text-[11px]">
                          Operating Hours (Klang Fab)
                        </span>
                        <span className="text-slate-900 block font-semibold">
                          Monday – Friday: 8:30 AM – 6:00 PM (GMT+8)
                        </span>
                        <span className="text-slate-500 block text-[10px]">
                          Saturday: 8:30 AM – 1:00 PM (Engineering on-call)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-slate-800 font-bold">
                        ISO 9001:2015 Registered
                      </span>
                    </div>
                    <span className="text-emerald-700 font-bold">
                      Audit Active
                    </span>
                  </div>
                </div>

                {/* Google Maps Container */}
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
                  <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-800 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      Klang Industrial Facility Map
                    </span>
                    <a
                      href="https://maps.google.com/?q=Bandar+Sultan+Suleiman+Klang+Selangor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-amber-700 hover:text-amber-800 flex items-center gap-1 font-mono font-bold"
                    >
                      Open Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="relative w-full h-72">
                    <iframe
                      title="Seimitsu Electronic Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15937.149175787756!2d101.38547285!3d3.01828735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdac3f05562d93%3A0x88981fc910b8523c!2sBandar%20Sultan%20Suleiman%2C%20Port%20Klang%2C%20Selangor!5e0!3m2!1sen!2smy!4v1710000000000!5m2!1sen!2smy"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
