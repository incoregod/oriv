const About = () => {
  return (
    <div className="py-20 px-5 2xl:py-36  flex  items-center justify-center flex-col ">
      <div className=" text-gray-800 ">
        <h1 className="font-playfair  w-[250px] text-2xl  2xl:text-5xl 2xl:w-[950px] text-center font-light border-[1px] border-black p-10">
          Caroline Borges Atelier resultado da vontade de criar uma simbiose
          entre a joalharia de autor e a ourivesaria convencional.
        </h1>
      </div>
      <hr className="text-black h-[1px] w-36  bg-black  mt-10 mb-5" />
      <div>
        <h1 className="font-playfair w-[250px] text-xl  2xl:text-4xl 2xl:w-[950px] text-center font-light ">
          Aqui criamos Jóias com recurso a matérias-primas preciosas. Atelier
          Fundado em 29 de Novembro de 2010
        </h1>
      </div>
    </div>
  );
};

export default About;
