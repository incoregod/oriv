import { FaTimes } from "react-icons/fa";
import SideBarComponent from "../../Components/SideBarComponent/SideBarComponent";
import SideFilterCategories from "./SideFilterCategories";
const SmSideFilter = ({ handleSmDevicesFilter, categorias, render }) => {
  return (
    <SideBarComponent position={{ top: "top-0", side: "right-0" }}>
      <div className=" border-b w-full border-opacity-50 border-gray-400 h-15 p-5 ">
        <FaTimes
          onClick={handleSmDevicesFilter}
          className="text-lg  cursor-pointer"
        />
      </div>
      <SideFilterCategories categorias={categorias} />
      <hr />
      {render}
    </SideBarComponent>
  );
};

export default SmSideFilter;
