import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { locationPages } from "@/data/locations";

export const metadata = {
  title: "Roofing Service Areas in Austin | Summit Roofing Co.",
  description:
    "Summit Roofing Co. serves Austin and surrounding communities including Round Rock, Cedar Park, and more. Find your area and get a free roof inspection.",
};

export default function LocationsPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#1B3A6B] px-4 py-24 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F97316]">
            Service Areas
          </p>
          <h1 className="mt-5 text-[clamp(2.75rem,6vw,4.25rem)] font-bold leading-[1.1]">
            Roofing Services Across Central Texas.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Summit Roofing Co. serves Austin and nearby communities with the
            same local crew, honest recommendations, and free inspections.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {locationPages.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group flex items-start gap-4 rounded-[14px] border border-[#DDE3ED] bg-[#F8FAFC] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#1B3A6B] hover:shadow-[0_14px_30px_rgba(27,58,107,0.08)]"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#1B3A6B]">
                  <MapPin size={22} strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[#1B3A6B]">
                    {location.city}, {location.state}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                    {location.projectCount} projects completed &middot; serving
                    since {location.sinceYear}
                  </p>
                </div>
                <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-[#F97316] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Not Sure If We Serve Your Area? Just Ask."
        subline="We cover Austin and a wide radius of surrounding communities. Reach out and we'll confirm coverage and schedule your free inspection."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
}
