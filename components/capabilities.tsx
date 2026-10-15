'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import {
  Settings,
  Cpu,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Maximize2,
} from 'lucide-react';

export function Capabilities() {
  const [activeCard, setActiveCard] = useState(0);

  const capabilities = [
    {
      icon: <Settings className="w-6 h-6" />,
      number: '01',
      title: 'Precision Coil Winding',
      category: 'Sensors, Actuators & Solenoids',
      image: '/images/micro-coils.jpg',
      badge: 'Down to 0.015mm Wire',
      description:
        'Sub-millimeter bobbin, air-core, and self-bonding coils engineered for semiconductor wafer tools, linear encoders, and robotic pick-and-place manipulation.',
      features: [
        'Round, flat & shaped copper wire down to 0.015mm (AWG 54)',
        'Multi-axis automated CNC winding with active tension feedback',
        'Cleanroom electrostatic discharge (ESD) certified processing',
        'Orthocyclic winding for maximum slot fill factor (up to 78%)',
      ],
      gradient: 'from-amber-600 to-orange-600',
      badgeColor: 'border-amber-200 text-amber-800 bg-amber-50',
      details: 'Tolerances: ±0.001mm • 100% In-House Tooling',
      link: '/services/product',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      number: '02',
      title: 'GaN & SiC Power Magnetics',
      category: 'High-Frequency Conversion',
      image: '/images/planar-transformer.jpg',
      badge: 'Up to 5.0 MHz GaN Switching',
      description:
        'Multi-layer planar transformers and low-loss inductors customized for gallium nitride (GaN) and silicon carbide (SiC) power electronics and EV modules.',
      features: [
        'Planar multi-layer PCB windings with interleaved shielding',
        'Operating frequencies from 100 kHz up to 5 MHz',
        'High dielectric isolation barriers exceeding 5.0 kVrms',
        'Ultra-low leakage inductance (< 0.15%) for zero voltage switching',
      ],
      gradient: 'from-orange-600 to-amber-700',
      badgeColor: 'border-orange-200 text-orange-800 bg-orange-50',
      details: 'Efficiency: 98.9% • AEC-Q200 Grade 1 Qualified',
      link: '/services/rd',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      number: '03',
      title: 'Turnkey Micro-Assemblies',
      category: 'Integrated Modules & Encapsulation',
      image: '/images/coils-showcase.jpg',
      badge: 'Cleanroom Vacuum Potting',
      description:
        'Turnkey solenoid sub-assemblies, toroidal filter networks, and precision PCB integration with cleanroom vacuum potting and digital metrology test sweeps.',
      features: [
        'SMT and through-hole PCB assembly with robotic pin soldering',
        'Bubble-free vacuum chamber encapsulation (epoxy & silicone)',
        'Automated Kelvin 4-wire LCR electrical test sweeps',
        'Rapid DFM prototype turnaround in 24 to 48 hours',
      ],
      gradient: 'from-amber-700 to-amber-900',
      badgeColor: 'border-slate-200 text-slate-800 bg-slate-100',
      details: 'Turnkey Sub-Systems • Lot-Level Traceability',
      link: '/services/customization',
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white overflow-hidden border-b border-slate-800"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 tech-grid" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-orange-400 text-xs font-mono mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Manufacturing Capabilities Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Precision Coil Engineering From{' '}
            <span className="text-orange-400">Drawing to Mass Production</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            We pair practical engineering support with custom coil winding, PCB
            assembly, and cleanroom verification—helping OEM teams achieve
            dependable, repeatable production.
          </p>
        </div>

        {/* 3 Visual Cards with Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const isCurrent = activeCard === index;
            return (
              <div
                key={index}
                onClick={() => setActiveCard(index)}
                className={`relative group rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#0b172a] border-2 border-orange-500 shadow-2xl shadow-orange-500/15 scale-[1.02]'
                    : 'bg-[#0b172a]/70 border border-slate-800 hover:border-slate-700 hover:bg-[#0b172a] shadow-lg'
                }`}
              >
                {/* Top Image Banner */}
                <div className="relative w-full h-56 overflow-hidden bg-slate-950">
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b172a] via-black/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-slate-200 font-mono text-[10px] font-bold shadow-md">
                      {capability.badge}
                    </span>
                  </div>

                  {/* Number Overlay */}
                  <div className="absolute top-3 right-3">
                    <span className="text-2xl font-black font-mono text-white/90 drop-shadow-md">
                      {capability.number}
                    </span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-mono text-orange-400 font-semibold block mb-0.5">
                      {capability.category}
                    </span>
                    <h3 className="text-xl font-black text-white drop-shadow-md">
                      {capability.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {capability.description}
                    </p>

                    <ul className="space-y-2.5 mb-6 pt-4 border-t border-slate-800">
                      {capability.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start text-xs text-slate-300 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-orange-400">
                      {capability.details}
                    </span>
                    <Link
                      href={capability.link}
                      className="p-2.5 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-500 transition-all shadow-md group-hover:translate-x-1"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Explorer Action */}
        <div className="text-center pt-2">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/25 rounded-xl px-8 h-12 text-sm font-bold border-0"
            >
              <Layers className="w-4 h-4 mr-2" />
              View Comprehensive Product & Capabilities Directory
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
