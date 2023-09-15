import NavTop from "./NavTop";

import NavSmallDev from "./NavSmallDev";
import NavNormalDev from "./NavNormalDev";
const Navbar = () => {
  return (
    <>
      <div className="bg-gray-950 bg-opacity-50 p-3 fixed top-0 left-0 right-0 z-50">
        <div className="max-md:hidden">
          <NavTop />
        </div>
        <div className="md:hidden">
          <NavSmallDev />
        </div>
        <div className="max-md:hidden">
          <NavNormalDev />
        </div>
      </div>
    </>
  );
};

export default Navbar;
