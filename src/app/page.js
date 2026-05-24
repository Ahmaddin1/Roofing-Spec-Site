import AboutSnapshotSection from "@/components/home/AboutSnapshotSection";
import CertificateStrip from "@/components/home/CertificateStrip";
import ContactFormSection from "@/components/home/ContactFormSection";
import HomeHero from "@/components/home/HomeHero";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectGallerySection from "@/components/home/ProjectGallerySection";
import ReviewsSection from "@/components/home/ReviewsSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Austin Roofing Company | Summit Roofing Co.",
  description:
    "Austin roofing company for repairs, replacements, and inspections with licensed crews, free inspections, and fast local response you can trust.",
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Summit Roofing Co.",
    image:
      "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=1200&q=80",
    telephone: "+1-512-555-0199",
    email: "hello@summitroofingco.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1234 Ridgeview Lane",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78704",
      addressCountry: "US",
    },
    areaServed: ["Austin", "Round Rock", "Cedar Park"],
    priceRange: "$$",
    url: "https://summitroofingco.com",
  };

  return (
    <div className="-mt-28 bg-white md:-mt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <HomeHero />
      <CertificateStrip />
      <StatsSection />
      <AboutSnapshotSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectGallerySection />
      <ReviewsSection />
      <ContactFormSection />
      <CTASection
        headline="Need a roofing site that feels credible in the first five seconds?"
        subline="We build fast, local-service websites that help owner-led roofing companies turn visitors into quote requests and calls."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
      />
    </div>
  );
}
