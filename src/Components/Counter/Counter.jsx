import Icons from "../Icons/Icons";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/ShoppingCartProvider";

const Counter = ({ icon, style, bgColor, textColor }) => {
  const { cartProducts } = useContext(ShoppingCartContext);
  const favCounter = 0;
  const bg = bgColor && `bg-${bgColor}`;
  const textC = textColor && `text-${textColor}`;

  const totalQuantity = cartProducts.reduce((total, product) => {
    return parseInt(total) + parseInt(product.qtd);
  }, 0);

  return (
    <>
      <Icons icon={icon} styles={style} />
      <div
        className={`border rounded-full absolute bottom-0 right-2 w-3 h-3 flex ${bg}   justify-center items-center`}
      >
        <span className={`text-[8px] font-bold ${textC}`}>
          {icon === "shopcart" ? totalQuantity : favCounter}
        </span>
      </div>
    </>
  );
};

export default Counter;
