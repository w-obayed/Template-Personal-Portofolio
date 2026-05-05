
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";

const techIcons = [
  { label: "C#",    color: "text-blue-400" },
  { label: "FB",    color: "text-orange-400" },
  { label: "GO",    color: "text-cyan-400" },
  { label: "AWS",   color: "text-orange-300" },
  { label: "Vue",   color: "text-green-400" },
  { label: "GQL",   color: "text-pink-500" },
  { label: "React", color: "text-sky-400" },
  { label: "RDX",   color: "text-purple-400" },
  { label: "Node",  color: "text-green-500" },
  { label: "Java",  color: "text-orange-500" },
  { label: "Nuxt",  color: "text-emerald-400" },
  { label: "PgSQL", color: "text-blue-500" },
  { label: "PHP",   color: "text-indigo-400" },
  { label: "CSS3",  color: "text-cyan-500" },
  { label: "WF",    color: "text-gray-200" },
  { label: "SRC",   color: "text-teal-400" },
  { label: "JS",    color: "text-yellow-400" },
  { label: "HTML5", color: "text-orange-500" },
];

// export default function SoftwareDevelopmentCard({ card, style }) {
//   return (
//     <div
//       className="relative w-full max-w-5xl rounded-2xl overflow-hidden"
//       style={style}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-linear-to-r from-[#0c1120ee] via-[#0c112099] to-[#0c112055]" />

//       <div className="relative flex flex-col md:flex-row items-stretch min-h-[420px]">

//         {/* LEFT — Text Content */}
//         <div className="flex-1 flex flex-col justify-center px-10 py-12 gap-5">
//           <span className="text-[80px] leading-none font-extrabold text-white/10 select-none -mb-4">
//             {card.num}
//           </span>
//           <h1 className="text-[42px] font-extrabold text-white leading-tight">
//             {card.title}
//           </h1>
//           <p className="text-sm text-white/55 max-w-xs leading-relaxed">
//             {card.desc}
//           </p>
//           <div>
//             <button className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-[#0a0d14] font-semibold text-xs tracking-widest px-6 py-3 rounded-full transition-all hover:shadow-[0_0_0_4px_rgba(74,222,128,0.25)]">
//               <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
//               {card.btn}
//             </button>
//           </div>
//         </div>

//         {/* RIGHT — shadcn Card with tech icons */}
//         <div className="flex items-center justify-end px-6 py-8">
//           <Card className="w-[300px] bg-[#11162499] backdrop-blur-lg border border-white/10 rounded-2xl">
//             <CardHeader className="pb-2">
//               <CardTitle className="text-white text-base font-bold">
//                 {card.quality}
//               </CardTitle>
//               <p className="text-white/45 text-xs leading-relaxed">
//                 {card.qualityDesc}
//               </p>
//             </CardHeader>

//             <CardContent>
//               <div className="grid grid-cols-4 gap-2">
//                 {techIcons.map(({ label, color }) => (
//                   <div
//                     key={label}
//                     className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1c2130] border border-white/[0.07] hover:bg-[#252c40] hover:scale-105 transition-all cursor-default"
//                   >
//                     <span
//                       className={`${color} font-black text-[10px] leading-none text-center`}
//                     >
//                       {label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//       </div>
//     </div>
//   );
// }

export default function SoftwareDevelopmentCard({ card, style }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center px-4 will-change-transform absolute top-0 left-0"
      style={style}
    >
      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden border-[0.5px] border-gray-400 h-full transition-shadow duration-600 ease-[ease]"
        style={{ backgroundImage: `url(${card.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      >

        {/* 🔥 Overlay (from your first design) */}
        {/* <div className="absolute inset-0 rounded-2xl overflow-hidden bg-linear-to-r from-[#0c1120ee] via-[#0c112099] to-[#0c112055]" /> */}
       <div className="absolute inset-0 rounded-2xl bg-gray-900/90" />

        {/* 🔥 Glow blob (keep from slider system) */}
        <div
          className="absolute -top-[80px] -left-[60px] w-[340px] h-[340px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${card.accent}22 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row min-h-[420px] h-full">

          {/* ───────── LEFT (your design) ───────── */}
          <div className="flex-1 flex flex-col justify-center px-10 py-12 space-y-5">

            {/* Big number */}
            <h1 className="text-9xl leading-[128px] font-medium font-['Syne',sans-serif] text-[#889bc3]">
              {card.num}
            </h1>

            {/* Title */}
            <h1 className="text-[58px] font-extrabold text-white/80 leading-[55px] font-['Syne',sans-serif]">
              {card.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-[80%] leading-7 font-['DM_Sans',sans-serif]">
              {card.desc}
            </p>

            {/* Button */}
            <button className="inline-flex w-fit font-['Syne',sans-serif] items-center gap-2 bg-white/90 hover:bg-white text-[#0a0d14] font-semibold text-xs tracking-widest px-6 py-3 rounded-full transition-all shadow-[0_0_0_4px_rgba(74,222,128,0.15)]">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              {card.btn}
            </button>
          </div>

          {/* ───────── RIGHT (shadcn card from your first design) ───────── */}
          <div className="flex items-center justify-end px-6 py-8">

            <Card className="w-[350px] bg-[#11162499] backdrop-blur-lg border border-white/10 rounded-2xl">

              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xl font-bold">
                  {card.quality}
                </CardTitle>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {card.qualityDesc}
                </p>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-4 gap-2">
                  {techIcons.map((icon, i) => (
                    <div
                      key={i}
                      className="h-11 w-11 flex items-center justify-center rounded-xl bg-[#1c2130] border border-white/[0.07] hover:bg-[#252c40] hover:scale-105 transition-all"
                    >
                      <span className={`${icon.color} font-black text-[10px]`}>
                        {icon.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>

            </Card>

          </div>
        </div>

      </div>
    </div>
  );
} 