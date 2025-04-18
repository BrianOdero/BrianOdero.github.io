
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import FooterSection from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WorkExperience from "@/components/WorkExperience";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex=col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full overflow-clip">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <WorkExperience/>
        <Approach/>
        <FooterSection/>
      </div>
    </main>
  );
}
