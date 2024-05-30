import SectionWrapper from "@/components/SectionWrapper";
import Carousel from "@/components/ui/Carousel";

import { workExperience } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface ProjectsProps {
  params: {
    experienceId: string;
  };
}

type Props = {
  params: { experienceId: string };
};

export async function generateMetadata({ params }: Props) {
  const experienceId = params.experienceId;
  const experience = workExperience.find(
    (exp) => exp.experiencId === experienceId
  );

  return {
    title: experience?.title,
    description: experience?.desc,
  };
}

const Projects = ({ params }: ProjectsProps) => {
  const experienceId = params.experienceId;

  const experience = workExperience.find(
    (exp) => exp.experiencId === experienceId
  );

  return (
    <SectionWrapper>
      <div className=" ">
        <div className="w-full absolute -top-60 min-h-96">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            width={20}
            height={20}
            className="w-full h-full opacity-30"
          />
        </div>
        <div className="max-w-3xl mt-20">
          <h1 className="heading">
            Work <span className="text-purple">Experience</span>
          </h1>
          <div className="text-center flex items-center justify-center gap-4 mt-8">
            <Link href={"/"} className="cursor-pointer">
              Home
            </Link>{" "}
            <FaArrowRight />{" "}
            <span className="text-purple">{experience?.project}</span>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-5 mt-10 max-w-5xl">
              <div className="overflow-hidden rounded-md w-[300px] sm:w-[600px] flex flex-col gap-3  border border-white/[.2] p-3">
                <Image
                  src={experience?.thumbnail || ""}
                  width={100}
                  height={100}
                  alt=""
                  className="w-full h-32 rounded-md"
                />
                <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                  {experience?.title}
                </h1>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center">
                    {experience?.images.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          width={100}
                          height={100}
                          alt="icon5"
                          className="p-2 w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm "
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {experience?.desc}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-10 sm:mt-20 md:mt-32">
          <h1 className="heading">
            Project <span className="text-purple">Highlights</span>
          </h1>
          <div className="max-w-lg mt-10 sm:mt-20 md:mt-32 rounded-md overflow-hidden">
            <Carousel autoSlide={true}>
              {experience?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="carousel_image"
                  className="w-full h-auto"
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
