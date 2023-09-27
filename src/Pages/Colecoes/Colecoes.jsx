import HeaderComponent from "../Mulher/HeaderComponent";
import ColecoesImg from "../../assets/teste.jpg";

const Colecoes = () => {
  return (
    <div>
      <HeaderComponent
        imageSrc={ColecoesImg}
        title={"As Nossas"}
        subTitle={"Coleções"}
      />
    </div>
  );
};

export default Colecoes;
