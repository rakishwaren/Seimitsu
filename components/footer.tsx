'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Globe,
  Award,
  Sparkles,
} from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    function updateClocks() {
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };

      setTimes({
        malaysia: new Intl.DateTimeFormat('en-US', {
          ...options,
          timeZone: 'Asia/Kuala_Lumpur',
        }).format(new Date()),
        california: new Intl.DateTimeFormat('en-US', {
          ...options,
          timeZone: 'America/Los_Angeles',
        }).format(new Date()),
        germany: new Intl.DateTimeFormat('en-US', {
          ...options,
          timeZone: 'Europe/Berlin',
        }).format(new Date()),
        taiwan: new Intl.DateTimeFormat('en-US', {
          ...options,
          timeZone: 'Asia/Taipei',
        }).format(new Date()),
      });
    }

    updateClocks();
    const interval = setInterval(updateClocks, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#040a14] text-slate-300 border-t border-slate-800 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 tech-grid" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Global Tech Hub Timezones bar */}
        <div className="mb-14 p-4 rounded-2xl bg-[#0b172a] border border-slate-800 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              city: 'Klang, Malaysia (HQ)',
              time: times.malaysia || 'Loading...',
              tag: 'Primary Fab & Labs',
            },
            {
              city: 'Silicon Valley, USA',
              time: times.california || 'Loading...',
              tag: 'OEM Liaison',
            },
            {
              city: 'Munich, Germany',
              time: times.germany || 'Loading...',
              tag: 'European Logistics',
            },
            {
              city: 'Hsinchu, Taiwan',
              time: times.taiwan || 'Loading...',
              tag: 'Wafer Fab Partners',
            },
          ].map((hub, idx) => (
            <div
              key={idx}
              className="flex flex-col border-l-2 border-orange-500/60 pl-3"
            >
              <span className="text-[11px] text-orange-400 font-mono font-semibold flex items-center gap-1">
                <Globe className="w-3 h-3" />
                {hub.city}
              </span>
              <span className="text-base font-bold text-white font-mono">
                {hub.time}
              </span>
              <span className="text-[10px] text-slate-400">{hub.tag}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info with Logo */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 group mb-4">
              <div className="relative w-11 h-7 flex items-center justify-center">
                <Image
                  src="/logo-icon.png"
                  alt="Seimitsu Electronic Logo"
                  width={44}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white">
                  SEIMITSU
                </span>
                <span className="text-[10px] tracking-wider text-slate-300 font-semibold font-mono uppercase">
                  Precision Magnetics
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
              Precision contract manufacturer of custom coils, GaN/SiC power
              transformers, RF inductors, and automated electromechanical
              assemblies engineered for repeatable performance.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-sky-400 border border-slate-800 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" /> ISO
                9001:2015
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-orange-400 border border-slate-800 flex items-center gap-1 font-semibold">
                <Award className="w-3.5 h-3.5 text-orange-400" /> IATF 16949
                Ready
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-emerald-400 border border-slate-800 font-semibold">
                RoHS &amp; REACH Compliant
              </span>
            </div>
          </div>

          {/* Navigation - Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Services &amp; Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1"
                >
                  Services Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/services/product"
                  className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1"
                >
                  Product Catalog{' '}
                  <ArrowUpRight className="w-3 h-3 text-orange-400 opacity-70" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/customization"
                  className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1"
                >
                  Customization &amp; DFM{' '}
                  <ArrowUpRight className="w-3 h-3 text-orange-400 opacity-70" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/rd"
                  className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1"
                >
                  R&amp;D &amp; High-Freq Labs{' '}
                  <ArrowUpRight className="w-3 h-3 text-orange-400 opacity-70" />
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                >
                  Coil Winding Capabilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation - Company & Careers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                >
                  About Seimitsu
                </Link>
              </li>
              <li>
                <Link
                  href="/about#certifications"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                >
                  Certifications &amp; Standards
                </Link>
              </li>
              <li>
                <Link
                  href="/about#customers"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                >
                  Our Customers &amp; Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  Careers{' '}
                  <span className="px-1.5 py-0.2 text-[10px] rounded bg-orange-950 text-orange-300 border border-orange-700/50 font-semibold">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                >
                  Contact &amp; Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Fast RFQ / Contact Box */}
          <div className="bg-[#0b172a] rounded-2xl p-5 border border-slate-800 shadow-xl">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-orange-400" />
              Engineering Desk
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Send your technical specifications or STEP models for 24-48h DFM
              feedback.
            </p>
            <Link href="/contact">
              <Button
                size="sm"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs mb-3 font-semibold shadow-md shadow-orange-600/20 border-0"
              >
                Launch RFQ Portal
              </Button>
            </Link>
            <div className="text-xs space-y-1.5 text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <a
                  href="mailto:sales@seimitsu.com.my"
                  className="hover:text-orange-400 transition-colors"
                >
                  sales@seimitsu.com.my
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>Klang, Selangor, Malaysia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Seimitsu Electronic (M) Sdn. Bhd.
            Precision Custom Magnetics. All rights reserved.
          </p>
          <div className="flex space-x-6 text-slate-400 font-medium">
            <span>Precision Coil Winding</span>
            <span>•</span>
            <span>DFM Fast-Track</span>
            <span>•</span>
            <span>Global Export Approved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
