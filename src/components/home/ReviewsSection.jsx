"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import ReviewCard from "@/components/shared/ReviewCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const reviews = [
  {
    name: "Sarah M.",
    location: "South Lamar, Austin",
    body: "Summit Roofing made a stressful leak repair feel simple. They showed up when they said they would, explained everything clearly, and left the yard spotless when they finished.",
  },
  {
    name: "Jordan P.",
    location: "Round Rock, TX",
    body: "From the first inspection to the final walkthrough, the crew was professional and easy to work with. The quote was straightforward and there were no surprise charges later.",
  },
  {
    name: "Lisa R.",
    location: "Cedar Park, TX",
    body: "We called after a storm and they were out quickly. They documented the damage, answered all our questions, and got the roof repaired faster than we expected.",
  },
  {
    name: "Daniel T.",
    location: "Mueller, Austin",
    body: "The communication stood out the most. We always knew what was happening next, and the finished roof looks great from the street.",
  },
  {
    name: "Priya K.",
    location: "Georgetown, TX",
    body: "They treated our house with real care and the inspection process never felt pushy. It felt like working with a local company that values its reputation.",
  },
  {
    name: "Marcus H.",
    location: "Kyle, TX",
    body: "Fast response, honest advice, and a crew that respected our schedule. We would absolutely call Summit Roofing again for future work.",
  },
];

export default function ReviewsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const cards = cardRefs.current.filter(Boolean);
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
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
    <section
      ref={sectionRef}
      className="bg-[#D6E4F7] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F97316]">
            What Customers Say
          </p>
          <h2 className="mt-4 text-[clamp(2.25rem,4vw,2.75rem)] font-bold leading-[1.2] text-[#1B3A6B]">
            Hundreds of Happy Homeowners in Austin.
          </h2>
        </div>

        <div className="-mx-4 mt-10 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          <div className="flex gap-6 lg:grid lg:grid-cols-3">
            {reviews.map((review, index) => (
              <div
                key={`${review.name}-${review.location}`}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className="w-[85vw] shrink-0 lg:w-auto"
              >
                <ReviewCard review={review} className="lg:min-h-[280px]" />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-[#6B7280]">
          Reviews sourced from Google Business Profile.
        </p>

        <div className="mt-6 text-center">
          <Link
            href="https://www.google.com/search?q=Summit+Roofing+Co+Austin+reviews"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316]"
          >
            View All Reviews
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
