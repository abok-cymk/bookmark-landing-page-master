import { Link } from "react-router";
import BehindImageShape from "../components/BehindImageShape";

const baseImagePath = import.meta.env.BASE_URL;
const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto mt-10 pb-8">
      <figure className="order-1 md:order-2 relative z-10">
        <img
          src={`${baseImagePath}/illustration-hero.svg`}
          alt=""
          className="relative z-10"
        />
        <BehindImageShape className="shape bottom-0 left-30 md:bottom-8 lg:bottom-2 z-1" />
      </figure>
      <div className="order-2 md:order-1 px-8 lg:pl-12 lg:pt-16 max-sm:mt-10">
        <h1 className="text-3xl md:text-5xl font-500 text-Blue-950 pb-6">
          A Simple Bookmark Manager{" "}
        </h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            to="/"
            className="bg-Blue-600 hover:text-Blue-600 hover:bg-transparent hover:outline-2 hover:outline-Blue-600 outline outline-Grey-50/50 px-4 py-3 text-Grey-50 rounded-lg shadow-lg whitespace-nowrap"
          >
            Get it on Chrome
          </Link> 
          <Link
            to="/"
            className="bg-Grey-50 hover:bg-transparent hover:outline-2 hover:outline-Blue-950 hover:text-Blue-950 outline outline-Grey-50/50 px-4 py-3 rounded-lg shadow-lg whitespace-nowrap"
          >
            Get it on Firefox
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
