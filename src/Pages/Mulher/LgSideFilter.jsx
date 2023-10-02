import SideFilterCategories from "./SideFilterCategories";
const LgSideFilter = ({ handleSmDevicesFilter, categorias, render }) => {
  return (
    <div className="col-span-1 h-full hidden md:block">
      <SideFilterCategories categorias={categorias} />

      <hr />
      {render}
    </div>
  );
};

export default LgSideFilter;
