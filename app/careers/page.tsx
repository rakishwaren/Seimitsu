'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  HeartHandshake,
  GraduationCap,
  ShieldCheck,
  Cpu,
  Send,
  X,
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: 'engineering' | 'cleanroom' | 'rd' | 'operations' | 'quality';
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const POSITIONS: JobPosition[] = [
  {
    id: 'job-1',
    title: 'Senior Magnetics Design Engineer (GaN/SiC)',
    department: 'engineering',
    location: 'Klang, Selangor (Hybrid)',
    type: 'Full-Time',
    experience: '5+ Years',
    description:
      'Lead high-frequency planar transformer and resonant inductor development for next-generation power electronics and semiconductor equipment.',
    responsibilities: [
      'Design planar transformer topologies and simulate magnetic flux distribution using Ansys Maxwell.',
      'Collaborate with tier-1 OEM power architects to optimize leakage inductance and thermal dissipation.',
      'Lead First-Article Inspection (FAI) testing and validate high-frequency impedance curves.',
    ],
    requirements: [
      "Bachelor's or Master's in Electrical Engineering or Magnetics.",
      'Proven experience in SMPS magnetics design above 500 kHz.',
      'Familiarity with FEA electromagnetic modeling and AEC-Q200 qualification.',
    ],
  },
  {
    id: 'job-2',
    title: 'Cleanroom Production Supervisor (Coil Winding)',
    department: 'cleanroom',
    location: 'Klang, Selangor (On-Site)',
    type: 'Full-Time',
    experience: '3+ Years',
    description:
      'Supervise automated multi-spindle CNC winding stations and cleanroom vacuum encapsulation lines to achieve zero-defect throughput.',
    responsibilities: [
      'Oversee daily production schedules across cleanroom winding and vacuum potting suites.',
      'Ensure strict ESD S20.20 protocols and cleanroom gowning standards are upheld.',
      'Drive continuous improvement (Kaizen) and line balancing to optimize cycle times.',
    ],
    requirements: [
      'Diploma or Degree in Manufacturing, Mechanical, or Industrial Engineering.',
      'Experience managing cleanroom or electronics assembly environments.',
      'Strong knowledge of ISO 9001 and 5S methodologies.',
    ],
  },
  {
    id: 'job-3',
    title: 'Semiconductor QA / Metrology Engineer',
    department: 'quality',
    location: 'Klang, Selangor (On-Site)',
    type: 'Full-Time',
    experience: '2-4 Years',
    description:
      'Ensure incoming wire metallurgy, dimensional CMM tolerances, and automated Hi-Pot testing meet semiconductor standards.',
    responsibilities: [
      'Operate automated 3D optical coordinate measuring machines (CMM) and LCR test bridges.',
      'Conduct partial discharge testing and prepare Certificate of Analysis (COA) documentation.',
      'Lead root-cause analysis (8D reports) for internal non-conformances.',
    ],
    requirements: [
      'Degree in Quality Engineering, Materials Science, or Electronics.',
      'Hands-on experience with statistical process control (SPC) and gauge R&R.',
      'Knowledge of IATF 16949 standards is an added advantage.',
    ],
  },
  {
    id: 'job-4',
    title: 'R&D Fellow - Micro-Magnetics & Materials',
    department: 'rd',
    location: 'Klang Engineering Lab',
    type: 'Full-Time / Research',
    experience: '3+ Years or Ph.D.',
    description:
      'Investigate novel nanocrystalline ribbon alloys, cryogenic insulation polymers, and nano-dielectric coatings for extreme-environment applications.',
    responsibilities: [
      'Characterize high-temperature core losses up to 175°C under square-wave excitation.',
      'Synthesize low-viscosity vacuum potting resins for bubble-free encapsulation.',
      'Publish technical application notes and file proprietary manufacturing patents.',
    ],
    requirements: [
      'Ph.D. or Master’s in Applied Physics, Materials Engineering, or Magnetics.',
      'Deep background in ferromagnetic materials and dielectric characterization.',
      'Demonstrated lab proficiency with impedance analyzers and thermal chambers.',
    ],
  },
];

export function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [activeJobModal, setActiveJobModal] = useState<JobPosition | null>(
    null,
  );
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');

  const filteredJobs = POSITIONS.filter(
    (pos) => selectedDept === 'all' || pos.department === selectedDept,
  );

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      setApplicationSubmitted(false);
      setActiveJobModal(null);
      setCandidateName('');
      setCandidateEmail('');
    }, 2000);
  };

  const perks = [
    {
      icon: Cpu,
      title: 'Advanced Semiconductor Exposure',
      description:
        'Work alongside world-leading semiconductor foundries and automotive tier-1 OEMs on cutting-edge GaN/SiC hardware.',
    },
    {
      icon: GraduationCap,
      title: 'Continuous Technical Training',
      description:
        'Fully sponsored IPC certifications, Six Sigma Green/Black Belt training, and advanced FEA simulation courses.',
    },
    {
      icon: HeartHandshake,
      title: 'Comprehensive Health & Wellness',
      description:
        'Full outpatient and inpatient medical coverage for employees and dependents, plus regular wellness checkups.',
    },
    {
      icon: Sparkles,
      title: 'Performance & Innovation Bonuses',
      description:
        'Quarterly performance incentives, patent filing rewards, and long-service recognition awards.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#06101e] text-slate-100">
      <Header />
      <main className="pt-20">
        {/* Careers Hero: Theme Color (Dark Navy #06101e) */}
        <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px]" />
            <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px]" />
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-orange-400 text-xs font-mono mb-4 font-bold">
              <Users className="w-4 h-4 text-orange-400" />
              <span>Join Seimitsu Electronic</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white">
              Build the Future of <br />
              <span className="text-orange-400">
                Precision Electronic Manufacturing
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Join our team of magnetics engineers, cleanroom specialists, and
              metrology researchers solving high-frequency hardware challenges
              for global technology leaders.
            </p>

            <a href="#openings">
              <Button className="bg-orange-600 hover:bg-orange-500 text-white rounded-xl px-6 h-11 text-xs font-bold shadow-lg shadow-orange-600/30 border-0">
                Explore Open Positions ({POSITIONS.length})
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </a>
          </div>
        </section>

        {/* Culture & Working Environment: Light / Sketch Background (#f8fafc) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono text-orange-600 font-bold uppercase tracking-widest block mb-2">
                Life at Seimitsu Klang
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950">
                World-Class Cleanroom &amp; Engineering Environment
              </h2>
            </div>

            {/* Facility Photography Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Factory Floor Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group h-72 sm:h-80">
                <img
                  src="/images/factory-floor.jpg"
                  alt="Automated SMT & CNC Winding Lines at Port Klang"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-orange-600 text-white font-mono text-[11px] font-bold shadow-md">
                    50,000 sq.ft. Manufacturing Hub
                  </span>
                </div>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="text-lg font-bold">
                    Automated Multi-Spindle CNC Suite
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    State-of-the-art climate-controlled factory floor engineered
                    for high repeatability and operator ergonomic comfort.
                  </p>
                </div>
              </div>

              {/* Cleanroom QA Metrology */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group h-72 sm:h-80">
                <img
                  src="/images/cleanroom-qa.jpg"
                  alt="Metrology and Quality Assurance Station"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-700 text-white font-mono text-[11px] font-bold shadow-md">
                    ISO Class 6 Cleanroom Lab
                  </span>
                </div>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="text-lg font-bold">
                    Micro-Metrology &amp; Analytical Instrumentation
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Direct access to Keysight impedance analyzers, high-voltage
                    partial discharge chambers, and 3D optical microscopes.
                  </p>
                </div>
              </div>
            </div>

            {/* Perks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-lg hover:border-orange-300 transition-all"
                  >
                    <div className="p-3 rounded-2xl bg-orange-600 text-white w-fit mb-4 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Job Openings Board: Theme Color (Dark Navy #06101e) */}
        <section
          id="openings"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06101e] text-white border-b border-slate-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
              <div>
                <h2 className="text-3xl font-black text-white">
                  Current Opportunities
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  We are hiring across engineering, R&amp;D, and cleanroom
                  manufacturing divisions.
                </p>
              </div>

              {/* Department Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Roles' },
                  { id: 'engineering', label: 'Engineering' },
                  { id: 'cleanroom', label: 'Cleanroom' },
                  { id: 'quality', label: 'Quality' },
                  { id: 'rd', label: 'R&D Lab' },
                ].map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDept(dept.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                      selectedDept === dept.id
                        ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                        : 'bg-[#0b172a] text-slate-300 hover:text-white border border-slate-700'
                    }`}
                  >
                    {dept.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Positions List */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-6 sm:p-8 rounded-3xl bg-[#0b172a] border border-slate-800 shadow-xl hover:border-orange-500/80 transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 group"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-orange-950 text-orange-300 border border-orange-800/50 font-bold uppercase">
                        {job.department}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-orange-400" />
                        {job.location}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-orange-400" />
                        {job.type} • {job.experience}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {job.title}
                    </h3>

                    <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveJobModal(job)}
                    className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold whitespace-nowrap transition-all shadow-md shadow-orange-600/20 border-0"
                  >
                    View Role &amp; Apply →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Application Modal */}
        {activeJobModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-[#0b172a] border border-slate-700 shadow-2xl text-white">
              <div className="flex items-start justify-between pb-4 mb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-mono uppercase text-orange-400 font-bold">
                    {activeJobModal.department} • {activeJobModal.location}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    {activeJobModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveJobModal(null)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!applicationSubmitted ? (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-orange-400 mb-2">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {activeJobModal.responsibilities.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-orange-400 mb-2">
                      Requirements:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {activeJobModal.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fast Apply Form */}
                  <form
                    onSubmit={handleApply}
                    className="pt-4 border-t border-slate-800 space-y-4"
                  >
                    <h4 className="text-sm font-bold text-white">
                      Quick Application:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-300 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={candidateName}
                          onChange={(e) => setCandidateName(e.target.value)}
                          placeholder="e.g. John Doe"
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={candidateEmail}
                          onChange={(e) => setCandidateEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 mb-1">
                        LinkedIn / Portfolio or Note (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs py-3 font-bold shadow-md shadow-orange-600/20 border-0"
                    >
                      <Send className="w-3.5 h-3.5 mr-1.5" />
                      Submit Application For This Role
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Application Received
                  </h4>
                  <p className="text-xs text-slate-300">
                    Thank you, {candidateName}. Our team will review your
                    profile and follow up via {candidateEmail}.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default CareersPage;
