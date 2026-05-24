"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Phone,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import ReviewCard from "@/components/shared/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import { phoneDisplay, phoneHref, serviceSummaries } from "@/data/services";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function HeroSection({ location }) {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useGSAP(
    () => {
      const items = itemRefs.current.filter(Boolean);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(items, { opacity: 0, y: 24 });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.12,
        delay: 0.1,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-[#1B3A6B] px-4 py-24 text-center text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p
          ref={(element) => {
            itemRefs.current[0] = element;
          }}
          className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F97316]"
        >
          Roofing Services
        </p>
        <h1
          ref={(element) => {
            itemRefs.current[1] = element;
          }}
          className="mx-auto mt-5 max-w-[850px] text-[clamp(2.75rem,6vw,4.25rem)] font-bold leading-[1.1]"
        >
          Roofing Company in {location.city}, {location.state} - Trusted Local Experts.
        </h1>
        <p
          ref={(element) => {
            itemRefs.current[2] = element;
          }}
          className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/70"
        >
          Summit Roofing Co. has been serving {location.city} homeowners since{" "}
          {location.sinceYear}. Licensed, insured, and backed by {location.projectCount}+
          completed roofing projects in the area.
        </p>
        <div
          ref={(element) => {
            itemRefs.current[3] = element;
          }}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.04] hover:bg-[#E86610]"
          >
            Get a Free Inspection
          </Link>
          <a
            href={`tel:${phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white hover:text-[#1B3A6B]"
          >
            <Phone size={16} strokeWidth={2} />
            Call {phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

function IntroSection({ location }) {
  const sectionRef = useRef(null);
  const paragraphRefs = useRef([]);

  useGSAP(
    () => {
      const paragraphs = paragraphRefs.current.filter(Boolean);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(paragraphs, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(paragraphs, { opacity: 0, y: 24 });

      gsap.to(paragraphs, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=70",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[800px]">
        <h2 className="text-center text-[clamp(2rem,4vw,2.9rem)] font-bold leading-[1.15] text-[#1B3A6B]">
          Roofing in {location.city}: What Homeowners Need to Know.
        </h2>
        <div className="mt-8 space-y-5 text-base leading-8 text-[#4B5563]">
          {location.intro.map((paragraph, index) => (
            <p
              key={`${location.slug}-intro-${index}`}
              ref={(element) => {
                paragraphRefs.current[index] = element;
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ location }) {
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
      gsap.set(cards, { opacity: 0, y: 24 });

      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=80",
          once: true,
        },
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=30",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-[#D6E4F7] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef} className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(2rem,4vw,2.9rem)] font-bold leading-[1.15] text-[#1B3A6B]">
            Our Roofing Services in {location.city}.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {serviceSummaries.map((service, index) => (
            <ServiceCard
              key={service.href}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              {...service}
            />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-8 text-[#6B7280]">
          All our services are available throughout {location.city} and within a{" "}
          {location.radiusMiles}-mile radius. No travel fees. The same crew that
          serves Austin serves you.
        </p>
      </div>
    </section>
  );
}

function WhyChooseSection({ location }) {
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
    <section ref={sectionRef} className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <div ref={textRef}>
          <h2 className="text-[clamp(2rem,4vw,2.9rem)] font-bold leading-[1.15] text-[#1B3A6B]">
            Why {location.city} Homeowners Choose Summit Roofing.
          </h2>
          <div className="mt-8 space-y-4">
            {location.whyPoints.map((point) => (
              <div
                key={point}
                className="flex gap-4 rounded-[14px] border border-[#DDE3ED] bg-[#F8FAFC] p-5"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#F97316]" />
                <p className="text-sm leading-7 text-[#4B5563]">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={imageRef} className="overflow-hidden rounded-[16px] border border-[#DDE3ED] shadow-[0_24px_50px_rgba(27,58,107,0.12)]">
          <Image
            src={location.whyImage}
            alt={`Completed roof project in ${location.city}, ${location.state}`}
            width={1200}
            height={900}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function GallerySection({ location }) {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  useGSAP(
    () => {
      const images = imageRefs.current.filter(Boolean);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(images, { opacity: 1, scale: 1 });
        return;
      }

      gsap.set(images, { opacity: 0, scale: 0.95 });

      gsap.to(images, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
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
    <section ref={sectionRef} className="bg-[#D6E4F7] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-[clamp(2rem,4vw,2.9rem)] font-bold leading-[1.15] text-[#1B3A6B]">
          Recent Roofing Projects in {location.city}.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {location.gallery.map((item, index) => (
            <figure
              key={`${location.slug}-gallery-${index}`}
              ref={(element) => {
                imageRefs.current[index] = element;
              }}
              className="overflow-hidden rounded-[12px] border border-[#DDE3ED] bg-white shadow-[0_14px_34px_rgba(27,58,107,0.08)]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={1200}
                height={720}
                sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                className="h-60 w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-sm text-[#6B7280]">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection({ location }) {
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
      gsap.set(cards, { opacity: 0, y: 24 });

      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=80",
          once: true,
        },
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=30",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          ref={headingRef}
          className="text-center text-[clamp(2rem,4vw,2.9rem)] font-bold leading-[1.15] text-[#1B3A6B]"
        >
          What {location.city} Homeowners Are Saying.
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {location.reviews.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection({ location }) {
  return (
    <section className="bg-white">
      <div className="px-4 py-12 text-center sm:px-6 lg:px-8">
        <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-[#1B3A6B]">
          We Serve {location.city} and Surrounding Areas.
        </h3>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {location.nearbyAreas.map((area) => (
            <span
              key={area}
              className="rounded-full bg-[#F3F4F6] px-4 py-2 text-sm font-medium text-[#6B7280]"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
      <iframe
        title={`Map of ${location.city}, ${location.state} service area`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          location.mapQuery
        )}&z=11&output=embed`}
        className="h-[400px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="rounded-[12px] border border-[#DDE3ED] bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold leading-7 text-[#1B3A6B]">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#1B3A6B] transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden px-6 transition-[max-height,padding-bottom] duration-300 ${
          isOpen ? "max-h-48 pb-5" : "max-h-0 pb-0"
        }`}
      >
        <p className="text-sm leading-7 text-[#6B7280]">{faq.answer}</p>
      </div>
    </div>
  );
}

function FAQSection({ location }) {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const itemRefs = useRef([]);

  useGSAP(
    () => {
      const items = itemRefs.current.filter(Boolean);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([headingRef.current, ...items], { opacity: 1, y: 0 });
        return;
      }

      gsap.set(headingRef.current, { opacity: 0, y: 24 });
      gsap.set(items, { opacity: 0, y: 20 });

      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=80",
          once: true,
        },
      });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=30",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-[#D6E4F7] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[800px]">
        <h2
          ref={headingRef}
          className="text-center text-[clamp(2rem,4vw,2.9rem)] font-bold leading-[1.15] text-[#1B3A6B]"
        >
          Frequently Asked Questions from {location.city} Homeowners.
        </h2>

        <div className="mt-10 space-y-4">
          {location.faqs.map((faq, index) => (
            <div
              key={faq.question}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LocationPageTemplate({ location }) {
  return (
    <div className="-mt-28 bg-white md:-mt-32">
      <HeroSection location={location} />
      <IntroSection location={location} />
      <ServicesSection location={location} />
      <WhyChooseSection location={location} />
      <GallerySection location={location} />
      <ReviewsSection location={location} />
      <MapSection location={location} />
      <FAQSection location={location} />
      <CTASection
        headline={`Ready to Get Your ${location.city} Roof Inspected? It's Free.`}
        subline={`Talk with Summit Roofing Co. about repairs, replacements, inspections, or storm concerns in ${location.city}.`}
        buttonText="Book My Free Inspection"
        buttonLink="/contact"
      />
    </div>
  );
}
