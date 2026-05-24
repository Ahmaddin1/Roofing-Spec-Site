"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const teamMembers = [
  {
    name: "Miguel Ramirez",
    role: "Founder & Owner",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Danielle Brooks",
    role: "Operations Manager",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Trevor Cole",
    role: "Lead Project Manager",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=320&q=80",
  },
];

export default function TeamSection() {
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

      gsap.set(headingRef.current, { opacity: 0, y: 24 });
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

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power2.out",
        stagger: 0.12,
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
    <section ref={sectionRef} className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          ref={headingRef}
          className="text-center text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.15] text-[#1B3A6B]"
        >
          Meet the Team.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="rounded-[16px] border border-[#DDE3ED] bg-[#F8FAFC] px-6 py-8 text-center shadow-[0_14px_34px_rgba(27,58,107,0.06)]"
            >
              <Image
                src={member.photo}
                alt={`${member.name}, ${member.role} at Summit Roofing Co.`}
                width={96}
                height={96}
                sizes="96px"
                className="mx-auto h-24 w-24 rounded-full border border-[#DDE3ED] object-cover"
              />
              <h4 className="mt-5 text-xl font-semibold text-[#1B3A6B]">{member.name}</h4>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
