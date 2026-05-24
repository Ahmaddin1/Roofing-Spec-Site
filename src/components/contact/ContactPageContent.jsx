"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Search,
} from "lucide-react";
import { city, phoneDisplay, phoneHref, state } from "@/data/services";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  streetAddress: "",
  serviceNeeded: "",
  referralSource: "",
  details: "",
};

const requiredFields = {
  fullName: "Full name is required.",
  phone: "Phone number is required.",
  streetAddress: "Street address is required.",
  serviceNeeded: "Please select a service.",
};

const serviceAreas = [
  "Austin",
  "Round Rock",
  "Cedar Park",
  "Georgetown",
  "Pflugerville",
  "Kyle",
  "South Lamar",
  "Mueller",
];

const inputBaseClasses =
  "mt-2 w-full rounded-[10px] border bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none transition duration-200 placeholder:text-[#6B7280]";

export default function ContactPageContent() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const panelRef = useRef(null);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([formRef.current, panelRef.current], {
          opacity: 1,
          y: 0,
          x: 0,
        });
        return;
      }

      gsap.set(formRef.current, { opacity: 0, y: 30 });
      gsap.set(panelRef.current, { opacity: 0, x: 40 });

      gsap.to(formRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=80",
          once: true,
        },
      });

      gsap.to(panelRef.current, {
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

  const validateField = (name, value) => {
    if (requiredFields[name] && !value.trim()) {
      return requiredFields[name];
    }

    if (name === "email" && value.trim()) {
      const emailInput = document.createElement("input");
      emailInput.type = "email";
      emailInput.value = value;

      if (!emailInput.checkValidity()) {
        return "Please enter a valid email address.";
      }
    }

    return "";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = Object.keys({
      ...requiredFields,
      email: "",
    }).reduce((accumulator, field) => {
      const message = validateField(field, formData[field] || "");

      if (message) {
        accumulator[field] = message;
      }

      return accumulator;
    }, {});

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <>
      <section ref={sectionRef} className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)] lg:items-start">
          <div ref={formRef}>
            <h1 className="text-[clamp(2.75rem,6vw,4rem)] font-bold leading-[1.1] text-[#1B3A6B]">
              Get Your Free Roof Inspection in {city}.
            </h1>
            <p className="mt-5 max-w-150 text-base leading-8 text-[#6B7280] sm:text-lg">
              We respond to all inquiries within 2 hours during business hours.
              Same-day inspections available.
            </p>

            <a
              href={`tel:${phoneHref}`}
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#F97316] px-6 py-4 text-base font-bold text-white transition duration-200 hover:bg-[#E86610] sm:w-auto sm:min-w-[320px]"
            >
              Call Now: {phoneDisplay}
            </a>

            <form
              className="mt-8 rounded-2xl border border-[#DDE3ED] bg-white p-6 shadow-[0_20px_45px_rgba(27,58,107,0.08)] md:p-8"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="text-sm font-medium text-[#1A1A1A]">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`${inputBaseClasses} ${
                      errors.fullName
                        ? "border-[#DC2626] focus:border-[#DC2626]"
                        : "border-[#DDE3ED] focus:border-[#1B3A6B]"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.fullName ? (
                    <p className="mt-2 text-sm text-[#DC2626]">{errors.fullName}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-[#1A1A1A]">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${inputBaseClasses} ${
                      errors.phone
                        ? "border-[#DC2626] focus:border-[#DC2626]"
                        : "border-[#DDE3ED] focus:border-[#1B3A6B]"
                    }`}
                    placeholder={phoneDisplay}
                  />
                  {errors.phone ? (
                    <p className="mt-2 text-sm text-[#DC2626]">{errors.phone}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="email" className="text-sm font-medium text-[#1A1A1A]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputBaseClasses} ${
                    errors.email
                      ? "border-[#DC2626] focus:border-[#DC2626]"
                      : "border-[#DDE3ED] focus:border-[#1B3A6B]"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <p className="mt-2 text-sm text-[#DC2626]">{errors.email}</p>
                ) : null}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="streetAddress"
                  className="text-sm font-medium text-[#1A1A1A]"
                >
                  Street Address
                </label>
                <input
                  id="streetAddress"
                  name="streetAddress"
                  type="text"
                  required
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className={`${inputBaseClasses} ${
                    errors.streetAddress
                      ? "border-[#DC2626] focus:border-[#DC2626]"
                      : "border-[#DDE3ED] focus:border-[#1B3A6B]"
                  }`}
                  placeholder={`1234 Ridgeview Lane, ${city}, ${state}`}
                />
                {errors.streetAddress ? (
                  <p className="mt-2 text-sm text-[#DC2626]">{errors.streetAddress}</p>
                ) : null}
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="serviceNeeded"
                    className="text-sm font-medium text-[#1A1A1A]"
                  >
                    Service Needed
                  </label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    required
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className={`${inputBaseClasses} ${
                      errors.serviceNeeded
                        ? "border-[#DC2626] focus:border-[#DC2626]"
                        : "border-[#DDE3ED] focus:border-[#1B3A6B]"
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="Roof Replacement">Roof Replacement</option>
                    <option value="Roof Repair">Roof Repair</option>
                    <option value="Roof Inspection">Roof Inspection</option>
                    <option value="Storm Damage Roofing">Storm Damage Roofing</option>
                    <option value="Gutter Installation & Repair">
                      Gutter Installation & Repair
                    </option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                  </select>
                  {errors.serviceNeeded ? (
                    <p className="mt-2 text-sm text-[#DC2626]">{errors.serviceNeeded}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="referralSource"
                    className="text-sm font-medium text-[#1A1A1A]"
                  >
                    How did you hear about us?
                  </label>
                  <select
                    id="referralSource"
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                    className={`${inputBaseClasses} border-[#DDE3ED] focus:border-[#1B3A6B]`}
                  >
                    <option value="">Select an option</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Google Maps">Google Maps</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Referral">Referral</option>
                    <option value="Yard Sign">Yard Sign</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="details" className="text-sm font-medium text-[#1A1A1A]">
                  Additional Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  value={formData.details}
                  onChange={handleChange}
                  className={`${inputBaseClasses} resize-none border-[#DDE3ED] focus:border-[#1B3A6B]`}
                  placeholder="Tell us about the issue, timeline, or anything else that would help us prepare."
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#E86610]"
              >
                Request My Free Inspection
              </button>

              {submitted ? (
                <p className="mt-4 text-sm text-[#1B3A6B]">
                  Your request is ready. We will connect this form to a live inbox in
                  the next step.
                </p>
              ) : null}
            </form>
          </div>

          <aside ref={panelRef}>
            <div className="rounded-2xl border border-[#DDE3ED] bg-white p-6 shadow-[0_20px_45px_rgba(27,58,107,0.08)] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                Contact Info
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-[#6B7280]">Phone</p>
                  <a
                    href={`tel:${phoneHref}`}
                    className="mt-2 inline-flex items-center gap-3 text-2xl font-bold text-[#1B3A6B]"
                  >
                    <Phone className="h-5 w-5 text-[#F97316]" />
                    {phoneDisplay}
                  </a>
                </div>

                <div>
                  <p className="text-sm text-[#6B7280]">Email</p>
                  <a
                    href="mailto:hello@summitroofingco.com"
                    className="mt-2 inline-flex items-center gap-3 text-base text-[#1A1A1A]"
                  >
                    <Mail className="h-5 w-5 text-[#F97316]" />
                    hello@summitroofingco.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-[#6B7280]">Address</p>
                  <p className="mt-2 inline-flex items-start gap-3 text-base leading-7 text-[#1A1A1A]">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#F97316]" />
                    <span>
                      1234 Ridgeview Lane
                      <br />
                      {city}, TX 78704
                    </span>
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#6B7280]">Business Hours</p>
                  <p className="mt-2 inline-flex items-start gap-3 text-base leading-7 text-[#1A1A1A]">
                    <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#F97316]" />
                    <span>
                      Mon - Sat: 7:00 AM - 7:00 PM
                      <br />
                      Sun: Closed
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-lg border border-[#DDE3ED]">
                <iframe
                  title={`Map of Summit Roofing Co. in ${city}, ${state}`}
                  src="https://www.google.com/maps?q=Austin%2C%20TX%2078704&z=13&output=embed"
                  className="h-65 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#DDE3ED] text-[#1B3A6B] transition duration-200 hover:border-[#1B3A6B] hover:bg-[#F5F7FA]"
                  aria-label="Facebook"
                >
                  <MessageSquare className="h-5 w-5" />
                </a>
                <a
                  href="https://google.com/search?q=Summit+Roofing+Co+Austin"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#DDE3ED] text-[#1B3A6B] transition duration-200 hover:border-[#1B3A6B] hover:bg-[#F5F7FA]"
                  aria-label="Google Business"
                >
                  <Search className="h-5 w-5" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#1B3A6B] px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.15] text-white">
            We Serve {city} and Surrounding Communities.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
