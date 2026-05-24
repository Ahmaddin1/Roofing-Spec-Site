import {
  ClipboardCheck,
  CloudRainWind,
  Hammer,
  Search,
  Shield,
  Trash2,
  Layers3,
  Droplets,
  HardHat,
  CheckCircle2,
  Wrench,
  Eye,
  FileCheck2,
  Home,
  Gauge,
  Sparkles,
  Umbrella,
} from "lucide-react";

export const city = "Austin";
export const state = "Texas";
export const phoneDisplay = "(512) 555-0199";
export const phoneHref = "+15125550199";
export const siteUrl = "https://summitroofingco.com";

const gallerySet = [
  "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
];

export const servicePages = [
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    shortName: "Replacement",
    hubDescription:
      "Complete replacement systems built for curb appeal, weather protection, and long-term homeowner confidence.",
    heroImage:
      "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=1200&q=80",
    heroDescription:
      "When your current roof has reached the end of its lifespan, Summit Roofing Co. provides full roof replacement services in Austin with materials and installation methods built for long-term performance. We guide homeowners through every step, from inspection and material selection to cleanup and final walkthrough.",
    signsIntro:
      "Aging roofs can be stressful, especially when repairs keep piling up without solving the bigger issue. If you are seeing any of the following warning signs, it may be time to replace the roof before more costly damage develops.",
    signs: [
      {
        label: "Repeated leak issues",
        description: "Recurring water intrusion often signals system-wide failure rather than one isolated problem.",
      },
      {
        label: "Curling or missing shingles",
        description: "Widespread shingle deterioration usually means the roof can no longer protect the home reliably.",
      },
      {
        label: "Sagging roof sections",
        description: "Visible dips or uneven rooflines may point to moisture damage or weakened structural support.",
      },
      {
        label: "Granule loss across the roof",
        description: "Heavy granule shedding is a common sign that asphalt shingles are nearing the end of their life.",
      },
      {
        label: "Storm damage on multiple slopes",
        description: "Large-scale hail or wind damage often makes replacement more practical than patchwork repairs.",
      },
      {
        label: "Roof age over 15 to 25 years",
        description: "Older roofing systems in Austin often wear faster under heat, UV exposure, and sudden storms.",
      },
    ],
    included: [
      {
        icon: Trash2,
        title: "Full Tear-Off & Disposal",
        description: "We remove the old roofing materials completely and haul away debris for a clean reset.",
      },
      {
        icon: Layers3,
        title: "Decking Inspection & Repair",
        description: "Our team checks the underlying roof deck and replaces compromised sections before new materials go on.",
      },
      {
        icon: Droplets,
        title: "Ice & Water Shield Installation",
        description: "We install upgraded underlayment protection in vulnerable areas to help guard against moisture intrusion.",
      },
      {
        icon: Hammer,
        title: "New Shingle Installation",
        description: "Your new roofing system is installed with attention to ventilation, pattern consistency, and code-ready workmanship.",
      },
      {
        icon: Shield,
        title: "Flashing & Ridge Cap Updates",
        description: "We replace critical transition materials so the new system performs as one complete roof.",
      },
      {
        icon: CheckCircle2,
        title: "Final Cleanup & Inspection",
        description: "We finish with a thorough cleanup, magnetic nail sweep, and final walkthrough with the homeowner.",
      },
    ],
    process: [
      {
        title: "Free Inspection & Assessment",
        description: "We inspect the full roofing system and explain whether replacement is the best next step.",
      },
      {
        title: "Detailed Written Quote",
        description: "You receive a clear scope of work, pricing breakdown, and material recommendations without guesswork.",
      },
      {
        title: "Material Selection",
        description: "We help you choose shingle style, color, and performance options that fit the home and budget.",
      },
      {
        title: "Scheduled Installation",
        description: "Our crew completes the tear-off and installation on an organized timeline with jobsite protection in place.",
      },
      {
        title: "Final Walkthrough & Sign-off",
        description: "We review the finished roof with you, answer questions, and make sure the site is left clean.",
      },
    ],
    gallery: gallerySet,
    testimonials: [
      {
        name: "Jordan P.",
        location: "Round Rock, TX",
        body: "From the first inspection to the final walkthrough, the crew was professional and easy to work with. Our roof replacement was organized, clean, and exactly what we were promised.",
      },
      {
        name: "Daniel T.",
        location: "Mueller, Austin",
        body: "The communication during our roof replacement stood out the most. We always knew what was happening next, and the finished roof looks fantastic from the street.",
      },
      {
        name: "Priya K.",
        location: "Georgetown, TX",
        body: "They walked us through options without pressure and made the replacement process feel manageable. It felt like working with a local company that truly cared.",
      },
    ],
    faqs: [
      {
        question: "How long does a roof replacement take in Austin?",
        answer: "Most residential roof replacements take one to three days depending on roof size, material choice, weather, and whether hidden decking repairs are needed.",
      },
      {
        question: "How do I know if I need replacement instead of repair?",
        answer: "If your roof has widespread wear, repeated leaks, storm damage across multiple slopes, or is nearing the end of its expected lifespan, replacement is often the better long-term value.",
      },
      {
        question: "What does a roof replacement cost in Austin?",
        answer: "Pricing depends on roof size, pitch, material type, ventilation needs, and the amount of tear-off or decking repair involved. We provide written estimates after inspection.",
      },
      {
        question: "Do you offer warranties on roof replacements?",
        answer: "Yes. We offer workmanship coverage and install roofing systems from trusted manufacturers that include material warranty options.",
      },
      {
        question: "Can you help with insurance after storm damage?",
        answer: "Yes. If replacement is storm-related, we can document visible damage and help you understand what information may be useful during the insurance process.",
      },
    ],
    ctaHeadline: "Think You Need a Roof Replacement? Get Your Free Estimate Today.",
    related: ["roof-repair", "roof-inspection", "storm-damage"],
  },
  {
    slug: "roof-repair",
    name: "Roof Repair",
    shortName: "Repair",
    hubDescription:
      "Targeted repair work for leaks, damaged shingles, and problem areas before they turn into bigger costs.",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    heroDescription:
      "Summit Roofing Co. provides roof repair services in Austin for leaks, flashing failures, storm-related damage, and aging trouble spots. We focus on solving the underlying issue quickly so small roofing problems do not become expensive structural repairs.",
    signsIntro:
      "Roof issues rarely improve on their own, and waiting often makes the repair more involved. If you are seeing any of the following warning signs, it is time to bring in a professional before minor damage becomes costly.",
    signs: [
      { label: "Water stains on ceilings", description: "Interior discoloration often means active roof leaks are already affecting the home." },
      { label: "Missing or curling shingles", description: "Damaged shingles leave underlayment and decking more exposed to rain and wind." },
      { label: "Granules in gutters", description: "Excess shingle granules are a sign of surface wear and reduced weather protection." },
      { label: "Sagging roofline", description: "A dip or low spot can indicate trapped moisture or weakened structural components." },
      { label: "Daylight in the attic", description: "Visible light through the roof structure means outside moisture can enter too." },
      { label: "Spiking energy bills", description: "Roof leaks and ventilation issues can impact insulation performance and indoor comfort." },
    ],
    included: [
      { icon: Wrench, title: "Leak Diagnosis", description: "We trace the source of the issue so the repair addresses the cause, not just the symptom." },
      { icon: Shield, title: "Shingle & Flashing Repair", description: "We repair vulnerable roofing materials in the areas most likely to fail first." },
      { icon: CloudRainWind, title: "Storm Spot Repairs", description: "Targeted repairs help stabilize damage after wind and hail events." },
      { icon: Gauge, title: "Ventilation Check", description: "We look for heat and airflow issues that may be accelerating roof wear." },
      { icon: FileCheck2, title: "Photo Documentation", description: "Homeowners receive clear visuals that explain what we found and what we fixed." },
      { icon: CheckCircle2, title: "Final Repair Review", description: "We confirm the repaired area is secure and walk you through the finished work." },
    ],
    process: [
      { title: "Free Roof Inspection", description: "We inspect the roof, attic clues, and visible problem areas to identify what is happening." },
      { title: "Repair Scope & Quote", description: "You receive a clear written plan outlining recommended repairs and expected costs." },
      { title: "Targeted Repair Work", description: "Our crew completes focused repairs with care to surrounding materials and landscaping." },
      { title: "Performance Check", description: "We verify the vulnerable areas are sealed, secure, and functioning as intended." },
      { title: "Next-Step Guidance", description: "If we see larger concerns, we explain them honestly so you can plan ahead without pressure." },
    ],
    gallery: gallerySet,
    testimonials: [
      { name: "Sarah M.", location: "South Lamar, Austin", body: "Summit Roofing made a stressful leak repair feel simple. They showed up on time, explained everything clearly, and left the yard spotless." },
      { name: "Marcus H.", location: "Kyle, TX", body: "Fast response, honest advice, and a crew that respected our schedule. We would absolutely call Summit Roofing again for roof repair work." },
      { name: "Lisa R.", location: "Cedar Park, TX", body: "They repaired storm-related damage faster than we expected and kept us updated the whole time." },
    ],
    faqs: [
      { question: "How quickly should I schedule a roof repair?", answer: "As soon as you notice a leak, missing shingles, or other visible damage. Small issues can spread quickly during Austin storms." },
      { question: "Is repair better than replacement?", answer: "If the problem is localized and the rest of the roof is still in good shape, repair is often the smartest choice. We will tell you honestly when replacement makes more sense." },
      { question: "Does homeowners insurance cover roof repairs?", answer: "It can, especially when storm damage is involved. Coverage depends on your policy and the cause of the damage." },
      { question: "How much does roof repair cost in Austin?", answer: "Repair pricing varies based on roof type, access, damage extent, and whether flashing or decking is involved. We provide written estimates after inspection." },
      { question: "Can you match existing shingles?", answer: "We do our best to match color and style closely, though exact matches depend on the age and availability of your current roofing materials." },
    ],
    ctaHeadline: "Need Roof Repair Before the Damage Gets Worse? Schedule Your Free Inspection Today.",
    related: ["roof-replacement", "roof-inspection", "storm-damage"],
  },
  {
    slug: "roof-inspection",
    name: "Roof Inspection",
    shortName: "Inspection",
    hubDescription:
      "Detailed inspection services for storm checks, aging roofs, and honest next-step recommendations.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    heroDescription:
      "Our roof inspection services in Austin help homeowners understand the true condition of their roof before leaks, listings, claims, or major decisions. We look closely at roofing materials, drainage, flashing, and overall performance so you know what needs attention now and what can wait.",
    signsIntro:
      "Sometimes the biggest roofing issue is not knowing whether you have one. If any of the following situations sound familiar, an inspection can give you clarity before you spend money in the wrong place.",
    signs: [
      { label: "Recent hail or wind event", description: "Storms can cause damage that is easy to miss from the ground but costly over time." },
      { label: "Home sale or purchase underway", description: "A professional inspection helps buyers and sellers make better-informed decisions." },
      { label: "Roof age concerns", description: "Older roofs benefit from periodic evaluation before problems become visible indoors." },
      { label: "Unexplained interior moisture", description: "Minor stains or dampness may point to early roofing issues worth catching now." },
      { label: "Past repairs on the same area", description: "Repeated trouble spots may indicate a broader issue that needs a full assessment." },
      { label: "Insurance documentation needed", description: "A thorough inspection can help clarify visible storm-related damage and roof condition." },
    ],
    included: [
      { icon: Eye, title: "Surface Condition Review", description: "We examine shingles, flashing, penetrations, and drainage points for visible wear or failure." },
      { icon: Home, title: "Structural Observation", description: "We look for sagging, soft spots, or other signs that deeper roofing issues may be present." },
      { icon: CloudRainWind, title: "Storm Damage Check", description: "Hail and wind impact areas are reviewed closely to spot damage that may not be obvious from below." },
      { icon: Gauge, title: "Ventilation Assessment", description: "We evaluate airflow and heat-related conditions that can shorten roof life in Austin." },
      { icon: FileCheck2, title: "Photo Findings Summary", description: "Clear photos and explanations help you understand what we found without confusion." },
      { icon: Sparkles, title: "Action Plan Recommendations", description: "You receive honest next steps, whether that means repair, monitoring, or replacement planning." },
    ],
    process: [
      { title: "Schedule Inspection", description: "We set a convenient time to review the roof and discuss the concerns that prompted the visit." },
      { title: "On-Site Evaluation", description: "Our team examines visible roof conditions, vulnerable transitions, and exterior clues of trouble." },
      { title: "Photo Documentation", description: "We capture images of problem areas so you can see what we are seeing." },
      { title: "Condition Summary", description: "You get a clear explanation of the roof's current condition and what stands out most." },
      { title: "Recommended Next Steps", description: "We outline whether the roof needs repair, replacement planning, or simple monitoring." },
    ],
    gallery: gallerySet,
    testimonials: [
      { name: "Priya K.", location: "Georgetown, TX", body: "The inspection process never felt pushy. It felt like working with a local company that values honest recommendations." },
      { name: "Jordan P.", location: "Round Rock, TX", body: "Their inspection was detailed, professional, and easy to understand. We knew exactly what needed attention and what did not." },
      { name: "Marcus H.", location: "Kyle, TX", body: "They gave us clarity after a storm without trying to oversell anything. That kind of honesty goes a long way." },
    ],
    faqs: [
      { question: "How long does a roof inspection take?", answer: "Most residential inspections take about 45 minutes to an hour, depending on roof size, access, and the concerns being investigated." },
      { question: "Should I schedule an inspection after every storm?", answer: "Not necessarily after every storm, but it is a smart idea after hail, strong winds, or if you notice any new interior or exterior warning signs." },
      { question: "What does a roof inspection cost in Austin?", answer: "We offer free inspections for homeowners who want a professional assessment and next-step guidance." },
      { question: "Will you tell me if I do not need any work?", answer: "Yes. If the roof is in solid condition, we will tell you that directly and explain anything worth monitoring over time." },
      { question: "Can an inspection help with insurance claims?", answer: "An inspection can help document visible storm-related concerns and give you a clearer understanding of what to discuss with your carrier." },
    ],
    ctaHeadline: "Need a Clear Answer About Your Roof? Book a Free Inspection Today.",
    related: ["roof-repair", "roof-replacement", "storm-damage"],
  },
  {
    slug: "storm-damage",
    name: "Storm Damage Roofing",
    shortName: "Storm Damage",
    hubDescription:
      "Fast response after hail and wind events with practical guidance and documentation homeowners can use.",
    heroImage:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
    heroDescription:
      "When hail, wind, or flying debris impacts your roof, Summit Roofing Co. provides storm damage roofing services in Austin with fast response and clear documentation. We help homeowners understand what was affected, what needs immediate attention, and what the safest next step should be.",
    signsIntro:
      "Storm damage can be hard to spot from the ground, especially when the biggest issues are hidden around flashing, ridges, or soft impact zones. If you notice any of the following after severe weather, it is time to call a professional.",
    signs: [
      { label: "Shingles scattered in the yard", description: "Missing roofing material after high winds is a strong sign the roof was compromised." },
      { label: "New leaks after a storm", description: "Water intrusion shortly after severe weather often points to storm-created openings." },
      { label: "Dented vents or metal flashing", description: "Visible impact marks can indicate hail damage across other roof components too." },
      { label: "Clogged gutters with debris", description: "Excess roofing material in gutters may mean shingles or protective surfaces were damaged." },
      { label: "Neighbors getting roofs checked", description: "If nearby homes were affected, your roof may have damage even if it is not obvious yet." },
      { label: "Ceiling spots appearing suddenly", description: "Fresh interior staining often shows up after wind-driven rain or hail-related openings." },
    ],
    included: [
      { icon: Umbrella, title: "Emergency Damage Assessment", description: "We inspect the roof promptly to identify urgent vulnerabilities and next-step priorities." },
      { icon: FileCheck2, title: "Photo & Damage Documentation", description: "Detailed visual records help homeowners better understand storm impact and repair needs." },
      { icon: Shield, title: "Temporary Protection Measures", description: "We can secure exposed areas to help reduce further moisture intrusion while a plan is finalized." },
      { icon: CloudRainWind, title: "Wind & Hail Repair Planning", description: "We create a service scope based on the specific storm-related issues affecting your roof." },
      { icon: Wrench, title: "Targeted Restoration Work", description: "Repairs or replacements are performed based on the extent and distribution of damage." },
      { icon: CheckCircle2, title: "Final Condition Review", description: "We review the finished work with you and confirm the roof is restored and secure." },
    ],
    process: [
      { title: "Post-Storm Inspection", description: "We examine the roof soon after the event to identify obvious and less visible damage." },
      { title: "Damage Documentation", description: "Photos and notes are organized clearly so you have a record of what was found." },
      { title: "Service Recommendation", description: "We explain whether repair, partial work, or full replacement makes the most sense." },
      { title: "Roof Restoration Work", description: "Our team completes the approved scope with protection, cleanup, and communication throughout." },
      { title: "Final Review & Support", description: "We walk the project with you and answer any remaining questions about the roof's condition." },
    ],
    gallery: gallerySet,
    testimonials: [
      { name: "Lisa R.", location: "Cedar Park, TX", body: "We called after a storm and they were out quickly. They documented the damage, answered all our questions, and got the roof fixed faster than we expected." },
      { name: "Marcus H.", location: "Kyle, TX", body: "Fast response and honest advice made a stressful situation much easier. They handled the storm damage process professionally from start to finish." },
      { name: "Sarah M.", location: "South Lamar, Austin", body: "They explained what the storm actually damaged and what was still okay, which helped us make a confident decision." },
    ],
    faqs: [
      { question: "How soon should I have my roof checked after a storm?", answer: "As soon as it is safe. Early inspection helps catch hidden issues before another rain event turns them into interior damage." },
      { question: "Does insurance cover storm damage roofing work?", answer: "Coverage depends on your policy and the type of damage, but storm-related roof issues are often handled differently than age-related wear." },
      { question: "What if I do not see obvious damage from the ground?", answer: "That is common. Hail and wind can damage shingles, flashing, and roof accessories in ways that are not visible from street level." },
      { question: "Can you help document damage for my claim?", answer: "Yes. We provide photo documentation and clear observations that can help you understand what to discuss with your insurance provider." },
      { question: "Will every storm-damaged roof need replacement?", answer: "No. Some roofs only need targeted repairs, while others have enough distributed damage that replacement becomes the better option." },
    ],
    ctaHeadline: "Think Your Roof Took Storm Damage? Schedule a Free Inspection Today.",
    related: ["roof-repair", "roof-inspection", "roof-replacement"],
  },
  {
    slug: "gutter-installation",
    name: "Gutter Installation & Repair",
    shortName: "Gutter Service",
    hubDescription:
      "Seamless gutter work that helps protect rooflines, siding, and foundations from water damage.",
    heroImage:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
    heroDescription:
      "Summit Roofing Co. provides gutter installation and repair services in Austin to help homes shed water away from the roofline, siding, and foundation effectively. Whether your gutters are leaking, sagging, or simply undersized, we help restore proper drainage and protect the home as a whole.",
    signsIntro:
      "Gutter problems often show up around the roof edge, landscaping, and foundation before homeowners realize the drainage system is failing. If you are noticing any of the following, it may be time for gutter service.",
    signs: [
      { label: "Water spilling over edges", description: "Overflow during rain usually means the system is clogged, undersized, or pitched incorrectly." },
      { label: "Sagging gutter runs", description: "Loose fasteners and standing water can pull gutters away from the fascia over time." },
      { label: "Visible seam leaks", description: "Dripping joints allow water to escape where it should be flowing away from the home." },
      { label: "Soil erosion near the foundation", description: "Poor drainage can wash out landscaping and create moisture concerns around the base of the home." },
      { label: "Peeling paint or fascia damage", description: "Persistent overflow can affect exterior trim, soffits, and nearby siding surfaces." },
      { label: "Pooling water after storms", description: "If runoff is not moving away efficiently, the gutter and downspout layout may need correction." },
    ],
    included: [
      { icon: ClipboardCheck, title: "Drainage System Evaluation", description: "We assess existing gutter condition, slope, and downspout performance before recommending work." },
      { icon: Wrench, title: "Leak & Sag Repair", description: "Loose sections, failing seams, and drainage trouble spots are corrected for better flow." },
      { icon: Layers3, title: "New Gutter Installation", description: "We install properly sized gutter runs that match the home and roofline needs." },
      { icon: Droplets, title: "Downspout Placement Review", description: "Runoff is directed more effectively to help protect landscaping and foundations." },
      { icon: Shield, title: "Roofline Protection Focus", description: "Our recommendations consider how the gutter system supports the roof, fascia, and siding together." },
      { icon: CheckCircle2, title: "Final Flow Check", description: "We finish by confirming the system is secure and draining as intended." },
    ],
    process: [
      { title: "Inspection & Drainage Review", description: "We inspect the current gutter layout and identify where water management is breaking down." },
      { title: "Written Service Recommendation", description: "You receive a clear plan for repair, replacement, or new installation based on what the home needs." },
      { title: "Material & Style Selection", description: "We help you choose practical gutter options that fit the home and perform well." },
      { title: "Installation or Repair Work", description: "Our team completes the gutter service with careful attention to slope, support, and runoff direction." },
      { title: "Final Testing & Cleanup", description: "We confirm the system is secure, draining properly, and the site is left clean." },
    ],
    gallery: gallerySet,
    testimonials: [
      { name: "Daniel T.", location: "Mueller, Austin", body: "The new gutters made an immediate difference during heavy rain. Everything drains better and the installation looks clean." },
      { name: "Priya K.", location: "Georgetown, TX", body: "They explained the drainage problem clearly and fixed the sagging sections without trying to oversell us." },
      { name: "Jordan P.", location: "Round Rock, TX", body: "Professional crew, straightforward quote, and a much better water flow setup around the house when they were done." },
    ],
    faqs: [
      { question: "Do I need gutter repair or full replacement?", answer: "It depends on the age of the system, how widespread the leaks or sagging are, and whether the overall layout is still working properly." },
      { question: "How long does gutter installation take?", answer: "Most residential gutter projects are completed in a day, though larger homes or more complex drainage plans can take longer." },
      { question: "Can bad gutters damage my roof?", answer: "Yes. Poor drainage can affect fascia boards, roof edges, soffits, siding, and even the foundation if water is not moving away properly." },
      { question: "What types of gutters do you install?", answer: "We recommend gutter solutions based on roofline needs, drainage demands, and the look of the home after inspection." },
      { question: "How much does gutter service cost in Austin?", answer: "Pricing depends on the length of the runs, access, system condition, and whether the project involves repair or full installation." },
    ],
    ctaHeadline: "Need Better Drainage Around Your Home? Schedule a Free Gutter Inspection Today.",
    related: ["roof-inspection", "roof-repair", "roof-replacement"],
  },
];

export const servicePageMap = Object.fromEntries(
  servicePages.map((service) => [service.slug, service])
);

export const serviceSummaries = servicePages.map((service) => ({
  href: `/services/${service.slug}`,
  title: service.name,
  description: service.hubDescription,
  icon:
    service.slug === "roof-replacement"
      ? Hammer
      : service.slug === "roof-repair"
        ? Shield
        : service.slug === "roof-inspection"
          ? Search
          : service.slug === "storm-damage"
            ? CloudRainWind
            : ClipboardCheck,
}));
