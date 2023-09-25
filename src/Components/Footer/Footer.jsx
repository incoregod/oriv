import { Link } from "react-router-dom";
import FooterContacts from "./FooterContacts";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  const useLinks = [
    {
      title: "CAROLINE BORGES",
      links: [
        {
          name: "+ Sobre mim",
          url: "/sobre",
        },
        {
          name: "+ Catálogos Digitais",
          url: "/catalogos",
        },
      ],
    },
    {
      title: "PRODUCTS",
      links: [
        {
          name: "+ Coleção Mulher",
          url: "/mulher",
        },
        {
          name: "+ Coleção Homem",
          url: "/homem",
        },
        {
          name: "+ Coleção Cereja",
          url: "/cereja",
        },
        {
          name: "+ Coleção Inverno",
          url: "/inverno",
        },
      ],
    },
    {
      title: "APOIO AO CLIENTE",
      links: [
        {
          name: "+ Questões Frequentes",
          url: "/questoes",
        },
        {
          name: "+ Guia de Tamanhos",
          url: "/guia",
        },
        {
          name: "+ Trocas e Devoluções",
          url: "/trocas",
        },
        {
          name: "+ Envios e Encomendas",
          url: "/envios",
        },
      ],
    },
  ];

  const elements = useLinks.map((link) => {
    return (
      <div className="mb-10 md:mb-20" key={link.title}>
        <h6 className="mb-4  font-semibold uppercase ">{link.title}</h6>
        {link.links.map((item) => (
          <Link to={item.url} key={item.name}>
            <p className="mb-2">{item.name}</p>
          </Link>
        ))}
      </div>
    );
  });

  return (
    <>
      <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left font-playfair mt-20 2xl:mt-20">
        <FooterSocials />
        <div className="mx-6 py-10 text-center md:text-center lg:text-left ">
          <div className="grid-1 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
            {elements}
            <FooterContacts />
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
