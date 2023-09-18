import IconsSmall from "../IconsSmall";
import Icons from "../Icons/Icons";
import NavLogUsers from "./NavLogUsers";
import { auth } from "../../Firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const NavFooter = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <div className="flex items-center">
        <IconsSmall type={"heart"} color={"black"} />
        <p className="cursor-pointer">Lista de Desejos</p>
      </div>
      {!user && (
        <div className="flex items-center gap-2">
          <Icons icon={"person"} styles={"ml-3 mt-0  text-[17px]"} />
          <NavLogUsers />
        </div>
      )}
      {user && <NavLogUsers />}
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
