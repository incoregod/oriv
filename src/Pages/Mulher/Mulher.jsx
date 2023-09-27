import HeaderComponent from "./HeaderComponent";
import SideBarM from "./SideBarM";
import mulherImg from "../../assets/brooke-cagle-kElEigko7PU-unsplash.webp";
const Mulher = () => {
  return (
    <div>
      <HeaderComponent
        imageSrc={mulherImg}
        title={"De Mulher"}
        subTitle={"Para Mulheres"}
      />
      <SideBarM />
    </div>
  );
};

export default Mulher;
