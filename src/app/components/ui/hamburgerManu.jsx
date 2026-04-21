import { motion } from "framer-motion";
function HamburgerIcon({ open }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-between cursor-pointer">
      <motion.span
        className="block h-[2px] w-full bg-white rounded-full origin-center"
        animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block h-[2px] w-full bg-white rounded-full"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-[2px] w-full bg-white rounded-full origin-center"
        animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export default HamburgerIcon;
