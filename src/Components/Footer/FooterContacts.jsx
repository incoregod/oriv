import { BsHouse, BsEnvelopeOpen, BsTelephone, BsClock } from "react-icons/bs";

const FooterContacts = () => {
  return (
    <div className=" flex flex-col items-center lg:items-start">
      <h6 className="mb-4  font-semibold uppercase ">Contactos</h6>

      <p className="flex items-center gap-2 p-2 text-xs md:text-[0.9rem]">
        <BsHouse />
        Praça do Município, nº 7, Fundão, Pt
      </p>

      <p className="flex items-center gap-2 p-2 text-xs md:text-[0.9rem]">
        <BsEnvelopeOpen />
        carolinediasborges@gmail.com
      </p>

      <p className="flex items-center gap-2 p-2 text-xs md:text-[0.9rem]">
        <BsTelephone />+ 351 275 182 071
      </p>

      <p className="flex items-start gap-2 p-2 text-xs md:text-[0.9rem] ">
        <BsClock />
        Segunda a Sexta 10:00 às 13:00
        <br /> - 15:00 às 19:00
      </p>

      <p className="flex items-center gap-2 p-2 text-xs md:text-[0.9rem] ">
        <BsClock />
        Sábado 10:00 às 13:00
      </p>
    </div>
  );
};

export default FooterContacts;
