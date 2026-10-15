'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Button } from '@/components/ui/button';
import {
  Award,
  Target,
  Users,
  Building2,
  Globe,
  Zap,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CircuitBoard,
  Cpu,
  Sparkles,
  CheckCircle2,
  X,
  Factory,
} from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  code: string;
  issuedBy: string;
  scope: string;
  validity: string;
  badgeColor: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015 Quality Management System',
    code: 'CERT-MY-9001-8821',
    issuedBy: 'Bureau Veritas / SIRIM QAS International',
    scope:
      'Design, precision CNC coil winding, transformer fabrication, and turnkey electromechanical PCB assemblies.',
    validity: 'Verified & Active (Continuous Audit)',
    badgeColor: 'border-blue-200 text-blue-800 bg-blue-50',
  },
  {
    id: 'iatf-16949',
    title: 'IATF 16949 Automotive & Semiconductor Compliance',
    code: 'IATF-REG-554201',
    issuedBy: 'Automotive Industry Action Group (AIAG)',
    scope:
      'AEC-Q200 grade 1 passive magnetics for automotive EV powertrains and high-reliability semiconductor equipment.',
    validity: 'Compliant & Verified',
    badgeColor: 'border-amber-200 text-amber-800 bg-amber-50',
  },
  {
    id: 'iso-14001',
    title: 'ISO 14001:2015 Environmental Management',
    code: 'EMS-MY-14001-209',
    issuedBy: 'SIRIM QAS International',
    scope:
      'Sustainable electronic manufacturing, chemical solvent containment, and eco-friendly waste recycling protocols.',
    validity: 'Active',
    badgeColor: 'border-emerald-200 text-emerald-800 bg-emerald-50',
  },
  {
    id: 'ul-recognition',
    title: 'UL Recognized Electrical Insulation Systems (EIS)',
    code: 'UL-FILE-E489211 (Class H / 180°C)',
    issuedBy: 'Underwriters Laboratories (UL LLC)',
    scope:
      'Complete component safety and flame retardancy for Class B (130°C), Class F (155°C), and Class H (180°C) magnetics.',
    validity: 'UL Listed',
    badgeColor: 'border-indigo-200 text-indigo-800 bg-indigo-50',
  },
  {
    id: 'rohs-reach',
    title: 'RoHS 3 (EU 2015/863) & REACH Compliance',
    code: 'DIRECTIVE-2011/65/EU',
    issuedBy: 'SGS Third-Party Chemical Lab Testing',
    scope:
      '100% lead-free, halogen-free, and heavy-metal-free materials across all copper wire, soldering alloys, and resins.',
    validity: 'Batch Certified',
    badgeColor: 'border-orange-200 text-orange-800 bg-orange-50',
  },
  {
    id: 'esd-cleanroom',
    title: 'ANSI/ESD S20.20 Cleanroom Certified Production',
    code: 'ESD-FAC-KLANG-01',
    issuedBy: 'EOS/ESD Association Standards',
    scope:
      'Electrostatic discharge protected workstations, continuous ionizers, conductive flooring, and dissipative handling trays.',
    validity: 'Annual Recertification',
    badgeColor: 'border-purple-200 text-purple-800 bg-purple-50',
  },
];

export function AboutPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeMilestone, setActiveMilestone] = useState(3);

  const milestones = [
    {
      year: '1999',
      title: 'Founding in Klang, Selangor',
      desc: 'Established with a focus on custom micro-coils and manual precision winding for regional industrial instrumentation.',
      stat: 'Inception Hub',
      metric: 'Est. 1999',
    },
    {
      year: '2008',
      title: 'Automated Multi-Spindle CNC Suite',
      desc: 'Invested in computerized multi-axis winding lines with closed-loop optical tension feedback down to AWG 54 wire.',
      stat: '500,000 Units/Mo',
      metric: '±0.001mm Accuracy',
    },
    {
      year: '2016',
      title: 'Cleanroom & High-Dielectric Potting',
      desc: 'Commissioned climate-controlled ISO Class 6 cleanroom and double-chamber vacuum potting to eliminate electrical partial discharge.',
      stat: 'ISO 9001:2015',
      metric: '5.0 kVrms Isolation',
    },
    {
      year: '2026',
      title: 'GaN / SiC Planar Research Lab',
      desc: 'Expanded into ultra-high-frequency planar transformers and nanocrystalline chokes engineered for modern wide-bandgap semiconductors.',
      stat: '50+ Global Markets',
      metric: 'Up to 5.0 MHz',
    },
  ];

  const customerSegments = [
    {
      segment: 'Semiconductor Fab & ATE Toolmakers',
      icon: Cpu,
      partners: [
        'Global Wafer Foundry Equipment Tier-1s',
        'Leading Automated Test Equipment (ATE) Integrators',
        'Silicon Packaging & Inspection OEMs',
      ],
      highlight: 'Sub-micron motion control & vacuum coils',
    },
    {
      segment: 'High-Density Server & GaN Power',
      icon: Zap,
      partners: [
        'Hyperscale AI Cloud Datacenter Suppliers',
        'Bi-Directional DC-DC Converter Innovators',
        'GaN Systems Power Architects',
      ],
      highlight: '98.9% efficiency planar transformers',
    },
    {
      segment: 'Automotive EV & Powertrain Leaders',
      icon: Building2,
      partners: [
        'Tier-1 Electric Vehicle Powertrain OEMs',
        'Battery Management System (BMS) Designers',
        'High-Power Fast Charging Infrastructure',
      ],
      highlight: 'AEC-Q200 Grade 1 thermal qualification',
    },
    {
      segment: 'Medical & Diagnostic Technologies',
      icon: ShieldCheck,
      partners: [
        'Minimally Invasive Surgical Robotics',
        'High-Field MRI Gradient Sub-assemblies',
        'Biocompatible Implantable Sensor Teams',
      ],
      highlight: '0.015mm fine-wire micro coils',
    },
  ];

  return (
    <div className="min-h-screen bg-[#06101e] text-slate-100">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px]" />
            <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px]" />
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            {/* Logo Badge */}
            <div className="inline-flex items-center gap-3 bg-[#0b172a] rounded-full px-5 py-2 mb-6 border border-slate-700 shadow-xl">
              <div className="relative w-8 h-5 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo-icon.png"
                  alt="Seimitsu Logo"
                  width={32}
                  height={20}
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-mono font-bold text-slate-200">
                🇲🇾 Malaysia's Premier Coil Winding Leader Since 1999
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-tight text-white">
              Engineering Excellence in <br />
              <span className="text-orange-400">
                Custom Electromagnetic Components
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              For more than 25 years, Seimitsu Electronic has operated as
              Malaysia's benchmark contract manufacturer of precision coils,
              planar transformers, and turnkey sub-assemblies for global
              semiconductor and electronics OEMs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#certifications">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-500 text-white font-bold shadow-lg shadow-orange-600/30 rounded-xl px-7 h-12 text-sm border-0"
                >
                  View ISO Certifications
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="#customers">
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 rounded-xl px-7 h-12 text-sm font-semibold"
                >
                  Our Customers &amp; Partners
                </Button>
              </a>
            </div>

            {/* Interactive 25-Year Timeline Heritage Inspector */}
            <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0b172a]/95 border border-slate-700/80 shadow-2xl text-left backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-6 border-b border-slate-800 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
                    Interactive 25-Year Heritage Timeline (1999 – 2026)
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Select era to inspect:
                </span>
              </div>

              {/* Milestone Year Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {milestones.map((m, idx) => (
                  <button
                    key={m.year}
                    onClick={() => setActiveMilestone(idx)}
                    className={`py-3 px-4 rounded-xl text-left transition-all border ${
                      activeMilestone === idx
                        ? 'bg-orange-600 text-white border-orange-500 shadow-lg shadow-orange-600/30 scale-102'
                        : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="text-lg font-black font-mono block">
                      {m.year}
                    </span>
                    <span className="text-[10px] font-mono block truncate opacity-80">
                      {m.stat}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Milestone Card */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-orange-400">
                    Era Milestone: {milestones[activeMilestone].year}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {milestones[activeMilestone].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                    {milestones[activeMilestone].desc}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#0b172a] border border-slate-700 text-center min-w-[140px] flex-shrink-0">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">
                    Capability Scale
                  </span>
                  <span className="text-sm font-bold font-mono text-orange-400 mt-0.5 block">
                    {milestones[activeMilestone].metric}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Heritage Showcase with Factory Photo */}
        <ScrollReveal delay={100}>
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6">
                  <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-widest block mb-2">
                    Our Manufacturing Journey
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-6 leading-tight">
                    A Quarter-Century of{' '}
                    <span className="text-gradient-copper">
                      Zero-Compromise Precision
                    </span>
                  </h2>
                  <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-8">
                    <p>
                      Founded in 1999 in Klang, Selangor, Malaysia, Seimitsu
                      Electronic began with a focused mission: to provide the
                      highest-precision custom coil winding for advanced
                      industrial electronics. Over 25 years of continuous
                      investment in automated CNC winding lines, cleanroom
                      potting, and laboratory metrology, we evolved into an
                      internationally recognized contract manufacturing partner.
                    </p>
                    <p>
                      Today, our 50,000 sq ft Port Klang facility operates with
                      full lot traceability, cleanroom electrostatic discharge
                      (ESD) protections, and computerized inspection systems. We
                      support customers across North America, Europe, Taiwan,
                      Singapore, and Japan—from initial design for
                      manufacturability (DFM) prototypes to multi-million unit
                      mass production runs.
                    </p>
                  </div>

                  {/* 4 Stat Telemetry Matrix */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        val: '25+',
                        label: 'Years in Precision Magnetics',
                        color: 'text-amber-800',
                      },
                      {
                        val: '50+',
                        label: 'Countries Shipped Worldwide',
                        color: 'text-orange-700',
                      },
                      {
                        val: '25M+',
                        label: 'Coils Built & Delivered',
                        color: 'text-blue-800',
                      },
                      {
                        val: '99.85%',
                        label: 'Cleanroom Electrical Yield',
                        color: 'text-emerald-700',
                      },
                    ].map((stat, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-3xl bg-[#fafaf9] border border-slate-200 text-center shadow-sm"
                      >
                        <div
                          className={`text-3xl font-black font-mono ${stat.color} mb-1`}
                        >
                          {stat.val}
                        </div>
                        <div className="text-xs text-slate-500 font-bold">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Photo Column: Automated Factory Floor */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="relative rounded-3xl overflow-hidden border-2 border-slate-300 shadow-2xl bg-slate-950 aspect-[16/11]">
                    <Image
                      src="/images/factory-floor.jpg"
                      alt="Seimitsu Electronic Klang Manufacturing Plant"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="px-2.5 py-0.5 rounded bg-amber-500 text-stone-950 text-[10px] font-mono font-bold uppercase">
                        Port Klang Main Plant
                      </span>
                      <h4 className="text-base font-bold mt-1">
                        Multi-Spindle Automated Production Floor
                      </h4>
                      <p className="text-xs text-slate-300">
                        Continuous automated CNC winding lines with zero-defect
                        quality controls.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-36 bg-slate-900">
                      <Image
                        src="/images/cnc-winding.jpg"
                        alt="CNC Coil Winding Line"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2.5 text-white">
                        <span className="text-[11px] font-bold">
                          CNC Multi-Axis Stations
                        </span>
                      </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-36 bg-slate-900">
                      <Image
                        src="/images/cleanroom-qa.jpg"
                        alt="Cleanroom Testing Metrology"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2.5 text-white">
                        <span className="text-[11px] font-bold">
                          100% LCR Metrology
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Certifications & Standards */}
        <ScrollReveal delay={150}>
          <section
            id="certifications"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 relative overflow-hidden"
          >
            <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-orange-400 text-xs font-mono mb-4 font-bold">
                  <Award className="w-3.5 h-3.5 text-orange-400" />
                  <span>Quality Assured Systems</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                  International{' '}
                  <span className="text-orange-400">
                    Certifications &amp; Standards
                  </span>
                </h2>
                <p className="mt-4 text-slate-300 text-base sm:text-lg">
                  Every component leaving our Klang plant adheres to recognized
                  global standards for automotive safety, environmental
                  compliance, and cleanroom ESD integrity.
                </p>
              </div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {CERTIFICATES.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    className="p-6 rounded-3xl bg-[#0b172a] border border-slate-800 hover:border-orange-500/80 transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-xl hover:shadow-2xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border ${cert.badgeColor}`}
                        >
                          {cert.validity}
                        </span>
                        <Award className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {cert.title}
                      </h3>

                      <span className="text-[11px] font-mono text-orange-400 font-bold block mb-3">
                        {cert.code}
                      </span>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {cert.scope}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Auditor: {cert.issuedBy}</span>
                      <span className="text-orange-400 font-bold flex items-center gap-1 group-hover:underline">
                        Details <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certificate Detail Modal */}
              {selectedCert && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
                  <div className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-[#0b172a] border border-slate-700 shadow-2xl text-white">
                    <div className="flex items-start justify-between pb-4 mb-4 border-b border-slate-800">
                      <div>
                        <span
                          className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border ${selectedCert.badgeColor}`}
                        >
                          {selectedCert.validity}
                        </span>
                        <h3 className="text-xl font-black text-white mt-2">
                          {selectedCert.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => setSelectedCert(null)}
                        className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-3 text-xs font-mono mb-6">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">
                          Registration / Directive Code:
                        </span>
                        <span className="text-orange-400 font-bold text-sm">
                          {selectedCert.code}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">
                          Accredited Auditor:
                        </span>
                        <span className="text-white font-bold">
                          {selectedCert.issuedBy}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">
                          Certified Scope:
                        </span>
                        <span className="text-slate-300">
                          {selectedCert.scope}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link href="/contact" className="flex-1">
                        <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs py-2.5 font-bold border-0">
                          Request Certified Copy of Audit
                        </Button>
                      </Link>
                      <button
                        onClick={() => setSelectedCert(null)}
                        className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </ScrollReveal>

        {/* Our Customers & Global Partners */}
        <ScrollReveal delay={200}>
          <section
            id="customers"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 border-b border-slate-200"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-mono mb-4 font-bold">
                  <Globe className="w-3.5 h-3.5 text-orange-600" />
                  <span>Trusted Across The Global High-Tech Ecosystem</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                  Our Customers &amp;{' '}
                  <span className="text-orange-600">Global Partners</span>
                </h2>
                <p className="mt-4 text-slate-600 text-base sm:text-lg">
                  We supply critical electromagnetic sub-systems to Tier-1
                  semiconductor toolmakers, leading automotive EV suppliers, and
                  surgical robotics innovators.
                </p>
              </div>

              {/* Customer Segments Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {customerSegments.map((seg, idx) => {
                  const Icon = seg.icon;
                  return (
                    <div
                      key={idx}
                      className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-orange-300 transition-all shadow-md"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-2xl bg-orange-600 text-white shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-orange-100 text-orange-800 font-bold border border-orange-200">
                          {seg.highlight}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        {seg.segment}
                      </h3>

                      <ul className="space-y-2.5 text-xs text-slate-600">
                        {seg.partners.map((partner, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                            <span>{partner}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Global Supply Footprint Callout */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0b172a] text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-mono text-orange-400 font-bold mb-1">
                    ● Global Semiconductor Supply Chain Active
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Direct Export to North America, Europe, Taiwan &amp; APAC
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                    With daily air cargo dispatches out of Kuala Lumpur
                    International Airport (KUL) and sea container consolidation
                    from Port Klang, we deliver reliably to your staging hubs.
                  </p>
                </div>
                <Link href="/contact" className="whitespace-nowrap">
                  <Button className="bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs px-6 h-11 font-bold shadow-lg shadow-orange-600/30 border-0">
                    Inquire for OEM Supplier Onboarding
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
