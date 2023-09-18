import { BsPerson, BsGlobe } from "react-icons/bs";
import { PiMapPinLight } from "react-icons/pi";
import IconsSmall from "../IconsSmall";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const NavTop = () => {
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
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
          <p className="cursor-pointer" onClick={GoogleLogin}>
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
            onClick={() => auth.signOut()}
          />
          <IconsSmall type={"heart"} color={"white"} />
        </div>
      )}
    </div>
  );
};

export default NavTop;
