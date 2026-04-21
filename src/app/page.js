import Image from "next/image";
import Navbar from "./components/navbar";
import EducationAndExperience from "./components/educationAndExperience";
import HeroSection from "./components/hero";
import Skills from "./components/skills";
import ServiceCarousel from "./components/ServiceCarousel";
import GalleryView from "./components/galleryView";
import RollerScroll from "./components/rollerScroll";
import ModernSlider from "./components/mordernCard";
import WorkSlider from "./components/workSlider";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EducationAndExperience />
      <Skills></Skills>
      <ServiceCarousel />
      <GalleryView />
      <RollerScroll></RollerScroll>
      <ModernSlider></ModernSlider>
      <WorkSlider></WorkSlider>
    </>
  );
}
