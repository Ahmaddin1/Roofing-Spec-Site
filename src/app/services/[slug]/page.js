import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";
import { city, servicePageMap, servicePages, state } from "@/data/services";

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicePageMap[slug];

  if (!service) {
    return {};
  }

  return {
    title: `${service.name} in ${city}, ${state} | Summit Roofing Co.`,
    description: `Learn about Summit Roofing Co.'s ${service.name.toLowerCase()} services in ${city}, ${state}. Get local help, honest guidance, and a free inspection from a trusted roofing team.`,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicePageMap[slug];

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}