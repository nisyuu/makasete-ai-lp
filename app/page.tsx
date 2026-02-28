import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { DokushoFukuzoSection } from '@/components/dokusho-fukuzo-section';
// import { HowItWorksSection } from '@/components/how-it-works-section';
import { UseCasesSection } from '@/components/use-cases-section';
import { BenefitsSection } from '@/components/benefits-section';
import { PricingSection } from '@/components/pricing-section';
import { FAQSection } from '@/components/faq-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DokushoFukuzoSection />
        {/* <HowItWorksSection /> */}
        <UseCasesSection />
        <BenefitsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
