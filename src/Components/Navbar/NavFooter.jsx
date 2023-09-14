import IconsSmall from "../IconsSmall";
import Icons from "../Icons/Icons";
const NavFooter = () => {
  return (
    <>
      <div className="flex items-center">
        <IconsSmall type={"heart"} color={"black"} />
        <p className="cursor-pointer">Lista de Desejos</p>
      </div>
      <div className="flex items-center gap-2">
        <Icons icon={"person"} styles={"ml-3 mt-0  text-[17px]"} />
        <p className="cursor-pointer"> Iniciar sessão</p>
        <p>|</p>
        <p className="cursor-pointer">Efetuar registo</p>
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
