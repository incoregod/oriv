import NavTop from "./NavTop";
import NavSmallDev from "./NavSmallDev";
import NavNormalDev from "./NavNormalDev";
import { useMediaQuery } from "react-responsive";
const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      <div className="bg-gradientgray  bg-opacity-50 p-3 fixed top-0 left-0 right-0 z-50">
        {isDesktopOrLaptop && isDesktopOrLaptop && <NavTop />}
        {isTabletOrMobile && <NavSmallDev />}
        {isDesktopOrLaptop && <NavNormalDev />}
      </div>
    </>
  );
};

export default Navbar;
