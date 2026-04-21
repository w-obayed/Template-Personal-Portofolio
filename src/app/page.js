import Image from "next/image";
import Navbar from "./components/navbar";
import EducationAndExperience from "./components/educationAndExperience";
import HeroSection from "./components/hero";
import Skills from "./components/skills";
import ServiceCarousel from "./components/ServiceCarousel";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EducationAndExperience />
      <Skills></Skills>
      <ServiceCarousel />
    </>
  );
}
