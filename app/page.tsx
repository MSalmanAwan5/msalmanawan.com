"use client";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Highlights from "@/components/Highlights";
import Expertise from "@/components/Expertise";

const Home = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <RecentProjects />
      <Clients />
      <Expertise />
      <Experience />
      <Approach />
    </>
  );
};

export default Home;
