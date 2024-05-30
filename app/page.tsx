"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Expertise from "@/components/Expertise";
import Highlights from "@/components/Highlights";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Highlights />
      <RecentProjects />
      <Clients />
      <Expertise />
      <Experience />
      <Approach />
    </div>
  );
};

export default Home;
