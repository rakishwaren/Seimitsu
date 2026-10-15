'use client';

import { useState } from 'react';
import {
  Cpu,
  Zap,
  Activity,
  Layers,
  ShieldCheck,
  Gauge,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

interface DieZone {
  id: string;
  name: string;
  category: string;
  coordinates: string;
  inductance: string;
  tolerance: string;
  frequency: string;
  coreMaterial: string;
  thermalRating: string;
  description: string;
  highlightCoordinates: { x: number; y: number; r: number };
}

const DIE_ZONES: DieZone[] = [
  {
    id: 'zone-1',
    name: 'Planar GaN Power Matrix',
    category: 'High-Frequency Conversion',
    coordinates: 'Die Array [04, 02]',
    inductance: '4.7 µH - 22 µH',
    tolerance: '± 0.5%',
    frequency: '500 kHz - 3.5 MHz',
    coreMaterial: 'Low-Loss MnZn Ferrite / Planar Copper',
    thermalRating: '-40°C to +155°C (AEC-Q200 Class 1)',
    description:
      'Sub-millimeter planar transformer integrated directly with GaN power switching stages. Designed for minimum leakage inductance and maximum thermal efficiency.',
    highlightCoordinates: { x: 50, y: 35, r: 24 },
  },
  {
    id: 'zone-2',
    name: 'Ultra-Fine Sensor Core',
    category: 'Position & Current Sensing',
    coordinates: 'Die Array [02, 06]',
    inductance: '100 µH - 1.2 mH',
    tolerance: '± 0.2%',
    frequency: '10 kHz - 500 kHz',
    coreMaterial: 'High-Permeability Nanocrystalline',
    thermalRating: '-55°C to +175°C',
    description:
      'Precision bobbinless sensor coil wound with 0.015mm ultra-fine enamelled wire. Delivers cleanroom repeatability for wafer stage encoders and servo actuators.',
    highlightCoordinates: { x: 32, y: 60, r: 20 },
  },
  {
    id: 'zone-3',
    name: 'RF Filter & Micro-Choke',
    category: 'Noise Suppression & EMI',
    coordinates: 'Die Array [07, 07]',
    inductance: '1.0 µH - 10 µH',
    tolerance: '± 1.0%',
    frequency: '1 MHz - 50 MHz',
    coreMaterial: 'Carbonyl Iron Powder / Shielded Toroid',
    thermalRating: '-40°C to +125°C',
    description:
      'High-Q inductor designed to eliminate switching harmonics in cleanroom robotics, Automated Test Equipment (ATE), and semiconductor packaging.',
    highlightCoordinates: { x: 68, y: 65, r: 22 },
  },
  {
    id: 'zone-4',
    name: 'Hermetic Isolation Module',
    category: 'Dielectric Barrier',
    coordinates: 'Die Array [05, 05]',
    inductance: 'Isolation: 5.0 kVrms',
    tolerance: 'Creepage: > 8.0 mm',
    frequency: 'DC - 200 kHz',
    coreMaterial: 'Cleanroom Vacuum Epoxy / PTFE',
    thermalRating: 'UL 94V-0 Rated',
    description:
      'High-dielectric barrier component potted under vacuum to eliminate partial discharge in plasma etching power supplies and high-voltage semiconductor testing.',
    highlightCoordinates: { x: 50, y: 50, r: 18 },
  },
];

export function SemiconductorWaferInspector() {
  const [activeZone, setActiveZone] = useState<DieZone>(DIE_ZONES[0]);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0 semiconductor-grid" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-mono mb-4 font-bold">
            <Cpu className="w-3.5 h-3.5 text-orange-600" />
            <span>Interactive Silicon &amp; Coil Architecture Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
            Precision at the{' '}
            <span className="text-orange-600">Semiconductor Scale</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Interact with our virtual 300mm wafer substrate to examine how our
            custom copper micro-magnetics integrate seamlessly into cleanroom
            wafer equipment and power modules.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Wafer Visual Canvas (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-[460px] aspect-square rounded-full p-4 bg-gradient-to-b from-slate-200 via-amber-50/40 to-slate-200 border-2 border-slate-300 shadow-xl">
              {/* Wafer Notch */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-slate-300 rounded-b-md border-b border-orange-600/40 z-20" />

              {/* Concentric rings */}
              <div className="absolute inset-4 rounded-full border border-slate-300/80 pointer-events-none" />
              <div className="absolute inset-12 rounded-full border border-orange-400/30 pointer-events-none" />

              {/* Silicon Wafer Surface */}
              <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-tr from-slate-100 via-white to-orange-50/30 shadow-inner">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <radialGradient
                      id="waferLightGlow"
                      cx="50%"
                      cy="50%"
                      r="50%"
                    >
                      <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.8" />
                      <stop
                        offset="70%"
                        stopColor="#e2e8f0"
                        stopOpacity="0.5"
                      />
                      <stop
                        offset="100%"
                        stopColor="#f8fafc"
                        stopOpacity="0.9"
                      />
                    </radialGradient>
                    <linearGradient
                      id="activeCopperDie"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ea580c" />
                      <stop offset="100%" stopColor="#c2410c" />
                    </linearGradient>
                  </defs>

                  <circle cx="50" cy="50" r="48" fill="url(#waferLightGlow)" />

                  {/* Grid Lines */}
                  {Array.from({ length: 9 }).map((_, i) => (
                    <g key={i} opacity="0.35">
                      <line
                        x1={10 + i * 10}
                        y1="5"
                        x2={10 + i * 10}
                        y2="95"
                        stroke="#94a3b8"
                        strokeWidth="0.3"
                        strokeDasharray="1,1"
                      />
                      <line
                        x1="5"
                        y1={10 + i * 10}
                        x2="95"
                        y2={10 + i * 10}
                        stroke="#94a3b8"
                        strokeWidth="0.3"
                        strokeDasharray="1,1"
                      />
                    </g>
                  ))}

                  {/* Interactive Die Nodes */}
                  {DIE_ZONES.map((zone) => {
                    const isSelected = activeZone.id === zone.id;
                    const { x, y, r } = zone.highlightCoordinates;
                    return (
                      <g
                        key={zone.id}
                        className="cursor-pointer transition-all duration-300 group"
                        onClick={() => setActiveZone(zone)}
                      >
                        {isSelected && (
                          <circle
                            cx={x}
                            cy={y}
                            r={r + 3}
                            fill="none"
                            stroke="#ea580c"
                            strokeWidth="0.9"
                            strokeDasharray="2,2"
                            className="animate-spin origin-center"
                            style={{
                              transformOrigin: `${x}px ${y}px`,
                              animationDuration: '8s',
                            }}
                          />
                        )}

                        <circle
                          cx={x}
                          cy={y}
                          r={r}
                          fill={
                            isSelected ? 'url(#activeCopperDie)' : '#e2e8f0'
                          }
                          stroke={isSelected ? '#c2410c' : '#cbd5e1'}
                          strokeWidth={isSelected ? '1.4' : '0.8'}
                          className="hover:scale-105 transition-transform"
                        />

                        <circle
                          cx={x}
                          cy={y}
                          r="2.5"
                          fill={isSelected ? '#ffffff' : '#64748b'}
                        />
                        <text
                          x={x}
                          y={y + 0.8}
                          fontSize="2.2"
                          fill={isSelected ? '#ffffff' : '#1e293b'}
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          {zone.name.charAt(0)}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* HUD Overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-white/95 border border-slate-200 text-[11px] font-mono text-slate-800 shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>300mm Cleanroom Wafer Active</span>
                </div>
              </div>
            </div>

            {/* Quick selector buttons */}
            <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-md">
              {DIE_ZONES.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activeZone.id === zone.id
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                      : 'bg-white text-slate-700 hover:bg-orange-50 border border-slate-200'
                  }`}
                >
                  {zone.name}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Inspection Telemetry Panel (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-600 font-semibold">
                    {activeZone.coordinates}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                    {activeZone.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {activeZone.category}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-600">
                  <Gauge className="w-6 h-6" />
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {activeZone.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1.5 mb-1">
                    <Zap className="w-3.5 h-3.5 text-orange-600" />
                    Target Inductance
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-mono">
                    {activeZone.inductance}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1.5 mb-1">
                    <Activity className="w-3.5 h-3.5 text-orange-600" />
                    Precision Tolerance
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-mono">
                    {activeZone.tolerance}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1.5 mb-1">
                    <Layers className="w-3.5 h-3.5 text-sky-600" />
                    Frequency
                  </div>
                  <div className="text-xs font-bold text-slate-900 font-mono">
                    {activeZone.frequency}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Thermal Stability
                  </div>
                  <div className="text-xs font-bold text-slate-900 font-mono">
                    {activeZone.thermalRating}
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-orange-50/50 border border-orange-200 mb-6">
                <span className="text-[11px] text-orange-900 font-mono font-bold block mb-1">
                  Core &amp; Conductor Metallurgy:
                </span>
                <span className="text-xs font-medium text-slate-700">
                  {activeZone.coreMaterial}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-mono font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Cleanroom DFM Verified</span>
                </div>
                <Link
                  href="/services/product"
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 transition-colors"
                >
                  View datasheet →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
