import { Hero } from "@/components/home/hero";
import { PatternInterrupt } from "@/components/home/pattern-interrupt";
import { ResonanceBullets } from "@/components/home/resonance-bullets";
import { Outcomes } from "@/components/home/outcomes";
import { ProductSuite } from "@/components/home/product-suite";
import { Mechanisms } from "@/components/home/mechanisms";
import { Timeline } from "@/components/home/timeline";
import { ProofStack } from "@/components/home/proof-stack";
import { FAQ } from "@/components/home/faq";
import { CTABlock } from "@/components/home/cta-block";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <PatternInterrupt />
      <ResonanceBullets />
      <Outcomes />
      <ProductSuite />
      <Mechanisms />
      <Timeline />
      <ProofStack />
      <FAQ />
      <CTABlock />
    </div>
  );
}
