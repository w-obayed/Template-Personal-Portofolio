import Image from "next/image";
import Navbar from "./components/navbar";
import EducationAndExperience from "./components/educationAndExperience";
import HeroSection from "./components/hero";
import Skills from "./components/skills";
import ServiceCarousel from "./components/ServiceCarousel";
import GalleryView from "./components/galleryView";
import RollerScroll from "./components/rollerScroll";
import WorkSlider from "./components/workSlider";
import VerticalSlider from "./components/mordernCard";
import TrustBadges from "./components/trustbadge";
export default function Home() {
  return (
    <>
      <div className="bg-primary">
        <Navbar />
        <HeroSection />
        <ServiceCarousel />
        <VerticalSlider></VerticalSlider>
        <GalleryView />
        <RollerScroll></RollerScroll>
        <WorkSlider></WorkSlider>
        <EducationAndExperience />
        <Skills></Skills>
        <TrustBadges></TrustBadges>
      </div>
    </>
  );
}
