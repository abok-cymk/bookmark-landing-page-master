import clsx from "clsx";
import { memo } from "react";

const BehindImageShape = ({ className }) => {
  return (
    <div className={clsx("absolute w-[900px] h-[200px] md:h-[250px] lg:h-[350px] bg-Blue-600", className)} />
  );
}

export default memo(BehindImageShape);
