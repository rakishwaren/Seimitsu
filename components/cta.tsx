'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import {
  ArrowRight,
  Mail,
  Sparkles,
  FileUp,
  Clock,
  ShieldCheck,
} from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#fafaf9] text-slate-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-200/30 rounded-full blur-[140px]" />
        <div className="absolute inset-0 semiconductor-grid opacity-30" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-14 bg-white border border-slate-200 shadow-2xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-mono mb-6 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Fast-Track Engineering Response</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 text-slate-950">
            Have a Magnetic Requirement <br className="hidden sm:block" />
            <span className="text-orange-600">
              Ready for Engineering Review?
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Share your technical drawings, target performance, and expected
            volume. Our engineering team in Klang will review the fit and
            outline a practical next step within 24 to 48 hours.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10 text-xs font-mono text-slate-600 font-semibold">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange-600" /> 24-48h DFM Response
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-600" /> NDA Protected
            </span>
            <span className="flex items-center gap-1.5">
              <FileUp className="w-4 h-4 text-emerald-600" /> STEP / DWG / PDF
              Accepted
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-500 text-white shadow-xl shadow-orange-600/25 rounded-xl px-8 h-12 text-sm font-bold border-0"
              >
                Launch RFQ & Drawing Portal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a
              href="mailto:sales@seimitsu.com.my"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-sm font-semibold transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-orange-600" />
              sales@seimitsu.com.my
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
