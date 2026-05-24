"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ClipboardCheck,
  CloudRainWind,
  Hammer,
  Search,
  Shield,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  {
    href: "/services/roof-replacement",
    title: "Roof Replacement",
    description:
      "When repairs are no longer enough, we install complete roofing systems designed for long-term protection, better ventilation, and stronger curb appeal. Our replacement process includes material guidance, jobsite protection, and clean, efficient scheduling from tear-off to final walkthrough. We help homeowners choose roofing options that fit both the home and the budget without pressure. Every project is built to stand up to Austin sun, sudden storms, and year-round wear.",
    icon: Hammer,
  },
  {
    href: "/services/roof-repair",
    title: "Roof Repair",
    description:
      "Roof problems rarely stay small for long, which is why we focus on fast, targeted repair work that addresses leaks, lifted shingles, flashing issues, and other vulnerable spots. Our team inspects the surrounding roof area so the repair solves the cause, not just the visible symptom. We work carefully to extend roof life where replacement is not yet necessary. Homeowners get straightforward recommendations and photo-backed explanations every step of the way.",
    icon: Shield,
  },
  {
    href: "/services/roof-inspection",
    title: "Roof Inspection",
    description:
      "Our roof inspections give homeowners a clear picture of the roof's condition after storms, before home sales, or when age starts raising questions. We check shingles, penetrations, flashing, drainage, ventilation, and signs of hidden moisture or impact damage. You receive honest findings and practical next steps instead of a one-size-fits-all sales pitch. It is a smart first step when you need certainty before making a larger roofing decision.",
    icon: Search,
  },
  {
    href: "/services/storm-damage",
    title: "Storm Damage Roofing",
    description:
      "After hail or wind events, we respond quickly to document damage, protect exposed areas, and help homeowners understand what needs immediate attention. Our team knows how to spot the kinds of storm issues that can be missed from the ground but lead to leaks later. We also provide clear documentation that can support the insurance process when needed. The goal is to reduce stress and restore confidence as quickly as possible.",
    icon: CloudRainWind,
  },
  {
    href: "/services/gutter-installation",
    title: "Gutter Installation & Repair",
    description:
      "A healthy roofing system depends on proper drainage, and our gutter services help move water away from rooflines, siding, and foundations effectively. We handle new gutter installation, replacement sections, and repairs for sagging, leaking, or poorly draining systems. Each recommendation is tailored to the roof layout and water flow needs of the property. It is a simple upgrade that can prevent much bigger moisture issues over time.",
    icon: ClipboardCheck,
  },
];

export default function DetailedServicesGrid() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const cards = cardRefs.current.filter(Boolean);

      if (!cards.length) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(cards, { opacity: 0, y: 30 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.72,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=70",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 xl:grid-cols-6">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.href}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                href={service.href}
                className="group flex min-h-[420px] flex-col rounded-[16px] border border-[#DDE3ED] bg-white p-8 transition duration-[250ms] hover:-translate-y-1 hover:border-[#1B3A6B] hover:shadow-[0_18px_35px_rgba(27,58,107,0.12)] xl:col-span-2"
              >
                <div className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#D6E4F7] text-[#1B3A6B]">
                  <Icon size={30} strokeWidth={2} />
                </div>
                <h3 className="text-[1.75rem] font-semibold leading-[1.25] text-[#1A1A1A]">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#6B7280]">
                  {service.description}
                </p>
                <div className="mt-auto pt-8">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316] transition duration-[250ms] group-hover:translate-x-1">
                    Learn More
                    <ArrowRight size={18} strokeWidth={2} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mx-auto mt-8 grid max-w-[calc(66.666%-0.75rem)] gap-8 xl:grid-cols-4">
          {services.slice(3).map((service, index) => {
            const Icon = service.icon;
            const cardIndex = index + 3;

            return (
              <Link
                key={service.href}
                ref={(element) => {
                  cardRefs.current[cardIndex] = element;
                }}
                href={service.href}
                className="group flex min-h-[420px] flex-col rounded-[16px] border border-[#DDE3ED] bg-white p-8 transition duration-[250ms] hover:-translate-y-1 hover:border-[#1B3A6B] hover:shadow-[0_18px_35px_rgba(27,58,107,0.12)] xl:col-span-2"
              >
                <div className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#D6E4F7] text-[#1B3A6B]">
                  <Icon size={30} strokeWidth={2} />
                </div>
                <h3 className="text-[1.75rem] font-semibold leading-[1.25] text-[#1A1A1A]">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#6B7280]">
                  {service.description}
                </p>
                <div className="mt-auto pt-8">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316] transition duration-[250ms] group-hover:translate-x-1">
                    Learn More
                    <ArrowRight size={18} strokeWidth={2} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
