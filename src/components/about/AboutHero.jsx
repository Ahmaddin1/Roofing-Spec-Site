"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function AboutHero() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useGSAP(
    () => {
      const elements = [eyebrowRef.current, headingRef.current, subheadingRef.current];

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(elements, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(elements, { opacity: 0, y: 22 });

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.1,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="px-4 py-24 text-center text-[#1B3A6B] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <p
          ref={eyebrowRef}
          className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F97316]"
        >
          Our Story
        </p>
        <h1
          ref={headingRef}
          className="mx-auto mt-5 max-w-175 text-[clamp(2.75rem,6vw,4.25rem)] font-bold leading-[1.1]"
        >
          Austin&apos;s Trusted Roofing Company Since 2011.
        </h1>
        <p
          ref={subheadingRef}
          className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#1B3A6B]/70"
        >
          Locally owned, community trusted, and backed by 20+ years of hands-on
          roofing experience.
        </p>
      </div>
    </section>
  );
}
