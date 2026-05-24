"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StatsGrid from "@/components/shared/StatsGrid";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const certifications = [
  { name: "GAF Certified", mark: "GAF", color: "text-[#D01F2E]" },
  {
    name: "Owens Corning Preferred",
    mark: "OC",
    color: "text-[#EC6A1C]",
  },
  { name: "BBB Accredited", mark: "BBB", color: "text-[#1D5FA7]" },
  {
    name: "Google Guaranteed",
    mark: "G",
    color: "text-[#4285F4]",
  },
  {
    name: "Texas Contractor License",
    mark: "TX",
    color: "text-[#1B3A6B]",
  },
];

export default function AchievementsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const cards = cardRefs.current.filter(Boolean);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([headingRef.current, subheadingRef.current, ...cards], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      gsap.set([headingRef.current, subheadingRef.current], { opacity: 0, y: 24 });
      gsap.set(cards, { opacity: 0, y: 28 });

      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          once: true,
        },
      });

      gsap.to(subheadingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top bottom-=80",
          once: true,
        },
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top bottom-=60",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-[#D6E4F7] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          ref={headingRef}
          className="text-center text-[clamp(2.1rem,4vw,3rem)] font-bold leading-[1.15] text-[#1B3A6B]"
        >
          By the Numbers.
        </h2>

        <div className="mt-12">
          <StatsGrid />
        </div>

        <h3
          ref={subheadingRef}
          className="mt-16 text-center text-[clamp(1.5rem,3vw,2rem)] font-bold text-[#1B3A6B]"
        >
          Our Certifications &amp; Accreditations.
        </h3>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {certifications.map((cert, index) => (
            <article
              key={cert.name}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="group rounded-[12px] border border-[#DDE3ED] bg-white p-4 text-center shadow-[0_12px_24px_rgba(27,58,107,0.06)]"
            >
              <div className="flex min-h-[120px] items-center justify-center rounded-[10px] border border-[#E5E7EB] bg-[#F8FAFC] px-4">
                <div className="flex flex-col items-center">
                  <span
                    className={`text-4xl font-extrabold tracking-[0.16em] text-black/35 grayscale transition duration-300 group-hover:grayscale-0 ${cert.color}`}
                  >
                    {cert.mark}
                  </span>
                  <span className="mt-2 h-px w-12 bg-[#CBD5E1]" />
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold leading-6 text-[#1B3A6B]">
                {cert.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
