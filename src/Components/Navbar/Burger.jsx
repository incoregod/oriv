import { PiListLight } from "react-icons/pi";
import { useState } from "react";
import NavLinks from "./NavLinks";
const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurger = () => {
    setIsOpen((prevVal) => !prevVal);
  };

  return (
    // <div className="sm:hidden ">
    <>
      <PiListLight
        onClick={handleBurger}
        className="text-white text-2xl cursor-pointer"
      />
      {isOpen && <NavLinks type={"sidemenu"} handleSideBar={handleBurger} />}
    </>
    // </div>
  );
};

export default Burger;
