import React from "react";
import SectionWrapper from "./SectionWrapper";
import { imgArray } from "@/data";
import Image from "next/image";

const Expertise = () => {
  return (
    <SectionWrapper>
      <div>
        <h1 className="heading">
          My <span className="text-purple">Expertise</span>
        </h1>
        <div className="mt-10 sm:mt-20 md:mt-36 flex flex-wrap items-center justify-center gap-4 md:gap-16">
          {imgArray.map((image, index) => (
            <React.Fragment key={index}>
              <div className="flex gap-2 bg-white w-32 h-20 items-center justify-center rounded-tr-[50px] rounded-bl-[50px]">
                <Image
                  src={image.name}
                  alt={""}
                  width={image.size}
                  height={image.size}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Expertise;
