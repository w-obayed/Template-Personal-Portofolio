import Image from "next/image";
import Navbar from "./components/navbar";
import EducationAndExperience from "./components/educationAndExperience";
import HeroSection from "./components/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EducationAndExperience />
    </>
  );
}
