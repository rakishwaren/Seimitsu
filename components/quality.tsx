'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  FileCheck,
  Sparkles,
  Activity,
  Eye,
  Gauge,
} from 'lucide-react';

export function Quality() {
  const qualityPoints = [
    {
      title: 'Incoming Material Purity & Spectrometry',
      description:
        '100% verification of oxygen-free copper wire purity, enamel dielectric strength, and ferrite magnetic permeability before line release.',
    },
    {
      title: 'Real-Time SPC & CNC Micro-Tension Control',
      description:
        'Continuous statistical process control tracking winding tension, pitch consistency, and dimensional envelope within ±0.001mm.',
    },
    {
      title: 'High-Potential (Hi-Pot) & Partial Discharge Testing',
      description:
        'Dielectric withstand testing up to 5.0 kVrms and corona discharge qualification to ensure long-term semiconductor reliability.',
    },
    {
      title: 'Automated 100% End-of-Line Electrical Sweep',
      description:
        'Automated 4-wire Kelvin resistance, LCR inductance, leakage inductance, and quality factor (Q) automated verification.',
    },
  ];

  return (
    <section
      id="quality"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#fafaf9] text-slate-900 overflow-hidden border-b border-slate-200"
    >
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0 semiconductor-copper-grid" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Quality Assurance System */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono mb-4 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Semiconductor Quality Management</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 text-slate-950 leading-tight">
              Evidence, Not Assumptions: <br />
              <span className="text-orange-600">
                Quality Built Into the Route
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              Defined checkpoints, controlled work instructions, and clear
              acceptance criteria make quality part of the manufacturing
              process—not a final inspection event.
            </p>

            <div className="space-y-4 mb-8">
              {qualityPoints.map((point, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 shadow-sm transition-all flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {point.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/about#certifications">
                <button className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-600/20 border-0 flex items-center gap-2 transition-all">
                  <Award className="w-4 h-4" />
                  View ISO & Cleanroom Certifications
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Cleanroom Metrology Showcase with Real Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-slate-950">
              {/* Actual Cleanroom QA Photo */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/cleanroom-qa.jpg"
                  alt="Quality assurance engineer inspecting precision coil under microscope"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Live Telemetry Overlay Card */}
                <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-slate-900 max-w-[200px]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold block mb-1">
                    Live LCR Measurement
                  </span>
                  <div className="font-mono text-xs space-y-0.5 font-bold">
                    <div className="flex justify-between">
                      <span className="text-slate-500">L (Inductance):</span>
                      <span className="text-slate-900">125.43 µH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">R (DCR):</span>
                      <span className="text-slate-900">3.67 Ω</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Q (Factor):</span>
                      <span className="text-emerald-700">88.2</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Photo Caption & Specs */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-mono font-bold">
                      Klang Cleanroom Lab
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      ● 100% Verification Active
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white drop-shadow-md">
                    Optical Metrology & Precision Impedance Characterization
                  </h4>
                  <p className="text-xs text-slate-300 drop-shadow-sm line-clamp-2">
                    Every first-article build and production batch is verified
                    using high-frequency LCR meters and optical CMM inspection
                    before shipping.
                  </p>
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="p-4 bg-slate-900 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-slate-800/80">
                  <span className="text-[10px] text-slate-400 block font-mono">
                    Electrical Yield
                  </span>
                  <span className="text-base font-black font-mono text-emerald-400">
                    99.85%
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-slate-800/80">
                  <span className="text-[10px] text-slate-400 block font-mono">
                    Tolerance
                  </span>
                  <span className="text-base font-black font-mono text-amber-400">
                    ± 0.001mm
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-slate-800/80">
                  <span className="text-[10px] text-slate-400 block font-mono">
                    Hi-Pot Barrier
                  </span>
                  <span className="text-base font-black font-mono text-blue-400">
                    5.0 kVrms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quality;
