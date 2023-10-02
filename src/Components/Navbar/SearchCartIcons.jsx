import Counter from "../Counter/Counter";
import Icons from "../Icons/Icons";
const SearchCartIcons = ({ navType }) => {
  return (
    <div className="flex items-center justify-center">
      <Icons icon={"search"} navType={navType} />
      <div className="relative">
        <Counter
          bgColor={"white"}
          textColor={"black"}
          icon={"shopcart"}
          style={"mr-3 ml-3 h-7 cursor-pointer w-5"}
        />
      </div>
    </div>
  );
};

export default SearchCartIcons;
