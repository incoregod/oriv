import Icons from "../Icons/Icons";
import NavLogUsers from "./NavLogUsers";
import Counter from "../Counter/Counter";
const NavFooter = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="relative">
          <Counter
            icon={"heart"}
            style={"mr-3 ml-3 h-7 cursor-pointer"}
            bgColor={"white"}
            textColor={"black"}
          />
        </div>
        <p className="cursor-pointer">Lista de Desejos</p>
      </div>

      <div className="flex items-center gap-2">
        <Icons icon={"person"} styles={"ml-3 mt-0  text-[17px]"} />
        <NavLogUsers />
      </div>

      <div className="flex items-center gap-3">
        <Icons icon={"pin"} styles={"ml-3 mt-0  text-[17px]"} />
        <p className="cursor-pointer">Lojas</p>
      </div>
      <div className="flex items-center gap-3">
        <Icons
          icon={"globe"}
          styles={"ml-3 mt-0  text-[17px]"}
          divStyle={"flex items-center gap-3"}
        />
        <p>Portugal | pt</p>
      </div>
    </>
  );
};

export default NavFooter;
