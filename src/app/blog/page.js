import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, CloudRainWind, Hammer, Shield } from "lucide-react";
import { blogIndexCards, blogPosts } from "@/data/blog";

export const metadata = {
  title: "Roofing Blog | Summit Roofing Co.",
  description:
    "Helpful roofing articles from Summit Roofing Co. for homeowners comparing repairs, inspections, storm damage, and roof replacement options.",
};

export default function BlogIndexPage() {
  const featuredPost = blogPosts[0];
  const iconMap = {
    "How to Know If You Need a Roof Replacement in Austin": Hammer,
    "Roof Repair Service": Shield,
    "Storm Damage Roofing": CloudRainWind,
    "More Roofing Tips Coming Soon": AlertTriangle,
  };

  return (
    <div className="bg-white -mt-12">
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
            Summit Roofing Co. Blog
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.75rem,6vw,4rem)] font-bold leading-[1.1] text-[#1B3A6B]">
            Practical Roofing Advice for Homeowners in Central Texas.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#6B7280] sm:text-lg">
            Explore honest guidance on roof replacement, repairs, inspections, storm
            recovery, and the questions homeowners ask most before they call a roofer.
          </p>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="mt-10 grid gap-0 overflow-hidden rounded-2xl border border-[#DDE3ED] shadow-[0_18px_35px_rgba(27,58,107,0.08)] lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)]"
          >
            <Image
              src={featuredPost.featuredImage}
              alt={featuredPost.featuredAlt}
              width={1600}
              height={900}
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="h-full min-h-70 w-full object-cover"
            />
            <div className="bg-white p-8">
              <span className="inline-flex rounded-full bg-[#D6E4F7] px-4 py-2 text-sm font-semibold text-[#1B3A6B]">
                {featuredPost.category}
              </span>
              <h2 className="mt-5 text-[clamp(2rem,4vw,2.5rem)] font-bold leading-[1.15] text-[#1A1A1A]">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-[#6B7280]">{featuredPost.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F97316]">
                Read the Article
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-[#D6E4F7] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.15] text-[#1B3A6B]">
            Helpful Resources
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {blogIndexCards.map((card) => {
              const Icon = iconMap[card.title];

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex min-h-65 flex-col rounded-xl border border-[#DDE3ED] bg-white p-6 transition duration-2250 hover:-translate-y-1 hover:border-[#1B3A6B] hover:shadow-[0_18px_35px_rgba(27,58,107,0.12)]"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D6E4F7] text-[#1B3A6B]">
                    {Icon ? <Icon size={24} strokeWidth={2} /> : null}
                  </div>
                  <h3 className="text-2xl font-semibold leading-[1.3] text-[#1A1A1A]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#6B7280]">{card.description}</p>
                  <span className="mt-auto pt-6 text-sm font-semibold text-[#F97316]">
                    Explore
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
