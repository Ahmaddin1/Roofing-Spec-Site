"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function AboutSnapshotSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([textRef.current, imageRef.current], { opacity: 1, x: 0 });
        return;
      }

      gsap.set(textRef.current, { opacity: 0, x: -40 });
      gsap.set(imageRef.current, { opacity: 0, x: 40 });

      gsap.to(textRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=80",
          once: true,
        },
      });

      gsap.to(imageRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=80",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-[#D6E4F7] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24 overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div ref={textRef}>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
            About Summit Roofing Co.
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(2.25rem,4vw,2.75rem)] font-bold leading-[1.2] text-[#1B3A6B]">
            Locally Owned. Community Trusted.
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-[#1A1A1A]">
            <p>
              Summit Roofing Co. started with a simple goal: give Austin homeowners
              a roofing company that shows up on time, explains the work clearly,
              and treats every home with care.
            </p>
            <p>
              What began as a small local crew in Texas has grown through referrals,
              repeat clients, and a reputation for doing the job right without the
              pressure or runaround.
            </p>
            <p>
              We stay rooted in Austin because this is our community too, and we
              believe quality craftsmanship matters most when your name is attached
              to every roof in town.
            </p>
          </div>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#F97316]"
          >
            <span className="border-b border-transparent transition-colors duration-200 group-hover:border-[#F97316]">
              Learn Our Story
            </span>
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div ref={imageRef} className="relative overflow-hidden rounded-2xl shadow-[0_24px_50px_rgba(27,58,107,0.18)]">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
            alt="Miguel Ramirez and the Summit Roofing team in Austin"
            width={1200}
            height={900}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-full min-h-90 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
