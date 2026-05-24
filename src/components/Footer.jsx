import Link from "next/link";
import { Camera, MapPinned, MessageSquare } from "lucide-react";

const serviceLinks = [
  { href: "/services/roof-replacement", label: "Roof Replacement" },
  { href: "/services/roof-repair", label: "Roof Repair" },
  { href: "/services/roof-inspection", label: "Roof Inspection" },
  { href: "/services/storm-damage", label: "Storm Damage Roofing" },
  { href: "/services/gutter-installation", label: "Gutter Installation" },
];

const locationLinks = [
  { href: "/locations/austin", label: "Austin" },
  { href: "/locations/round-rock", label: "Round Rock" },
  { href: "/locations/cedar-park", label: "Cedar Park" },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: MessageSquare },
  { href: "https://instagram.com", label: "Instagram", icon: Camera },
  { href: "https://google.com", label: "Google Business", icon: MapPinned },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F2544] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-8 py-16 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-5">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight text-white">
              Summit Roofing Co.
            </Link>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/70">
            Summit Roofing Co. helps homeowners protect what matters with clear
            communication, dependable crews, and roofing work built to hold up
            through Texas weather. We design every project around fast response,
            honest recommendations, and clean job sites.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-white/70 transition-colors duration-200 hover:text-white"
              >
                <Icon size={20} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-semibold text-white">Services</h3>
          <div className="flex flex-col gap-3">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-semibold text-white">Service Areas</h3>
          <div className="flex flex-col gap-3">
            {locationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-semibold text-white">Contact</h3>
          <div className="space-y-3 text-sm text-white/70">
            <a
              href="tel:+15125550199"
              className="block text-2xl font-semibold text-[#F97316] transition-colors duration-200 hover:text-[#FF8B3D]"
            >
              (512) 555-0199
            </a>
            <a
              href="mailto:hello@summitroofingco.com"
              className="block transition-colors duration-200 hover:text-white"
            >
              hello@summitroofingco.com
            </a>
            <p>1234 Ridgeview Lane, Austin, TX 78704</p>
            <p>Mon - Fri: 7:00 AM - 6:00 PM</p>
            <p>Sat: 8:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-8 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Summit Roofing Co. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/80">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
