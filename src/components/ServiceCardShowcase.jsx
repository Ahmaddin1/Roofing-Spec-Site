"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ClipboardCheck,
  CloudRainWind,
  Hammer,
  Search,
  Shield,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const iconMap = {
  clipboardCheck: ClipboardCheck,
  cloudRainWind: CloudRainWind,
  hammer: Hammer,
  search: Search,
  shield: Shield,
};

export default function ServiceCardShowcase({ services }) {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const cards = cardRefs.current.filter(Boolean);

      if (!cards.length) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(cards, { opacity: 1, y: 0 });
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
          trigger: sectionRef.current,
          start: "top bottom-=80",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard
          key={service.href}
          ref={(element) => {
            cardRefs.current[index] = element;
          }}
          icon={iconMap[service.icon]}
          {...service}
        />
      ))}
    </div>
  );
}
