import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SemiconductorWaferInspector } from '@/components/semiconductor-wafer';
import { Capabilities } from '@/components/capabilities';
import { Process } from '@/components/process';
import { Industries } from '@/components/industries';
import { Quality } from '@/components/quality';
import { FAQ } from '@/components/faq';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';
import { ScrollReveal } from '@/components/scroll-reveal';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06101e] text-slate-100 selection:bg-orange-500/25 selection:text-orange-200">
      <Header />
      <main>
        <Hero />

        {/* Interactive Semiconductor Silicon Wafer Die Inspector */}
        <ScrollReveal delay={100}>
          <SemiconductorWaferInspector />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div id="capabilities">
            <Capabilities />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Process />
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div id="industries">
            <Industries />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div id="quality">
            <Quality />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={350}>
          <FAQ />
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div id="careers">
            <CTA />
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
