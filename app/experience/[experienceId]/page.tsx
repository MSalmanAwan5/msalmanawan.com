import React from "react";
import Image from "next/image";
import Link from "next/link";

import SectionWrapper from "@/components/SectionWrapper";
import Carousel from "@/components/ui/Carousel";
import { workExperience } from "@/data";
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
      <div>
        <div className="max-w-5xl mt-20">
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
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-5 mt-10 p-3">
              <div className="overflow-hidden rounded-md flex flex-col gap-3 border border-white/[.2] p-3 w-[300px] sm:max-w-full sm:col-span-2 ">
                <div className="relative w-full  h-64">
                  <Image
                    src={experience?.thumbnail || ""}
                    layout="fill"
                    objectFit="cover"
                    alt="Experience Thumbnail"
                    className="rounded-md"
                  />
                </div>
                <h1 className="font-bold text-xl sm:text-2xl">
                  {experience?.title}
                </h1>
                <div className="flex items-center">
                  {experience?.images.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        width={40}
                        height={40}
                        alt={`Icon ${index + 1}`}
                        className="p-2 w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p
                className="text-sm sm:text-lg font-light sm:font-normal sm:col-span-3"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
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
