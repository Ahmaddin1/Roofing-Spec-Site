"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function ServicesHero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(contentRef.current, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.1,
          ease: "power2.out",
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div ref={contentRef} className="mx-auto max-w-5xl text-center">
        <h1 className="text-[clamp(2.75rem,6vw,4.25rem)] font-bold leading-[1.1] text-[#1B3A6B]">
          Complete Roofing Services in Austin, Texas.
        </h1>
        <p className="mx-auto mt-6 max-w-[600px] text-base leading-8 text-[#6B7280] sm:text-lg">
          From complete roof replacements to emergency storm repairs, Summit
          Roofing Co. handles every residential roofing need in Austin and
          surrounding areas. Our team delivers clear recommendations, dependable
          workmanship, and service plans built around the way Central Texas homes
          weather heat, wind, and hail.
        </p>
      </div>
    </section>
  );
}
