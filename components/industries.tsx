'use client';

import { useState } from 'react';
import {
  Factory,
  Zap,
  Cpu,
  HeartPulse,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      icon: <Cpu className="w-7 h-7" />,
      number: '01',
      title: 'Semiconductor Fab & ATE',
      subtitle: 'Wafer handling, robotic actuators & test equipment',
      description:
        'Ultra-low jitter micro-coils, positioning sensors, and hermetic vacuum coils designed for wafer transfer robots, lithography stage motors, and automated IC test heads.',
      gradient: 'from-amber-600 to-orange-600',
      applications: [
        'Wafer Stage Piezo & Linear Actuators',
        'ATE High-Speed Pin Electronics Chokes',
        'High-Vacuum Cleanroom Chamber Coils',
        'Precision Magnetic Hall Effect Sensors',
      ],
      metric: '< 0.05% Failure Rate in Cleanrooms',
    },
    {
      icon: <Zap className="w-7 h-7" />,
      number: '02',
      title: 'GaN & SiC Power Systems',
      subtitle: 'Energy conversion, server power & solar inverters',
      description:
        'Compact planar transformers and resonant inductors engineered for ultra-high frequency switching with minimum parasitic capacitance and maximized thermal dissipation.',
      gradient: 'from-orange-600 to-amber-700',
      applications: [
        'Hyperscale AI Server Power Units (PSU)',
        'Bi-directional DC-DC Converters',
        'Micro-Inverters & Solar Storage',
        'Zero Voltage Switching (ZVS) Inductors',
      ],
      metric: 'Up to 98.9% Magnetics Efficiency',
    },
    {
      icon: <Factory className="w-7 h-7" />,
      number: '03',
      title: 'Automotive & EV Electronics',
      subtitle: 'On-board chargers, BMS monitoring & traction inverters',
      description:
        'IATF 16949 compliant magnetics tested for high vibration resistance, wide thermal shock from -40°C to 155°C, and AEC-Q200 reliability.',
      gradient: 'from-blue-600 to-indigo-600',
      applications: [
        'Electric Vehicle On-Board Chargers (OBC)',
        'Battery Management System (BMS) Chokes',
        'Autonomous Driving Sensors',
        'Gate Driver Transformers',
      ],
      metric: 'AEC-Q200 Grade 1 Compliant',
    },
    {
      icon: <HeartPulse className="w-7 h-7" />,
      number: '04',
      title: 'Medical Devices & Robotics',
      subtitle: 'Bio-telemetry, diagnostic imaging & surgical robotics',
      description:
        'High-density micro-wound coils using ultra-fine biocompatible wire, with full lot-level traceability, sterilized packaging, and microscopic verification.',
      gradient: 'from-emerald-600 to-teal-600',
      applications: [
        'Implantable Telemetry & RF Coils',
        'MRI & Ultrasound Gradient Coils',
        'Endoscopic Micro-Actuators',
        'Patient Monitoring Transformers',
      ],
      metric: 'Micro-wire capability down to 0.015mm',
    },
  ];

  return (
    <section
      id="industries"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white overflow-hidden border-b border-slate-800"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 tech-grid" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-orange-400 text-xs font-mono mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Mission-Critical Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Application-Focused{' '}
            <span className="text-orange-400">Engineering Support</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            From front-end wafer fabrication tools to high-reliability electric
            powertrains, our custom electromagnetic components power
            breakthrough technology.
          </p>
        </div>

        {/* 4 Interactive Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {industries.map((ind, index) => {
            const isCurrent = activeIndustry === index;
            return (
              <div
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`relative rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isCurrent
                    ? 'bg-[#0b172a] border-2 border-orange-500 shadow-xl shadow-orange-500/15 scale-[1.02]'
                    : 'bg-[#0b172a]/70 border border-slate-800 hover:border-slate-700 hover:bg-[#0b172a]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-br ${ind.gradient} text-white shadow-md group-hover:scale-105 transition-transform`}
                    >
                      {ind.icon}
                    </div>
                    <span className="text-2xl font-mono font-black text-slate-500 group-hover:text-orange-400 transition-colors">
                      {ind.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-orange-400 font-mono font-semibold mb-3">
                    {ind.subtitle}
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-5">
                    {ind.description}
                  </p>
                </div>

                <div>
                  <div className="pt-3 border-t border-slate-800 mb-3">
                    <span className="text-[11px] font-mono text-emerald-400 font-bold block">
                      {ind.metric}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-orange-400 font-bold">
                    <span>
                      {isCurrent ? '● Active Spotlight' : 'Click to inspect'}
                    </span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Interactive Industry Showcase Workbench */}
        {(() => {
          const current = industries[activeIndustry];
          const industryImages = [
            {
              src: '/images/micro-coils.jpg',
              alt: 'Semiconductor Fab & ATE Micro-Coils',
              tag: 'Cleanroom Metrology Spec',
              details: [
                { label: 'Minimum Wire Gauge', value: '0.015 mm (AWG 54)' },
                {
                  label: 'Cleanroom Classification',
                  value: 'Class 1,000 (ISO 6)',
                },
                { label: 'Dielectric Withstand', value: '3.5 kVrms @ 60s' },
                { label: 'Vibration Immunity', value: 'MIL-STD-202G Met' },
              ],
            },
            {
              src: '/images/planar-transformer.jpg',
              alt: 'GaN & SiC High Frequency Power Planar Magnetics',
              tag: 'GaN/SiC High-Freq Topology',
              details: [
                { label: 'Operating Frequency', value: '500 kHz – 3.0 MHz' },
                { label: 'Efficiency Benchmark', value: '98.9% LLC Resonant' },
                { label: 'Leakage Inductance', value: '< 0.5% of Primary L' },
                {
                  label: 'Thermal Dissipation',
                  value: 'Direct Substrate Heat Sinking',
                },
              ],
            },
            {
              src: '/images/coils-showcase.jpg',
              alt: 'Automotive & EV Electronics Magnetics',
              tag: 'AEC-Q200 Grade 1 Automotive',
              details: [
                { label: 'Operating Temperature', value: '-40°C to +155°C' },
                {
                  label: 'Thermal Shock Cycles',
                  value: '1,000+ Cycles Qualified',
                },
                { label: 'Current Rating', value: 'Up to 120A Continuous' },
                {
                  label: 'Potting Compound',
                  value: 'UL 94V-0 High-Adhesion Epoxy',
                },
              ],
            },
            {
              src: '/images/cleanroom-qa.jpg',
              alt: 'Medical Devices & Robotic Actuator Micro-Coils',
              tag: 'Medical Grade Traceability',
              details: [
                { label: 'Conductor Purity', value: '99.99% OFC Copper' },
                {
                  label: 'Lot Traceability',
                  value: '100% Barcode Serialization',
                },
                {
                  label: 'Sterilization Proof',
                  value: 'Autoclave & EtO Resistant',
                },
                { label: 'Biocompatibility', value: 'USP Class VI Compatible' },
              ],
            },
          ];
          const activeMedia = industryImages[activeIndustry];

          return (
            <div className="rounded-3xl bg-[#0b172a] border border-slate-800 p-6 sm:p-10 shadow-2xl mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Image Showcase */}
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-700 group">
                    <img
                      src={activeMedia.src}
                      alt={activeMedia.alt}
                      className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b172a] via-black/30 to-transparent pointer-events-none" />

                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-orange-600/90 text-white text-[11px] font-mono font-bold backdrop-blur-md shadow-md">
                        {activeMedia.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white font-bold text-lg mb-1 drop-shadow-sm">
                        {current.title} Engineering Deployment
                      </div>
                      <div className="text-orange-300 text-xs font-mono">
                        {current.metric}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Specifications Workbench */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider mb-1">
                      Deep Application Architecture • {current.number}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {current.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {current.description}
                    </p>
                  </div>

                  {/* Spec Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {activeMedia.details.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 shadow-sm"
                      >
                        <span className="text-[10px] font-mono text-slate-400 block uppercase font-medium">
                          {d.label}
                        </span>
                        <span className="text-xs font-bold font-mono text-white mt-0.5 block">
                          {d.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Application Checklist */}
                  <div className="pt-2">
                    <span className="text-xs font-mono font-bold text-slate-300 block mb-2">
                      Key Qualified Applications:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {current.applications.map((app, aIdx) => (
                        <div
                          key={aIdx}
                          className="flex items-center gap-2 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Action Link to Contact */}
        <div className="text-center pt-2">
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shadow-lg shadow-orange-600/25">
              Consult with our Industry Applications Engineer
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
