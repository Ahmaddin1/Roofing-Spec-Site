import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import AchievementsSection from "@/components/about/AchievementsSection";
import TeamSection from "@/components/about/TeamSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Summit Roofing Co. | Roofing Experts in Austin",
  description:
    "Learn the story behind Summit Roofing Co., Austin's trusted local roofing company. Licensed, insured, and committed to quality since 2011.",
};

export default function AboutPage() {
  return (
    <div className="-mt-24">
      <AboutHero />
      <StorySection />
      <AchievementsSection />
      <TeamSection />
      <CTASection
        headline="Ready to Work with Austin's Best Roofers?"
        subline="From storm repairs to full replacements, Summit Roofing Co. delivers clear guidance, dependable crews, and workmanship built for Austin homes."
        buttonText="Get Your Free Inspection"
        buttonLink="/contact"
      />
    </div>
  );
}
