import { Link } from "react-router";
import BehindImageShape from "./BehindImageShape";

const baseImagePath = import.meta.env.BASE_URL;

const SpeedySearching = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 items-center">
      <figure className="relative">
        <img
          src={`${baseImagePath}/illustration-features-tab-2.svg`}
          alt=""
          className="relative"
        />
        <BehindImageShape className="shape right-20 lg:right-50 -bottom-10 md:-bottom-10 -z-1" />
      </figure>
      <div className="mt-16 md:mt-0 text-center md:text-left flex flex-col gap-y-6">
        <h3 className="font-500 text-2xl text-Blue-950">Intelligent search</h3>
        <p>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <Link
          to="/"
          className="hidden md:block bg-Blue-600 w-fit px-4 py-2 rounded-md text-Grey-50 font-500"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default SpeedySearching;
