"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ClipboardCheck,
  CloudRainWind,
  Hammer,
  Search,
  Shield,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  {
    href: "/services/roof-replacement",
    title: "Roof Replacement",
    description:
      "Complete replacement systems built for curb appeal, weather protection, and long-term homeowner confidence.",
    icon: Hammer,
  },
  {
    href: "/services/roof-repair",
    title: "Roof Repair",
    description:
      "Targeted repair work for leaks, damaged shingles, and problem areas before they turn into bigger costs.",
    icon: Shield,
  },
  {
    href: "/services/roof-inspection",
    title: "Roof Inspection",
    description:
      "Detailed inspection services for storm checks, aging roofs, and honest next-step recommendations.",
    icon: Search,
  },
  {
    href: "/services/storm-damage",
    title: "Storm Damage Roofing",
    description:
      "Fast response after hail and wind events with practical guidance and documentation homeowners can use.",
    icon: CloudRainWind,
  },
  {
    href: "/services/gutter-installation",
    title: "Gutter Installation & Repair",
    description:
      "Seamless gutter work that helps protect rooflines, siding, and foundations from water damage.",
    icon: ClipboardCheck,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const cards = cardRefs.current.filter(Boolean);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([headingRef.current, ...cards], { opacity: 1, y: 0 });
        return;
      }

      gsap.set(headingRef.current, { opacity: 0, y: 30 });
      gsap.set(cards, { opacity: 0, y: 30 });

      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=80",
          once: true,
        },
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=40",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
            What We Do
          </p>
          <h2 className="mt-4 text-[clamp(2.25rem,4vw,2.75rem)] font-bold leading-[1.2] text-[#1B3A6B]">
            Complete Roofing Services in Austin
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.href}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              {...service}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-lg border border-[#1B3A6B] px-6 py-3 text-sm font-semibold text-[#1B3A6B] transition duration-200 hover:bg-[#1B3A6B] hover:text-white"
          >
            View All Services -&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
