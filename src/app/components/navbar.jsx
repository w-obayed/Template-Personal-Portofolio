"use client";
import { useService } from "../../api/services";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientButton from "./ui/gradientButton";
import HamburgerIcon from "./ui/hamburgerManu";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: navManu } = useService("navbar");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Helper to resolve navigation targets for database menu items
  const getTarget = (link) => {
    const label = (link.label || "").trim().toLowerCase();
    const href = (link.href || "").trim().toLowerCase();

    if (label === "home" || href === "/" || href === "/#home") {
      return { type: "route", path: "/" };
    }
    if (label === "contact" || href === "/contact" || href === "/#contact") {
      return { type: "route", path: "/contact" };
    }

    let sectionId = "";
    if (href.startsWith("#") && href.length > 1) {
      sectionId = href.replace("#", "");
    } else {
      if (label.includes("service")) sectionId = "service";
      else if (label.includes("work") || label.includes("project")) sectionId = "work";
      else if (label.includes("testimonial")) sectionId = "testimonial";
      else if (label.includes("skill")) sectionId = "skill";
      else if (label.includes("experience") || label.includes("education")) sectionId = "experience";
      else if (label.includes("gallery")) sectionId = "gallery";
      else if (label.includes("pricing") || label.includes("portfolio")) sectionId = "portfolio";
      else sectionId = label;
    }

    return { type: "section", sectionId };
  };

  // Handle navigation to sections or routes
  const handleNavigation = (linkOrHref) => {
    setMenuOpen(false);

    let linkObj = typeof linkOrHref === "string" ? { label: "", href: linkOrHref } : linkOrHref;
    const target = getTarget(linkObj);

    if (target.type === "route") {
      if (target.path === "/") {
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          router.push("/");
        }
      } else {
        if (pathname !== target.path) {
          router.push(target.path);
        }
      }
      return;
    }

    if (target.type === "section") {
      if (pathname === "/") {
        const element = document.getElementById(target.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/#${target.sectionId}`);
      }
    }
  };

  // Handle WhatsApp button click
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8801638512035", "_blank");
  };

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
          <div className="flex items-center justify-between h-22 gap-2 md:gap-4">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex items-center shrink-0"
            >
              <Link href="/">
                <Image className="w-32 md:w-36 lg:w-40 h-auto" width={160} height={88} src={navManu?.logo || "/logo.webp"} alt="Logo" priority />
              </Link>
            </motion.div>

            {/* Desktop Nav Links */}
            <motion.ul
              className="hidden md:flex flex-1 items-center justify-center gap-1 lg:gap-3 xl:gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
              }}
            >
              {(navManu?.menu || []).map((link) => (
                <motion.li
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                >
                  <motion.button
                    onClick={() => handleNavigation(link)}
                    className="relative px-2.5 lg:px-4 py-2 text-sm md:text-sm lg:text-base xl:text-xl text-gray-300 rounded-md font-family-heading font-medium cursor-pointer bg-transparent border-none whitespace-nowrap"
                    initial="initial"
                    whileHover="hover"
                    variants={{
                      initial: { color: "#d1d5db" },
                      hover: { color: "#ffffff" },
                    }}
                  >
                    {link.label}
                    {/* Underline hover */}
                    <motion.span
                      className="absolute bottom-0.5 left-2.5 right-2.5 lg:left-4 lg:right-4 h-[1.5px] rounded-full bg-[linear-gradient(90deg,#22c55e,#eab308,#a855f7)]"
                      variants={{
                        initial: { scaleX: 0 },
                        hover: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.25 }}
                      style={{ originX: 0 }}
                    />
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>

            {/* Right: CTA + Hamburger */}
            <motion.div
              className="flex items-center justify-end shrink-0 gap-3 md:gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="hidden md:block font-family-heading">
                <GradientButton onClick={handleWhatsAppClick} className="cursor-pointer">
                  Whatsapp Now!
                </GradientButton>
              </div>

              {/* Hamburger (mobile) */}
              <button
                className="md:hidden p-1 font-family-heading"
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
                {(navManu?.menu || []).map((link) => (
                  <motion.li
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                    }}
                  >
                    <button
                      onClick={() => handleNavigation(link)}
                      className="block w-full text-left py-3 text-gray-300 text-base border-b border-white/5 hover:text-white transition-colors font-['DM_Sans',sans-serif] font-medium bg-transparent border-none p-0 cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  className="pt-4 pb-2"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.35 } },
                  }}
                >
                  <GradientButton 
                    onClick={handleWhatsAppClick}
                    className="w-full cursor-pointer"
                  >
                    Whatsapp Now!
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