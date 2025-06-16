import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
const baseImagePath = import.meta.env.BASE_URL;
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickInside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickInside);

    return () => {
      document.removeEventListener("mousedown", handleClickInside);
    };
  }, []);
  return (
    <header className="px-6 pt-8 pb-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {!toggleMenu && (
          <>
            <Logo />
            <nav>
              <ul className="hidden md:flex items-center gap-x-6 text-sm">
                <NavLink link="features" />
                <NavLink link="pricing" />
                <NavLink link="contact" />
                <NavLink
                  link="login"
                  className="bg-Red-400 text-Grey-50 rounded-md hover:bg-transparent hover:outline-2 px-4 py-1.5 w-full md:w-fit"
                />
              </ul>

              <button
                type="button"
                className="flex md:hidden relative cursor-pointer"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <img
                  src={`${baseImagePath}/icon-hamburger.svg`}
                  alt="Open Mobile Menu"
                  className="h-6 w-6"
                />
              </button>
            </nav>
          </>
        )}
        {toggleMenu && (
          <MobileMenu ref={menuRef} setToggleMenu={setToggleMenu} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
