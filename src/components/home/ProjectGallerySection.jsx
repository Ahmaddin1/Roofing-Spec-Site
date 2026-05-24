"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    alt: "Roof architectural shingle project in Austin, Texas",
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    alt: "Roof replacement project in Austin, Texas",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    alt: "Roof metal project in Austin, Texas",
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    alt: "Roof composite project in Austin, Texas",
  },
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    alt: "Roof residential project in Austin, Texas",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    alt: "Roof asphalt shingle project in Austin, Texas",
  },
];

export default function ProjectGallerySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRefs = useRef([]);
  const [activeProject, setActiveProject] = useState(null);

  useGSAP(
    () => {
      const imageElements = imageRefs.current.filter(Boolean);
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set([headingRef.current, ...imageElements], {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      gsap.set(headingRef.current, { opacity: 0, y: 30 });
      gsap.set(imageElements, { opacity: 0, y: 24, scale: 0.95 });

      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=80",
          once: true,
        },
      });

      ScrollTrigger.batch(imageElements, {
        start: "top bottom-=60",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            stagger: (index) => (index % 3) * 0.08,
          });
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div ref={headingRef} className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
              Our Work
            </p>
            <h2 className="mt-4 text-[clamp(2.25rem,4vw,2.75rem)] font-bold leading-[1.2] text-[#1B3A6B]">
              Recent Projects in Austin and Surrounding Areas.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <button
                key={project.src}
                type="button"
                ref={(element) => {
                  imageRefs.current[index] = element;
                }}
                onClick={() => setActiveProject(project)}
                className="group relative overflow-hidden rounded-xl text-left shadow-[0_18px_35px_rgba(15,37,68,0.08)] transition duration-200 hover:-translate-y-1"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={1200}
                  height={900}
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="aspect-4/3 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F2544]/70 via-[#0F2544]/10 to-transparent opacity-0 transition duration-250 group-hover:opacity-100" />
              </button>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.04] hover:bg-[#ea6a0a]"
            >
              Get a Project Like This
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {activeProject ? (
        <div className="fixed inset-0 z-70 flex items-center justify-center bg-[#0F2544]/90 px-4 py-8">
          <button
            type="button"
            aria-label="Close gallery image"
            onClick={() => setActiveProject(null)}
            className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition duration-200 hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Close gallery overlay"
            onClick={() => setActiveProject(null)}
            className="absolute inset-0 cursor-default"
          />

          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_30px_80px_rgba(15,37,68,0.45)]">
            <Image
              src={activeProject.src}
              alt={activeProject.alt}
              width={1600}
              height={1200}
              sizes="100vw"
              className="max-h-[80vh] w-full object-cover"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
