import Burger from "./Burger";
import SearchCartIcons from "./SearchCartIcons";

const NavSmallDev = () => {
  return (
    <div className="flex items-center justify-between text-white sm:hidden">
      <Burger />
      <h1 className="font-cormorant text-xl font-bold tracking-wider cursor-pointer ">
        CAROLINE BORGES
      </h1>
      <SearchCartIcons />
    </div>
  );
};

export default NavSmallDev;
