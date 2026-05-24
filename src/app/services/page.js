import CTASection from "@/components/CTASection";
import DetailedServicesGrid from "@/components/services/DetailedServicesGrid";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata = {
  title: "Roofing Services in Austin | Summit Roofing Co.",
  description:
    "Explore Summit Roofing Co.'s full range of roofing services in Austin, from replacements and repairs to inspections, storm damage response, and gutter work.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <ServicesHero />
      <DetailedServicesGrid />
      <CTASection
        headline="Not Sure Which Service You Need? We'll Help."
        subline="Tell us what is happening with your roof, and we will point you toward the right next step without the guesswork."
        buttonText="Talk to an Expert"
        buttonLink="/contact"
      />
    </div>
  );
}
