"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CTASection({
  headline,
  subline,
  buttonText,
  buttonLink,
  bg = "navy",
}) {
  const sectionRef = useRef(null);
  const isOrange = bg === "orange";

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(sectionRef.current, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=80",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className={`py-16 ${
        isOrange ? "bg-[#F97316]" : "bg-[#1B3A6B]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-[clamp(2.25rem,4vw,2.75rem)] font-bold leading-[1.2] text-white">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
          {subline}
        </p>
        <Link
          href={buttonLink}
          className={`mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition duration-200 hover:scale-[1.04] ${
            isOrange
              ? "bg-white text-[#1B3A6B] hover:bg-[#F5F7FA]"
              : "bg-[#F97316] text-white hover:bg-[#E86610]"
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
