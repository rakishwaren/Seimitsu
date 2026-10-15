'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  Layers,
  Cog,
  Microscope,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Calculator,
  Cpu,
} from 'lucide-react';

export function ServicesPage() {
  const [activePillarPreview, setActivePillarPreview] = useState(0);
  const [frequency, setFrequency] = useState('500kHz');
  const [currentLevel, setCurrentLevel] = useState('10A');
  const [packageType, setPackageType] = useState('planar');

  const calculateRecommendation = () => {
    if (packageType === 'planar') {
      return {
        topology: 'Multi-Layer Planar PCB Transformer',
        core: 'Low-Loss MnZn 3C95 / 3F4 Ferrite',
        efficiency: '98.9%',
        tolerance: '± 0.2%',
        notes:
          'Optimal for GaN/SiC power supplies and DC-DC converters under 3.5MHz.',
      };
    }
    if (packageType === 'toroid') {
      return {
        topology: 'Toroidal Nanocrystalline Filter Choke',
        core: 'High-Permeability Nanocrystalline Tape',
        efficiency: '99.2%',
        tolerance: '± 0.5%',
        notes:
          'Best for common-mode noise filtering in cleanroom automated test equipment.',
      };
    }
    return {
      topology: 'Sub-Millimeter Bobbinless Air-Core Sensor Coil',
      core: 'Air-Core / Self-Bonding Copper (0.015mm)',
      efficiency: '99.5%',
      tolerance: '± 0.1%',
      notes:
        'Zero eddy current loss, ideal for wafer positioning and linear encoders.',
    };
  };

  const recommendation = calculateRecommendation();

  const servicePillars = [
    {
      id: 'product',
      title: 'Precision Product Catalog',
      badge: 'Components',
      icon: Layers,
      color: 'text-amber-700',
      bg: 'bg-amber-50 border-amber-200',
      gradient: 'from-amber-600 to-orange-600',
      href: '/services/product',
      description:
        'Standard and customized catalog of semiconductor-grade planar transformers, high-Q RF inductors, sensor coils, and encapsulated choke matrices.',
      highlights: [
        'Planar transformers up to 5 MHz switching frequency',
        'Fine-wire sensor coils down to 0.015mm wire diameter',
        'Toroidal common-mode chokes with nanocrystalline cores',
        'RoHS 3 & REACH compliant lead-free terminations',
      ],
      stats: '1,000,000+ Units Shipped Annually',
    },
    {
      id: 'customization',
      title: 'Custom Engineering & DFM',
      badge: 'Turnkey Tailoring',
      icon: Cog,
      color: 'text-orange-700',
      bg: 'bg-orange-50 border-orange-200',
      gradient: 'from-orange-600 to-amber-700',
      href: '/services/customization',
      description:
        'End-to-end design assistance, custom winding fixtures, vacuum encapsulation, and automated PCB assembly tailored to your CAD specifications.',
      highlights: [
        'Dedicated 24-48h DFM engineering turnaround',
        'Custom multi-cavity bobbin tooling and molding',
        'Cleanroom vacuum epoxy potting and bubble-free curing',
        'Surface-mount (SMT) and through-hole turnkey assembly',
      ],
      stats: '48h Prototype Feasibility Report',
    },
    {
      id: 'rd',
      title: 'R&D & High-Frequency Labs',
      badge: 'Next-Gen Research',
      icon: Microscope,
      color: 'text-indigo-700',
      bg: 'bg-indigo-50 border-indigo-200',
      gradient: 'from-blue-600 to-indigo-600',
      href: '/services/rd',
      description:
        'Pioneering research into ultra-high-efficiency magnetics for GaN/SiC power semiconductors, thermal FEA simulation, and extreme-environment qualification.',
      highlights: [
        'Finite Element Analysis (FEA) for magnetic flux & loss',
        'Thermal stress simulation from -55°C to +175°C',
        'Partial discharge (corona) testing up to 5.0 kVrms',
        'Joint development program (JDP) with Tier-1 semiconductor labs',
      ],
      stats: '5.0 kVrms Dielectric Testing Capable',
    },
  ];

  return (
    <div className="min-h-screen bg-[#06101e] text-slate-100">
      <Header />
      <main className="pt-20">
        {/* Services Hero: Theme Color (Dark Navy #06101e) */}
        <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px]" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px]" />
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-orange-400 text-xs font-mono mb-6 font-bold">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Semiconductor Electromagnetic Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
              Full-Spectrum Magnetics Engineering <br />
              <span className="text-orange-400">
                From Custom Prototype to Mass Scaling
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Explore our three core pillars of precision manufacturing:
              specialized catalog products, bespoke DFM customization, and
              cutting-edge R&amp;D for next-generation power semiconductors.
            </p>

            {/* Quick Navigation Tabs to Subpages */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Link href="/services/product">
                <Button className="bg-[#0b172a] hover:bg-slate-800 border border-slate-700 text-slate-200 rounded-xl px-5 h-11 text-xs font-bold gap-2 shadow-sm">
                  <Layers className="w-4 h-4 text-orange-400" />
                  Product Catalog →
                </Button>
              </Link>
              <Link href="/services/customization">
                <Button className="bg-[#0b172a] hover:bg-slate-800 border border-slate-700 text-slate-200 rounded-xl px-5 h-11 text-xs font-bold gap-2 shadow-sm">
                  <Cog className="w-4 h-4 text-orange-400" />
                  Customization &amp; DFM →
                </Button>
              </Link>
              <Link href="/services/rd">
                <Button className="bg-[#0b172a] hover:bg-slate-800 border border-slate-700 text-slate-200 rounded-xl px-5 h-11 text-xs font-bold gap-2 shadow-sm">
                  <Microscope className="w-4 h-4 text-sky-400" />
                  R&amp;D &amp; GaN Labs →
                </Button>
              </Link>
            </div>

            {/* Interactive Pillar Quick-Glance Selector */}
            <div className="max-w-4xl mx-auto p-6 sm:p-7 rounded-3xl bg-[#0b172a]/95 border border-slate-700/80 shadow-2xl text-left backdrop-blur-xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
                    Interactive Services Navigator
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Click pillar to preview:
                </span>
              </div>

              {/* 3 Pillar Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5">
                {servicePillars.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePillarPreview(idx)}
                    className={`p-3 rounded-xl text-left transition-all border ${
                      activePillarPreview === idx
                        ? 'bg-orange-600 text-white border-orange-500 shadow-md shadow-orange-600/30'
                        : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-xs font-bold block truncate">
                      {p.title}
                    </span>
                    <span className="text-[10px] font-mono block opacity-80 truncate">
                      {p.badge}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Pillar Spotlight Preview */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">
                    {servicePillars[activePillarPreview].title}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-xl">
                    {servicePillars[activePillarPreview].description}
                  </p>
                </div>
                <Link
                  href={servicePillars[activePillarPreview].href}
                  className="flex-shrink-0"
                >
                  <Button
                    size="sm"
                    className="bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold border-0"
                  >
                    Open Dedicated Page →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Pillars Showcase: Light / Sketch Background (#f8fafc) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {servicePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="rounded-3xl p-8 bg-white border border-slate-200 hover:border-orange-300 transition-all duration-300 flex flex-col justify-between hover:shadow-xl group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`p-4 rounded-2xl bg-gradient-to-br ${pillar.gradient} text-white shadow-md`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200 font-bold">
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {pillar.description}
                      </p>

                      <ul className="space-y-3 mb-8 pt-4 border-t border-slate-200">
                        {pillar.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-xs text-slate-600"
                          >
                            <CheckCircle2 className="w-4 h-4 text-orange-600 mr-2.5 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-[11px] font-mono text-slate-500 mb-4 pb-3 border-b border-slate-200">
                        <span className="text-orange-800 font-bold">
                          {pillar.stats}
                        </span>
                      </div>
                      <Link href={pillar.href}>
                        <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold h-11 shadow-md shadow-orange-600/20 border-0">
                          Explore {pillar.title}
                          <ArrowRight className="w-4 h-4 ml-1.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interactive Component Configuration Simulator: Theme Color (Dark Navy #06101e) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <div className="rounded-3xl p-8 sm:p-12 bg-[#0b172a] border border-slate-800 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-orange-400 text-xs font-mono mb-2 font-bold border border-slate-700">
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Interactive Engineering Estimator</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Magnetics Topology Selector
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    Select your operational constraints to view recommended
                    winding geometries and semiconductor core materials.
                  </p>
                </div>
                <Link href="/contact">
                  <Button
                    size="sm"
                    className="bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold shadow-md shadow-orange-600/20 border-0"
                  >
                    Send Specs to Engineering
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  {/* Frequency Switcher */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                      Target Switching Frequency
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['100kHz', '500kHz', '2.5MHz'].map((freq) => (
                        <button
                          key={freq}
                          onClick={() => setFrequency(freq)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all ${
                            frequency === freq
                              ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                              : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
                          }`}
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Current Rating */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                      Continuous Current Rating
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['2A (Signal)', '10A (Mid)', '40A+ (High Power)'].map(
                        (curr) => (
                          <button
                            key={curr}
                            onClick={() => setCurrentLevel(curr)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all ${
                              currentLevel === curr
                                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
                            }`}
                          >
                            {curr}
                          </button>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Form Factor */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                      Form Factor Profile
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'planar', label: 'Planar Low-Profile' },
                        { id: 'toroid', label: 'Toroidal Choke' },
                        { id: 'aircore', label: 'Air-Core Sensor' },
                      ].map((geom) => (
                        <button
                          key={geom.id}
                          onClick={() => setPackageType(geom.id)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all ${
                            packageType === geom.id
                              ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                              : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
                          }`}
                        >
                          {geom.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Output Telemetry Card (6 Cols) */}
                <div className="lg:col-span-6 bg-slate-900 p-6 rounded-2xl border border-slate-700 shadow-xl">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                    <span className="text-xs font-mono text-orange-400 font-bold">
                      Engineering Recommendation
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                      Calculated
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">
                        Recommended Architecture:
                      </span>
                      <span className="text-lg font-black text-white">
                        {recommendation.topology}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-2.5 rounded-xl bg-[#0b172a] border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">
                          Magnetic Core
                        </span>
                        <span className="text-xs font-bold text-orange-400">
                          {recommendation.core}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#0b172a] border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">
                          Expected Efficiency
                        </span>
                        <span className="text-xs font-bold text-emerald-400 font-mono">
                          {recommendation.efficiency}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0b172a] border border-slate-800 text-xs text-slate-300">
                      <span className="text-orange-400 font-bold block mb-0.5">
                        DFM Insight:
                      </span>
                      {recommendation.notes}
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold py-3 shadow-md shadow-orange-600/20 border-0">
                      Request CAD Feasibility For This Configuration
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

export default ServicesPage;
