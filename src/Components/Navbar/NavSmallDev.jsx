import Burger from "./Burger";
import SearchCartIcons from "./SearchCartIcons";

const NavSmallDev = () => {
  return (
    <div className="flex items-center justify-between text-white  bg-gradientgray  bg-opacity-50 p-3 fixed top-0 left-0 right-0 z-50 ">
      <Burger />
      <h1 className="font-cormorant text-xl font-bold tracking-wider cursor-pointer ">
        CAROLINE BORGES
      </h1>
      <SearchCartIcons />
    </div>
  );
};

export default NavSmallDev;
