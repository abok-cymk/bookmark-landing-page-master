import clsx from "clsx";
import { memo } from "react";
import { Link } from "react-router";

const NavLink = ({ link, className, onClick }) => {
  return (
    <Link to="/" onClick={onClick} className={clsx("uppercase tracking-wide hover:text-Red-400 transition duration-200 ease-linear cursor-pointer", className)}>
      {link}
    </Link>
  );
}

export default memo(NavLink);
