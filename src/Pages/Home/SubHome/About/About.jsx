import AboutText from "./AboutText";
import logo from "../../../../assets/logo.webp";
const About = () => {
  return (
    <div className="  flex  items-center justify-center flex-col text-gray-800 ">
      <AboutText
        style={"border-[1px] border-black p-10"}
        text={
          "Caroline Borges Atelier resultado da vontade de criar uma simbiose entre a joalharia de autor e a ourivesaria convencional."
        }
      />
      <hr className="text-black h-[1px] w-36  bg-black  mt-10 mb-5" />
      <div className="hidden md:block">
        <AboutText
          text={
            "Aqui criamos Jóias com recurso a matérias-primas preciosas. Atelier Fundado em 29 de Novembro de 2010"
          }
          textStyle={
            "text-xl lg:text-2xl  2xl:text-4xl font-playfair text-center font-light"
          }
        />
      </div>
      <div className="mt-5 md:hidden">
        <img className="w-56" src={logo} alt={logo} />
      </div>
    </div>
  );
};

export default About;
