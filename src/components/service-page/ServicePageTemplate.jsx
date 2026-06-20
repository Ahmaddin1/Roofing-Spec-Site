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
import * as LucideIcons from "lucide-react";
import CTASection from "@/components/CTASection";
import ReviewCard from "@/components/shared/ReviewCard";
import {
  city,
  phoneDisplay,
  phoneHref,
  servicePageMap,
  state,
} from "@/data/services";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ServiceHero({ service }) {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      const textItems = textRefs.current.filter(Boolean);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([...textItems, imageRef.current], { opacity: 1, y: 0, x: 0 });
        return;
      }

      gsap.set(textItems, { opacity: 0, y: 24 });
      gsap.set(imageRef.current, { opacity: 0, x: 40 });

      const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

      timeline.to(textItems, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.12,
        delay: 0.1,
      });

      timeline.to(
        imageRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
        },
        "-=0.45"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-[#1B3A6B] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div>
          <p
            ref={(element) => {
              textRefs.current[0] = element;
            }}
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F97316]"
          >
            {city} Roofing Services
          </p>
          <h1
            ref={(element) => {
              textRefs.current[1] = element;
            }}
            className="mt-5 max-w-162.5 text-[clamp(2.75rem,6vw,4.25rem)] font-bold leading-[1.1]"
          >
            {service.name} in {city}, {state}.
          </h1>
          <p
            ref={(element) => {
              textRefs.current[2] = element;
            }}
            className="mt-5 max-w-2xl text-lg leading-8 text-white/75"
          >
            {service.heroDescription}
          </p>
          <div
            ref={(element) => {
              textRefs.current[3] = element;
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.04] hover:bg-[#E86610]"
            >
              Get a Free Inspection
            </Link>
            <a
              href={`tel:${phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white hover:text-[#1B3A6B]"
            >
              <Phone size={16} strokeWidth={2} />
              Call {phoneDisplay}
            </a>
          </div>
        </div>

        <div
          ref={imageRef}
          className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_28px_60px_rgba(15,37,68,0.28)]"
        >
          <Image
            src={service.heroImage}
            alt={`${service.name} project in ${city}, ${state}`}
            width={1200}
            height={900}
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-full min-h-90 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function SignsSection({ service }) {
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
      gsap.set(items, { opacity: 0, y: 18 });

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
          start: "top bottom-=40",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div ref={headingRef}>
          <h2 className="text-[clamp(2rem,4vw,2.9rem)] font-bold leading-[1.15] text-[#1B3A6B]">
            Signs You Need {service.name}.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#6B7280]">
            {service.signsIntro}
          </p>
        </div>

        <div className="space-y-4">
          {service.signs.map((sign, index) => (
            <div
              key={sign.label}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              className="flex gap-4 rounded-[14px] border border-[#DDE3ED] bg-[#F8FAFC] p-5"
            >
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#F97316]" />
              <div>
                <p className="font-semibold text-[#1B3A6B]">{sign.label}</p>
                <p className="mt-1 text-sm leading-6 text-[#6B7280]">{sign.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludedSection({ service }) {
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
      gsap.set(cards, { opacity: 0, y: 26 });

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

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=20",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-[#D6E4F7] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          ref={headingRef}
          className="mx-auto max-w-4xl text-center text-[clamp(2rem,4vw,2.9rem)] font-bold leading-[1.15] text-[#1B3A6B]"
        >
          What&apos;s Included in Our {service.name} Service.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {service.included.map((item, index) => {
            const Icon = LucideIcons[item.icon] ?? CheckCircle2;

            return (
              <article
                key={item.title}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className="rounded-[14px] border border-[#DDE3ED] bg-white p-6 shadow-[0_12px_30px_rgba(27,58,107,0.06)]"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#F5F7FA] text-[#1B3A6B]">
                  <Icon size={40} strokeWidth={1.8} />
                </div>
                <h4 className="mt-5 text-xl font-semibold text-[#1B3A6B]">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[#6B7280]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ service }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const desktopLineRef = useRef(null);
  const mobileLineRef = useRef(null);
  const stepRefs = useRef([]);

  useGSAP(
    () => {
      const steps = stepRefs.current.filter(Boolean);
      const lines = [desktopLineRef.current, mobileLineRef.current].filter(Boolean);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([headingRef.current, ...lines, ...steps], {
          opacity: 1,
          y: 0,
          scaleX: 1,
          scaleY: 1,
        });
        return;
      }

      gsap.set(headingRef.current, { opacity: 0, y: 24 });
      gsap.set(steps, { opacity: 0, y: 24 });
      gsap.set(desktopLineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });
      gsap.set(mobileLineRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=80",
          once: true,
        },
      });

      timeline.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power2.out",
      });

      timeline.to(
        steps,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.12,
        },
        "-=0.15"
      );

      timeline.to(
        desktopLineRef.current,
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        0.2
      );

      timeline.to(
        mobileLineRef.current,
        {
          scaleY: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        0.2
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef} className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(2rem,4vw,2.9rem)] font-bold leading-[1.15] text-[#1B3A6B]">
            Our {service.name} Process.
          </h2>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-7 top-0 h-[calc(100%-2rem)] w-px bg-[#1B3A6B]/20 lg:hidden">
            <div ref={mobileLineRef} className="h-full w-full bg-[#1B3A6B]/35" />
          </div>
          <div className="absolute left-0 right-0 top-7 hidden px-24 lg:block">
            <div
              ref={desktopLineRef}
              className="h-0 border-t-2 border-dashed border-[#1B3A6B]/30"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-5 lg:gap-6">
            {service.process.map((step, index) => (
              <div
                key={step.title}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                className="relative rounded-xl border border-[#DDE3ED] bg-[#F8FAFC] px-6 py-8 shadow-[0_18px_35px_rgba(15,37,68,0.06)] lg:text-center"
              >
                <div className="flex items-start gap-4 lg:block">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1B3A6B] text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="lg:mt-6">
                    <h3 className="text-xl font-semibold leading-[1.3] text-[#1B3A6B]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection({ service }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRefs = useRef([]);

  useGSAP(
    () => {
      const images = imageRefs.current.filter(Boolean);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([headingRef.current, ...images], { opacity: 1, scale: 1 });
        return;
      }

      gsap.set(headingRef.current, { opacity: 0, y: 24 });
      gsap.set(images, { opacity: 0, scale: 0.95 });

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

      gsap.to(images, {
        opacity: 1,
        scale: 1,
        duration: 0.65,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=20",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-[#D6E4F7] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          ref={headingRef}
          className="text-center text-[clamp(2rem,4vw,2.9rem)] font-bold leading-[1.15] text-[#1B3A6B]"
        >
          Recent {service.name} Projects in {city}.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {service.gallery.map((image, index) => (
            <div
              key={`${service.slug}-gallery-${index}`}
              ref={(element) => {
                imageRefs.current[index] = element;
              }}
              className="overflow-hidden rounded-xl border border-[#DDE3ED] bg-white shadow-[0_14px_34px_rgba(27,58,107,0.08)]"
            >
              <Image
                src={image}
                alt={`${service.name} project in ${city}, ${state} gallery image ${index + 1}`}
                width={1200}
                height={768}
                sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                className="h-64 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ service }) {
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
      gsap.set(cards, { opacity: 0, y: 26 });

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
          className="mx-auto max-w-4xl text-center text-[clamp(2rem,4vw,2.9rem)] font-bold leading-[1.15] text-[#1B3A6B]"
        >
          What {city} Homeowners Say About Our {service.name}.
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {service.testimonials.map((review, index) => (
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

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="rounded-xl border border-[#DDE3ED] bg-white">
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

function FAQSection({ service }) {
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
      <div className="mx-auto max-w-200">
        <h2
          ref={headingRef}
          className="text-center text-[clamp(2rem,4vw,2.9rem)] font-bold leading-[1.15] text-[#1B3A6B]"
        >
          Frequently Asked Questions About {service.name} in {city}.
        </h2>

        <div className="mt-10 space-y-4">
          {service.faqs.map((faq, index) => (
            <div
              key={faq.question}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => {
                  setOpenIndex((current) => (current === index ? -1 : index));
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedServices({ service }) {
  const relatedServices = service.related
    .map((slug) => servicePageMap[slug])
    .filter(Boolean);

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold text-[#1B3A6B]">
          Related Services
        </h3>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {relatedServices.map((item) => {
            const Icon = LucideIcons[item.included[0]?.icon] ?? CheckCircle2;

            return (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group flex items-center gap-4 rounded-[14px] border border-[#DDE3ED] bg-[#F8FAFC] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#1B3A6B] hover:shadow-[0_14px_30px_rgba(27,58,107,0.08)]"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#1B3A6B]">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[#1B3A6B]">{item.name}</p>
                  <p className="mt-1 text-sm leading-6 text-[#6B7280]">{item.hubDescription}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-[#F97316] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ServicePageTemplate({ service }) {
  return (
    <div className="-mt-28 bg-white md:-mt-32">
      <ServiceHero service={service} />
      <SignsSection service={service} />
      <IncludedSection service={service} />
      <ProcessSection service={service} />
      <GallerySection service={service} />
      <TestimonialsSection service={service} />
      <FAQSection service={service} />
      <CTASection
        headline={service.ctaHeadline}
        subline={`Need honest guidance about ${service.name.toLowerCase()} in ${city}? Summit Roofing Co. is here to help you make the right next move.`}
        buttonText="Schedule Free Inspection"
        buttonLink="/contact"
      />
      <RelatedServices service={service} />
    </div>
  );
}
