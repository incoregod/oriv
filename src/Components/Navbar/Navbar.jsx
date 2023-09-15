import { useState, useEffect } from "react";
import NavSmallDev from "./NavSmallDev";
import NavNormalDev from "./NavNormalDev";
import { useMediaQuery } from "react-responsive";
const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [showElement, setShowElement] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowElement(true);
      } else {
        setShowElement(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showElement]);

  return (
    <>
      <div className=" absolute top-0 left-0 right-0 z-50 ">
        {isTabletOrMobile && <NavSmallDev />}
        <div className="bg-gradientgray  bg-opacity-50 p-3 ">
          {isDesktopOrLaptop && !showElement && <NavNormalDev />}
          {showElement && <NavSmallDev />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
