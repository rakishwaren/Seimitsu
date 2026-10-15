'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  Cpu,
  Zap,
  Activity,
  Heart,
  Bot,
  Plane,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Layers,
  Clock,
} from 'lucide-react';

interface IndustrySector {
  id: string;
  number: string;
  title: string;
  tag: string;
  image: string;
  description: string;
  standards: string;
  specifications: { label: string; value: string }[];
  applications: string[];
}

const SECTORS: IndustrySector[] = [
  {
    id: 'semi',
    number: '01',
    title: 'Semiconductor Fab & ATE Wafer Tools',
    tag: 'Cleanroom Class 1,000 (ISO 6)',
    image: '/images/micro-coils.jpg',
    description:
      'Ultra-fine copper micro-coils and non-magnetic actuator assemblies engineered for front-end wafer fabrication tools, plasma etching heads, linear optical encoders, and Automated Test Equipment (ATE) prober interfaces.',
    standards: 'ESD Certified • Zero Particle Outgassing • Cleanroom Potting',
    specifications: [
      { label: 'Wire Gauge', value: '0.015 mm (AWG 54) Ultra-Fine' },
      { label: 'Dielectric Isolation', value: '3.5 kVrms @ 60s' },
      { label: 'Vibration Immunity', value: 'MIL-STD-202G Compliant' },
      { label: 'Core Geometry', value: 'Custom Non-Magnetic / MnZn' },
    ],
    applications: [
      'Wafer Stage Linear Positioning Coils',
      'High-Speed Die-Sort Actuators',
      'ATE Test Head Interface Magnetics',
      'Cryogenic Etch Sensor Pickups',
    ],
  },
  {
    id: 'automotive',
    number: '02',
    title: 'Automotive & EV Power Electronics',
    tag: 'AEC-Q200 Grade 1 Qualified',
    image: '/images/coils-showcase.jpg',
    description:
      'Heavy-gauge inductors, planar LLC resonant transformers, and DC-DC filter chokes built to withstand the punishing temperature swings and mechanical vibration of modern electric vehicles.',
    standards: 'IATF 16949 Alignment • -40°C to +155°C Thermal Endurance',
    specifications: [
      { label: 'Current Handling', value: 'Up to 150A Continuous' },
      { label: 'Thermal Cycling', value: '1,000+ Shock Cycles' },
      { label: 'Insulation System', value: 'Class H (180°C Rated)' },
      { label: 'Potting Chemistry', value: 'UL 94V-0 Automotive Epoxy' },
    ],
    applications: [
      '800V Architecture On-Board Chargers (OBC)',
      'Traction Inverter Gate Driver Transformers',
      'Battery Management System (BMS) Common-Mode Chokes',
      'Electronic Power Steering Actuators',
    ],
  },
  {
    id: 'renewable',
    number: '03',
    title: 'GaN / SiC Renewable Energy & Solar Inverters',
    tag: 'Up to 5.0 MHz Switching',
    image: '/images/planar-transformer.jpg',
    description:
      'High-frequency planar magnetics and low-loss nanocrystalline chokes engineered for string inverters, grid-scale battery storage, and GaN/SiC micro-inverters where efficiency directly impacts energy yield.',
    standards: 'LLC Resonant Efficiency 98.9% • Low Leakage Inductance',
    specifications: [
      { label: 'Frequency Range', value: '500 kHz – 5.0 MHz' },
      { label: 'Leakage L', value: '< 0.5% of Primary Inductance' },
      { label: 'Cooling Support', value: 'Direct Cold-Plate Heatsink' },
      { label: 'Core Material', value: 'High-Saturation Nanocrystalline' },
    ],
    applications: [
      'Bidirectional Energy Storage Inverters',
      'Solar MPPT DC-DC Boost Inductors',
      'Micro-Inverter Planar Isolation Transformers',
      'Grid-Tie Active Harmonic Power Filters',
    ],
  },
  {
    id: 'medical',
    number: '04',
    title: 'Medical Electronics & Robotic Surgery',
    tag: '100% Lot Traceability',
    image: '/images/cleanroom-qa.jpg',
    description:
      'High-reliability micro-magnetics and isolation transformers for minimally invasive surgical robots, implantable telemetry coils, patient monitoring telemetry, and MRI-compatible diagnostic probes.',
    standards: 'USP Class VI Compatible Potting • 100% COA Serialization',
    specifications: [
      { label: 'Conductor Purity', value: '99.99% Oxygen-Free Copper' },
      { label: 'Traceability', value: 'Barcode Serialization per Lot' },
      { label: 'Sterilization', value: 'Autoclave & EtO Resistant' },
      { label: 'Leakage Current', value: '< 10 µA Patient Isolation' },
    ],
    applications: [
      'Multi-Axis Laparoscopic Robotic Motors',
      'Defibrillator Charging Inductors',
      'Implantable RFID Telemetry Coils',
      'Ultrasound Transducer Matching Transformers',
    ],
  },
  {
    id: 'robotics',
    number: '05',
    title: 'Industrial Automation & Robotics',
    tag: 'Continuous High-Duty Cycle',
    image: '/images/factory-floor.jpg',
    description:
      'Precision servo motor windings, electromagnetic brake coils, and ruggedized power chokes engineered to operate 24/7/365 without thermal degradation across factory production lines.',
    standards: 'Continuous Duty • Vibration Resistant • IP67 Sealed',
    specifications: [
      { label: 'Insulation Class', value: 'Class F (155°C) & Class H' },
      { label: 'Mechanical Tolerance', value: '±0.005 mm Bobbin Mating' },
      { label: 'Winding Style', value: 'Orthocyclic High-Fill Packing' },
      { label: 'Hi-Pot Breakdown', value: '> 4.0 kVrms @ 60s' },
    ],
    applications: [
      'Collaborative Robot (Cobot) Joint Actuators',
      'Factory PLC Power Supply Chokes',
      'Automated Guided Vehicle (AGV) Motors',
      'Pneumatic & Solenoid Control Valves',
    ],
  },
  {
    id: 'aerospace',
    number: '06',
    title: 'Aerospace & High-Reliability Electronics',
    tag: 'Mission-Critical Grade',
    image: '/slides/cleanroom-qa.jpg',
    description:
      'Custom electromagnetic components built to withstand extreme shock, vibration, altitude depressurization, and temperature swings in avionics, radar power supplies, and defense telemetry.',
    standards: 'Zero-Defect Standard • MIL-STD Screening Alignment',
    specifications: [
      { label: 'Temperature Envelope', value: '-55°C to +175°C' },
      { label: 'Encapsulation', value: 'Void-Free Vacuum Impregnated' },
      { label: 'Dielectric Barrier', value: '5.0 kVrms Isolation' },
      { label: 'Quality Screen', value: '100% Automated Electrical Sweep' },
    ],
    applications: [
      'Avionics Auxiliary Power Units (APU)',
      'Radar Phase-Array Power Magnetics',
      'Flight Surface Actuation Coils',
      'Satcom RF Transmitter Chokes',
    ],
  },
];

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeHeroSector, setActiveHeroSector] = useState(0);

  const heroSectors = [
    {
      name: 'Semiconductor ATE',
      tag: 'Wafer Tools & Metrology',
      spec1: '0.015mm Wire Gauge',
      spec2: 'Class 1,000 Cleanroom',
      spec3: 'Zero Outgassing',
      highlight: 'Wafer Stage Linear Positioning & Die-Sort Actuators',
      image: '/images/micro-coils.jpg',
    },
    {
      name: 'Automotive 800V EV',
      tag: 'AEC-Q200 Grade 1',
      spec1: '150A Continuous',
      spec2: '-40°C to +155°C Range',
      spec3: '1,000 Thermal Cycles',
      highlight: '800V Architecture On-Board Chargers & Inverters',
      image: '/images/coils-showcase.jpg',
    },
    {
      name: 'GaN / SiC Solar',
      tag: 'Wide-Bandgap Energy',
      spec1: '5.0 MHz Switching',
      spec2: '98.9% Efficiency',
      spec3: '< 0.5% Leakage L',
      highlight: 'String Inverters & Micro-Inverter Planar Transformers',
      image: '/images/planar-transformer.jpg',
    },
    {
      name: 'Robotic Surgery',
      tag: 'Medical Grade Traceability',
      spec1: '99.99% OFC Purity',
      spec2: 'Autoclave Proof',
      spec3: '< 10µA Patient Barrier',
      highlight: 'Minimally Invasive Surgical Arms & MRI Diagnostic Probes',
      image: '/images/cleanroom-qa.jpg',
    },
  ];

  const currentSector = heroSectors[activeHeroSector];

  return (
    <div className="min-h-screen bg-[#06101e] text-slate-100">
      <Header />

      <main className="pt-20">
        {/* Section 1: Hero - Theme Color (Dark Navy #06101e) */}
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
                    MISSION-CRITICAL INDUSTRY SECTORS
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
                  Engineered for Global OEMs. <br />
                  <span className="text-orange-400">Where Failure Is</span>{' '}
                  <br />
                  Not an Option.
                </h1>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                  From sub-millimeter prober coils in semiconductor fabs to 800V
                  electric vehicle on-board chargers, Seimitsu Electronic
                  manufactures certified precision magnetics tailored to the
                  stringent demands of each sector.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-7 h-12 rounded-lg shadow-lg shadow-orange-600/30 border-0"
                    >
                      Consult an Applications Engineer
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/capabilities">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold px-7 h-12 rounded-lg"
                    >
                      View Manufacturing Capabilities
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Sector Radar Telemetry (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl p-6 sm:p-7 bg-[#0b172a]/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                      <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
                        Interactive Sector Radar
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                      Tier-1 Approved
                    </span>
                  </div>

                  {/* 4 Quick Selector Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    {heroSectors.map((sec, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveHeroSector(idx)}
                        className={`p-2.5 rounded-xl text-left transition-all border ${
                          activeHeroSector === idx
                            ? 'bg-orange-600 text-white border-orange-500 shadow-md shadow-orange-600/30'
                            : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        <span className="text-xs font-bold block truncate">
                          {sec.name}
                        </span>
                        <span className="text-[9px] font-mono block opacity-80 truncate">
                          {sec.tag}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Active Sector Visual Hardware Card */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700 h-40 bg-slate-950">
                    <Image
                      src={currentSector.image}
                      alt={currentSector.name}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-600 text-white font-mono text-[10px] font-bold">
                        {currentSector.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h4 className="text-base font-bold drop-shadow-sm">
                        {currentSector.name}
                      </h4>
                      <p className="text-xs text-orange-300 font-mono mt-0.5 truncate">
                        {currentSector.highlight}
                      </p>
                    </div>
                  </div>

                  {/* 3 Telemetry Spec Chips */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      currentSector.spec1,
                      currentSector.spec2,
                      currentSector.spec3,
                    ].map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center"
                      >
                        <span className="text-[9px] font-mono text-slate-400 block uppercase">
                          Criterion {sIdx + 1}
                        </span>
                        <span className="text-xs font-bold font-mono text-white mt-0.5 block">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Light / Sketch Background (#f8fafc) - Detailed Industry Showcase */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 border-b border-slate-200 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[140px]" />
            <div className="absolute inset-0 semiconductor-grid" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-mono mb-4 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Sector Specifications</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Industry-Specific{' '}
                <span className="text-orange-600">Engineering Portfolios</span>
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                Review the exact technical parameters, thermal requirements, and
                qualified applications for your target market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {SECTORS.map((sec) => (
                <div
                  key={sec.id}
                  className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between hover:border-orange-300 transition-all duration-300"
                >
                  <div className="relative w-full h-56 overflow-hidden bg-slate-950">
                    <Image
                      src={sec.image}
                      alt={sec.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-orange-600 text-white font-mono text-[11px] font-bold shadow-md">
                        {sec.tag}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 text-2xl font-black font-mono text-white/80">
                      {sec.number}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-black drop-shadow-md">
                        {sec.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {sec.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-100">
                      {sec.specifications.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-2.5 rounded-xl bg-slate-50 border border-slate-200"
                        >
                          <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">
                            {spec.label}
                          </span>
                          <span className="text-xs font-bold text-slate-900 font-mono mt-0.5 block">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold text-slate-900 block mb-2 uppercase tracking-wide">
                        Key Qualified Applications:
                      </span>
                      <ul className="space-y-1.5">
                        {sec.applications.map((app, aIdx) => (
                          <li
                            key={aIdx}
                            className="flex items-start text-xs text-slate-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-500 font-medium">
                        Standard:{' '}
                        <strong className="text-slate-900">
                          {sec.standards.split('•')[0]}
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

        {/* Section 3: Theme Color (Dark Navy #06101e) - Global Certifications & Standards */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-orange-400 text-xs font-mono mb-4 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                <span>Zero-Defect Quality Assurance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                Certified for Demanding{' '}
                <span className="text-orange-400">Global Supply Chains</span>
              </h2>
              <p className="mt-4 text-slate-300 text-base sm:text-lg">
                All components manufactured at Seimitsu comply with
                international regulatory frameworks and undergo 100% automated
                electrical sweeps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  title: 'ISO 9001:2015',
                  tag: 'Certified QMS',
                  desc: 'Bureau Veritas & SIRIM certified quality management system with full lot traceability.',
                },
                {
                  title: 'AEC-Q200 Grade 1',
                  tag: 'Automotive Pass',
                  desc: 'Stress tested across 1,000+ thermal shock cycles from -40°C to +155°C.',
                },
                {
                  title: 'UL 94V-0 Flame Rating',
                  tag: 'Safety Compliant',
                  desc: 'Self-extinguishing potting epoxies and bobbins for high-voltage power electronics.',
                },
                {
                  title: 'RoHS 3 & REACH',
                  tag: 'Eco Compliance',
                  desc: '100% compliant with European Directive 2015/863/EU and SVHC hazardous chemical bans.',
                },
              ].map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-6 rounded-3xl bg-[#0b172a] border border-slate-800 shadow-xl"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 text-orange-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-1">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-mono text-orange-400 font-bold block mb-2">
                    {cert.tag}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Light / Sketch Background (#f8fafc) - Consultation CTA */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 border-b border-slate-200 overflow-hidden">
          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-3xl p-8 sm:p-14 bg-white border border-slate-200 shadow-2xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-mono mb-6 font-bold">
                <Clock className="w-3.5 h-3.5 text-orange-600" />
                <span>Rapid Engineering Turnaround</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 text-slate-950">
                Have a Complex Industry Specification{' '}
                <br className="hidden sm:block" />
                <span className="text-orange-600">Requiring DFM Feedback?</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Connect directly with our applications engineering team based in
                Klang, Selangor. We evaluate creepage clearances, thermal
                dissipation, core loss, and tooling lead times within 24 to 48
                hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 h-12 rounded-xl shadow-lg shadow-orange-600/25 border-0"
                  >
                    Start Technical RFQ Discussion
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold px-8 h-12 rounded-xl"
                  >
                    Read Our 25-Year Heritage
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
