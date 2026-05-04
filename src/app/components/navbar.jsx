"use client";
import services from "../../API&Services/services";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientButton from "./ui/gradientButton";
import HamburgerIcon from "./ui/hamburgerManu";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navManu = services("navbar") || [];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-[14px] border-b",
          scrolled
            ? "bg-primary border-white/6"
            : "bg-[rgba(10,10,10,0.98)] border-transparent",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              {/* Gradient orb logo */}
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold bg-[linear-gradient(135deg,#f97316_0%,#ec4899_60%,#8b5cf6_100%)] font-['Syne',sans-serif]">
                DH
              </div>
              <span className="text-white text-base font-bold tracking-tight hidden sm:block font-['Syne',sans-serif]">
                DLHA
              </span>
            </motion.div>

            {/* Desktop Nav Links */}
            <motion.ul
              className="hidden md:flex items-center gap-1"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
              }}
            >
              {navManu.map((link) => (
                <motion.li
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                >
                  <motion.div
                    className="relative px-4 py-2 text-base text-gray-300 rounded-md group font-['DM_Sans',sans-serif] font-medium"
                    whileHover={{ color: "#ffffff" }}
                  >
                    <Link href={link.href}>
                      {link.label}
                      {/* Underline hover */}
                      <motion.span
                        className="absolute bottom-0.5 left-4 right-4 h-[1.5px] rounded-full bg-[linear-gradient(90deg,#22c55e,#eab308,#a855f7)]"
                        style={{ originX: 0 }}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.25 }}
                      />
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Right: CTA + Hamburger */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="hidden md:block">
                <GradientButton>Download CV</GradientButton>
              </div>

              {/* Hamburger (mobile) */}
              <button
                className="md:hidden p-1"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <HamburgerIcon open={menuOpen} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-[rgba(10,10,10,0.97)] border-t border-white/[0.07]"
            >
              <motion.ul
                className="flex flex-col px-6 py-4 gap-1"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                }}
              >
                {navManu.map((link) => (
                  <motion.li
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                    }}
                  >
                    <a
                      href={link.href}
                      className="block py-3 text-gray-300 text-base border-b border-white/5 hover:text-white transition-colors font-['DM_Sans',sans-serif] font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  className="pt-4 pb-2"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.35 } },
                  }}
                >
                  <GradientButton onClick={() => setMenuOpen(false)}>
                    Download CV
                  </GradientButton>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}