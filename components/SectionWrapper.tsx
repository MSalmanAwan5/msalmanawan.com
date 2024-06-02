import clsx from "clsx";
import React from "react";

interface SectionWrapperProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const SectionWrapper = ({
  className = "",
  children,
  ...rest
}: SectionWrapperProps) => {
  return (
    <div
      className={clsx(
        "pt-16 sm:pt-36 mx-auto flex items-center justify-center",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
