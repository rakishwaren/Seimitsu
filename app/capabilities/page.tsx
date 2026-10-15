'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Button } from '@/components/ui/button';
import {
  Settings,
  Cpu,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Gauge,
  Zap,
  Activity,
  ShieldCheck,
  FileCode,
  Sliders,
  Award,
} from 'lucide-react';

interface CapabilityDetail {
  id: string;
  category: string;
  title: string;
  wireGauge: string;
  tolerances: string;
  frequency: string;
  image: string;
  description: string;
  highlights: string[];
  applications: string[];
}

const CAPABILITIES_LIST: CapabilityDetail[] = [
  {
    id: 'cnc-winding',
    category: 'High-Precision Winding',
    title: 'Multi-Axis Automated CNC Coil Winding',
    wireGauge: '0.015 mm – 3.50 mm (AWG 54 – AWG 7)',
    tolerances: '±0.001 mm mechanical / ±1.0% inductance',
    frequency: 'DC to 25 MHz',
    image: '/slides/cnc-winding.jpg',
    description:
      'Computerized multi-spindle automated winding machines equipped with closed-loop optical and tension sensors. Ideal for orthocyclic winding with slot fill factors reaching 78% without conductor deformation.',
    highlights: [
      'Self-bonding thermo-fuse wire processing without plastic bobbins',
      'Ultra-fine wire handling down to 15 microns for sensor arrays',
      'Dual and quad-wire bifilar parallel winding for matched resistance',
      'Continuous dynamic tension monitoring preventing wire necking',
    ],
    applications: [
      'Semiconductor Wafer Heads',
      'Linear Voice Coil Actuators',
      'RFID & LF Antennas',
      'Precision Hall Sensors',
    ],
  },
  {
    id: 'planar-magnetics',
    category: 'GaN & SiC Topologies',
    title: 'Custom Planar Transformers & Inductors',
    wireGauge: 'Multi-layer Heavy Copper PCB (2oz – 12oz)',
    tolerances: '±0.5% leakage inductance match',
    frequency: '500 kHz – 5.0 MHz',
    image: '/images/planar-transformer.jpg',
    description:
      'Low-profile planar magnetic components engineered specifically for high-efficiency Wide Bandgap (GaN/SiC) resonant converters. Offers superior heat dissipation, ultra-repeatable parasitic inductance, and low AC losses.',
    highlights: [
      'Interleaved primary-secondary PCB layers minimizing skin and proximity effects',
      'Direct thermal substrate coupling for convection and cold-plate cooling',
      'Partial discharge suppression with custom dielectric Kapton/FR-4 barriers',
      'Ansys Maxwell 3D FEA simulation for thermal & magnetic flux profiling',
    ],
    applications: [
      'EV On-Board Chargers (OBC)',
      'Data Center Power Pods',
      'Solar String Inverters',
      'Medical RF Generators',
    ],
  },
  {
    id: 'toroidal-chokes',
    category: 'EMI & Filter Solutions',
    title: 'Toroidal Chokes & Common Mode Filters',
    wireGauge: '0.10 mm – 4.0 mm or Litz wire bundles',
    tolerances: 'Inductance up to 100 mH / Current up to 150A',
    frequency: '10 kHz – 100 MHz',
    image: '/images/coils-showcase.jpg',
    description:
      'High-attenuation common mode and differential mode inductors wound on nanocrystalline, amorphous, and MnZn ferrite toroidal cores. Engineered to surpass strict CISPR 25 and EN 55032 Class B electromagnetic compliance.',
    highlights: [
      'Precision toroid gear and hook winding for tight inner-diameter packing',
      'Custom sectional and sector winding to reduce inter-turn capacitance',
      'Flame-retardant silicone and epoxy conformal coatings',
      'Automated high-voltage insulation tests up to 5.0 kVrms',
    ],
    applications: [
      'Three-Phase Motor Inverters',
      'Grid-Tie Energy Storage',
      'Industrial Automation PLCs',
      'Robotics Drive Systems',
    ],
  },
  {
    id: 'cleanroom-potting',
    category: 'Harsh Environment Protection',
    title: 'Vacuum Encapsulation & Potting',
    wireGauge: 'Compatible with all coil configurations',
    tolerances: 'Zero-void encapsulation (Partial discharge < 5pC)',
    frequency: 'UL 94V-0 certified',
    image: '/images/cleanroom-qa.jpg',
    description:
      'Cleanroom double-chamber vacuum potting and epoxy impregnation systems. Eliminates microscopic air pockets that cause electrical corona discharge and thermal insulation breakdown in high-voltage equipment.',
    highlights: [
      'Automated meter-mix dispensing with precision degassing tanks',
      'Silicone, polyurethane, and high-temperature epoxy chemistries',
      'Thermal shock endurance from -40°C to +180°C',
      'Moisture barrier protection meeting IP67 / IP68 ratings',
    ],
    applications: [
      'Subsea Acoustic Sonar',
      'Aerospace Actuators',
      'High-Voltage Medical Scanners',
      'Downhole Drilling Sensors',
    ],
  },
];

export default function CapabilitiesPage() {
  const [selectedCap, setSelectedCap] = useState(0);
  const [activeHeroTab, setActiveHeroTab] = useState(0);

  const heroTabs = [
    {
      name: '0.015mm Micro-Winding',
      spec: 'AWG 54 Wire • ±0.001mm',
      desc: 'Automated multi-spindle lines with active closed-loop tension control.',
      metric1: { label: 'Min Diameter', val: '0.015 mm' },
      metric2: { label: 'Slot Fill Factor', val: '78%' },
      metric3: { label: 'Spindle RPM', val: '12,500' },
      tag: 'Orthocyclic Coil',
      image: '/images/micro-coils.jpg',
    },
    {
      name: '5 MHz Planar GaN',
      spec: '2oz - 12oz PCB • Low Leakage',
      desc: 'Interleaved PCB copper stack-ups for high-frequency resonant power conversion.',
      metric1: { label: 'Max Frequency', val: '5.0 MHz' },
      metric2: { label: 'LLC Efficiency', val: '98.9%' },
      metric3: { label: 'Leakage L', val: '< 0.5%' },
      tag: 'Wide-Bandgap Magnetics',
      image: '/images/planar-transformer.jpg',
    },
    {
      name: '5.0 kV Vacuum Potting',
      spec: 'Zero Voids • UL 94V-0',
      desc: 'Double-chamber vacuum degassing and impregnation eliminating electrical corona.',
      metric1: { label: 'Hi-Pot Voltage', val: '5.0 kVrms' },
      metric2: { label: 'Partial Discharge', val: '< 5 pC' },
      metric3: { label: 'Thermal Range', val: '-40 to +180°C' },
      tag: 'Cleanroom Encapsulation',
      image: '/images/cleanroom-qa.jpg',
    },
  ];

  const activeTech = heroTabs[activeHeroTab];

  return (
    <div className="min-h-screen bg-[#06101e] text-slate-100">
      <Header />

      <main className="pt-20">
        {/* Hero Section: Theme Color (Dark Navy #06101e) */}
        <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px]" />
            <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px]" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-orange-500 rounded-full inline-block flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-mono tracking-widest text-slate-300 uppercase font-semibold">
                    TURNKEY CONTRACT MANUFACTURING HUB
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
                  End-to-End Precision <br />
                  <span className="text-orange-400">
                    Coil &amp; Magnetics
                  </span>{' '}
                  <br />
                  Manufacturing Capabilities.
                </h1>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                  Operating from our 50,000 sq ft facility in Klang, Malaysia,
                  Seimitsu combines automated multi-axis CNC winding lines,
                  GaN/SiC planar assembly, and cleanroom vacuum potting for
                  tier-1 OEM electronics worldwide.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-7 h-12 rounded-lg shadow-lg shadow-orange-600/30 border-0"
                    >
                      Request DFM Review
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <a href="#matrix">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold px-7 h-12 rounded-lg"
                    >
                      View Specifications Matrix
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Live Capability Telemetry Inspector (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl p-6 sm:p-7 bg-[#0b172a]/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                      <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
                        Interactive Capability HUD
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                      Live Spec Simulator
                    </span>
                  </div>

                  {/* Capability Switcher Pills */}
                  <div className="grid grid-cols-3 gap-1.5">
                    {heroTabs.map((t, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveHeroTab(idx)}
                        className={`py-2 px-2.5 rounded-xl text-center text-[11px] font-mono font-bold transition-all ${
                          activeHeroTab === idx
                            ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                            : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        {t.name.split(' ')[0]} {t.name.split(' ')[1]}
                      </button>
                    ))}
                  </div>

                  {/* Active Capability Preview Display */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700 h-44 bg-slate-950">
                    <Image
                      src={activeTech.image}
                      alt={activeTech.name}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-600/90 text-white font-mono text-[10px] font-bold">
                        {activeTech.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h4 className="text-base font-bold drop-shadow-sm">
                        {activeTech.name}
                      </h4>
                      <p className="text-xs text-slate-300 font-mono mt-0.5">
                        {activeTech.spec}
                      </p>
                    </div>
                  </div>

                  {/* Telemetry Metric Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      activeTech.metric1,
                      activeTech.metric2,
                      activeTech.metric3,
                    ].map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center"
                      >
                        <span className="text-[9px] font-mono text-slate-400 block uppercase">
                          {m.label}
                        </span>
                        <span className="text-xs font-bold font-mono text-orange-400 mt-0.5 block">
                          {m.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Light / Sketch Background (#f8fafc) - Detailed Capabilities Cards */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 border-b border-slate-200 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[140px]" />
            <div className="absolute inset-0 semiconductor-grid" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-mono mb-4 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Production Disciplines</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Core Manufacturing{' '}
                <span className="text-orange-600">Specialisations</span>
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                Explore our primary engineering pillars designed to transition
                high-complexity prototypes into high-yield mass production.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {CAPABILITIES_LIST.map((cap, idx) => (
                <div
                  key={cap.id}
                  className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between hover:border-orange-300 transition-all duration-300"
                >
                  <div className="relative w-full h-64 overflow-hidden bg-slate-950">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-orange-600 text-white font-mono text-[11px] font-bold shadow-md">
                        {cap.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-black drop-shadow-md">
                        {cap.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {cap.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">
                          Wire Range
                        </span>
                        <span className="text-xs font-bold text-slate-900 font-mono mt-0.5 block">
                          {cap.wireGauge}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">
                          Frequency
                        </span>
                        <span className="text-xs font-bold text-slate-900 font-mono mt-0.5 block">
                          {cap.frequency}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold text-slate-900 block mb-2 uppercase tracking-wide">
                        Key Engineering Advantages:
                      </span>
                      <ul className="space-y-2">
                        {cap.highlights.map((h, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start text-xs text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-500 font-medium">
                        Tolerance:{' '}
                        <strong className="text-slate-900">
                          {cap.tolerances}
                        </strong>
                      </span>
                      <Link href="/contact">
                        <Button
                          size="sm"
                          className="bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs rounded-lg px-4 border-0"
                        >
                          RFQ Drawing
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Theme Color (Dark Navy #06101e) - Machine & Metrology Matrix */}
        <section
          id="matrix"
          className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 overflow-hidden"
        >
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-orange-400 text-xs font-mono mb-4 font-bold">
                <Gauge className="w-3.5 h-3.5 text-orange-400" />
                <span>Facility Technical Specifications</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                Equipment &amp; Inspection{' '}
                <span className="text-orange-400">Benchmarking</span>
              </h2>
              <p className="mt-4 text-slate-300 text-base sm:text-lg">
                Quantifiable metrics across our Klang manufacturing cleanroom,
                CNC winding lines, and laboratory verification systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  label: 'Min Conductor Gauge',
                  val: '0.015 mm',
                  sub: 'AWG 54 Micro-Coil Capability',
                  icon: Zap,
                },
                {
                  label: 'Dielectric Insulation',
                  val: '5.0 kVrms',
                  sub: 'Hi-Pot & Partial Discharge < 10pC',
                  icon: ShieldCheck,
                },
                {
                  label: 'Operating Frequency',
                  val: '5.0 MHz',
                  sub: 'Optimized for GaN/SiC LLC Resonant',
                  icon: Activity,
                },
                {
                  label: 'Monthly Production',
                  val: '1,000,000+',
                  sub: 'Units across multi-spindle lines',
                  icon: Layers,
                },
              ].map((stat, sIdx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={sIdx}
                    className="p-6 rounded-3xl bg-[#0b172a] border border-slate-800 shadow-xl text-center"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mx-auto mb-4 text-orange-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-black font-mono text-white mb-1">
                      {stat.val}
                    </div>
                    <div className="text-sm font-bold text-orange-400 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-400">{stat.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Light / Sketch Background (#f8fafc) - DFM Review Process */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 border-b border-slate-200 overflow-hidden">
          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-3xl p-8 sm:p-14 bg-white border border-slate-200 shadow-2xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-mono mb-6 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Zero-Cost DFM Review</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 text-slate-950">
                Ready to Validate Your Coil Design{' '}
                <br className="hidden sm:block" />
                <span className="text-orange-600">
                  For Repeatable Mass Production?
                </span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Upload your STEP files, technical schematics, or inductance
                envelope. Our senior design engineers in Klang will analyze the
                winding window, core saturation, and insulation margins within
                24 to 48 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 h-12 rounded-xl shadow-lg shadow-orange-600/25 border-0"
                  >
                    Submit STEP Models for DFM Review
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold px-8 h-12 rounded-xl"
                  >
                    View Full Services Directory
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
