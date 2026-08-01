import { useState, useEffect } from "react";
import axios from "axios";

// ─── Base URL ─────────────────────────────────────────────────────────────────

const BASE_URL = "https://portfolio.azadhossen.com/wp-json/wp/v2";

// ─── Axios instance ───────────────────────────────────────────────────────────

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// ─── Raw API fetch ────────────────────────────────────────────────────────────

export const fetchApi = async (endpoint) => {
  if (typeof window !== "undefined") {
    const response = await api.get(`/${endpoint}`);
    return response.data;
  }
  
  // Server-side (during static generation): use direct axios call with disabled SSL reject check
  const https = require("https");
  const serverApi = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  });
  const response = await serverApi.get(`/${endpoint}`);
  return response.data;
};

// ─── Static fallback data ─────────────────────────────────────────────────────

const staticData = (srv) => {
  if (srv === "navbar") {
    return {
      logo: "/logo.webp",
      menu: [
        { label: "Home",         href: "#"        },
        { label: "Service",     href: "#"        },
        {label: "Gallery", href:"#"},
        { label: "Work",        href: "#"        },
        { label: "Testimonial", href: "#"        },
        { label: "Contact",      href: "/contact" },
      ],
    };
  }

  if (srv === "hero") {
    return {
      title:       "Hello, Azad",
      name:        "Crafting",
      description: "Digital Experiences That Inspire & Convert.",
      src:         "/azad.png",
    };
  }

  if (srv === "stat") {
    return [
      { value: 98, suffix: "%",  label: "Client Satisfaction"       },
      { value: 5,   suffix: "+",  label: "Years of Experience"         },
      { value: 400, suffix: "+",  label: "Projects Completed"  },
      { value: 15,  suffix: "+", label: "Countries Served" },
    ];
  }

  if (srv === "service") {
    return {
      sectionTitle: "What I Do",
      sectionDescription:
        "Helping businesses grow through modern web design, custom development, graphic design, and professional video editing.",
      items: [
        { title: "Web Design",         video: "/video/web.mp4"    },
        { title: "Custom Development", video: "/video/custom.mp4" },
        { title: "Graphic Design",     video: "/video/graphic.mp4"    },
        { title: "Video Editing",      video: "/video/video.mp4"  },
      ],
    };
  }

  if (srv === "expertise") {
    return {
      title: "Services That Drive Results",
      description:
        "Combining creativity, technology, and strategy to deliver impactful digital solutions for businesses of all sizes.",
      items: [
        {
          num:             "1",
          title:           "Web Design",
          desc:            "Creating modern, responsive websites that enhance user experience, strengthen brands, and convert visitors into loyal customers effectively.",
          btn:             "SPEAK TO OUR EXPERTS",
          backgroundImage: "/bg/bg-web.webp",
          items: {
            imageSrc: [
              "/slide/web-1.webp",
              "/slide/web-2.webp",
              "/slide/web-3.webp",
              "/slide/web-4.webp",
            ],
          },
        },
        {
          num:             "2",
          title:           "Custom\nDevelopment",
          desc:            "Building tailored web solutions with scalable functionality, clean code, seamless integrations, and reliable high-performance experiences every time.",
          btn:             "SPEAK TO OUR EXPERTS",
          backgroundImage: "/bg/bg-custom.webp",
          items: {
            imageSrc: [
              "/slide/custom-1.webp",
              "/slide/custom-2.webp",
              "/slide/custom-3.webp",
              "/slide/custom-4.jpg",
            ],
          },
        },
        {
          num:             "3",
          title:           "Graphic Design",
          desc:            "Designing impactful visuals, branding, marketing materials, and digital assets that capture attention and communicate messages effectively.",
          btn:             "SPEAK TO OUR EXPERTS",
          backgroundImage: "/bg/bg-graphics.webp",
          items: {
            imageSrc: [
              "/slide/graphics-1.webp",
              "/slide/graphics-2.webp",
              "/slide/graphics-3.webp",
              "/slide/graphics-4.webp",
            ],
          },
        },
        {
          num:             "4",
          title:           "Video Editing",
          desc:            "Producing engaging videos with smooth editing, creative storytelling, motion graphics, and polished visuals for every platform.",
          btn:             "SPEAK TO OUR EXPERTS",
          backgroundImage: "/bg/bg-videos.webp",
          items: {
            imageSrc: [
              "/slide/videos-1.webp",
              "/slide/videos-2.webp",
              "/slide/videos-3.webp",
              "/slide/videos-4.webp",
            ],
          },
        },
      ],
    };
  }

  if (srv === "gallery") {
    return [
      "/azad/azad-1.png",   "/azad/azad-2.jpg",   "/azad/azad-3.jpg",
      "/azad/azad-4.jpg",   "/azad/azad-5.jpg",   "/azad/azad-6.jpg",
      "/azad/azad-25.jpg",  "/azad/azad-7.jpg",   "/azad/azad-8.jpg",
      "/azad/azad-9.jpg",   "/azad/azad-10.jpg",  "/azad/azad-11.jpg",
      "/azad/azad-12.jpg",  "/azad/azad-13.jpg",  "/azad/azad-14.webp",
      "/azad/azad-15.webp", "/azad/azad-17.webp", "/azad/azad-18.jpg",
      "/azad/azad-19.jpg",  "/azad/azad-20.jpg",  "/azad/azad-21.jpg",
      "/azad/azad-22.webp", "/azad/azad-23.webp", "/azad/azad-24.jpg",
    ];
  }

  if (srv === "process") {
    return {
      head: {
        title: "Our Process",
        desc:  "A comprehensive guide to our development workflow, from initial concept to final delivery.",
      },
      body: [
        {
          phase:  { id: 0, label: "Discovery" },
          detail: {
            steps: [
              { title: "Initial Consultation",  duration: "15 minutes", description: "We discuss your goals, target audience, and project vision to understand exactly what your business needs." },
              { title: "Requirement Analysis",   duration: "20 minutes", description: "I gather technical requirements, content, and design preferences to create a clear project foundation." },
              { title: "Project Planning",        duration: "10 minutes", description: "A structured roadmap is prepared with milestones, timelines, and deliverables to ensure a smooth workflow." },
            ],
          },
        },
        {
          phase:  { id: 1, label: "Strategy & Design" },
          detail: {
            steps: [
              { title: "Wireframing",  duration: "1 day", description: "Creating intuitive layouts that define content structure and optimize the overall user experience." },
              { title: "UI Design",       duration: "1 day", description: "Designing visually engaging interfaces that reflect your brand while maintaining clarity and consistency." },
              { title: "Design Review", duration: "1 day", description: "Refining every detail through feedback and revisions until the design is polished and ready for development." },
            ],
          },
        },
        {
          phase:  { id: 2, label: "Development" },
          detail: {
            steps: [
              { title: "Front-End Development", duration: "3 days", description: "Building responsive, interactive interfaces with clean, maintainable, and performance-focused code." },
              { title: "Custom Functionality",  duration: "4 days", description: "Developing tailored features, integrations, and dynamic solutions that meet your business requirements." },
              { title: "Performance Optimization",          duration: "2 days", description: "Optimizing speed, responsiveness, SEO, and accessibility for a smooth experience across all devices." },
            ],
          },
        },
        {
          phase:  { id: 3, label: "Testing & Quality Assurance" },
          detail: {
            steps: [
              { title: "Cross-Browser Testing",      duration: "2 days", description: "Ensuring the website performs consistently across all major browsers and screen sizes." },
              { title: "Bug Fixing",    duration: "2 days", description: "Identifying and resolving issues to guarantee stability, functionality, and a seamless user experience." },
              { title: "Final Review",duration: "1 day",  description: "Conducting a comprehensive quality check before launch to ensure every detail meets the highest standards." },
            ],
          },
        },
        {
          phase:  { id: 4, label: "Launch & Support" },
          detail: {
            steps: [
              { title: "Website Launch", duration: "1 day",  description: "Deploying your website securely with proper configuration, performance checks, and live monitoring." },
              { title: "Training & Handover",    duration: "1 day",  description: "Providing guidance and documentation so you can confidently manage your website after delivery." },
              { title: "Ongoing Support",   duration: "Ongoing", description: "Offering maintenance, updates, and technical assistance to keep your website secure and performing at its best." },
            ],
          },
        },
      ],
    };
  }

  if (srv === "portfolio") {
    return {
      head: {
        title:       `We let <span class="text-orange-400">our work</span><br />speak for itself.`,
        description: "Our experts develop customized native apps and software solutions using innovative technologies for your success.",
        btn:         "GET IN TOUCH NOW",
      },
      body: [
        { id: 1,  client: "KTM",         url: "https://orange-blood.ktm.com",         bgColor: "#7c2c00",  image: "/portfolio/portfolio-3.webp",                  imageAlt: "KTM"  },
        { id: 2,  client: "Bluelight",   url: "https://www.bluelightairlines.org",    bgColor: "#2a68f1",  image: "/portfolio/portfolio-2.webp",                  imageAlt: "bluelight"                               },
        { id: 3,  client: "Azqira",      url: "https://www.azqira.com/",               bgColor: "#27d17e",  image: "/portfolio/portfolio-1.webp",                  imageAlt: "Azqira"                             },
        { id: 4,  client: "Retro Roots Headwear   ",      url: "https://retrorootsheadwear.com",                                     bgColor: "#660033",  image: "/portfolio/portfolio-11.webp",                  imageAlt: "retrorootsheadwear"                       },
        { id: 5,  client: "Hey Marcom",       url: "https://heymarcom.com",                                     bgColor: "#020f16",  image: "/portfolio/portfolio-10.webp",                  imageAlt: "heymarcom"                   },
        { id: 6,  client: "Barrier Cybersecurity",     url: "https://barriercyber.com",                                     bgColor: "#00d4b5",  image: "/portfolio/portfolio-9.webp",                  imageAlt: "barrier-cybersecurity"              },
        { id: 7,  client: "D&M  Roofing ",     url: "https://texas.dandmroofing.com/",                                     bgColor: "#01139c",  image: "/portfolio/portfolio-8.webp",                  imageAlt: "dandmroofing "              },
        { id: 8,  client: "Mark Pompeo Bookkeeping",   url: "https://mpompeobookkeeping.com/",                                     bgColor: "#0079bb", image: "/portfolio/portfolio-7.webp",                  imageAlt: "mpompeobookkeeping "           },
        { id: 9,  client: "Club HBHF",    url: "https://www.clubhbhf.com",                                     bgColor: "#d4af37", image: "/portfolio/portfolio-6.webp",                  imageAlt: "Club HBHF"    },
        { id: 10, client: "Mattatuck Dentistry",    url: "https://mattatuckdentistryandimplants.com/",                                     bgColor: "#0b2a5a", image: "/portfolio/portfolio-5.webp",                 imageAlt: "Mattatuck Dentistry"           },
        {id: 11,  client: "Keene Dentistry",       url: "https://keenedentistry.com", bgColor: "#11386e", image: "/portfolio/portfolio-4.webp", imageAlt: "Keene Dentistry"}
      ],
    };
  }

    if (srv === "journey") {

    return {
      journey_title: "My Professional Journey",
      item: [
      {  time: "2020",  period: "The Beginning", description: "Started my journey into web design and development, learning the skills needed to create modern digital experiences." },
      {  time: "2021",  period: "Freelance Success", description: "Began working with clients, delivering responsive websites tailored to business goals and user needs." },
      {  time: "2022",  period: "Advanced Development", description: "Specialized in custom WordPress development, Elementor, WooCommerce, and scalable web solutions." },
      {  time: "2026 – Present",  period: "Building Digital Excellence", description: " Helping businesses grow through innovative web design, custom development, creative design, and engaging visual content." },
    ]
  }
  }

    if (srv === "skill") {

    return {
      skill_title: "skill",
      item:[
      {
        title: "UI & UX",
        icon: [
          { url: "/skill/skill-6.webp"},
          { url: "/skill/skill-7.webp"},
          { url: "/skill/skill-5.webp"},
          { url: "/skill/skill-11.webp"},
        ],
      },
      {
        title: "Graphic Design",
        icon: [
          { url: "/skill/skill-10.webp"},
          { url: "/skill/skill-9.webp"},
          { url: "/skill/skill-8.webp"},
          { url: "/skill/skill-12.webp"},
        ],
      },
      {
        title: "Web Design",
        icon: [
          { url: "/skill/skill-1.webp"},
          { url: "/skill/skill-2.webp"},
          { url: "/skill/skill-3.webp"},
          { url: "/skill/skill-4.webp"},
        ],
      },
    ]
  }
  }


 if (srv === "testimonial") {
  return [
    {
      id: 1,
      name: "Sarah M.",
      number_of_star: 5,
      text: "The team at Keene Dentistry made me feel comfortable from the moment I walked in. They explained every step of my treatment, and the results exceeded my expectations."
    },
    {
      id: 2,
      name: "Michael T.",
      number_of_star: 5,
      text: "I had a dental emergency, and they saw me the same day. The staff was incredibly kind, professional, and made the entire experience stress-free."
    },
    {
      id: 3,
      name: "Jennifer R.",
      number_of_star: 5,
      text: "From routine cleanings to cosmetic work, I've always received exceptional care. The office is modern, clean, and everyone genuinely cares about their patients."
    },
    {
      id: 4,
      name: "David L.",
      number_of_star: 5,
      text: "The implant procedure was much easier than I expected. The dentist took the time to answer every question, and my smile looks amazing."
    },
    {
      id: 5,
      name: "Emily C.",
      number_of_star: 5,
      text: "Our entire family comes here for dental care. The staff is patient with children, appointments are always on time, and the service is consistently excellent."
    },
    {
      id: 6,
      name: "Robert H.",
      number_of_star: 5,
      text: "I've struggled with dental anxiety for years, but Keene Dentistry completely changed that. Their gentle approach and friendly staff make every visit comfortable."
    },
    {
      id: 7,
      name: "Amanda K.",
      number_of_star: 5,
      text: "Professional, knowledgeable, and welcoming. They use the latest technology, and it's clear they truly care about providing the best possible treatment."
    },
    {
      id: 8,
      name: "Christopher B.",
      number_of_star: 5,
      text: "Excellent experience from start to finish. Scheduling was easy, the office was spotless, and my treatment was completed with outstanding attention to detail. Highly recommended!"
    }
  ];
}

if (srv === "footer") {
    return {
      social: [
        { icon: "/icon/f-icon-1.png", label: "E-mail",  value: "md1azad0@gmail.com",              href: "mailto:md1azad0@gmail.com"              },
        { icon: "/icon/f-icon-3.png", label: "Linkedin", value: "mdazad24", href: "https://www.linkedin.com/in/mdazad24" },
        { icon: "/icon/f-icon-4.png", label: "Whatsapp",  value: "+8801638-512035", href: "https://wa.me/+8801638-512035"   },
        { icon: "/icon/f-icon-2.png", label: "Call",     value: "+8809638612035",                         href: "tel:+8809638612035"                            },
      ],
      logo: "logo.webp",
      nav: [
        { label: "Home",    href: "/"    },
        { label: "Service", href: "#" },
        { label: "Gallery", href: "#" },
        { label: "Work",    href: "#"    },
        { label: "Contact", href: "contact" }
      ],
      icon: [
        { icon: "/social-icon/Socialicon-1.png", href: "#" },
        { icon: "/social-icon/Socialicon-3.png",  href: "#" },
        { icon: "/social-icon/Socialicon-4.png",    href: "#" },
        { icon: "/social-icon/Socialicon-2.png", href: "#" },
      ],
    };
  }

  if (srv === "badge") {
    return [
      { label: "AWARD WINNER",        glowColor: "#C9A84C", logo: "/logo/logo-1.webp" },
      { label: "WOOCOOMMERCE  SPECIALIZED", glowColor: "#E8A020", logo: "/logo/logo-2.webp" },
      { label: "CMS EXPERTISE",     glowColor: "#e0e0e0", logo: "/logo/logo-3.webp" },
      { label: "WIX EXPERT",    glowColor: "#4A90D9", logo: "/logo/logo-4.webp" },
      { label: "WORDPRESS SPECIALIST",    glowColor: "#E84040", logo: "/logo/logo-5.webp" },
    ];
  }

  return null;
};

// ─── Map raw WP response → component-ready shape ──────────────────────────────

// ─── HTML sanitization and entity decoding ──────────────────────────────────────

/**
 * Decodes standard HTML entities (like &amp;) to plain characters.
 */
export const decodeHtml = (str) => {
  if (typeof str !== "string") return str;
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
};

/**
 * Client-side HTML sanitizer to allow only safe styling and text tags,
 * stripping out javascript:, event handlers, and script elements.
 */
export function sanitizeHtml(html) {
  if (typeof window === "undefined" || !html) return html; // SSR fallback / empty check
  try {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const dangerousTags = doc.querySelectorAll("script, iframe, object, embed, link, style, form, input, button");
    dangerousTags.forEach((el) => el.remove());

    const allElements = doc.querySelectorAll("*");
    allElements.forEach((el) => {
      Array.from(el.attributes).forEach((attr) => {
        const val = attr.value.trim().toLowerCase();
        if (attr.name.startsWith("on") || val.startsWith("javascript:") || val.startsWith("data:")) {
          el.removeAttribute(attr.name);
        }
      });
    });
    return doc.body.innerHTML;
  } catch (e) {
    console.error("[services] HTML sanitization failed:", e);
    return html;
  }
}

const mapApiResponse = (srv, raw) => {
  // raw is the array returned by the WP REST API, e.g. [{...meta...}]
  const record = Array.isArray(raw) ? raw[0] : raw;
  if (!record) return null;

  const meta = record.meta || {};

  if (srv === "navbar") {
    return {
      logo: meta.navbar_logo || "/logo.webp",
      menu: Object.values(meta.navbar_manu || {}).map((item) => ({
        label: decodeHtml(item.label || ""),
        href:  item.href || "#",
      })),
    };
  }

  if (srv === "hero") {
    const fullTitle = decodeHtml(meta.hero_titile || "");
    const firstSpaceIndex = fullTitle.indexOf(" ");
    let name = "Azad";
    let description = "Let's make something meaningful together.";
    if (firstSpaceIndex !== -1) {
      name = fullTitle.substring(0, firstSpaceIndex);
      description = fullTitle.substring(firstSpaceIndex + 1);
    } else if (fullTitle) {
      name = fullTitle;
      description = "";
    }
    return {
      title:       decodeHtml(meta.hero_sub_titile || "Hello, Azad"),
      name,
      description,
      src:         meta.hero_image || "/azad.png",
    };
  }

  if (srv === "stat") {
    return Object.values(meta.stat_item || {}).map((item) => {
      const countStr = item.count || "";
      const match = countStr.match(/^(\d+)(.*)$/);
      const value = match ? parseInt(match[1], 10) : 0;
      const suffix = match ? match[2] : "";
      return {
        value,
        suffix,
        label: decodeHtml(item.text || ""),
      };
    });
  }

  if (srv === "service") {
    const items = Object.values(meta.service_item || {}).map((item) => ({
      title: decodeHtml(item.title || ""),
      video: item.video || "",
    }));
    return {
      sectionTitle: decodeHtml(meta.service_title || "Our Services"),
      sectionDescription: decodeHtml(meta.service_description || ""),
      items,
    };
  }

  if (srv === "expertise") {
    const items = Object.values(meta.expertise_item || {}).map((item) => ({
      num:             item.number || "",
      title:           decodeHtml(item.title || "")?.replace("\\n", "\n")?.replace(/\n/g, "\n"),
      desc:            decodeHtml(item.description || ""),
      btn:             decodeHtml(item.button || ""),
      backgroundImage: item.background || "",
      items: {
        imageSrc: (item.slider_image || []).map((img) => img.url || ""),
      },
    }));

    return {
      title:       decodeHtml(meta.expertise_title || "Core Expertise"),
      description: decodeHtml(meta.expertise_description || ""),
      items,
    };
  }

  if (srv === "gallery") {
    return (meta.images || []).map((img) => (typeof img === "string" ? img : img.url || ""));
  }

  if (srv === "process") {
    const phases = Object.values(meta.process_slider_1 || {}).map((item, index) => {
      const slideKey = `slider_2_slide_${index + 1}`;
      const stepsRaw = meta[slideKey] || {};
      const steps = Object.values(stepsRaw).map((step) => ({
        title: decodeHtml(step.title || ""),
        duration: decodeHtml(step.duration || ""),
        description: decodeHtml(step.description || ""),
      }));
      return {
        phase: {
          id: index,
          label: decodeHtml(item.label || item.lavel || ""),
        },
        detail: {
          steps,
        },
      };
    });

    return {
      head: {
        title: decodeHtml(meta.process_title || "Our Process"),
        desc:  decodeHtml(meta.process_description || ""),
      },
      body: phases,
    };
  }

  if (srv === "portfolio") {
    const items = Object.values(meta.portfolio || {}).map((item, index) => ({
      id: index + 1,
      client: decodeHtml(item.client || ""),
      category: decodeHtml(item.category || "view more"),
      url: item.url || "#",
      bgColor: item.bgcolor || "#000",
      accentColor: item.accentColor || item.bgcolor || "#ffffff",
      image: item.image || "",
      imageAlt: decodeHtml(item.imageAlt || item.client || ""),
    }));
    return {
      head: {
        title:       decodeHtml(meta.portfolio_title || "We let our work speak for itself."),
        description: decodeHtml(meta.portfolio_description || ""),
        btn:         decodeHtml(meta.portfolio_button || "GET IN TOUCH NOW"),
      },
      body: items,
    };
  }

  if (srv === "journey") {
    const item = Object.values(meta.journey_item || {}).map((item) => ({
      time: decodeHtml(item.time || ""),
      period: decodeHtml((item.period || "").replace(/[()]/g, "")),
      description: decodeHtml(item.description || ""),
    }));
    const title = decodeHtml(meta.journey_title || "My Professional Journey");
    return {
      title,
      item,
    };
  }

  if (srv === "skill") {
    const item = Object.values(meta.skill_item || {}).map((item) => {
      const title = decodeHtml(item.title || "");
      const icon = (item.icon || []).map((img) => {
        const url = img.url || "";
        const filename = url.substring(url.lastIndexOf("/") + 1);
        const nameWithoutExt = filename.split(".")[0] || "";
        const name = nameWithoutExt.charAt(0).toUpperCase() + nameWithoutExt.slice(1);
        return {
          name,
          url,
        };
      });
      return {
        title,
        icon,
      };
    });

    return {
      skill_title: decodeHtml(meta.skill_title || "skill"),
      item,
    };
  }

    if (srv === "testimonial") {
    return Object.values(meta.testimonial_item || {}).map((item, index) => {
      const name = decodeHtml(item.name || "");
      return {
        id: index + 1,
        name,
        number_of_star: decodeHtml(item.number_of_star || ""),
        text: decodeHtml(item.text || ""),
      };
    });
  }

  if (srv === "footer") {
    const social = Object.values(meta.footer_social || {}).map((item) => ({
      icon: item.icon || "",
      label: decodeHtml(item.lavel || item.label || ""),
      value: decodeHtml(item.value || ""),
      href: item.hreaf || item.href || "",
    }));
    const nav = Object.values(meta.footer_nav || {}).map((item) => {
      const label = decodeHtml(item.label || "");
      const href = decodeHtml(item.href || "");

      return {
        label:label.charAt(0).toUpperCase() + label.slice(1),
        href,
      }
    });
    const icon = Object.values(meta.footer_icon || {}).map((item) => ({
      icon: item.icon || "",
      href: item.link || item.href || "#",
    }));
    return {
      social,
      logo: meta.footer_logo || "logo.webp",
      nav: nav.length > 0 ? nav : [],
      icon,
    };
  }

  if (srv === "badge") {
    return Object.values(meta.badge_item || {}).map((item) => ({
      label: decodeHtml(item.label || ""),
      glowColor: item.glowcolor || item.glowColor || "#ffffff",
      logo: item.logo || "",
    }));
  }

  // For unrecognised endpoints return raw data as-is
  return record;
};

// ─── Centralized fetcher with fallback ────────────────────────────────────────

/**
 * Fetches data from the WordPress API, handles empty/null responses and errors,
 * and falls back to static data if needed.
 *
 * @param {string} endpoint - WP REST API endpoint key
 * @returns {Promise<{ data: unknown, error: Error|null, isFallback: boolean }>}
 */
export async function fetchServiceData(endpoint) {
  const fallback = staticData(endpoint);
  if (!endpoint) {
    return { data: fallback, error: null, isFallback: true };
  }

  try {
    const raw = await fetchApi(endpoint);

    // If the API request returns null, undefined, or an empty array ([]), return static data
    if (raw === null || raw === undefined || (Array.isArray(raw) && raw.length === 0)) {
      console.warn(`[services] WordPress API returned empty, null, or undefined data for endpoint "${endpoint}". Falling back to static data.`);
      return { data: fallback, error: null, isFallback: true };
    }

    const mapped = mapApiResponse(endpoint, raw);

    // If mapping returns null or undefined, fall back to static data
    if (mapped === null || mapped === undefined) {
      console.warn(`[services] Mapped data was null or undefined for endpoint "${endpoint}". Falling back to static data.`);
      return { data: fallback, error: null, isFallback: true };
    }

    return { data: mapped, error: null, isFallback: false };
  } catch (err) {
    console.error(`[services] WordPress API fetch failed for endpoint "${endpoint}":`, err.message || err);
    return { data: fallback, error: err, isFallback: true };
  }
}

// ─── useService hook ──────────────────────────────────────────────────────────

/**
 * React hook — fetches from the WP REST API via axios,
 * falls back to static data if the request fails.
 *
 * @param {string} endpoint  - WP REST API endpoint key (e.g. "expertise", "navbar")
 * @returns {{ data: unknown, loading: boolean, error: Error|null }}
 */
export function useService(endpoint) {
  const fallback = staticData(endpoint);
  const [data,    setData]    = useState(fallback);
  // Start as false when there's no endpoint — avoids a sync setState in the effect
  const [loading, setLoading] = useState(!!endpoint);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!endpoint) return; // loading is already false from useState initializer

    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);
      
      const { data: resultData, error: fetchError } = await fetchServiceData(endpoint);
      
      if (!cancelled) {
        setData(resultData);
        setError(fetchError);
        setLoading(false);
      }
    };

    load();

    return () => { cancelled = true; };
  }, [endpoint]);

  return { data, loading, error };
}

// ─── Sync static helper (for non-React contexts) ─────────────────────────────

const services = (srv) => staticData(srv);

export default services;