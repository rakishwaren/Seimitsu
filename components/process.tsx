'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  FileText,
  Beaker,
  Scale,
  ArrowRight,
  Sparkles,
  Clock,
  Check,
} from 'lucide-react';

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <FileText className="w-5 h-5" />,
      number: '01',
      title: 'Requirements & DFM Review',
      description:
        'Electrical specs, dimensional envelope, insulation ratings, and estimated volume are reviewed by our senior engineering team.',
      gradient: 'from-amber-600 to-orange-600',
      time: '24 - 48 Hours',
      deliverable:
        'Comprehensive DFM report with winding geometry & tooling feedback',
    },
    {
      icon: <Beaker className="w-5 h-5" />,
      number: '02',
      title: 'Tooling & Prototyping',
      description:
        'Custom bobbin fabrication, pilot CNC winding setup, sample batch assembly, and first-article build in our Klang facility.',
      gradient: 'from-orange-600 to-amber-700',
      time: '1 - 2 Weeks',
      deliverable:
        'First Article Inspection (FAI) physical samples with 3D CMM inspection report',
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      number: '03',
      title: 'Cleanroom Verification',
      description:
        'Impedance analysis, high-potential (Hi-Pot) dielectric testing, thermal cycling, and partial discharge qualification.',
      gradient: 'from-blue-600 to-indigo-600',
      time: '3 - 5 Days',
      deliverable:
        'Complete certificate of analysis (COA) & electrical parameter graphs',
    },
    {
      icon: <Scale className="w-5 h-5" />,
      number: '04',
      title: 'Mass Production Scaling',
      description:
        'Transfer to automated multi-spindle lines with statistical process control (SPC), lot traceability, and automated vision inspection.',
      gradient: 'from-emerald-600 to-teal-600',
      time: 'Continuous Scaling',
      deliverable: 'Barcoded packaging, lot-level traceability & JIT dispatch',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 semiconductor-grid" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-mono mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Turnkey Engineering Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
            A Repeatable Route to{' '}
            <span className="text-orange-600">Volume Mass Production</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Every millimeter and turn of copper wire is governed by strict
            stage-gate quality checkpoints to ensure zero-defect integration.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-2 border-orange-500 shadow-xl shadow-orange-500/10 scale-[1.02]'
                    : 'bg-white border border-slate-200 hover:border-orange-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-md`}
                    >
                      {step.icon}
                    </div>
                    <span className="text-2xl font-black font-mono text-slate-300">
                      {step.number}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-orange-50 border border-orange-200 text-[10px] font-mono font-bold text-orange-800 mb-3">
                    <Clock className="w-3 h-3 text-orange-600" />
                    <span>{step.time}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-orange-950">
                  <span className="text-slate-400 block text-[9px] uppercase tracking-wider mb-0.5 font-bold">
                    Deliverable:
                  </span>
                  {step.deliverable}
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Factory Floor Visual Banner */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="relative lg:col-span-7 w-full h-64 sm:h-80">
            <Image
              src="/images/factory-floor.jpg"
              alt="Seimitsu Electronic Manufacturing Facility in Klang"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/40 to-slate-950" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-orange-300 text-xs font-mono font-bold border border-orange-500/40">
                🇲🇾 Port Klang Cleanroom Facility
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 text-white space-y-4">
            <div className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider">
              Step {steps[activeStep].number} In Action:{' '}
              {steps[activeStep].title}
            </div>
            <h3 className="text-2xl font-black text-white leading-snug">
              {steps[activeStep].deliverable}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Operating out of our Klang industrial hub, our multi-spindle CNC
              automated lines ensure every pilot prototype transitions to mass
              production with 100% repeatability.
            </p>
            <div className="pt-2">
              <Link
                href="/services/customization"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shadow-md"
              >
                Review Full DFM Protocol
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
