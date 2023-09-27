import { BsPlus, BsDash } from "react-icons/bs";
import { Link } from "react-router-dom";

const filters = [
  {
    id: "color",
    name: "Cor",
    options: [
      { value: "white", label: "Branco", checked: false },
      { value: "blue", label: "Azul", checked: true },
      { value: "brown", label: "Castanho", checked: false },
      { value: "green", label: "Verde", checked: false },
    ],
  },
  {
    id: "price",
    name: "Preço",
    options: [
      { value: "25", label: "€25-50", checked: false },
      { value: "50", label: "€50-99", checked: false },
      { value: "100", label: "€100-149", checked: false },
      { value: "150", label: "€150-249", checked: false },
    ],
  },
  {
    id: "size",
    name: "Tamanho",
    options: [
      { value: "15cm", label: "15 cm", checked: false },
      { value: "16cm", label: "16 cm", checked: false },
      { value: "17cm", label: "17 cm", checked: false },
    ],
  },
];

const SideBarFilters = ({ handleSideFilters, sideFilterOpen, categorias }) => {
  const renderEl = filters.map((section) => {
    return (
      <div key={section.id}>
        <div
          className="flex items-center justify-between cursor-pointer py-5"
          onClick={() => handleSideFilters(section.id)}
        >
          <p>{section.name}</p>
          {sideFilterOpen[section.id] ? <BsDash /> : <BsPlus />}
        </div>
        {sideFilterOpen[section.id] &&
          section.options.map((option) => (
            <div key={option.value} className="flex gap-2 p-2">
              <input type="checkbox" />
              <label>
                {section.id === "price" ? `€ ${option.value}` : option.value}
              </label>
            </div>
          ))}
        <hr />
      </div>
    );
  });

  return (
    <div className="col-span-1 h-full hidden md:block">
      <ul className="py-5">
        {categorias.map((category) => (
          <li key={category.categoria}>
            <Link
              to={`/${category.categoria}`}
              className="cursor-pointer block px-2 py-3"
            >
              {category.categoria}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      {renderEl}
    </div>
  );
};

export default SideBarFilters;
