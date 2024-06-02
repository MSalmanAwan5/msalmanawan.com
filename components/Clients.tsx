import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import SectionWrapper from "./SectionWrapper";

const Clients = () => {
  return (
    <SectionWrapper id="testimonials">
      <div>
        <h1 className="heading">
          Kind Words from
          <span className="text-purple"> Satisfied Clients</span>
        </h1>

        <div className="mt-10 sm:mt-20 md:mt-36 flex flex-col items-center">
          <div
            // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
            className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden "
          >
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Clients;
