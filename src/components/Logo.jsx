import clsx from "clsx";
import { memo } from "react";
import { Link } from "react-router";

const baseImagePath = import.meta.env.BASE_URL;

const Logo = ({ className }) => {
  return (
    <Link to="/"><img src={`${baseImagePath}/logo-bookmark.svg`} alt="Bookmark logo" className={clsx(className)}/></Link>
  );
}

export default memo(Logo);
