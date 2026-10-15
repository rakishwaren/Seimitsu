'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import {
  ArrowRight,
  Zap,
  Activity,
  Gauge,
  Sliders,
  ShieldCheck,
  Sparkles,
  Layers,
  Microscope,
  Eye,
  CheckCircle2,
} from 'lucide-react';

interface HeroViewMode {
  id: string;
  name: string;
  shortLabel: string;
  image: string;
  objectPosition: string;
  badge: string;
  liveStatus: string;
  headline: string;
  metric1: { label: string; val: string };
  metric2: { label: string; val: string };
  metric3: { label: string; val: string };
  hotspots: {
    id: string;
    title: string;
    val: string;
    top: string;
    left: string;
  }[];
}

const VIEW_MODES: HeroViewMode[] = [
  {
    id: 'cnc-winding',
    name: 'CNC Precision Coil Winding',
    shortLabel: 'CNC Winding',
    image: '/slides/cnc-winding.jpg',
    objectPosition: 'object-[46%_50%]',
    badge: 'Klang Advanced Production Line',
    liveStatus: 'CNC Spindle 04: Active (12,500 RPM)',
    headline: 'Orthocyclic High Fill-Factor Winding',
    metric1: { label: 'Wire Gauge', val: '0.015 mm (AWG 54)' },
    metric2: { label: 'Tension Control', val: '12.4 cN ±0.2' },
    metric3: { label: 'Repeatability', val: '±0.001 mm' },
    hotspots: [
      {
        id: 'spool',
        title: 'Mandrel & Copper Spool',
        val: '30 AWG OFC Copper Wire',
        top: '56%',
        left: '48%',
      },
      {
        id: 'needle',
        title: 'Diamond-Coated Feed Needle',
        val: 'Sub-Micron Pitch Tracking',
        top: '32%',
        left: '49%',
      },
      {
        id: 'servo',
        title: 'Tension Monitoring Servo',
        val: 'Zero Wire Necking',
        top: '68%',
        left: '88%',
      },
    ],
  },
  {
    id: 'planar-gan',
    name: 'GaN & SiC Planar Magnetics',
    shortLabel: 'Planar GaN',
    image: '/images/planar-transformer.jpg',
    objectPosition: 'object-center',
    badge: 'High-Frequency Resonant Lab',
    liveStatus: 'GaN LLC Converter: 2.5 MHz Test',
    headline: 'Substrate-Integrated PCB Windings',
    metric1: { label: 'Switching Freq', val: '500 kHz – 5.0 MHz' },
    metric2: { label: 'Resonant Efficiency', val: '98.9%' },
    metric3: { label: 'Leakage L', val: '< 0.5% Primary' },
    hotspots: [
      {
        id: 'core',
        title: 'MnZn 3C95 Low-Loss Core',
        val: 'Direct Cold-Plate Coupling',
        top: '35%',
        left: '48%',
      },
      {
        id: 'pins',
        title: 'Gold-Plated Terminal Headers',
        val: 'Heavy-Current 40A Bus',
        top: '55%',
        left: '75%',
      },
    ],
  },
  {
    id: 'micro-coils',
    name: 'Sub-Millimeter Micro-Coils',
    shortLabel: 'Micro-Coils',
    image: '/images/micro-coils.jpg',
    objectPosition: 'object-center',
    badge: 'Cleanroom Semiconductor Prober',
    liveStatus: 'Optical 10x Inspection Station',
    headline: 'Air-Core & Bobbinless Self-Bonding',
    metric1: { label: 'Min Diameter', val: '0.015 mm Conductor' },
    metric2: { label: 'Inductance Range', val: '50 µH – 2.5 mH' },
    metric3: { label: 'Tolerance', val: '± 0.2%' },
    hotspots: [
      {
        id: 'lens',
        title: '10x Optical Metrology Lens',
        val: 'Bausch & Lomb Optical CMM',
        top: '48%',
        left: '58%',
      },
      {
        id: 'scale',
        title: 'Precision Metric Graticule',
        val: 'Sub-Millimeter Verification',
        top: '82%',
        left: '40%',
      },
    ],
  },
  {
    id: 'cleanroom-qa',
    name: 'Cleanroom Metrology Lab',
    shortLabel: 'Cleanroom QA',
    image: '/images/cleanroom-qa.jpg',
    objectPosition: 'object-center',
    badge: 'ISO Class 6 Cleanroom Lab',
    liveStatus: '100% In-Line Electrical QA Active',
    headline: 'High-Voltage Partial Discharge Testing',
    metric1: { label: 'Dielectric Hi-Pot', val: '5.0 kVrms Isolation' },
    metric2: { label: 'Partial Discharge', val: '< 5 pC at 5.0 kV' },
    metric3: { label: 'Electrical Yield', val: '99.85%' },
    hotspots: [
      {
        id: 'microscope',
        title: 'Digital High-Res Microscope',
        val: 'Up to 2000x Optical Zoom',
        top: '38%',
        left: '42%',
      },
    ],
  },
];

export function Hero() {
  const [activeModeIdx, setActiveModeIdx] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const currentMode = VIEW_MODES[activeModeIdx];

  return (
    <section className="relative min-h-[660px] lg:min-h-[780px] flex items-center bg-[#06101e] text-white overflow-hidden border-b border-slate-800/80 pt-20">
      {/* Background blueprint/tech grid pattern */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-orange-600/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Eyebrow, Main Headline, Subtitle, Buttons, Interactive Process Chips */}
          <div className="lg:col-span-6 z-10 space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-orange-500 rounded-full inline-block flex-shrink-0" />
              <span className="text-xs sm:text-sm font-mono tracking-widest text-slate-300 uppercase font-semibold">
                ISO 9001:2015 COIL MANUFACTURER IN MALAYSIA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.1rem] font-bold tracking-tight text-white leading-[1.08]">
              Custom Coil Winding <br />
              &amp; Precision Electronic <br />
              Manufacturing. <br />
              <span className="text-slate-400">
                Built to Your Specifications.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              ISO 9001:2015 certified custom coils, transformers, inductors, and
              PCB assemblies engineered for repeatable performance—from
              prototype to mass production.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm px-7 h-12 rounded-lg shadow-lg shadow-orange-600/30 transition-all border-0 hover:scale-[1.02]"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/capabilities">
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold text-sm px-7 h-12 rounded-lg transition-all"
                >
                  Explore Capabilities
                </Button>
              </Link>
            </div>

            {/* Interactive Process Switcher Tabs (Synchronized with Viewport) */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-bold">
                Select Manufacturing Discipline:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {VIEW_MODES.map((mode, idx) => {
                  const isSelected = activeModeIdx === idx;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => {
                        setActiveModeIdx(idx);
                        setActiveHotspot(null);
                      }}
                      className={`py-2 px-3 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-orange-600 text-white border-orange-500 shadow-md shadow-orange-600/30'
                          : 'bg-[#0b172a]/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-xs font-bold block truncate font-mono">
                        {mode.shortLabel}
                      </span>
                      <span className="text-[9px] block opacity-80 truncate">
                        {mode.metric1.val.split(' ')[0]}{' '}
                        {mode.metric1.val.split(' ')[1] || ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: High-Clarity Interactive Telemetry Viewport (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/80 bg-[#0b172a] shadow-2xl shadow-black/60 group">
              {/* Main Interactive High-Res Image Viewport */}
              <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[500px] overflow-hidden bg-slate-950">
                <Image
                  key={currentMode.id}
                  src={currentMode.image}
                  alt={currentMode.name}
                  fill
                  className={`object-cover ${currentMode.objectPosition} transition-all duration-700 transform group-hover:scale-103`}
                  priority
                />

                {/* Subtle vignette & technical gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b172a] via-[#0b172a]/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b172a]/40 via-transparent to-[#0b172a]/30 pointer-events-none" />
                <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

                {/* Top Overlay Bar: Badge & Live Status */}
                <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-orange-400 text-xs font-mono font-bold shadow-lg">
                    {currentMode.badge}
                  </span>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[11px] font-mono font-semibold text-slate-200 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>{currentMode.liveStatus}</span>
                  </div>
                </div>

                {/* Interactive Hotspot Pins on Hardware */}
                {currentMode.hotspots.map((hs) => {
                  const isOpened = activeHotspot === hs.id;
                  return (
                    <div
                      key={hs.id}
                      style={{ top: hs.top, left: hs.left }}
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    >
                      <button
                        onClick={() =>
                          setActiveHotspot(isOpened ? null : hs.id)
                        }
                        className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 focus:outline-none ${
                          isOpened
                            ? 'bg-orange-600 border-white text-white shadow-lg shadow-orange-600/50 scale-110'
                            : 'bg-slate-900/90 border-orange-500/70 text-orange-400 hover:scale-110 hover:bg-orange-600 hover:text-white shadow-md'
                        }`}
                        aria-label={hs.title}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span className="absolute -inset-1 rounded-full border border-orange-500/40 animate-ping pointer-events-none opacity-50" />
                      </button>

                      {/* Hotspot Floating Tooltip Popup */}
                      {isOpened && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 rounded-2xl bg-[#06101e]/98 backdrop-blur-xl border border-orange-500/60 shadow-2xl text-left z-30 animate-in fade-in slide-in-from-bottom-2 duration-200">
                          <span className="text-[9px] font-mono uppercase text-orange-400 font-bold block mb-0.5">
                            Component Telemetry
                          </span>
                          <h5 className="text-xs font-bold text-white mb-1">
                            {hs.title}
                          </h5>
                          <span className="text-[11px] font-mono text-emerald-400 font-bold block">
                            {hs.val}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Bottom Viewport Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="p-3.5 rounded-2xl bg-[#06101e]/90 backdrop-blur-md border border-slate-700/80 shadow-xl">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-white">
                        {currentMode.name}
                      </h4>
                      <span className="text-[10px] font-mono text-orange-400 font-bold">
                        {currentMode.headline}
                      </span>
                    </div>

                    {/* 3 Real-Time Spec Telemetry Badges */}
                    <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-800">
                      {[
                        currentMode.metric1,
                        currentMode.metric2,
                        currentMode.metric3,
                      ].map((m, mIdx) => (
                        <div key={mIdx} className="text-left font-mono">
                          <span className="text-[9px] text-slate-400 block uppercase">
                            {m.label}
                          </span>
                          <span className="text-xs font-bold text-white block mt-0.5">
                            {m.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
