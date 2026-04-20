
import Image from "next/image";
import EducationAndSkill from "@/app/components/educationAndExperience";
import Skill from "@/app/components/skills";
export default function Home() {
  return (
    <>
      <h1>Home</h1>    
      <EducationAndSkill></EducationAndSkill>
      <Skill></Skill>
    </>
  );
}
