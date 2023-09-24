import Icons from "../Icons/Icons";
import NavLogUsers from "./NavLogUsers";
import Counter from "../Counter/Counter";

const NavTop = () => {
  return (
    <div className=" flex items-center  font-opensans text-white text-xs mb-3">
      <Icons icon={"globe"} styles={"mr-1"} />
      <p className="mr-5">Portugal | pt</p>

      <Icons icon={"pin"} styles={"mr-2 text-[16px]"} />
      <p className="mr-auto cursor-pointer">Loja</p>

      <div className="flex items-center gap-1 relative">
        <Icons icon={"person"} styles={"ml-3 mt-0  text-[17px]"} />
        <NavLogUsers />
        <Counter
          icon={"heart"}
          style={"mr-3 ml-3 h-7 cursor-pointer"}
          bgColor={"white"}
          textColor={"black"}
        />
      </div>
    </div>
  );
};

export default NavTop;
