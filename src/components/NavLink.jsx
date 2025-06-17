import clsx from "clsx";
import { memo } from "react";
import { Link } from "react-router";

const NavLink = ({ link, to, className, activeLink, setActiveLink }) => {
  const isActiveLink = activeLink === link;
  return (
    <Link
      to={to}
      onClick={() => setActiveLink(link)}
      className={clsx(
        "uppercase tracking-wide hover:text-Red-400 transition duration-200 ease-linear cursor-pointer",
        isActiveLink
        ? "text-Blue-950 underline underline-offset-[1rem] decoration-Red-400 decoration-2 font-500"
        : "",
        className
      )}
    >
      {link}
    </Link>
  );
};

export default memo(NavLink);
