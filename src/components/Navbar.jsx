"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(containerRef.current, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
        },
      );
    },
    { scope: containerRef },
  );

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  return (
    <div
      ref={containerRef}
      className="fixed inset-x-0 top-5 z-50 flex justify-center"
    >
      <div className="w-[95vw] rounded-xl border border-white/10 bg-[#1B3A6B]/60 px-6 py-3 shadow-[0_20px_45px_rgba(15,37,68,0.2)] backdrop-blur-md md:w-[90vw]">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-[18px] font-bold tracking-tight text-white"
            onClick={closeMenu}
          >
            Summit Roofing Co.
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === link.href
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-sm font-medium text-white transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-[#F97316] px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#E86610]"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#F97316] transition hover:bg-white/10 lg:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 lg:hidden ${
            isOpen ? "mt-4 max-h-96 opacity-100" : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-4xl border border-white/10 bg-[#0F2544]/95 p-5">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === link.href
                    : pathname === link.href ||
                      pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`text-sm font-medium transition-opacity duration-200 ${
                      isActive
                        ? "text-white opacity-100"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#F97316] px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#E86610]"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
