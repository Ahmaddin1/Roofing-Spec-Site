"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    number: "01",
    title: "Call or Submit Form",
    description: "Reach out anytime. We respond within 24 hours.",
  },
  {
    number: "02",
    title: "Free Inspection",
    description: "We assess your roof at no cost, no obligation.",
  },
  {
    number: "03",
    title: "Get Your Quote",
    description: "Transparent pricing. No hidden fees.",
  },
  {
    number: "04",
    title: "Work Begins",
    description: "Our certified crew gets to work on your schedule.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);

  useGSAP(
    () => {
      const stepElements = stepRefs.current.filter(Boolean);
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set([headingRef.current, lineRef.current, ...stepElements], {
          opacity: 1,
          y: 0,
          scaleX: 1,
        });
        return;
      }

      gsap.set(headingRef.current, { opacity: 0, y: 30 });
      gsap.set(stepElements, { opacity: 0, y: 30 });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=80",
          once: true,
        },
      });

      timeline.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      });

      timeline.to(
        stepElements,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
        },
        "-=0.2"
      );

      timeline.to(lineRef.current, {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.out",
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
            How It Works
          </p>
          <h2 className="mt-4 text-[clamp(2.25rem,4vw,2.75rem)] font-bold leading-[1.2] text-[#1B3A6B]">
            Getting Your Roof Fixed Is Simple.
          </h2>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-7 hidden px-24 lg:block">
            <div
              ref={lineRef}
              className="h-0 border-t-2 border-dashed border-[#1B3A6B]/30"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                className="relative rounded-[12px] border border-[#DDE3ED] bg-white px-6 py-8 text-center shadow-[0_18px_35px_rgba(15,37,68,0.08)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3A6B] text-lg font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-[1.3] text-[#1B3A6B]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#1A1A1A]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
