import { PiMapPinLight } from "react-icons/pi";
import IconsSmall from "../IconsSmall";
import Icons from "../Icons/Icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/Firebase";
import NavLogUsers from "./NavLogUsers";

const NavTop = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className=" flex items-center  font-opensans text-white text-xs mb-3">
      <Icons icon={"globe"} styles={"mr-1"} />
      <p className="mr-5">Portugal | pt</p>
      <PiMapPinLight className="mr-2 text-[16px]" />
      <p className="mr-auto cursor-pointer">Loja</p>
      {!user && (
        <div className="flex items-center gap-1">
          <Icons icon={"person"} styles={"ml-3 mt-0  text-[17px]"} />
          <NavLogUsers />
          <IconsSmall type={"heart"} color={"white"} />
        </div>
      )}
      {user && <NavLogUsers />}
    </div>
  );
};

export default NavTop;
