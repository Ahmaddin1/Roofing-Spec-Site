"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { BadgeCheck, FileText, ShieldCheck } from "lucide-react";

const headline =
  "Austin's Trusted Roofing Experts for Repairs & Replacements";

const trustItems = [
  { label: "Licensed & Insured", icon: ShieldCheck },
  { label: "Free Estimates", icon: FileText },
  { label: "Lifetime Workmanship Warranty", icon: BadgeCheck },
];

export default function HomeHero() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const wordRefs = useRef([]);
  const subheadingRef = useRef(null);
  const buttonGroupRef = useRef(null);
  const imageRef = useRef(null);
  const trustStripRef = useRef(null);

  useGSAP(
    () => {
      const words = wordRefs.current.filter(Boolean);

      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(max-width: 767px)").matches
      ) {
        gsap.set(
          [
            eyebrowRef.current,
            ...words,
            subheadingRef.current,
            buttonGroupRef.current,
            imageRef.current,
            trustStripRef.current,
          ],
          { opacity: 1, y: 0, x: 0 }
        );
        return;
      }

      gsap.set(words, { opacity: 0, y: 20 });
      gsap.set(
        [
          eyebrowRef.current,
          subheadingRef.current,
          buttonGroupRef.current,
          trustStripRef.current,
        ],
        { opacity: 0, y: 20 }
      );
      gsap.set(imageRef.current, { opacity: 0, x: 40 });

      const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

      timeline
        .to(eyebrowRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          delay: 0.1,
        })
        .to(
          words,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.05,
          },
          "-=0.1"
        )
        .to(
          subheadingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
          },
          "-=0.15"
        )
        .to(
          buttonGroupRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
          },
          "-=0.1"
        )
        .to(
          imageRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
          },
          "-=0.45"
        )
        .to(
          trustStripRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
          },
          0.8
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-svh bg-[#1B3A6B] px-4 pb-12 pt-32 text-white sm:px-6 md:pb-16 md:pt-36 lg:px-8 lg:pb-24 lg:pt-40"
    >
      <div className="mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl flex-col justify-between gap-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p
              ref={eyebrowRef}
              className="text-xs font-semibold uppercase tracking-widest text-[#F97316]"
            >
              Trusted Roofing - Austin, Texas
            </p>

            <h1 className="mt-5 max-w-175 text-[clamp(3rem,6vw,4rem)] font-bold leading-[1.1]">
              {headline.split(" ").map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  ref={(element) => {
                    wordRefs.current[index] = element;
                  }}
                  className="mr-[0.32em] inline-block"
                >
                  {word}
                </span>
              ))}
            </h1>

            <p
              ref={subheadingRef}
              className="mt-4 max-w-2xl text-lg leading-8 text-white/75"
            >
              Licensed & Insured | 2,500+ Roofs Completed | Free Inspections
            </p>

            <div
              ref={buttonGroupRef}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.04] hover:bg-[#E86610]"
              >
                Get a Free Inspection
              </Link>
              <a
                href="tel:+15125550199"
                className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white hover:text-[#1B3A6B]"
              >
                Call Us Now
              </a>
            </div>
          </div>

          <div
            ref={imageRef}
            className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_28px_60px_rgba(15,37,68,0.28)]"
          >
            <div className="absolute inset-y-0 left-0 z-10 hidden w-1/3 bg-linear-to-r from-[#1B3A6B] via-[#1B3A6B]/65 to-transparent lg:block" />
            <Image
              src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=1200&q=80"
              alt="Austin roofing crew working on a residential roof replacement"
              width={1200}
              height={900}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-full min-h-90 w-full object-cover"
            />
          </div>
        </div>

        <div
          ref={trustStripRef}
          className="flex flex-col items-start gap-4 rounded-lg border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm lg:flex-row lg:items-center lg:justify-between"
        >
          {trustItems.map(({ label, icon: Icon }, index) => (
            <div
              key={label}
              className="flex items-center gap-3 text-sm font-medium text-white/70"
            >
              <Icon size={20} strokeWidth={2} className="text-white" />
              <span>{label}</span>
              {index < trustItems.length - 1 ? (
                <span className="ml-1 hidden h-1.5 w-1.5 rounded-full bg-white/30 lg:inline-block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
