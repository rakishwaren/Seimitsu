'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import {
  Menu,
  X,
  ChevronDown,
  Layers,
  Cog,
  Microscope,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceSubpages = [
    {
      name: 'Product Catalog',
      href: '/services/product',
      description: 'Precision custom coils, planar transformers & RF inductors',
      icon: Layers,
      color: 'text-amber-600',
      bg: 'bg-amber-50 border-amber-200',
    },
    {
      name: 'Customization & DFM',
      href: '/services/customization',
      description: 'Cleanroom potting, micro-tolerances & turnkey OEM assembly',
      icon: Cog,
      color: 'text-orange-600',
      bg: 'bg-orange-50 border-orange-200',
    },
    {
      name: 'R&D & Engineering Labs',
      href: '/services/rd',
      description:
        'GaN/SiC magnetics research, FEA modeling & cryogenic testing',
      icon: Microscope,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50 border-indigo-200',
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#06101e]/95 backdrop-blur-xl border-b border-slate-800/80 z-50 transition-all duration-300 shadow-md shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-11 h-7 flex items-center justify-center">
                <Image
                  src="/logo-icon.png"
                  alt="Seimitsu Electronic Logo"
                  width={44}
                  height={28}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-wider text-white leading-tight font-sans">
                  SEIMITSU
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-widest text-slate-300 font-semibold font-sans uppercase">
                  ELECTRONIC
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-slate-800/60"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-slate-800/60"
            >
              About
            </Link>

            <Link
              href="/capabilities"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-slate-800/60"
            >
              Capabilities
            </Link>

            <Link
              href="/industries"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-slate-800/60"
            >
              Industries
            </Link>

            <Link
              href="/quality"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-slate-800/60"
            >
              Quality
            </Link>

            <Link
              href="/careers"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-slate-800/60"
            >
              Careers
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`flex items-center space-x-1 text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                  isServicesOpen
                    ? 'text-white bg-slate-800'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-orange-400' : ''
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {isServicesOpen && (
                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full right-0 w-84 lg:w-96 pt-3 transition-all animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="bg-[#0b172a] border border-slate-700/80 rounded-2xl p-3 shadow-2xl shadow-black/50">
                    <div className="px-3 py-2 mb-2 border-b border-slate-800 flex items-center justify-between">
                      <Link
                        href="/services"
                        onClick={() => setIsServicesOpen(false)}
                        className="text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 flex items-center gap-1 group"
                      >
                        All Services Overview
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-950/80 border border-orange-700/50 text-orange-300 font-mono font-semibold">
                        ISO 9001
                      </span>
                    </div>

                    <div className="space-y-1">
                      {serviceSubpages.map((sub) => {
                        const Icon = sub.icon;
                        return (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all group"
                          >
                            <div className="p-2 rounded-lg border border-slate-700 bg-slate-900/60">
                              <Icon className="w-4 h-4 text-orange-400" />
                            </div>
                            <div className="text-left">
                              <div className="text-sm font-bold text-slate-100 group-hover:text-orange-400">
                                {sub.name}
                              </div>
                              <div className="text-xs text-slate-400 line-clamp-1">
                                {sub.description}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pl-2">
              <Link href="/contact">
                <Button
                  size="sm"
                  className="bg-orange-600 hover:bg-orange-500 text-white shadow-md shadow-orange-600/30 px-4 h-9 rounded-lg font-semibold text-sm border-0 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-orange-200" />
                  Get a Quote
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#06101e] border-t border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-200 hover:text-orange-400 font-semibold py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-200 hover:text-orange-400 font-semibold py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              About
            </Link>

            <Link
              href="/capabilities"
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-200 hover:text-orange-400 font-semibold py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              Capabilities
            </Link>

            <Link
              href="/industries"
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-200 hover:text-orange-400 font-semibold py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              Industries
            </Link>

            <Link
              href="/quality"
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-200 hover:text-orange-400 font-semibold py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              Quality
            </Link>

            {/* Mobile Services section */}
            <div className="py-2 border-y border-slate-800/80 my-2">
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="block text-orange-400 font-bold text-sm px-3 py-1 mb-1"
              >
                Services Overview
              </Link>
              <div className="pl-3 space-y-1">
                {serviceSubpages.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-slate-400 hover:text-orange-400 text-sm py-1.5 px-3 rounded-lg hover:bg-slate-800/50"
                  >
                    • {sub.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/careers"
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-200 hover:text-orange-400 font-semibold py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-200 hover:text-orange-400 font-semibold py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              Contact Us
            </Link>

            <div className="pt-4">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 rounded-xl py-2.5 font-semibold">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get an Engineering Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
