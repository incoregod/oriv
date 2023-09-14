import NavTop from "./NavTop";

import NavSmallDev from "./NavSmallDev";
import NavNormalDev from "./NavNormalDev";
const Navbar = () => {
  return (
    <>
      <div className="bg-gray-950 bg-opacity-50 p-3 absolute z-10 top-0 left-0 right-0">
        <NavTop />
        <div className="sm:hidden">
          <NavSmallDev />
        </div>
        <NavNormalDev />
      </div>
    </>
  );
};

export default Navbar;
