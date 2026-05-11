// import { FileText, Search, TrendingUp, Globe } from "lucide-react";

// const cards = [
//   {
//     icon: FileText,
//     title: "PERSONAL CONTENT",
//     desc: "Work with user-centered content.",
//     badge: "+34.4%",
//     align: "left",
//   },
//   {
//     icon: Search,
//     title: "ON-PAGE SEO",
//     desc: "Increase your visibility.",
//     badge: "+34.4%",
//     align: "left",
//   },
//   {
//     icon: TrendingUp,
//     title: "STRATEGY",
//     desc: "Build your own brand.",
//     badge: "+34.4%",
//     align: "right",
//   },
//   {
//     icon: Globe,
//     title: "YOUR WEBSITE",
//     desc: "Optimized and user-friendly website.",
//     badge: "+34.4%",
//     align: "right",
//   },
// ];

// function Card({ icon: Icon, title, desc, badge }) {
//   return (
//     <div className="flex items-center gap-3 bg-[#1a1f2e] rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.45)] border border-white/5">
//       <div className="shrink-0 rounded-xl bg-[#252b3b] flex items-center justify-center border border-white/10">
//         <Icon size={18} className="text-blue-400" strokeWidth={1.5} />
//       </div>
//       <div className="flex-1 min-w-0">
//         <p className="text-white text-[11px] font-bold tracking-wide leading-tight">{title}</p>
//         <p className="text-white/40 text-[10px] mt-0.5 leading-snug">{desc}</p>
//       </div>
//       <span className="shrink-0 text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20 rounded-md px-1.5 py-0.5">
//         {badge}
//       </span>
//     </div>
//   );
// }

// export default function MessageCard() {
//   const left = cards.filter((c) => c.align === "left");
//   const right = cards.filter((c) => c.align === "right");

//   return (
//     <div className="flex items-center justify-center p-10">
//       <div className="flex gap-4 items-center">
//         {/* Left column — offset up */}
//         <div className="flex flex-col gap-3 -translate-y-6">
//           {left.map((card, i) => (
//             <Card key={i} {...card} />
//           ))}
//         </div>

//         {/* Right column — offset down */}
//         <div className="flex flex-col gap-3 translate-y-6">
//           {right.map((card, i) => (
//             <Card key={i} {...card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { FileText, Search, TrendingUp, Globe } from "lucide-react";

const cards = [
  {
    icon: FileText,
    title: "PERSONAL CONTENT",
    desc: "Work with user-centered content.",
    badge: "+34.4%",
  },
  {
    icon: Search,
    title: "ON-PAGE SEO",
    desc: "Increase your visibility.",
    badge: "+34.4%",
  },
  {
    icon: TrendingUp,
    title: "STRATEGY",
    desc: "Build your own brand.",
    badge: "+34.4%",
  },
  {
    icon: Globe,
    title: "YOUR WEBSITE",
    desc: "Optimized and user-friendly website.",
    badge: "+34.4%",
  },
];

function Card({ icon: Icon, title, desc, badge }) {
  return (
    <div className="flex items-center gap-3 bg-[#1a1f2e] rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.45)] border border-white/5">
      <div className="shrink-0 w-10 h-10 rounded-xl bg-[#252b3b] flex items-center justify-center border border-white/10">
        <Icon size={18} className="text-blue-400" strokeWidth={1.5} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-[11px] font-bold tracking-wide leading-tight">{title}</p>
        <p className="text-white/40 text-[10px] mt-0.5 leading-snug">{desc}</p>
      </div>
      <span className="shrink-0 text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20 rounded-md px-1.5 py-0.5">
        {badge}
      </span>
    </div>
  );
}

export default function MessageCard() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-lg flex flex-col gap-3">
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-[80%]"
            style={{ alignSelf: i % 2 === 0 ? "flex-start" : "flex-end" }}
          >
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}