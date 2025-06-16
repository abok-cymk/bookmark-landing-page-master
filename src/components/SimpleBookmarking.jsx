import { Link } from "react-router";
import BehindImageShape from "./BehindImageShape";

const baseImagePath = import.meta.env.BASE_URL;
const SimpleBookmarking = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <figure className="relative">
        <img
          src={`${baseImagePath}/illustration-features-tab-1.svg`}
          alt=""
          className="relative"
        />
        <BehindImageShape className="shape right-20 -bottom-10 md:-bottom-20 -z-1"/>
      </figure>
      <div className="mt-16 md:mt-0 text-center md:text-left flex flex-col gap-y-6">
        <h3 className="font-500 text-2xl text-Blue-950">Bookmark in one click </h3>
        <p>
            Organize your bookmarks however you like. Our
            simple drag-and-drop interface gives you complete control over how you
            manage your favourite sites.
        </p> 
        <Link to="/">More Info</Link>
      </div>
    </div>
  );
};

export default SimpleBookmarking;
