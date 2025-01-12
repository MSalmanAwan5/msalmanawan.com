import Link from "next/link";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const Experience = () => {
  return (
    <SectionWrapper>
      <div>
        <h1 className="heading">
          Work <span className="text-purple">Experience</span>
        </h1>

        <div className="w-full mt-10 sm:mt-20 md:mt-36 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => {
            return (
              <Button
                key={card.id}
                //   random duration will be fun , I think , may be not
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  //   add these two
                  //   you can generate the color from here https://cssgradient.io/
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  // add this border radius to make it more rounded so that the moving border is more realistic
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                // remove bg-white dark:bg-slate-900
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                  <Image
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    width={200}
                    height={200}
                    className="lg:w-32 md:w-20 w-16 lg:h-32 md:h-20 h-16 rounded-full"
                  />
                  <div className="lg:ms-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold">
                      {card.title}
                    </h1>
                    <h2 className="text-start text-lg font-bold underline underline-offset-8">
                      {card.project}
                    </h2>
                    <div>
                      <p className="text-start text-white-100 mt-3 font-semibold line-clamp-2">
                        {card.desc}{" "}
                      </p>
                      <Link
                        href={`/experience/${card.experiencId}`}
                        target="_blank"
                        className="mt-2 block text-left underline underline-offset-4 decoration-purple text-purple cursor-pointer mb-4"
                      >
                        Read more
                      </Link>
                    </div>

                    <div className="flex items-end justify-start">
                      <a href={card.href} target="_blank">
                        <MagicButton
                          title="Visit"
                          icon={<FaLocationArrow />}
                          position="right"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
