"use client";
import Navbar from "./components/navbar";
import EducationAndExperience from "./components/educationAndExperience";
import HeroSection from "./components/hero";
import Skills from "./components/skills";
import ServiceCarousel from "./components/ServiceCarousel";
import GalleryView from "./components/galleryView";
import RollerScroll from "./components/rollerScroll";
import WorkSlider from "./components/workSlider";
import VerticalSlider from "./components/mordernCard";
import Testimonial from "./components/testimonial";
import GetInTouch from "./components/footer";
import TechStackSection from "./components/techstacksection";

export default function Home() {
  return (
    <>
      <section id="home">
        <Navbar />
        <HeroSection />
      </section>
      <section id="service">
        <ServiceCarousel />
      </section>
      <section id="techstack">
        <TechStackSection />
      </section>
      <section id="portfolio">
        <VerticalSlider />
      </section>
      <section id="gallery">
        <GalleryView />
      </section>
      <RollerScroll />
      <section id="work">
        <WorkSlider />
      </section>
      <section id="experience">
        <EducationAndExperience />
      </section>
      <section id="skill">
        <Skills />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="contact">
        <GetInTouch />
      </section>
    </>
  );
}
