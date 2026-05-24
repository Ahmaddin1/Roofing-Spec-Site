"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function StorySection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      const items = [textRef.current, imageRef.current];

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(items, { opacity: 1, x: 0 });
        return;
      }

      gsap.set(textRef.current, { opacity: 0, x: -40 });
      gsap.set(imageRef.current, { opacity: 0, x: 40 });

      gsap.to(textRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          once: true,
        },
      });

      gsap.to(imageRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div ref={textRef}>
          <h2 className="text-[clamp(2.1rem,4vw,3rem)] font-bold leading-[1.15] text-[#1B3A6B]">
            How It All Started.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-8 text-[#374151]">
            <p>
              Summit Roofing Co. was founded in 2011 by Miguel Ramirez after more
              than a decade spent on roofing crews across Central Texas. He had
              seen too many homeowners in Austin get rushed through high-pressure
              sales pitches, vague scopes, and cleanup that never matched the
              promises made on day one.
            </p>
            <p>
              Miguel started Summit with a simple idea: build a local roofing
              company that treated every project like it belonged to a neighbor.
              That meant honest inspections, clear photos, straightforward pricing,
              and crews who respected the property as much as the roof itself.
            </p>
            <p>
              From the beginning, the work came from referrals in neighborhoods
              like South Lamar, Mueller, Circle C, and Tarrytown. Homeowners there
              needed a contractor who understood how Austin heat, hail season,
              sudden windstorms, and long stretches of sun could wear down shingles,
              flashing, and ventilation year after year.
            </p>
            <p>
              What makes Summit different from a national chain is that the people
              quoting the job are the same people accountable for the outcome. We
              are not routing customers through a call center or swapping in
              unfamiliar subcontractors. Our team lives here, works here, and knows
              that reputation in this city is earned one roof at a time.
            </p>
            <p>
              That local mindset also shows up off the jobsite. Summit supports
              neighborhood cleanup days, youth sports sponsorships, and post-storm
              tarp assistance for families who need quick help before insurance
              paperwork catches up. We believe a roofing company should protect more
              than homes. It should strengthen the community around them too.
            </p>
          </div>
        </div>

        <div ref={imageRef} className="lg:pt-4">
          <div className="overflow-hidden rounded-xl border border-[#DDE3ED] shadow-[0_24px_50px_rgba(27,58,107,0.12)]">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
              alt="Summit Roofing founder Miguel Ramirez with his crew in Austin"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
