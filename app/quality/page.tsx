'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Activity,
  Gauge,
  Microscope,
  FileCheck,
  Scale,
  Clock,
  Download,
  AlertCircle,
} from 'lucide-react';

interface QualityGate {
  id: string;
  step: string;
  title: string;
  description: string;
  instruments: string[];
  acceptanceCriteria: string;
}

const QUALITY_GATES: QualityGate[] = [
  {
    id: 'gate-1',
    step: 'Gate 01',
    title: 'Incoming Raw Material IQC',
    description:
      'Every reel of copper wire, ferrite/nanocrystalline core, and bobbin batch is sampled and quarantined pending metallurgical and dimensional verification.',
    instruments: [
      'Mitutoyo Digimatic Micrometers',
      'Spectrophotometer',
      'RoHS XRF Analyzer',
    ],
    acceptanceCriteria:
      '100% material lot traceability, zero copper oxidation, dimensional tolerance within ±0.001 mm.',
  },
  {
    id: 'gate-2',
    step: 'Gate 02',
    title: 'In-Process CNC Dynamic Tension Monitoring',
    description:
      'Continuous closed-loop tension verification during multi-spindle winding to prevent conductor necking or stretching that alters high-frequency resistance.',
    instruments: [
      'Electronic Tension Sensors',
      'Optical Turn Counters',
      'Laser Wire Diameter Monitors',
    ],
    acceptanceCriteria:
      'Zero tension spikes, exact turn count verification with zero missing turns.',
  },
  {
    id: 'gate-3',
    step: 'Gate 03',
    title: 'Cleanroom Vacuum Potting Verification',
    description:
      'Double-chamber vacuum encapsulation with automated degassing to ensure complete bubble-free epoxy impregnation around internal windings.',
    instruments: [
      'Vacuum Chamber Transducers',
      'Analytical Precision Balances',
      'Viscometer',
    ],
    acceptanceCriteria:
      'Zero void formation, partial discharge < 5pC at rated working voltage.',
  },
  {
    id: 'gate-4',
    step: 'Gate 04',
    title: '100% Automated Electrical Parameter Sweeps',
    description:
      'Every finished coil passes through automated robotic test fixtures measuring inductance, DC resistance, Q-factor, and inter-turn insulation.',
    instruments: [
      'Keysight E4980AL Precision LCR Meter',
      'Chroma 19032 Safety Analyzer',
      'Hi-Pot 5.0 kVrms Tester',
    ],
    acceptanceCriteria:
      'Inductance within ±1.0%, DCR matched to ±0.5%, dielectric leakage < 10 µA.',
  },
  {
    id: 'gate-5',
    step: 'Gate 05',
    title: 'Optical Metrology & 3D CMM Coordinate Inspection',
    description:
      'Non-contact optical coordinate measurement of bobbin pin straightness, lead coplanarity, solder fillet coverage, and exterior mechanical envelope.',
    instruments: [
      'Keyence IM-8000 Optical Dimension Measurement',
      'High-Res Digital Microscope (up to 2000x)',
    ],
    acceptanceCriteria:
      'SMD coplanarity within 0.05 mm, zero solder bridging or pin tilt.',
  },
  {
    id: 'gate-6',
    step: 'Gate 06',
    title: 'Final Outgoing QA & Serialization (OQC)',
    description:
      'Generation of Certificate of Analysis (COA) containing lot-specific test graphs, barcode labeling, ESD sealed packaging, and export crate dispatch.',
    instruments: [
      'Barcode Verification Scanners',
      'Cleanroom Heat Sealers',
      'Moisture Barrier Bagging',
    ],
    acceptanceCriteria:
      'Individual lot serialization, COA signed by Quality Director, ESD compliance verified.',
  },
];

export default function QualityPage() {
  const [activeGate, setActiveGate] = useState(0);
  const [testMode, setTestMode] = useState<'lcr' | 'hipot' | 'optics'>('lcr');
  const [isTesting, setIsTesting] = useState(false);

  const runTest = () => {
    setIsTesting(true);
    setTimeout(() => setIsTesting(false), 600);
  };

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
                    ZERO-DEFECT QUALITY GOVERNANCE
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
                  Evidence, Not Assumptions. <br />
                  <span className="text-orange-400">
                    Quality Built Into
                  </span>{' '}
                  <br />
                  Every Production Route.
                </h1>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                  Quality is not an afterthought at Seimitsu Electronic. Every
                  millimeter of wire, core saturation threshold, and dielectric
                  barrier is governed by strict stage-gate checkpoints in our
                  ISO 9001:2015 certified Klang cleanroom.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-7 h-12 rounded-lg shadow-lg shadow-orange-600/30 border-0"
                    >
                      Schedule a Quality Facility Audit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <a href="#lab">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold px-7 h-12 rounded-lg"
                    >
                      Inspect Metrology Lab
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Live QA Sweep Simulator (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl p-6 sm:p-7 bg-[#0b172a]/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
                        Keysight Automated QA Bench
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                      100% Sweep Active
                    </span>
                  </div>

                  {/* Test Mode Selector Tabs */}
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: 'lcr', label: 'LCR Sweep' },
                      { id: 'hipot', label: '5kV Hi-Pot' },
                      { id: 'optics', label: 'Optical CMM' },
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        onClick={() => setTestMode(mode.id as any)}
                        className={`py-2 px-2.5 rounded-xl text-center text-[11px] font-mono font-bold transition-all ${
                          testMode === mode.id
                            ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                            : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>

                  {/* Live Measurement Readout Box */}
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 font-mono">
                    {testMode === 'lcr' && (
                      <>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">
                            Inductance (L @ 1MHz):
                          </span>
                          <span className="text-white font-bold">
                            {isTesting ? 'Scanning...' : '125.43 µH (±0.2%)'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">
                            DC Resistance (DCR):
                          </span>
                          <span className="text-white font-bold">
                            {isTesting ? 'Scanning...' : '3.67 Ω (Pass)'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">
                            Quality Factor (Q):
                          </span>
                          <span className="text-emerald-400 font-bold">
                            {isTesting ? 'Scanning...' : '88.4 (Pass)'}
                          </span>
                        </div>
                      </>
                    )}

                    {testMode === 'hipot' && (
                      <>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">
                            Applied Voltage:
                          </span>
                          <span className="text-white font-bold">
                            {isTesting ? 'Ramping...' : '5,000 Vrms @ 60s'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">
                            Leakage Current:
                          </span>
                          <span className="text-emerald-400 font-bold">
                            {isTesting ? 'Measuring...' : '< 0.04 mA (Pass)'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">
                            Partial Discharge:
                          </span>
                          <span className="text-emerald-400 font-bold">
                            {isTesting
                              ? 'Measuring...'
                              : '3.2 pC (< 10pC Pass)'}
                          </span>
                        </div>
                      </>
                    )}

                    {testMode === 'optics' && (
                      <>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">
                            Pin Coplanarity:
                          </span>
                          <span className="text-white font-bold">
                            {isTesting
                              ? 'Measuring...'
                              : '0.022 mm (±0.05 max)'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">
                            Optical CMM Resolution:
                          </span>
                          <span className="text-white font-bold">
                            ±0.0005 mm
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400">
                            Lead Solder Fillet:
                          </span>
                          <span className="text-emerald-400 font-bold">
                            {isTesting
                              ? 'Scanning...'
                              : '100% IPC-A-610 Class 3'}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Trigger Interactive QA Test Button */}
                  <button
                    onClick={runTest}
                    disabled={isTesting}
                    className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 active:scale-98 text-white font-mono text-xs font-bold transition-all shadow-md shadow-orange-600/30 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Activity
                      className={`w-4 h-4 ${isTesting ? 'animate-spin' : ''}`}
                    />
                    {isTesting
                      ? 'Running Automated Telemetry...'
                      : 'Simulate In-Line Test Sweep'}
                  </button>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Inspection Standard:</span>
                    <strong className="text-slate-200">
                      AEC-Q200 / ISO 9001
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Light / Sketch Background (#f8fafc) - 6 Stage Gate Quality Pipeline */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 border-b border-slate-200 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[140px]" />
            <div className="absolute inset-0 semiconductor-grid" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-mono mb-4 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                <span>Stage-Gate Quality Pipeline</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Six Checkpoints to{' '}
                <span className="text-orange-600">
                  Zero-Defect Repeatability
                </span>
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                Every custom coil winding batch transitions through strict stage
                gates before dispatch, ensuring complete parameter conformance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {QUALITY_GATES.map((gate, index) => (
                <div
                  key={gate.id}
                  className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:border-orange-300 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 font-mono text-[11px] font-bold">
                        {gate.step}
                      </span>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>

                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      {gate.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4">
                      {gate.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100 mb-3">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold mb-1">
                        Inspection Equipment:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {gate.instruments.map((inst, iIdx) => (
                          <span
                            key={iIdx}
                            className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-medium"
                          >
                            {inst}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-700">
                    <span className="text-slate-400 block text-[9px] uppercase tracking-wider mb-0.5 font-bold">
                      Acceptance Standard:
                    </span>
                    <strong className="text-slate-900">
                      {gate.acceptanceCriteria}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Theme Color (Dark Navy #06101e) - Cleanroom Laboratory Metrology */}
        <section
          id="lab"
          className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 overflow-hidden"
        >
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-orange-400 text-xs font-mono font-bold">
                  <Microscope className="w-3.5 h-3.5 text-orange-400" />
                  <span>Port Klang Cleanroom Metrology Lab</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                  Laboratory Equipment <br />
                  <span className="text-orange-400">
                    &amp; Parameter Verification
                  </span>
                </h2>

                <p className="text-slate-300 text-base leading-relaxed">
                  Our dedicated in-house metrology lab in Selangor performs full
                  optical coordinate scans, high-frequency LCR impedance sweeps,
                  and partial discharge dielectric testing before any batch is
                  cleared for export.
                </p>

                <div className="space-y-4 pt-2">
                  {[
                    {
                      title: 'Optical 3D Coordinate Measurement',
                      desc: 'Sub-micron optical scans verify lead coplanarity, bobbin pin pitch, and exterior packaging bounds.',
                    },
                    {
                      title: 'Partial Discharge < 10pC at 5.0 kVrms',
                      desc: 'Identifies internal air voids and corona discharge that cause insulation degradation over time.',
                    },
                    {
                      title: 'Wideband Impedance Frequency Sweeps',
                      desc: 'Characterizes self-resonant frequency (SRF), inter-turn capacitance, and Q-factor up to 20 MHz.',
                    },
                    {
                      title: 'Thermal Cycling from -40°C to +180°C',
                      desc: 'Validates structural integrity under extreme automotive AEC-Q200 and industrial operating ranges.',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#0b172a] border border-slate-800 flex items-start gap-4"
                    >
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-orange-400 flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-950">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                    <Image
                      src="/images/cleanroom-qa.jpg"
                      alt="Quality assurance engineer inspecting precision coil under optical microscope"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                    {/* Telemetry Badge */}
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#0b172a]/95 backdrop-blur-md border border-slate-700 shadow-xl text-white max-w-[220px]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold block mb-1">
                        Active Verification
                      </span>
                      <div className="font-mono text-xs space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-400">
                            Hi-Pot Voltage:
                          </span>
                          <span className="text-white font-bold">
                            5.0 kVrms
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">
                            Leakage Current:
                          </span>
                          <span className="text-emerald-400 font-bold">
                            &lt; 0.05 mA
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">
                            Yield Benchmark:
                          </span>
                          <span className="text-emerald-400 font-bold">
                            99.85%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-md bg-orange-600 text-white text-[10px] font-mono font-bold">
                          Klang Metrology Facility
                        </span>
                        <span className="text-xs font-mono text-emerald-400 font-semibold">
                          ● ISO 9001:2015 Audited
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white drop-shadow-md">
                        100% Parameter Traceability per Serialized Lot
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Light / Sketch Background (#f8fafc) - Quality Audit & COA CTA */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 border-b border-slate-200 overflow-hidden">
          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-3xl p-8 sm:p-14 bg-white border border-slate-200 shadow-2xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-mono mb-6 font-bold">
                <FileCheck className="w-3.5 h-3.5 text-orange-600" />
                <span>Quality Audit &amp; Documentation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 text-slate-950">
                Need Specific Testing Protocols{' '}
                <br className="hidden sm:block" />
                <span className="text-orange-600">
                  Or Customer Audit Documentation?
                </span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                We provide full Certificate of Analysis (COA), First Article
                Inspection (FAI) reports, IMDS submission data, and welcome
                virtual or on-site supplier audits at our Port Klang facility.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 h-12 rounded-xl shadow-lg shadow-orange-600/25 border-0"
                  >
                    Request Quality Documentation &amp; COA
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/about#certifications">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold px-8 h-12 rounded-xl"
                  >
                    View ISO Certifications
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
