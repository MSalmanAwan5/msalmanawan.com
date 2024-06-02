import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import SectionWrapper from "./SectionWrapper";

const Hero = () => {
  return (
    <SectionWrapper id="about">
      <div>
        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial gradient for the container to give a faded look */}
          <div
            // chnage the bg to bg-black-100, so it matches the bg color and will blend in
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-96">
              Full-Stack Wizardry with Modern Web Technologies
            </p>

            {/**
             *  Link: https://ui.aceternity.com/components/text-generate-effect
             *
             *  change md:text-6xl, add more responsive code
             */}
            <TextGenerateEffect
              words="Engineering Excellence into Innovative Software Solutions"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m <span className="text-purple">Salman</span>, a Sr.
              Software Engineer based in Pakistan.
            </p>

            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaArrowDown />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
