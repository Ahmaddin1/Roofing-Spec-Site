"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Clock3, Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  cityZip: "",
  service: "",
  message: "",
};

const requiredFields = {
  fullName: "Full name is required.",
  phone: "Phone number is required.",
  service: "Please select a service.",
};

export default function ContactFormSection() {
  const sectionRef = useRef(null);
  const formContainerRef = useRef(null);
  const panelRef = useRef(null);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set([formContainerRef.current, panelRef.current], {
          opacity: 1,
          y: 0,
          x: 0,
        });
        return;
      }

      gsap.set(formContainerRef.current, { opacity: 0, y: 30 });
      gsap.set(panelRef.current, { opacity: 0, x: 40 });

      gsap.to(formContainerRef.current, {
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

  const inputBaseClasses =
    "mt-2 w-full rounded-[8px] border bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none transition duration-200 placeholder:text-[#6B7280]";

  return (
    <section
      ref={sectionRef}
      className="bg-[#1B3A6B] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
        <div
          ref={formContainerRef}
          className="rounded-2xl border border-white/10 bg-white p-6 shadow-[0_24px_60px_rgba(15,37,68,0.25)] md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
            Get In Touch
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(2.25rem,4vw,2.75rem)] font-bold leading-[1.2] text-[#1B3A6B]">
            Request Your Free Roof Inspection Today.
          </h2>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-[#1A1A1A]"
              >
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

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-[#1A1A1A]"
                >
                  Phone Number
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
                  placeholder="(512) 555-0199"
                />
                {errors.phone ? (
                  <p className="mt-2 text-sm text-[#DC2626]">{errors.phone}</p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#1A1A1A]"
                >
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
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="cityZip"
                  className="text-sm font-medium text-[#1A1A1A]"
                >
                  City / Zip Code
                </label>
                <input
                  id="cityZip"
                  name="cityZip"
                  type="text"
                  value={formData.cityZip}
                  onChange={handleChange}
                  className={`${inputBaseClasses} border-[#DDE3ED] focus:border-[#1B3A6B]`}
                  placeholder="Austin or 78704"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="text-sm font-medium text-[#1A1A1A]"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputBaseClasses} ${
                    errors.service
                      ? "border-[#DC2626] focus:border-[#DC2626]"
                      : "border-[#DDE3ED] focus:border-[#1B3A6B]"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="Roof Replacement">Roof Replacement</option>
                  <option value="Roof Repair">Roof Repair</option>
                  <option value="Inspection">Inspection</option>
                  <option value="Storm Damage">Storm Damage</option>
                  <option value="Gutters">Gutters</option>
                  <option value="Not Sure">Not Sure</option>
                </select>
                {errors.service ? (
                  <p className="mt-2 text-sm text-[#DC2626]">{errors.service}</p>
                ) : null}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-[#1A1A1A]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`${inputBaseClasses} resize-none border-[#DDE3ED] focus:border-[#1B3A6B]`}
                placeholder="Tell us a little about the roof issue or the timeline you have in mind."
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#E86610]"
            >
              Send My Request
            </button>

            {submitted ? (
              <p className="text-sm text-[#1B3A6B]">
                Your request is ready. We will connect this form to a live inbox in
                the next step.
              </p>
            ) : null}
          </form>
        </div>

        <aside
          ref={panelRef}
          className="rounded-2xl border border-white/10 bg-[#0F2544] p-6 text-white shadow-[0_24px_60px_rgba(15,37,68,0.25)] md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
            Contact Info
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm text-white/70">Call us directly</p>
              <Link
                href="tel:+15125550199"
                className="mt-2 inline-flex items-center gap-3 text-2xl font-bold text-[#F97316]"
              >
                <Phone className="h-5 w-5" />
                (512) 555-0199
              </Link>
            </div>

            <div>
              <p className="text-sm text-white/70">Email</p>
              <Link
                href="mailto:hello@summitroofingco.com"
                className="mt-2 inline-flex items-center gap-3 text-base text-white"
              >
                <Mail className="h-5 w-5 text-[#F97316]" />
                hello@summitroofingco.com
              </Link>
            </div>

            <div>
              <p className="text-sm text-white/70">Office hours</p>
              <p className="mt-2 inline-flex items-start gap-3 text-base text-white">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#F97316]" />
                <span>
                  Monday to Friday: 7:00 AM - 6:00 PM
                  <br />
                  Saturday: 8:00 AM - 2:00 PM
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">What happens next?</p>
            <p className="mt-2 text-sm leading-6 text-white/75">
              We will call you within 2 hours to schedule your free inspection.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
