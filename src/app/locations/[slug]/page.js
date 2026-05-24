import { notFound } from "next/navigation";
import LocationPageTemplate from "@/components/location-page/LocationPageTemplate";
import { locationPageMap, locationPages } from "@/data/locations";
import { siteUrl } from "@/data/services";

export function generateStaticParams() {
  return locationPages.map((location) => ({ slug: location.slug }));
}

export function generateMetadata({ params }) {
  const location = locationPageMap[params.slug];

  if (!location) {
    return {};
  }

  return {
    title: `Roofing Company in ${location.city}, ${location.state} | Summit Roofing Co.`,
    description: `Summit Roofing Co. provides roofing services in ${location.city}, ${location.state} with local expertise, fast response, and free inspections for homeowners.`,
    alternates: {
      canonical: `${siteUrl}/locations/${location.slug}`,
    },
  };
}

export default function LocationPage({ params }) {
  const location = locationPageMap[params.slug];

  if (!location) {
    notFound();
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Summit Roofing Co. - ${location.city}`,
    image: location.heroImage,
    telephone: "+1-512-555-0199",
    email: "hello@summitroofingco.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1234 Ridgeview Lane",
      addressLocality: location.city,
      addressRegion: "TX",
      postalCode: "78704",
      addressCountry: "US",
    },
    areaServed: [location.city, ...location.nearbyAreas],
    priceRange: "$$",
    url: `${siteUrl}/locations/${location.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <LocationPageTemplate location={location} />
    </>
  );
}
