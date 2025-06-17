import { useState } from "react";
import NavLink from "../components/NavLink";
import { Link } from "react-router-dom";
import SocialPlatforms from "../components/SocialPlatforms";
const baseImagePath = import.meta.env.BASE_URL;
const Footer = () => {
  const [activeLink, setActiveLink] = useState(null);
  return (
    <footer className="bg-Blue-950">
      <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto w-full px-6 py-10">
          <div className="flex md:flex-row flex-col items-center gap-8">
            <Link to="/">
            <img src={`${baseImagePath}/logo-bookmark.svg`} alt="" className="logo__footer h-6"/>
            </Link>
            <div className="flex md:flex-row flex-col gap-4 max-sm:text-center text-Grey-50 text-sm">
                <NavLink
                  link="features"
                  to="#features"
                />
                <NavLink
                  link="pricing"
                  to="/"
                />
                <NavLink
                  link="contact"
                  to="#contact"
                />
            </div>
          </div>
          <SocialPlatforms />
      </div>
    </footer>
  );
};

export default Footer;
