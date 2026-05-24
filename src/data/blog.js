import { AlertTriangle, CloudRainWind, Hammer, Shield } from "lucide-react";
import { city, siteUrl, state } from "@/data/services";

export const blogPosts = [
  {
    slug: "how-to-know-if-you-need-a-roof-replacement-in-austin",
    category: "Roofing Tips",
    title: `How to Know If You Need a Roof Replacement in ${city}.`,
    description:
      "Learn the warning signs that point to roof replacement, how to compare repair versus replacement, and what Austin homeowners should expect on cost and timing.",
    author: "Miguel Ramirez",
    publishDate: "May 23, 2026",
    readTime: "7 min read",
    featuredImage:
      "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=1600&q=80",
    featuredAlt: `Roof replacement project in ${city}, ${state}`,
    canonical: `${siteUrl}/blog/how-to-know-if-you-need-a-roof-replacement-in-austin`,
    toc: [
      {
        id: "how-long-does-a-roof-last",
        title: "How Long Does a Roof Actually Last?",
      },
      {
        id: "warning-signs",
        title: "7 Warning Signs You Need a Roof Replacement",
        children: [
          { id: "sign-repeated-leaks", title: "Repeated Leaks in More Than One Area" },
          { id: "sign-missing-shingles", title: "Missing, Curling, or Brittle Shingles" },
          { id: "sign-granule-loss", title: "Heavy Granule Loss in Gutters" },
          { id: "sign-sagging", title: "Sagging or Uneven Rooflines" },
          { id: "sign-storm-damage", title: "Storm Damage Across Multiple Slopes" },
          { id: "sign-attic-daylight", title: "Daylight or Moisture in the Attic" },
          { id: "sign-roof-age", title: "Your Roof Is Simply Near the End of Its Life" },
        ],
      },
      {
        id: "repair-vs-replace",
        title: "Repair vs Replace: How to Decide",
      },
      {
        id: "replacement-cost",
        title: `What Does a Roof Replacement Cost in ${city}?`,
      },
      {
        id: "acting-early",
        title: "Why Acting Early Saves You Money",
      },
      {
        id: "faq",
        title: `Frequently Asked Questions About Roof Replacement in ${city}`,
      },
    ],
    relatedServices: [
      {
        href: "/services/roof-replacement",
        title: "Roof Replacement",
        description: "Get a full inspection and written plan for replacement options.",
      },
      {
        href: "/services/roof-repair",
        title: "Roof Repair",
        description: "When targeted repairs are enough, we help you preserve roof life.",
      },
      {
        href: "/services/storm-damage",
        title: "Storm Damage Roofing",
        description: "Fast inspections and clear documentation after wind or hail.",
      },
    ],
    relatedPosts: [
      {
        href: "/services/roof-repair",
        title: "When a Roof Repair Is Enough",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
      },
      {
        href: "/services/storm-damage",
        title: "What to Do After Storm Damage Hits Your Roof",
        image:
          "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=900&q=80",
      },
      {
        href: "/blog",
        title: "Preparing Your Roof for Hail Season in Austin",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      },
    ],
    faq: [
      {
        question: "How long does a full roof replacement take?",
        answer:
          "Most residential roof replacements take one to three days, depending on roof size, weather, and whether hidden decking repairs are needed after tear-off.",
      },
      {
        question: "Does homeowner's insurance cover roof replacement?",
        answer:
          "Insurance may help when replacement is tied to storm damage or another covered event. Age-related wear alone is usually handled differently, so documentation matters.",
      },
      {
        question: `What type of shingles are best for ${city} weather?`,
        answer:
          "Architectural asphalt shingles are a common fit because they balance durability, appearance, and value. The right choice also depends on ventilation, roof slope, and budget.",
      },
      {
        question: `How much does a roof replacement cost in ${city}?`,
        answer:
          "Pricing depends on roof size, material choice, access, pitch, and whether decking or flashing repairs are needed. A professional inspection is the best way to get a reliable number.",
      },
      {
        question: `How do I find a reliable roofer in ${city}?`,
        answer:
          "Look for a company with local experience, clear written scopes, proof of insurance, strong communication, and a willingness to explain when repair is still a better option.",
      },
    ],
  },
];

export const blogPostMap = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post])
);

export const blogIndexCards = [
  {
    href: "/blog/how-to-know-if-you-need-a-roof-replacement-in-austin",
    title: `How to Know If You Need a Roof Replacement in ${city}`,
    description:
      "Warning signs, replacement costs, and how to decide whether your roof needs repair or full replacement.",
    icon: Hammer,
  },
  {
    href: "/services/roof-repair",
    title: "Roof Repair Service",
    description:
      "Explore the repair options homeowners choose before small issues become larger roofing problems.",
    icon: Shield,
  },
  {
    href: "/services/storm-damage",
    title: "Storm Damage Roofing",
    description:
      "See how we help homeowners respond quickly after hail and wind impact their roofs.",
    icon: CloudRainWind,
  },
  {
    href: "/blog",
    title: "More Roofing Tips Coming Soon",
    description:
      "We are building a practical resource library for homeowners comparing repairs, inspections, replacements, and storm recovery.",
    icon: AlertTriangle,
  },
];
