import { BsSearch } from "react-icons/bs";
import IconsSmall from "../IconsSmall";

const SearchCartIcons = () => {
  return (
    <div className="flex items-center justify-center ">
      <BsSearch className="cursor-pointer mr-1 " />
      <IconsSmall color={"white"} />
    </div>
  );
};

export default SearchCartIcons;
