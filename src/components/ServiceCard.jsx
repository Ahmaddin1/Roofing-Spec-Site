"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";

const ServiceCard = forwardRef(function ServiceCard(
  { icon: Icon, title, description, href },
  ref
) {
  return (
    <Link
      ref={ref}
      href={href}
      className="group flex h-full min-h-[260px] flex-col rounded-[12px] border border-[#DDE3ED] bg-white p-6 transition duration-[250ms] hover:-translate-y-1 hover:border-[#1B3A6B] hover:shadow-[0_18px_35px_rgba(27,58,107,0.12)]"
    >
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D6E4F7] text-[#1B3A6B]">
        {Icon ? <Icon size={24} strokeWidth={2} /> : null}
      </div>

      <h3 className="text-2xl font-semibold leading-[1.3] text-[#1A1A1A]">
        {title}
      </h3>

      <p className="mt-3 line-clamp-2 max-w-[32ch] text-sm leading-6 text-[#6B7280]">
        {description}
      </p>

      <div className="mt-auto flex justify-end pt-6 text-[#1B3A6B]">
        <span className="inline-flex items-center gap-2 opacity-70 transition duration-[250ms] group-hover:translate-x-1 group-hover:opacity-100">
          <ArrowRight size={20} strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
});

export default ServiceCard;
