'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Microscope, Zap, Activity, ArrowRight, Gauge } from 'lucide-react';

interface BenchmarkData {
  id: string;
  title: string;
  subtitle: string;
  metricLabel: string;
  traditionalVal: string;
  seimitsuVal: string;
  improvement: string;
  summary: string;
  frequency: string;
}

const BENCHMARKS: BenchmarkData[] = [
  {
    id: 'gan-switching',
    title: 'High-Frequency GaN Switching Efficiency',
    subtitle: 'AC Proximity & Winding Loss Reduction at 2.5 MHz',
    metricLabel: 'Power Conversion Efficiency',
    traditionalVal: '94.2%',
    seimitsuVal: '98.9%',
    improvement: '+ 4.7% Efficiency Gain',
    summary:
      'Using custom planar PCB interleaving and customized low-loss MnZn ferrite geometry, high-frequency eddy current losses are mitigated, preventing thermal runaway in power supplies.',
    frequency: '2.5 MHz Resonant LLC',
  },
  {
    id: 'partial-discharge',
    title: 'Partial Discharge (Corona) Extinction',
    subtitle: 'Vacuum Impregnated Dielectric Barrier Reliability',
    metricLabel: 'Discharge Voltage Threshold',
    traditionalVal: '2.8 kVrms',
    seimitsuVal: '5.2 kVrms',
    improvement: '85% Higher Breakdown Margin',
    summary:
      'Cleanroom vacuum potting removes sub-micron micro-voids, elevating partial discharge inception voltage to safely exceed semiconductor fab power requirements.',
    frequency: '100 kHz High Voltage',
  },
  {
    id: 'thermal-stress',
    title: 'Extreme-Temperature Cycle Retention',
    subtitle: 'Thermal Shock Reliability from -55°C to +175°C',
    metricLabel: 'Inductance Drift After 1,000 Cycles',
    traditionalVal: '± 4.8%',
    seimitsuVal: '± 0.4%',
    improvement: '12x Thermal Stability',
    summary:
      'Precision-matched coefficient of thermal expansion (CTE) between the nanocrystalline core, potting polymer, and copper conductor prevents micro-fracturing.',
    frequency: '1,000 Thermal Shock Cycles',
  },
];

export function RDPage() {
  const [activeBenchmark, setActiveBenchmark] = useState<BenchmarkData>(
    BENCHMARKS[0],
  );

  const labEquipments = [
    {
      name: 'Keysight E4990A Impedance Analyzer',
      spec: '20 Hz to 120 MHz',
      purpose:
        'Ultra-wideband resonant frequency, Q-factor, and impedance characterization.',
    },
    {
      name: 'Chroma 19036 Hipot & Partial Discharge Tester',
      spec: 'Up to 5 kV AC / 6 kV DC',
      purpose:
        'Corona discharge and high-potential insulation barrier qualification.',
    },
    {
      name: 'ESPEC Climate Simulation Chamber',
      spec: '-70°C to +180°C',
      purpose:
        'Fast-ramp thermal shock and prolonged high-temperature operating life (HTOL).',
    },
    {
      name: 'Ansys Maxwell 3D FEA Simulation Suite',
      spec: 'Multi-Physics Modeling',
      purpose:
        'Finite element analysis for magnetic flux leakage, fringe fields, and core saturation.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#06101e] text-slate-100">
      <Header />
      <main className="pt-20">
        {/* R&D Hero: Theme Color (Dark Navy #06101e) */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-[650px] h-[650px] bg-orange-600/10 rounded-full blur-[140px]" />
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-orange-400 font-bold mb-4">
              <Link
                href="/services"
                className="hover:text-orange-300 transition-colors"
              >
                Services
              </Link>
              <span>/</span>
              <span className="text-slate-400 font-normal">
                R&amp;D &amp; Engineering Labs
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
              Advancing Magnetics for <br />
              <span className="text-orange-400">
                Next-Gen GaN &amp; SiC Power Systems
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Silicon carbide and gallium nitride semiconductors are pushing
              switching frequencies into multi-megahertz regimes. Our
              specialized R&amp;D lab pioneers planar magnetics,
              nano-dielectrics, and finite element simulation to eliminate loss
              bottlenecks.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 rounded-xl px-6 h-11 text-xs font-bold border-0">
                  Inquire About Joint Development (JDP)
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Benchmark Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-widest block mb-2">
                Laboratory Benchmark Data
              </span>
              <h2 className="text-3xl font-black text-slate-950">
                Empirical Performance Gains Over Standard Magnetics
              </h2>
            </div>

            {/* Benchmark Switcher Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              {BENCHMARKS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveBenchmark(item)}
                  className={`p-4 rounded-2xl text-left transition-all border ${
                    activeBenchmark.id === item.id
                      ? 'bg-amber-50/70 border-amber-400 shadow-md ring-1 ring-amber-400/30'
                      : 'bg-[#fafaf9] border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="text-xs font-mono font-bold text-amber-800 mb-1">
                    {item.frequency}
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {item.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Benchmark Visual Display */}
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl mb-16">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-slate-200">
                <div>
                  <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-widest block mb-1">
                    {activeBenchmark.frequency}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                    {activeBenchmark.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {activeBenchmark.subtitle}
                  </p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 text-sm font-mono font-bold whitespace-nowrap">
                  {activeBenchmark.improvement}
                </div>
              </div>

              {/* Split view: Benchmark bars + Real Photo of Planar Hardware */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
                <div className="lg:col-span-7 space-y-6">
                  {/* Comparative Metrics Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Traditional */}
                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <span className="text-xs text-slate-500 block mb-1 font-medium">
                        Standard Industry Magnetics
                      </span>
                      <div className="text-3xl font-black font-mono text-slate-400 mb-2">
                        {activeBenchmark.traditionalVal}
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-slate-400 h-full w-[65%]" />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-2 block font-mono">
                        Standard wire winding & MnZn core
                      </span>
                    </div>

                    {/* Seimitsu */}
                    <div className="p-5 rounded-2xl bg-white border-2 border-amber-400 shadow-md">
                      <span className="text-xs text-amber-800 block mb-1 font-bold">
                        Seimitsu R&D Solution
                      </span>
                      <div className="text-3xl font-black font-mono text-amber-800 mb-2">
                        {activeBenchmark.seimitsuVal}
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 h-full w-[95%]" />
                      </div>
                      <span className="text-[10px] text-amber-900 mt-2 block font-mono font-semibold">
                        Custom interleaving + nanostructure
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="font-bold text-slate-900">Analysis: </span>
                    {activeBenchmark.summary}
                  </p>
                </div>

                {/* Planar Transformer Photo Showcase */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                    <img
                      src="/images/planar-transformer.jpg"
                      alt="Planar GaN Transformer Multi-layer PCB"
                      className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-amber-600 text-white font-mono text-[10px] font-bold shadow-md">
                        FEA Modeled Planar Geometry
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-white text-sm font-bold">
                        Substrate-Integrated PCB Windings
                      </div>
                      <div className="text-amber-300 text-xs font-mono">
                        Zero Eddy-Current Hotspots @ 2.5 MHz
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cleanroom Laboratory Equipment Showcase: Theme Color (Dark Navy #06101e) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-t border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-widest block mb-2">
                Testing Infrastructure
              </span>
              <h2 className="text-3xl font-black text-white">
                In-House Semiconductor Test Laboratory
              </h2>
            </div>

            {/* Split: Cleanroom Metrology Photo + Equipment Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 group">
                  <img
                    src="/images/cleanroom-qa.jpg"
                    alt="Cleanroom Metrology QA Inspection at Seimitsu"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-mono font-bold shadow-md">
                      ● ISO Class 6 Cleanroom Lab
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-lg font-bold">
                      Comprehensive In-Line Metrology
                    </div>
                    <div className="text-xs text-slate-200 mt-0.5">
                      100% sweep of inductance, DCR, leakage inductance, and
                      high-voltage partial discharge.
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {labEquipments.map((equip, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0b172a] border border-slate-800 shadow-xl hover:border-orange-500/80 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-slate-900 text-orange-400 border border-slate-700">
                        <Activity className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 font-bold">
                        Calibrated Q3 2026
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {equip.name}
                    </h4>
                    <span className="text-[11px] font-mono text-orange-400 font-bold block mb-2">
                      {equip.spec}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {equip.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button className="bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs px-8 h-11 font-bold shadow-lg shadow-orange-600/30 border-0">
                  Request an R&amp;D Consultation or FEA Evaluation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default RDPage;
