import { MapPin, MessageSquareQuote, Star } from "lucide-react";

function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#DDE3ED] bg-[#F5F7FA] px-3 py-1 text-[0.75rem] font-semibold text-[#1B3A6B]">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#F97316]">
        <MessageSquareQuote className="h-3.5 w-3.5" />
      </span>
      Google
    </div>
  );
}

export default function ReviewCard({ review, className = "" }) {
  return (
    <article
      className={`flex min-h-[260px] flex-col rounded-[12px] border border-[#DDE3ED] bg-white p-6 shadow-[0_18px_35px_rgba(15,37,68,0.08)] ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-1 text-[#F5B301]">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star key={starIndex} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <GoogleBadge />
      </div>

      <p className="mt-5 text-base leading-7 text-[#1A1A1A]">{review.body}</p>

      <div className="mt-auto pt-6">
        <p className="text-sm font-semibold text-[#1B3A6B]">{review.name}</p>
        <p className="mt-1 inline-flex items-center gap-2 text-sm text-[#6B7280]">
          <MapPin className="h-4 w-4" />
          {review.location}
        </p>
      </div>
    </article>
  );
}
