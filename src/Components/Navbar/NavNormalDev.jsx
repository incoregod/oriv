import NavLinks from "./NavLinks";
import logo from "../../assets//logo.png";
import NavTop from "./NavTop";
import { Link } from "react-router-dom";
import scrollTopHook from "../../Hooks/scrollTopHook";
const NavNormalDev = () => {
  return (
    <>
      <NavTop />
      <div className=" flex flex-row items-center justify-center text-white gap-2 ">
        <img className="w-28 invert" src={logo} alt="carol-logo" />
        <Link to={"/"} aria-label="Link To Home" onClick={scrollTopHook()}>
          <h1 className="font-cormorant text-5xl tracking-wider ">
            CAROLINE BORGES
          </h1>
        </Link>
      </div>
      <NavLinks />
    </>
  );
};

export default NavNormalDev;
