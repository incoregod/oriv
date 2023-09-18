import { signInWithGooglePopup, signOutUser } from "../../Firebase/Firebase";
import IconsSmall from "../IconsSmall";
import { auth } from "../../Firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const NavLogUsers = () => {
  const [user, loading] = useAuthState(auth);
  const googleLogin = () => {
    signInWithGooglePopup();
  };

  const googleLogout = () => {
    signOutUser();
  };

  return (
    <>
      {!user && (
        <div className="flex items-center gap-1">
          <p className="cursor-pointer" onClick={googleLogin}>
            Iniciar sessão
          </p>
          <p>|</p>
          <p className="cursor-pointer">Efetuar registo</p>
        </div>
      )}
      {user && (
        <div className="flex items-center gap-1">
          <img
            className="object-cover rounded-full w-5 cursor-pointer ml-2"
            src={auth.currentUser.photoURL}
            onClick={googleLogout}
          />
          <p className="text-[10px] font-playfair">
            {auth.currentUser.displayName}
          </p>
          <IconsSmall type={"heart"} color={"white"} />
        </div>
      )}
    </>
  );
};

export default NavLogUsers;
