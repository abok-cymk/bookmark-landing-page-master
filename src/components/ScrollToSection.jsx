import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionElement = document.getElementById(
        location.hash.replace("#", "")
      );
      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  }, [location]);

  return null;
}

export default ScrollToSection;
