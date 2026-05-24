"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const defaultStats = [
  {
    value: 2500,
    suffix: "+",
    label: "Roofs Completed",
  },
  {
    value: 15,
    suffix: "+",
    label: "Years in Business",
  },
  {
    value: 4.9,
    suffix: "",
    label: "Average Rating",
    icon: Star,
    decimals: 1,
  },
  {
    value: 100,
    suffix: "%",
    label: "Satisfaction Guarantee",
  },
];

export default function StatsGrid({ stats = defaultStats }) {
  const gridRef = useRef(null);
  const cardRefs = useRef([]);
  const numberRefs = useRef([]);

  useGSAP(
    () => {
      const cards = cardRefs.current.filter(Boolean);

      if (!cards.length) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(cards, { opacity: 1, y: 0 });
        stats.forEach((stat, index) => {
          if (numberRefs.current[index]) {
            numberRefs.current[index].textContent = `${stat.value}${stat.suffix}`;
          }
        });
        return;
      }

      gsap.set(cards, { opacity: 0, y: 30 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top bottom-=80",
        },
      });

      stats.forEach((stat, index) => {
        const target = numberRefs.current[index];

        if (!target) {
          return;
        }

        const counter = { value: 0 };

        gsap.to(counter, {
          value: stat.value,
          duration: 1.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: target,
            start: "top bottom-=80",
            once: true,
          },
          onUpdate: () => {
            const formattedValue = stat.decimals
              ? counter.value.toFixed(stat.decimals)
              : Math.round(counter.value).toString();

            target.textContent = `${formattedValue}${stat.suffix}`;
          },
        });
      });
    },
    { scope: gridRef, dependencies: [stats] }
  );

  return (
    <div ref={gridRef} className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.label}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            className="rounded-[12px] border border-[#DDE3ED] bg-white p-6 shadow-[0_10px_30px_rgba(27,58,107,0.06)]"
          >
            <div className="mb-5 h-1 w-16 rounded-full bg-[#1B3A6B]" />
            <div className="flex items-center gap-2 text-[#1B3A6B]">
              <p
                ref={(element) => {
                  numberRefs.current[index] = element;
                }}
                className="text-[clamp(2.25rem,4vw,2.75rem)] font-bold leading-none"
              >
                0{stat.suffix}
              </p>
              {Icon ? <Icon size={24} fill="currentColor" strokeWidth={1.8} /> : null}
            </div>
            <p className="mt-3 text-sm leading-6 text-[#6B7280]">{stat.label}</p>
          </article>
        );
      })}
    </div>
  );
}
