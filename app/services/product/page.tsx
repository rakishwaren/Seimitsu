'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  Layers,
  Search,
  CheckCircle2,
  Cpu,
  Zap,
  Activity,
  ShieldCheck,
  Sparkles,
  X,
  ExternalLink,
} from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: 'transformers' | 'sensor-coils' | 'inductors' | 'modules';
  image: string;
  tag: string;
  frequencyRange: string;
  inductanceRange: string;
  tolerance: string;
  coreMaterial: string;
  temperatureRange: string;
  applications: string[];
  description: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Planar GaN Power Matrix Transformer',
    category: 'transformers',
    image: '/images/planar-transformer.jpg',
    tag: 'GaN & SiC Power',
    frequencyRange: '200 kHz - 3.5 MHz',
    inductanceRange: '10 µH - 120 µH',
    tolerance: '± 0.5%',
    coreMaterial: 'Low-Loss MnZn 3C95 / Planar PCB Stack',
    temperatureRange: '-40°C to +155°C',
    applications: [
      'AI Server 48V-12V Power Bricks',
      'EV On-Board Chargers',
      'Ultra-Dense Telecom Supplies',
    ],
    description:
      'High power density planar transformer with integrated multi-layer PCB windings designed for maximum thermal dissipation and minimal parasitic leakage.',
  },
  {
    id: 'prod-2',
    name: 'Sub-Millimeter Air-Core Sensor Coil',
    category: 'sensor-coils',
    image: '/images/micro-coils.jpg',
    tag: 'Semiconductor Sensors',
    frequencyRange: 'DC - 500 kHz',
    inductanceRange: '50 µH - 2.5 mH',
    tolerance: '± 0.2%',
    coreMaterial: 'Self-Bonding Ultra-Fine Copper (0.015mm)',
    temperatureRange: '-55°C to +175°C',
    applications: [
      'Wafer Stage Position Feedback',
      'Robotic Fine-Pitch Encoders',
      'Medical Catheter Sensors',
    ],
    description:
      'Bobbinless, self-supporting micro-coil wound with 0.015mm wire. Delivers cleanroom-grade dimensional repeatability and zero magnetic hysteresis.',
  },
  {
    id: 'prod-3',
    name: 'Toroidal Nanocrystalline Filter Choke',
    category: 'inductors',
    image: '/images/coils-showcase.jpg',
    tag: 'Noise Suppression',
    frequencyRange: '10 kHz - 50 MHz',
    inductanceRange: '1.0 mH - 35 mH',
    tolerance: '± 1.0%',
    coreMaterial: 'Nanocrystalline Ribbon / Vitroperm',
    temperatureRange: '-40°C to +130°C',
    applications: [
      'Semiconductor ATE Test Heads',
      'Cleanroom Variable Frequency Drives',
      'Solar Inverter EMI Filtering',
    ],
    description:
      'Ultra-high permeability common-mode choke designed to eliminate electromagnetic interference (EMI) in high-voltage semiconductor testing equipment.',
  },
  {
    id: 'prod-4',
    name: 'Hermetic Vacuum-Potted Isolation Module',
    category: 'modules',
    image: '/images/cleanroom-qa.jpg',
    tag: 'High Voltage Isolation',
    frequencyRange: 'DC - 100 kHz',
    inductanceRange: 'Isolation: 5.0 kVrms',
    tolerance: 'Creepage: > 9.5 mm',
    coreMaterial: 'Dielectric Epoxy / Silica Filled Resin',
    temperatureRange: '-40°C to +150°C',
    applications: [
      'Plasma Etch Power Supplies',
      'Ion Implantation Generators',
      'High-Altitude Avionics',
    ],
    description:
      'Complete potted electromagnetic module processed in a cleanroom vacuum chamber to eliminate micro-voids and ensure zero partial discharge up to 5.0 kVrms.',
  },
  {
    id: 'prod-5',
    name: 'High-Q Micro-Wound RF Choke',
    category: 'inductors',
    image: '/images/cnc-winding.jpg',
    tag: 'High-Frequency RF',
    frequencyRange: '1 MHz - 100 MHz',
    inductanceRange: '0.1 µH - 22 µH',
    tolerance: '± 1.0%',
    coreMaterial: 'Carbonyl Iron Powder / NiZn Ferrite',
    temperatureRange: '-40°C to +125°C',
    applications: [
      'RF Plasma Matching Networks',
      'Signal Processing Hubs',
      'Semiconductor Laser Drivers',
    ],
    description:
      'Compact high-frequency inductor with exceptional Q factor, providing tight resonance control and low insertion loss across demanding RF bandwidths.',
  },
  {
    id: 'prod-6',
    name: 'Miniature Solenoid Actuator Coil',
    category: 'sensor-coils',
    image: '/images/micro-coils.jpg',
    tag: 'Precision Actuation',
    frequencyRange: 'DC - 200 Hz',
    inductanceRange: 'Custom Force Profile',
    tolerance: '± 0.002 mm Dimensional',
    coreMaterial: 'High-Purity Electrolytic Copper & Precision Bobbin',
    temperatureRange: '-40°C to +140°C',
    applications: [
      'Wafer Sorting Vacuum Valves',
      'Pick-and-Place Micro-Grippers',
      'Flow Control Solenoids',
    ],
    description:
      'Engineered for millions of fast actuation cycles in semiconductor wafer sorting equipment with cleanroom-certified low outgassing materials.',
  },
];

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] =
    useState<ProductItem | null>(null);

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#06101e] text-slate-100">
      <Header />
      <main className="pt-20">
        {/* Catalog Hero: Theme Color (Dark Navy #06101e) */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-orange-600/10 rounded-full blur-[140px]" />
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
                Product Catalog
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
              Precision Coil &amp; Magnetics <br />
              <span className="text-orange-400">Component Product Catalog</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-10">
              Explore our line of planar transformers, fine-wire sensor coils,
              and high-dielectric modules built to micron tolerances for
              semiconductor tools, GaN power units, and medical robotics.
            </p>

            {/* Filter & Search Bar */}
            <div className="max-w-3xl mx-auto p-3 rounded-2xl bg-[#0b172a] border border-slate-700 shadow-2xl flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-orange-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by part name, frequency, application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Category Quick Pills */}
              <div className="flex flex-wrap gap-1.5 items-center">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'transformers', label: 'Planar' },
                  { id: 'sensor-coils', label: 'Sensors' },
                  { id: 'inductors', label: 'Inductors' },
                  { id: 'modules', label: 'Modules' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid with Images */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
              <span className="text-xs font-mono text-amber-800 font-bold">
                Showing {filteredProducts.length} Precision Magnetics Products
              </span>
              <span className="text-xs text-slate-500">
                100% Tested • RoHS 3 & REACH Compliant
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-3xl overflow-hidden bg-[#fafaf9] border border-slate-200 hover:border-amber-400 hover:bg-white transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl"
                >
                  {/* Product Image Banner */}
                  <div className="relative w-full h-48 overflow-hidden bg-slate-900">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/95 text-slate-900 font-bold shadow-md">
                        {product.tag}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-mono text-emerald-400 font-bold bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-sm">
                        ✓ FAI Ready
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-black text-white drop-shadow-md leading-tight">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-slate-600 text-xs leading-relaxed mb-5">
                        {product.description}
                      </p>

                      {/* Spec badges grid */}
                      <div className="grid grid-cols-2 gap-2 mb-5 text-xs font-mono">
                        <div className="p-2 rounded-xl bg-white border border-slate-200">
                          <span className="text-[9px] text-slate-400 block font-medium">
                            Frequency
                          </span>
                          <span className="text-slate-900 font-bold text-[11px]">
                            {product.frequencyRange}
                          </span>
                        </div>
                        <div className="p-2 rounded-xl bg-white border border-slate-200">
                          <span className="text-[9px] text-slate-400 block font-medium">
                            Inductance
                          </span>
                          <span className="text-slate-900 font-bold text-[11px]">
                            {product.inductanceRange}
                          </span>
                        </div>
                        <div className="p-2 rounded-xl bg-white border border-slate-200">
                          <span className="text-[9px] text-slate-400 block font-medium">
                            Tolerance
                          </span>
                          <span className="text-emerald-700 font-bold text-[11px]">
                            {product.tolerance}
                          </span>
                        </div>
                        <div className="p-2 rounded-xl bg-white border border-slate-200">
                          <span className="text-[9px] text-slate-400 block font-medium">
                            Temp Rating
                          </span>
                          <span className="text-amber-800 font-bold text-[11px]">
                            {product.temperatureRange}
                          </span>
                        </div>
                      </div>

                      {/* Applications */}
                      <div className="mb-5 pt-3 border-t border-slate-200">
                        <span className="text-[9px] text-slate-400 block mb-1 font-mono uppercase">
                          Key Applications:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {product.applications.map((app, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-medium"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-slate-200 flex gap-2">
                      <button
                        onClick={() => setActiveModalProduct(product)}
                        className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all text-center"
                      >
                        Technical Specs
                      </button>
                      <Link href="/contact" className="flex-1">
                        <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-xs font-bold transition-all shadow-sm">
                          Request Quote
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs Modal */}
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-xl rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-2xl text-slate-900">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-amber-100 text-amber-800 font-bold">
                    {activeModalProduct.tag}
                  </span>
                  <h3 className="text-2xl font-black mt-2 text-slate-950">
                    {activeModalProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 bg-slate-900">
                <Image
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {activeModalProduct.description}
              </p>

              <div className="space-y-2.5 mb-6 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between">
                  <span className="text-slate-500">Core Metallurgy:</span>
                  <span className="text-slate-900 font-bold">
                    {activeModalProduct.coreMaterial}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between">
                  <span className="text-slate-500">Frequency Range:</span>
                  <span className="text-amber-800 font-bold">
                    {activeModalProduct.frequencyRange}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between">
                  <span className="text-slate-500">Tolerance:</span>
                  <span className="text-emerald-700 font-bold">
                    {activeModalProduct.tolerance}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between">
                  <span className="text-slate-500">Temperature Rating:</span>
                  <span className="text-slate-900 font-bold">
                    {activeModalProduct.temperatureRange}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <Link href="/contact" className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl text-xs py-3 font-bold">
                    Submit RFQ For This Part
                  </Button>
                </Link>
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fafaf9] border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-slate-950">
              Need a Custom Winding Geometry Not Listed?
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Over 75% of our production runs are built to custom OEM drawings.
              Explore our turnkey customization workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services/customization">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs px-6 h-11 font-bold shadow-md shadow-amber-600/20">
                  Explore Customization Capabilities →
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-slate-300 text-slate-800 hover:bg-white rounded-xl text-xs px-6 h-11 font-bold"
                >
                  Upload Your CAD File
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

export default ProductCatalog;
