import NavLinks from "./NavLinks";
import logo from "../../assets//logo.png";
import NavTop from "./NavTop";
const NavNormalDev = () => {
  return (
    <>
      <NavTop />
      <div className=" flex flex-row items-center justify-center text-white gap-2 ">
        <img className="w-28 invert" src={logo} alt="carol-logo" />
        <h1 className="font-cormorant text-5xl tracking-wider ">
          CAROLINE BORGES
        </h1>
      </div>
      <NavLinks />
    </>
  );
};

export default NavNormalDev;
