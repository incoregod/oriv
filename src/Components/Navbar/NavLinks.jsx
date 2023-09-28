import SearchCartIcons from "./SearchCartIcons";
import { FaTimes } from "react-icons/fa";
import NavFooter from "./NavFooter";
import Routes from "./Routes";
import SideBarComponent from "../SideBarComponent/SideBarComponent";

const NavLinks = ({ type, handleSideBar }) => {
  return (
    <div
      className={`flex text-xs justify-center  text-white font-opensans ${
        !type && "mt-5"
      } `}
    >
      {type ? (
        <SideBarComponent position={{ top: "top-0", side: "left-0" }}>
          <div className=" border-b w-full border-opacity-50 border-gray-400 h-15 p-5 ">
            <FaTimes
              onClick={handleSideBar}
              className="text-lg  cursor-pointer"
            />
          </div>
          <Routes type={type} handleSideBar={handleSideBar} />
          {type && <NavFooter />}
        </SideBarComponent>
      ) : (
        <div className="flex items-center justify-center gap-5 mr-auto md:gap-10 lg:text-[0.9rem] lg:gap-16 xl:gap-24 2xl:gap-32">
          <Routes type={type} handleSideBar={handleSideBar} />
          <SearchCartIcons />
        </div>
      )}
    </div>
  );
};

export default NavLinks;
