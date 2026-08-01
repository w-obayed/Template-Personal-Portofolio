"use client";

import { useState } from "react";
import { useService } from "../../api/services";
import TrustBadges from "./trustbadge";
import Link from "next/link";

/* ─── Validation helpers ─────────────────────────────────────────── */
const validators = {
  name: (v) => {
    if (!v.trim()) return "Name is required.";
    if (v.trim().length < 2) return "Name must be at least 2 characters.";
    return "";
  },
  email: (v) => {
    if (!v.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
      return "Please enter a valid email address.";
    return "";
  },
  phone: (v) => {
    if (!v.trim()) return "Phone number is required.";
    if (!/^[+\d\s\-()]{7,20}$/.test(v.trim()))
      return "Please enter a valid phone number.";
    return "";
  },
  message: (v) => {
    if (!v.trim()) return "Message is required.";
    if (v.trim().length < 10)
      return "Message must be at least 10 characters.";
    return "";
  },
};

const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };
const INITIAL_ERRORS = { name: "", email: "", phone: "", message: "" };
const INITIAL_TOUCHED = { name: false, email: false, phone: false, message: false };

export default function GetInTouch() {
  const { data: footerData = {} } = useService("footer");

  // Normalize footer data to handle API response structure
  const normalizedData = {
    social: Array.isArray(footerData.social) ? footerData.social : [],
    logo: footerData.logo || "/logo.webp",
    nav: Array.isArray(footerData.nav) ? footerData.nav : [],
    icon: Array.isArray(footerData.icon) ? footerData.icon : [],
  };

  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [touched, setTouched] = useState(INITIAL_TOUCHED);
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  /* ─── Field change ───────────────────────────────────────────── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name]) {
      setErrors((err) => ({ ...err, [name]: validators[name](value) }));
    }
  };

  /* ─── Field blur (mark as touched) ───────────────────────────── */
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((err) => ({ ...err, [name]: validators[name](value) }));
  };

  /* ─── Submit ─────────────────────────────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Touch all fields and compute all errors
    const allTouched = { name: true, email: true, phone: true, message: true };
    const allErrors = {
      name: validators.name(form.name),
      email: validators.email(form.email),
      phone: validators.phone(form.phone),
      message: validators.message(form.message),
    };

    setTouched(allTouched);
    setErrors(allErrors);

    const hasErrors = Object.values(allErrors).some(Boolean);
    if (hasErrors) return;

    setStatus("loading");
    try {
      // ── Replace this block with your real API call ──
      await new Promise((res) => setTimeout(res, 1500));
      // ────────────────────────────────────────────────
      setStatus("success");
      setForm(INITIAL_FORM);
      setTouched(INITIAL_TOUCHED);
      setErrors(INITIAL_ERRORS);
    } catch {
      setStatus("error");
    }
  };

  /* ─── Helpers ─────────────────────────────────────────────────── */
  const inputBase =
    "w-full rounded-lg px-4 py-3 text-sm text-white placeholder-[hsla(260,20%,55%,1)] bg-[hsla(260,35%,14%,1)] border transition-all duration-200 outline-none focus:ring-2 focus:ring-[hsla(260,60%,65%,0.6)]";
  const inputOk = "border-[hsla(260,30%,30%,1)] hover:border-[hsla(260,40%,45%,1)]";
  const inputErr = "border-red-500/70 focus:ring-red-500/40";

  const fieldClass = (name) =>
    `${inputBase} ${touched[name] && errors[name] ? inputErr : inputOk}`;

  return (
    <div
      className="flex flex-col relative pt-20"
      style={{
        background:
          "linear-gradient(135deg, hsla(260,40%,8%,1) 0%, hsla(280,35%,12%,1) 50%, hsla(240,30%,9%,1) 100%)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* ── Decorative corner lines ─────────────────────────────── */}
      <div
        className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 160 160" fill="none">
          <line x1="20" y1="0" x2="0" y2="20" stroke="#fff" strokeWidth="1" />
          <line x1="50" y1="0" x2="0" y2="50" stroke="#fff" strokeWidth="1" />
          <line x1="80" y1="0" x2="0" y2="80" stroke="#fff" strokeWidth="1" />
          <line x1="110" y1="0" x2="0" y2="110" stroke="#fff" strokeWidth="1" />
        </svg>
      </div>

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-16 py-16 sm:py-20">

        {/* ── Left: contact list ──────────────────────────────── */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-family-heading font-bold text-white tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Get In Touch
          </h2>

          <div className="flex flex-col gap-6 sm:gap-7">
            {(normalizedData.social || []).map((item, index) => (
              <a
                key={index}
                href={item.href || "#"}
                className="flex items-center gap-4 group no-underline"
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={`${item.label}: ${item.value}`}
              >
                <img
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl object-contain shrink-0"
                  src={item.icon || ""}
                  alt=""
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-white font-semibold font-family-heading text-lg sm:text-xl leading-tight">
                    {item.label || ""}
                  </h3>
                  <p
                    className="text-sm sm:text-base mt-0.5 font-family-description transition-opacity group-hover:opacity-70 break-all"
                    style={{ color: "hsla(260, 50%, 65%, 1)" }}
                  >
                    {item.value || ""}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: contact form ─────────────────────────────── */}
        <div className="w-full lg:w-1/2">
          <div
            className="rounded-2xl p-5 sm:p-7 border-2 border-[#644849]"
            style={{ background: "hsla(260,35%,10%,0.6)", backdropFilter: "blur(10px)" }}
          >
            {/* ── Success banner ─── */}
            {status === "success" && (
              <div
                role="alert"
                className="mb-5 flex items-start gap-3 rounded-lg bg-green-900/40 border border-green-600/50 px-4 py-3 text-green-300 text-sm"
              >
                <svg className="mt-0.5 shrink-0 w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Your message was sent successfully! I&rsquo;ll get back to you soon.</span>
              </div>
            )}

            {/* ── Error banner ─── */}
            {status === "error" && (
              <div
                role="alert"
                className="mb-5 flex items-start gap-3 rounded-lg bg-red-900/40 border border-red-600/50 px-4 py-3 text-red-300 text-sm"
              >
                <svg className="mt-0.5 shrink-0 w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="font-family-description text-sm font-normal">Something went wrong. Please try again later.</span>
              </div>
            )}

            <form
              noValidate
              onSubmit={handleSubmit}
              aria-label="Contact form"
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-[hsla(260,20%,70%,1)] mb-1.5"
                >
                  Name <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-required="true"
                  aria-invalid={!!(touched.name && errors.name)}
                  aria-describedby={touched.name && errors.name ? "contact-name-error" : undefined}
                  className={fieldClass("name")}
                />
                {touched.name && errors.name && (
                  <p id="contact-name-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-[hsla(260,20%,70%,1)] mb-1.5"
                >
                  E-mail <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-required="true"
                  aria-invalid={!!(touched.email && errors.email)}
                  aria-describedby={touched.email && errors.email ? "contact-email-error" : undefined}
                  className={fieldClass("email")}
                />
                {touched.email && errors.email && (
                  <p id="contact-email-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium text-[hsla(260,20%,70%,1)] mb-1.5"
                >
                  Phone No <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 234 567 8900"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-required="true"
                  aria-invalid={!!(touched.phone && errors.phone)}
                  aria-describedby={touched.phone && errors.phone ? "contact-phone-error" : undefined}
                  className={fieldClass("phone")}
                />
                {touched.phone && errors.phone && (
                  <p id="contact-phone-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[hsla(260,20%,70%,1)] mb-1.5"
                >
                  Message <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project…"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-required="true"
                  aria-invalid={!!(touched.message && errors.message)}
                  aria-describedby={touched.message && errors.message ? "contact-message-error" : undefined}
                  className={`${fieldClass("message")} resize-y min-h-25`}
                />
                {touched.message && errors.message && (
                  <p id="contact-message-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  aria-busy={status === "loading"}
                  className="w-full sm:w-auto min-w-40 flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-sm font-semibold text-white border border-[#644849] transition-all duration-200 hover:bg-[hsla(260,40%,25%,0.5)] hover:border-[hsla(260,50%,60%,0.7)] focus:outline-none focus:ring-2 focus:ring-[hsla(260,60%,65%,0.6)] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "transparent" }}
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ── Footer bar ─────────────────────────────────────────────── */}
      <footer
        className="w-full sm:w-11/12 md:w-4/5 mx-auto px-5 sm:px-8 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-t-xl"
        style={{
          background: "#2d2435",
          borderTop: "1px solid hsla(260, 30%, 20%, 0.4)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-1 shrink-0">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <img
              className="w-24 sm:w-28 md:w-30"
              src={normalizedData.logo}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {(normalizedData.nav || []).map((item, index) => (
            <Link
              key={index}
              href={item.href || "#"}
              className="text-sm sm:text-lg text-white/80 font-medium transition-colors hover:text-white font-family-description "
              style={{ color: "hsla(0,0%,65%,1)", textDecoration: "none" }}
            >
              {item.label || ""}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-3 sm:gap-4" style={{ color: "hsla(0,0%,60%,1)" }}>
          {(normalizedData.icon || []).map((item, index) => (
            <a
              key={index}
              href={item.href || "#"}
              className="hover:text-white transition-colors hover:opacity-80"
              aria-label={`Social link ${index + 1}`}
            >
              <img className="w-8 sm:w-10" src={item.icon || ""} alt="" aria-hidden="true" />
            </a>
          ))}
        </div>
      </footer>
      <TrustBadges />
    </div>
  );
}