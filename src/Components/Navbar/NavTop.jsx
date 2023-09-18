import { BsPerson, BsGlobe } from "react-icons/bs";
import { PiMapPinLight } from "react-icons/pi";
import IconsSmall from "../IconsSmall";

import { useAuthState } from "react-firebase-hooks/auth";
import {
  signInWithGooglePopup,
  signOutUser,
  auth,
} from "../../Firebase/Firebase";

const NavTop = () => {
  const [user, loading] = useAuthState(auth);

  const googleLogin = () => {
    signInWithGooglePopup();
  };

  const googleLogout = () => {
    signOutUser();
  };

  return (
    <div className=" flex items-center  font-opensans text-white text-xs mb-3">
      <BsGlobe className="mr-1" />
      <p className="mr-5">Portugal | pt</p>
      <PiMapPinLight className="mr-2 text-[16px]" />
      <p className="mr-auto cursor-pointer">Loja</p>
      {!user && (
        <div className="flex items-center gap-1">
          <BsPerson />
          <p className="cursor-pointer" onClick={googleLogin}>
            {" "}
            Iniciar sessão
          </p>
          <p>|</p>
          <p className="cursor-pointer">Efetuar registo</p>
          <IconsSmall type={"heart"} color={"white"} />
        </div>
      )}
      {user && (
        <div className="flex items-center gap-1">
          <img
            className="object-cover rounded-full w-8 cursor-pointer"
            src={auth.currentUser.photoURL}
            onClick={googleLogout}
          />
          <IconsSmall type={"heart"} color={"white"} />
        </div>
      )}
    </div>
  );
};

export default NavTop;
