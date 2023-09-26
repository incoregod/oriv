import { BsSuitHeartFill } from "react-icons/bs";

const ProductCard = ({ children }) => {
  return (
    <div className="flex flex-col items-start relative ">
      {children}
      <BsSuitHeartFill className="absolute top-3 right-5 w-4 h-4 text-white " />
    </div>
  );
};

export default ProductCard;
