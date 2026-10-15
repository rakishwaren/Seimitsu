'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  Cog,
  Wrench,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Beaker,
} from 'lucide-react';

export function CustomizationPage() {
  const [wireType, setWireType] = useState('ultra-fine');
  const [windingPattern, setWindingPattern] = useState('orthocyclic');
  const [pottingMethod, setPottingMethod] = useState('vacuum-epoxy');

  const getCustomSummary = () => {
    let leadTime = '7 - 10 Business Days';
    let tolerance = '± 0.001 mm';
    let testingProtocol = 'Hi-Pot 3.5 kVrms + LCR 100% Sweep';

    if (wireType === 'ultra-fine') {
      tolerance = '± 0.001 mm (Cleanroom ESD Station)';
    } else if (wireType === 'shaped-foil') {
      tolerance = '± 0.005 mm (Edge-Winding Precision)';
    }

    if (pottingMethod === 'vacuum-epoxy') {
      testingProtocol =
        'Partial Discharge < 10pC @ 5kV + Thermal Shock -40°C/155°C';
    }

    return { leadTime, tolerance, testingProtocol };
  };

  const summary = getCustomSummary();

  const customCapabilities = [
    {
      title: 'Sub-Millimeter CNC Winding',
      icon: Cog,
      description:
        'Multi-axis computerized tension-controlled winding machines handling wire gauges from 0.015mm (AWG 54) to 3.5mm flat rectangular copper.',
      points: [
        'Orthocyclic precision winding for maximum copper fill factor',
        'Self-bonding thermo-fuse wire without physical bobbins',
        'Multi-chamber bobbin segmented winding for high voltage isolation',
      ],
    },
    {
      title: 'Cleanroom Vacuum Encapsulation',
      icon: Beaker,
      description:
        'Pressure and vacuum impregnation (VPI) in climate-controlled cleanrooms, ensuring void-free dielectric barriers against partial discharge.',
      points: [
        'Automated two-component meter-mix vacuum dispensing',
        'UL 94V-0 certified flame retardant epoxies & silicones',
        'Complete bubble-free de-aeration for extreme voltage stability',
      ],
    },
    {
      title: 'Turnkey PCB & Box-Build Assembly',
      icon: Layers,
      description:
        'Integrated SMT pick-and-place, through-hole soldering, connector crimping, and aluminum/plastic enclosure integration under one roof.',
      points: [
        'Automated optical inspection (AOI) for every solder joint',
        'Laser wire stripping and robotic pin termination',
        'Complete end-of-line functional testing with digital serialization',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#06101e] text-slate-100">
      <Header />
      <main className="pt-20">
        {/* Hero Section: Theme Color (Dark Navy #06101e) */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px]" />
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
                Customization &amp; DFM
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
              Custom Engineering &amp; <br />
              <span className="text-orange-400">
                Turnkey Contract Manufacturing
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              When standard catalog parts cannot meet your stringent volumetric
              or thermal constraints, our dedicated engineering team develops
              custom winding patterns, tooling, and potting formulations built
              precisely to your CAD models.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 rounded-xl px-6 h-11 text-xs font-bold border-0">
                  Submit 2D/3D Drawings for DFM Review
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 3 Core Custom Capabilities */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-widest block mb-2">
                Turnkey Customization Scope
              </span>
              <h2 className="text-3xl font-black text-slate-950">
                From Raw Conductor to Encapsulated Sub-System
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: 'Sub-Millimeter CNC Winding',
                  image: '/images/cnc-winding.jpg',
                  tag: 'Multi-Axis Spindles',
                  description:
                    'Multi-axis computerized tension-controlled winding machines handling wire gauges from 0.015mm (AWG 54) to 3.5mm flat rectangular copper.',
                  points: [
                    'Orthocyclic precision winding for maximum copper fill factor',
                    'Self-bonding thermo-fuse wire without physical bobbins',
                    'Multi-chamber bobbin segmented winding for high voltage isolation',
                  ],
                },
                {
                  title: 'Cleanroom Vacuum Encapsulation',
                  image: '/images/cleanroom-qa.jpg',
                  tag: 'Dielectric Barrier 5kV',
                  description:
                    'Pressure and vacuum impregnation (VPI) in climate-controlled cleanrooms, ensuring void-free dielectric barriers against partial discharge.',
                  points: [
                    'Automated two-component meter-mix vacuum dispensing',
                    'UL 94V-0 certified flame retardant epoxies & silicones',
                    'Complete bubble-free de-aeration for extreme voltage stability',
                  ],
                },
                {
                  title: 'Turnkey PCB & Box-Build Assembly',
                  image: '/images/factory-floor.jpg',
                  tag: 'SMT & Box-Build Suite',
                  description:
                    'Integrated SMT pick-and-place, through-hole soldering, connector crimping, and aluminum/plastic enclosure integration under one roof.',
                  points: [
                    'Automated optical inspection (AOI) for every solder joint',
                    'Laser wire stripping and robotic pin termination',
                    'Complete end-of-line functional testing with digital serialization',
                  ],
                },
              ].map((cap, idx) => (
                <div
                  key={idx}
                  className="group rounded-3xl bg-[#fafaf9] border border-slate-200 hover:border-amber-400 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Image Banner */}
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30" />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-amber-600/90 backdrop-blur-md text-white font-mono text-[10px] font-bold shadow-md">
                          {cap.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-xl font-bold text-white drop-shadow-sm">
                          {cap.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      <p className="text-slate-600 text-xs leading-relaxed mb-6">
                        {cap.description}
                      </p>
                      <ul className="space-y-2.5 pt-4 border-t border-slate-200">
                        {cap.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start text-xs text-slate-600"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px] font-mono font-bold text-amber-800">
                      <span>DFM Verified Process</span>
                      <span className="text-amber-600">ISO 9001:2015</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive "Spec-Your-Coil" Builder: Theme Color (Dark Navy #06101e) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <div className="rounded-3xl p-8 sm:p-12 bg-[#0b172a] border border-slate-800 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-orange-400 text-xs font-mono mb-2 font-bold border border-slate-700">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Interactive Parameter Builder</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Spec-Your-Coil Customizer
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Select your physical configuration to view estimated FAI
                    turnaround and quality inspection checkpoints.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-emerald-400 font-bold block">
                    ● DFM Desk Online
                  </span>
                  <span className="text-xs text-slate-400">
                    Response in 24-48 Hours
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  {/* Conductor Material */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                      Conductor Gauge / Geometry
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'ultra-fine', label: '0.015 - 0.1mm Ultra-Fine' },
                        { id: 'standard', label: '0.2 - 1.2mm Standard' },
                        { id: 'shaped-foil', label: 'Edge-Wound Copper Foil' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setWireType(item.id)}
                          className={`p-3 rounded-xl text-xs font-mono text-left font-bold transition-all ${
                            wireType === item.id
                              ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                              : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Winding Architecture */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                      Winding Architecture
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'orthocyclic', label: 'Orthocyclic Precision' },
                        { id: 'air-core', label: 'Bobbinless Self-Bonding' },
                        { id: 'toroid', label: 'Toroidal Multi-Layer' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setWindingPattern(item.id)}
                          className={`p-3 rounded-xl text-xs font-mono text-left font-bold transition-all ${
                            windingPattern === item.id
                              ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                              : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Encapsulation Method */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                      Potting &amp; Environmental Protection
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'vacuum-epoxy', label: 'Vacuum Epoxy (5kV)' },
                        { id: 'silicone', label: 'Silicone Gel (-55°C)' },
                        { id: 'open', label: 'Open Frame / Varnish' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setPottingMethod(item.id)}
                          className={`p-3 rounded-xl text-xs font-mono text-left font-bold transition-all ${
                            pottingMethod === item.id
                              ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                              : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Calculated Result Card */}
                <div className="lg:col-span-5 bg-slate-900 p-6 rounded-2xl border border-slate-700 shadow-xl">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                    <span className="text-xs font-mono text-orange-400 font-bold">
                      DFM Feasibility Analysis
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-950 text-orange-300 font-bold border border-orange-800/50">
                      Active
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#0b172a] border border-slate-800">
                      <div className="text-[10px] text-slate-400 font-mono">
                        Estimated FAI Lead Time
                      </div>
                      <div className="text-lg font-black text-white font-mono">
                        {summary.leadTime}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0b172a] border border-slate-800">
                      <div className="text-[10px] text-slate-400 font-mono">
                        Dimensional Repeatability
                      </div>
                      <div className="text-sm font-bold text-orange-400 font-mono">
                        {summary.tolerance}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0b172a] border border-slate-800">
                      <div className="text-[10px] text-slate-400 font-mono">
                        Cleanroom Test Checkpoint
                      </div>
                      <div className="text-xs font-bold text-emerald-400 font-mono">
                        {summary.testingProtocol}
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold py-3 shadow-md shadow-orange-600/20 border-0">
                      Start Custom Quote With These Specs
                    </Button>
                  </Link>
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

export default CustomizationPage;
