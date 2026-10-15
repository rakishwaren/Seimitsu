'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'What specialized coil winding services does Seimitsu offer?',
      answer:
        'Seimitsu Electronic specializes in custom-wound coils including bobbin-wound, air-core, self-supporting, fine-wire sensor coils, planar transformers, and turnkey SMT/through-hole PCB electromagnetic sub-assemblies for global OEMs.',
    },
    {
      question:
        'How fast can Seimitsu provide DFM feedback and prototype samples?',
      answer:
        'Our senior magnetics engineering desk typically turns around a comprehensive Design For Manufacturability (DFM) review and preliminary tooling analysis within 24 to 48 hours of receiving your 2D/3D CAD or STEP files. First-Article Inspection (FAI) physical prototypes are typically completed in 1 to 2 weeks.',
    },
    {
      question: 'What wire gauges and winding tolerances can you achieve?',
      answer:
        'We work with ultra-fine copper wire starting from 0.015mm (AWG 54) up to heavy rectangular foil and litz wire. Our computerized winding stations maintain dimensional tolerances as tight as ±0.001mm with precision tension feedback controls.',
    },
    {
      question:
        'Where is your manufacturing facility, and do you export internationally?',
      answer:
        'Our primary manufacturing plant and engineering labs are based in Klang, Selangor, Malaysia. We export precision electromagnetic assemblies globally to Tier-1 semiconductor and industrial OEMs across North America, Europe, Taiwan, Japan, and Singapore.',
    },
    {
      question:
        'What quality certifications and compliance standards do you maintain?',
      answer:
        'We are ISO 9001:2015 certified, IATF 16949 compliant for automotive/semiconductor grade reliability, UL recognized (UL 94V-0 insulation systems), and fully compliant with RoHS 3 and REACH regulations.',
    },
    {
      question:
        'Can Seimitsu handle full turnkey electromechanical assemblies and potting?',
      answer:
        'Yes. Beyond pure coil winding, we provide full turnkey integration including PCB assembly, terminal crimping and laser soldering, vacuum chamber epoxy potting, partial discharge testing, and custom blister pack packaging.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white overflow-hidden border-b border-slate-800">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 tech-grid" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-orange-400 text-xs font-mono mb-4 font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-orange-400" />
            <span>Engineering Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Frequently Asked <span className="text-orange-400">Questions</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Technical answers for your upcoming manufacturing program, tooling
            requirements, and quality standards.
          </p>

          {/* Interactive Search Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g., tolerance, wire, DFM, ISO)..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#0b172a] border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5 mb-12">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-[#0b172a] border-orange-500/80 shadow-md'
                      : 'bg-[#0b172a]/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4"
                  >
                    <span className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-xl transition-transform duration-200 flex-shrink-0 ${
                        isOpen
                          ? 'rotate-180 bg-orange-600 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-[#0b172a] rounded-2xl border border-slate-800 text-xs text-slate-400">
              No answers matching &ldquo;{searchQuery}&rdquo;. Contact our
              engineering desk directly below.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
