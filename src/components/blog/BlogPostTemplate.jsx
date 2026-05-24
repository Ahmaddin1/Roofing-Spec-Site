"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";
import { phoneDisplay, phoneHref } from "@/data/services";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function TableOfContents({ items, activeId }) {
  return (
    <nav className="rounded-[16px] border border-[#DDE3ED] bg-white p-5 shadow-[0_14px_34px_rgba(27,58,107,0.06)]">
      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#1B3A6B]">
        Table of Contents
      </p>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm leading-6 transition-colors ${
                activeId === item.id ? "font-semibold text-[#F97316]" : "text-[#4B5563] hover:text-[#1B3A6B]"
              }`}
            >
              {item.title}
            </a>
            {item.children?.length ? (
              <div className="mt-2 space-y-2 pl-4">
                {item.children.map((child) => (
                  <a
                    key={child.id}
                    href={`#${child.id}`}
                    className={`block text-sm leading-6 transition-colors ${
                      activeId === child.id
                        ? "font-semibold text-[#F97316]"
                        : "text-[#6B7280] hover:text-[#1B3A6B]"
                    }`}
                  >
                    {child.title}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </nav>
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

function MidArticleCTA() {
  const bannerRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(bannerRef.current, { opacity: 1, scale: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, scale: 0.98, y: 24 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top bottom-=80",
            once: true,
          },
        }
      );
    },
    { scope: bannerRef }
  );

  return (
    <div
      ref={bannerRef}
      className="my-12 rounded-[12px] bg-[#1B3A6B] px-8 py-7 text-white shadow-[0_18px_35px_rgba(27,58,107,0.18)]"
    >
      <h3 className="text-[1.375rem] font-semibold leading-[1.3]">Seeing Any of These Signs?</h3>
      <p className="mt-3 text-base leading-8 text-white/75">
        Don&apos;t wait until it&apos;s too late. Get a free professional inspection -
        we&apos;ll give you an honest assessment.
      </p>
      <Link
        href="/contact"
        className="mt-5 inline-flex items-center justify-center rounded-full bg-[#F97316] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#E86610]"
      >
        Book Free Inspection
      </Link>
    </div>
  );
}

function InlineImage({ src, alt, caption }) {
  return (
    <figure className="my-10 overflow-hidden rounded-[12px] border border-[#DDE3ED] bg-white shadow-[0_14px_34px_rgba(27,58,107,0.06)]">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        sizes="(min-width: 1024px) 65ch, 100vw"
        className="h-auto w-full object-cover"
      />
      <figcaption className="px-5 py-4 text-sm text-[#6B7280]">{caption}</figcaption>
    </figure>
  );
}

export default function BlogPostTemplate({ post }) {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const [activeId, setActiveId] = useState(post.toc[0]?.id ?? "");
  const [openFaq, setOpenFaq] = useState(0);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([titleRef.current, imageRef.current], { opacity: 1, y: 0, scale: 1 });
        return;
      }

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 0.75, ease: "power2.out", delay: 0.1 }
      );
    },
    { scope: headerRef }
  );

  useEffect(() => {
    const ids = post.toc.flatMap((item) => [item.id, ...(item.children?.map((child) => child.id) ?? [])]);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [post.toc]);

  return (
    <div className="-mt-28 bg-white md:-mt-32">
      <section ref={headerRef} className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <span className="inline-flex rounded-full bg-[#D6E4F7] px-4 py-2 text-sm font-semibold text-[#1B3A6B]">
            {post.category}
          </span>
          <h1
            ref={titleRef}
            className="mt-6 max-w-[800px] text-[clamp(2.75rem,6vw,4rem)] font-bold leading-[1.1] text-[#1A1A1A]"
          >
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[#6B7280]">
            <span>{post.author}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{post.publishDate}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime}</span>
          </div>
          <div ref={imageRef} className="mt-8 overflow-hidden rounded-[12px]">
            <Image
              src={post.featuredImage}
              alt={post.featuredAlt}
              width={1600}
              height={900}
              priority
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.85fr)_minmax(280px,1fr)]">
          <article className="max-w-[65ch] text-[18px] leading-[1.8] text-[#374151]">
            <p>
              Most homeowners don&apos;t think about their roof until water starts dripping
              through the ceiling, a stain shows up in the corner of a bedroom, or a
              neighbor replaces a roof after a storm and suddenly you start wondering
              whether yours is next. That hesitation is normal. A roof is easy to ignore
              when it is doing its job, and replacement is not exactly the kind of
              purchase most people enjoy planning for. The problem is that waiting too
              long can turn a manageable roofing decision into a much more expensive
              home repair situation.
            </p>
            <p>
              In Austin, roofs take a beating from heat, UV exposure, high winds, and
              hail events that can shorten a roof&apos;s useful life faster than many
              homeowners expect. A roof that still looks passable from the street may
              already be showing signs of failure around flashing, ridge lines,
              penetrations, or underlayment. That is why understanding the warning
              signs matters so much. You do not need to be an expert to spot early
              patterns that suggest your roof may be aging out.
            </p>
            <p>
              This guide walks through how long roofs really last, the most common red
              flags that point toward replacement, how to think about{" "}
              <Link href="/services/roof-repair" className="font-medium text-[#F97316]">
                roof repair versus roof replacement
              </Link>
              , and what Austin homeowners should expect when budgeting for a new
              roofing system. If you are trying to answer the question, &quot;Do I need a
              roof replacement in Austin?&quot; this is the framework we use with real
              homeowners every week.
            </p>

            <h2
              id="how-long-does-a-roof-last"
              className="mt-14 text-[1.75rem] font-bold leading-[1.25] text-[#1B3A6B]"
            >
              How Long Does a Roof Actually Last?
            </h2>
            <p className="mt-5">
              The short answer is that most asphalt shingle roofs last somewhere between
              15 and 25 years, but the real answer depends on installation quality,
              attic ventilation, storm history, material grade, and how intense the
              local climate has been over time. In Austin, the long hot stretches of
              summer can dry out shingles faster than homeowners expect, especially on
              roof slopes that take strong afternoon sun. Add hail or wind events every
              few seasons, and the useful life of the system can shrink quickly.
            </p>
            <p>
              That is one reason age alone is never the whole story. A 12-year-old roof
              with poor ventilation and repeated storm exposure may be in worse shape
              than an 18-year-old roof that was installed well and maintained
              consistently. On the other hand, many homeowners underestimate what an
              older roof can hide. A roof can still have most of its shingles in place
              and still be failing at the details that actually keep water out.
            </p>
            <p>
              If your roof is getting close to the end of its expected lifespan, the
              smartest step is usually a professional inspection rather than a guess.
              That inspection gives you a real baseline. It also helps you avoid
              spending money on isolated fixes if the roof is already telling a bigger
              story.
            </p>

            <InlineImage
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
              alt={`do I need a roof replacement ${post.title.includes("Austin") ? "Austin" : "city"} warning signs on a residential roof`}
              caption="Age, heat exposure, and storm wear often show up first around ridges, flashing, and shingle edges."
            />

            <h2
              id="warning-signs"
              className="mt-14 text-[1.75rem] font-bold leading-[1.25] text-[#1B3A6B]"
            >
              7 Warning Signs You Need a Roof Replacement
            </h2>
            <p className="mt-5">
              Not every roofing problem means replacement is the right move. But there
              are patterns that strongly suggest the roof may be reaching the point
              where patching it no longer makes financial sense. Here are seven signs
              Austin homeowners should take seriously.
            </p>

            <h3
              id="sign-repeated-leaks"
              className="mt-10 text-[1.375rem] font-semibold leading-[1.3] text-[#1B3A6B]"
            >
              Repeated Leaks in More Than One Area
            </h3>
            <p className="mt-3">
              One leak does not automatically mean you need a new roof. But if leaks
              keep appearing in different parts of the house, the issue is often larger
              than one failed shingle or one bad flashing detail. Multiple leak points
              usually mean the system is aging broadly, not locally. At that stage,
              chasing individual repairs can become a cycle that costs money without
              delivering confidence.
            </p>

            <h3
              id="sign-missing-shingles"
              className="mt-10 text-[1.375rem] font-semibold leading-[1.3] text-[#1B3A6B]"
            >
              Missing, Curling, or Brittle Shingles
            </h3>
            <p className="mt-3">
              When shingles start curling at the edges, losing flexibility, or blowing
              off in several spots, the roof is no longer aging gracefully. Austin heat
              can accelerate this process by baking the roofing surface season after
              season. Once enough shingles lose their integrity, repairs become less
              reliable because the surrounding materials are already close to failing.
            </p>

            <h3
              id="sign-granule-loss"
              className="mt-10 text-[1.375rem] font-semibold leading-[1.3] text-[#1B3A6B]"
            >
              Heavy Granule Loss in Gutters
            </h3>
            <p className="mt-3">
              Granules protect asphalt shingles from UV exposure. A little loss is
              normal over time, but heavy accumulation in gutters or downspout exits is
              a sign that the protective surface is wearing away. Once that coating is
              compromised, shingles age faster, absorb more punishment from the sun,
              and become more vulnerable in storms.
            </p>

            <h3
              id="sign-sagging"
              className="mt-10 text-[1.375rem] font-semibold leading-[1.3] text-[#1B3A6B]"
            >
              Sagging or Uneven Rooflines
            </h3>
            <p className="mt-3">
              A roof should look structurally straight. If you notice dips, waviness,
              or any sagging sections, that can point to trapped moisture, weakened
              decking, or longer-term structural issues. This is one of the clearest
              signs that the problem goes beyond surface shingles. It deserves prompt
              attention because structural deterioration only gets more expensive with
              time.
            </p>

            <h3
              id="sign-storm-damage"
              className="mt-10 text-[1.375rem] font-semibold leading-[1.3] text-[#1B3A6B]"
            >
              Storm Damage Across Multiple Slopes
            </h3>
            <p className="mt-3">
              After hail or high wind, the key question is not just whether damage
              exists. It is how spread out that damage is. If impact marks, lifted
              shingles, or compromised ridge areas appear on multiple roof sections,
              replacement often becomes the more durable and more practical option. For
              storm-related situations, a{" "}
              <Link href="/services/storm-damage" className="font-medium text-[#F97316]">
                storm damage roofing inspection
              </Link>{" "}
              helps clarify whether you are looking at spot work or a broader system
              reset.
            </p>

            <h3
              id="sign-attic-daylight"
              className="mt-10 text-[1.375rem] font-semibold leading-[1.3] text-[#1B3A6B]"
            >
              Daylight or Moisture in the Attic
            </h3>
            <p className="mt-3">
              If you can see daylight coming through roof boards or feel moisture
              buildup in the attic, the roof is no longer doing its core job
              consistently. Attic warning signs matter because they often reveal issues
              that have already moved past the visible surface. By the time those clues
              show up indoors, the roof may have been underperforming for longer than
              anyone realized.
            </p>

            <h3
              id="sign-roof-age"
              className="mt-10 text-[1.375rem] font-semibold leading-[1.3] text-[#1B3A6B]"
            >
              Your Roof Is Simply Near the End of Its Life
            </h3>
            <p className="mt-3">
              Sometimes the biggest sign is timing. If your roof is 18, 20, or 22
              years old and repairs are starting to become more common, the question is
              not whether problems can be fixed. It is whether it still makes sense to
              keep investing in a roof that is already close to aging out. Replacing
              before failure becomes widespread can save stress, help with planning,
              and prevent sudden emergency costs.
            </p>

            <MidArticleCTA />

            <h2
              id="repair-vs-replace"
              className="mt-14 text-[1.75rem] font-bold leading-[1.25] text-[#1B3A6B]"
            >
              Repair vs Replace: How to Decide
            </h2>
            <p className="mt-5">
              This is usually the hardest part of the decision. Homeowners do not want
              to replace a roof too early, but they also do not want to keep spending
              money on repairs that only buy a little more time. The simplest way to
              think about it is to weigh the age of the roof, how widespread the
              damage is, and what confidence level you want going into the next storm
              season.
            </p>
            <p>
              Repairs make sense when the roof is still structurally healthy, the
              problem is clearly localized, and the rest of the system still has useful
              life left. That is why a trustworthy roofer should be willing to say,
              &quot;You do not need replacement yet.&quot; Replacement becomes the better move
              when damage is distributed, leaks are recurring, the roof is aging out,
              or the cost of repeated repairs starts adding up without delivering real
              peace of mind.
            </p>
            <p>
              If you are on the fence, the best next step is not guessing from photos
              online. It is getting a professional assessment from a team that handles
              both{" "}
              <Link href="/services/roof-replacement" className="font-medium text-[#F97316]">
                full roof replacement in Austin
              </Link>{" "}
              and repair work, so the recommendation is driven by condition rather than
              by a one-size-fits-all sales approach.
            </p>

            <InlineImage
              src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80"
              alt="roof replacement Austin decision repair vs replace inspection example"
              caption="The right decision depends on age, damage spread, and how much useful life remains in the system."
            />

            <h2
              id="replacement-cost"
              className="mt-14 text-[1.75rem] font-bold leading-[1.25] text-[#1B3A6B]"
            >
              What Does a Roof Replacement Cost in Austin?
            </h2>
            <p className="mt-5">
              Roof replacement pricing in Austin varies widely because no two roofs are
              exactly alike. Square footage is part of the equation, but so are roof
              pitch, access, material choice, ventilation needs, flashing complexity,
              and whether hidden decking repairs are discovered once the old roof is
              removed. Homeowners who compare only the bottom-line number without
              comparing scope often end up comparing two very different projects.
            </p>
            <p>
              Material decisions also matter. Architectural shingles are a common
              choice because they strike a balance between durability, appearance, and
              overall value. Some homeowners prioritize longer manufacturer warranty
              options, upgraded underlayment, or stronger ventilation improvements.
              Those choices can be worthwhile, but they should be explained clearly so
              you understand what you are paying for and why it matters to roof
              performance in Austin weather.
            </p>
            <p>
              The most reliable way to understand cost is through a written estimate
              based on an actual inspection, not a generic per-square quote. A good
              estimate should tell you what is included, how the job will be handled,
              and whether there are any known variables that could affect the final
              scope once tear-off begins.
            </p>

            <h2
              id="acting-early"
              className="mt-14 text-[1.75rem] font-bold leading-[1.25] text-[#1B3A6B]"
            >
              Why Acting Early Saves You Money
            </h2>
            <p className="mt-5">
              Waiting usually feels cheaper in the short term, but roofing problems
              rarely hold still. Small leaks can become insulation damage. Weak
              flashing can become rotted decking. Storm-related wear that seems minor
              now can become a much larger issue after one more heavy rain or one more
              hail event. The earlier you understand what condition the roof is truly
              in, the more choices you usually have.
            </p>
            <p>
              Acting early also means you can plan. Emergency replacement almost always
              feels more stressful than scheduled replacement. When homeowners catch the
              issue before interior damage accelerates, they can compare options, ask
              better questions, and schedule work around life instead of reacting in a
              panic. That is especially valuable in a market like Austin, where storm
              seasons can suddenly create a rush for inspections and roofing crews.
            </p>
            <p>
              If your roof is showing warning signs, the goal is not to scare you into
              a replacement. It is to help you get clarity while you still have good
              options available. Sometimes that means repair. Sometimes it means
              replacement planning. Either way, knowing early almost always saves money
              compared with finding out late.
            </p>

            <h2
              id="faq"
              className="mt-14 text-[1.75rem] font-bold leading-[1.25] text-[#1B3A6B]"
            >
              Frequently Asked Questions About Roof Replacement in Austin
            </h2>
            <div className="mt-8 space-y-4">
              {post.faq.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq((current) => (current === index ? -1 : index))}
                />
              ))}
            </div>
          </article>

          <aside className="lg:sticky lg:top-[100px] lg:self-start">
            <div className="space-y-5">
              <div className="rounded-[16px] bg-[#1B3A6B] p-6 text-white shadow-[0_18px_35px_rgba(27,58,107,0.18)]">
                <h3 className="text-xl font-semibold leading-[1.3]">
                  Get a Free Inspection - Call {phoneDisplay}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  If your roof is showing signs of trouble, we can help you understand
                  whether repair or replacement makes the most sense.
                </p>
                <a
                  href={`tel:${phoneHref}`}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#E86610]"
                >
                  Call Now
                </a>
              </div>

              <TableOfContents items={post.toc} activeId={activeId} />

              <div className="rounded-[16px] border border-[#DDE3ED] bg-white p-5 shadow-[0_14px_34px_rgba(27,58,107,0.06)]">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#1B3A6B]">
                  Related Services
                </p>
                <div className="mt-4 space-y-4">
                  {post.relatedServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group block rounded-[12px] border border-[#DDE3ED] bg-[#F8FAFC] p-4 transition duration-200 hover:border-[#1B3A6B]"
                    >
                      <p className="font-semibold text-[#1B3A6B]">{service.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#6B7280]">{service.description}</p>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#F97316]">
                        Learn More
                        <ArrowRight size={16} strokeWidth={2} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-[#1B3A6B]">
            You Might Also Find These Helpful.
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {post.relatedPosts.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[14px] border border-[#DDE3ED] bg-white shadow-[0_14px_34px_rgba(27,58,107,0.06)] transition duration-200 hover:-translate-y-1 hover:border-[#1B3A6B]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={540}
                  sizes="(min-width: 1280px) 20vw, (min-width: 768px) 40vw, 100vw"
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-lg font-semibold leading-7 text-[#1B3A6B]">{item.title}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#F97316]">
                    Explore
                    <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Think Your Roof Needs Attention? Get Expert Eyes on It - For Free."
        subline="If you are seeing aging, leaks, storm wear, or other warning signs, Summit Roofing Co. can help you make the right next decision."
        buttonText="Get My Free Inspection"
        buttonLink="/contact"
      />
    </div>
  );
}

