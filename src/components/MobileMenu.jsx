import { forwardRef, useState } from "react";
import { Link } from "react-router";
import NavLink from "./NavLink";

const baseImagePath = import.meta.env.BASE_URL;
const MobileMenu = forwardRef((props, ref) => {
  const [activeLink, setActiveLink] = useState(null);
  const { setToggleMenu } = props;
  return (
    <nav
      className="text-Grey-50 absolute inset-0 w-full p-[2rem] flex flex-col justify-between bg-Blue-950/80 z-[9999]"
      ref={ref}
    >
      <div className="divide-y-2 divide-Grey-50/50">
        <div className="flex items-center justify-between pb-10">
          <Link to="/" onClick={() => setToggleMenu(false)}>
            <img
              src={`${baseImagePath}/logo-bookmark.svg`}
              alt="Bookmark logo"
              className="logo__mobileNav"
            />
          </Link>
          <button type="button" onClick={() => setToggleMenu(false)}>
            <img
              src={`${baseImagePath}/icon-close.svg`}
              alt="Close Mobile Menu"
              className="h-6 w-6 cursor-pointer"
            />
          </button>
        </div>
        <ul className="flex flex-col gap-y-5 text-center pt-8 font-500 w-full divide-y-2 divide-Grey-50/50">
          <NavLink
            link="features"
            to="/"
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            onClick={() => setToggleMenu(false)}
            className="pb-8"
          />
          <NavLink
            link="pricing"
            to="/"
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            onClick={() => setToggleMenu(false)}
            className="pb-8"
          />
          <NavLink
            link="contact"
            to="#contact"
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            onClick={() => setToggleMenu(false)}
            className="pb-8"
          />
          <NavLink
            link="login"
            to="/"
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            className="outline-2 hover:text-black hover:outline-0 hover:bg-Red-400 px-4 py-3 rounded-md mt-6 w-full md:w-fit"
            onClick={() => setToggleMenu(false)}
          />
        </ul>
      </div>
      <div className="flex items-center justify-center gap-x-10 pb-16">
        <Link to="/" onClick={() => setToggleMenu(false)}>
          <img
            src={`${baseImagePath}/icon-facebook.svg`}
            alt="Facebook"
            className="h-8 w-8"
          />
        </Link>
        <Link to="/" onClick={() => setToggleMenu(false)}>
          <img
            src={`${baseImagePath}/icon-twitter.svg`}
            alt="Twitter"
            className="h-8 w-8"
          />
        </Link>
      </div>
    </nav>
  );
});

export default MobileMenu;
