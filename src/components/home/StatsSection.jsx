"use client";

import StatsGrid from "@/components/shared/StatsGrid";

export default function StatsSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <StatsGrid />
      </div>
    </section>
  );
}
