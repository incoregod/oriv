import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsHouse,
  BsEnvelopeOpen,
  BsTelephone,
  BsClock,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left font-playfair mt-20 2xl:mt-20">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-evenly">
          <div className="mr-12 hidden lg:block">
            <span>Juntar-se às nossas redes sociais:</span>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/atelier.caroline.borges/"
              rel="noreferrer"
              target="_blank"
              className="mr-6 text-neutral-600 dark:text-neutral-200"
            >
              <BsFacebook />
            </a>

            <a
              href="https://www.facebook.com/atelier.caroline.borges/"
              rel="noreferrer"
              target="_blank"
              className="mr-6 text-neutral-600 dark:text-neutral-200"
            >
              <BsInstagram />
            </a>

            <a
              href="https://www.facebook.com/atelier.caroline.borges/"
              rel="noreferrer"
              target="_blank"
              className="mr-6 text-neutral-600 dark:text-neutral-200"
            >
              <BsPinterest />
            </a>
          </div>
        </div>

        <div className="mx-6 py-10 text-center md:text-center lg:text-left ">
          <div className="grid-1 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
            <div className="mb-10 md:mb-20">
              <h6 className="mb-4  font-semibold uppercase ">
                Caroline Borges
              </h6>
              <p className=" p-2">
                <Link to={"/sobre"}>+ Sobre mim</Link>
              </p>
              <p className=" p-2">
                <Link to={"/sobre"}>+ Catálogos Digitais</Link>
              </p>
            </div>

            <div className="mb-10 md:mb-20">
              <h6 className="mb-4  font-semibold uppercase ">Products</h6>

              <p className="p-2">
                {" "}
                <Link
                  to={"/"}
                  className=" text-neutral-600 dark:text-neutral-200"
                >
                  + Coleção Mulher
                </Link>
              </p>
              <p className="p-2">
                {" "}
                <Link
                  to={"/"}
                  className=" text-neutral-600 dark:text-neutral-200"
                >
                  + Coleção Homem
                </Link>
              </p>
              <p className="p-2">
                {" "}
                <Link
                  to={"/"}
                  className=" text-neutral-600 dark:text-neutral-200"
                >
                  + Coleção Cereja
                </Link>
              </p>
              <p className="p-2">
                {" "}
                <Link
                  to={"/"}
                  className=" text-neutral-600 dark:text-neutral-200"
                >
                  + Coleção Inverno
                </Link>
              </p>
            </div>

            <div className="mb-10 md:mb-20">
              <h6 className="mb-4 font-semibold uppercase ">
                Apoio ao Cliente
              </h6>
              <p className="p-2">
                <Link
                  to={"/"}
                  className=" text-neutral-600 dark:text-neutral-200"
                >
                  + Questões Frequentes
                </Link>
              </p>
              <p className="p-2">
                <Link
                  to={"/"}
                  className=" text-neutral-600 dark:text-neutral-200"
                >
                  + Guia de Tamanhos
                </Link>
              </p>
              <p className="p-2">
                <Link
                  to={"/"}
                  className=" text-neutral-600 dark:text-neutral-200"
                >
                  + Trocas e Devoluções
                </Link>
              </p>

              <p className="p-2">
                <Link
                  to={"/"}
                  className=" text-neutral-600 dark:text-neutral-200"
                >
                  + Envios e Encomendas
                </Link>
              </p>
            </div>

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
          </div>
        </div>

        <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
          <p className="text-xs">
            © 2023 Todos os Direitos Reservados: Caroline Borges
          </p>

          <p className="text-[0.6rem]">Designed & Developed by F&apos;Rolo</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
