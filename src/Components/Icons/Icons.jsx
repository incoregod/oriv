import { BsPerson, BsGlobe } from "react-icons/bs";
import { PiMapPinLight } from "react-icons/pi";
import { BsSuitHeart } from "react-icons/bs";
import { PiShoppingBagOpenThin } from "react-icons/pi";

const Icons = ({ icon, styles }) => {
  switch (icon) {
    case "person":
      return <BsPerson className={styles} />;

    case "globe":
      return <BsGlobe className={styles} />;

    case "pin":
      return <PiMapPinLight className={styles} />;

    case "heart":
      return <BsSuitHeart className={styles} />;

    case "shopcart":
      return <PiShoppingBagOpenThin className={styles} />;

    default:
      break;
  }
  return <>{icon}</>;
};

export default Icons;
