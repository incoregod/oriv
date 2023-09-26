import { useState } from "react";
import { BsStar, BsFillStarFill } from "react-icons/bs";

function Rating() {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <div
      key={index}
      className="cursor-pointer"
      onClick={() => handleRatingClick(index + 1)}
    >
      {index < rating ? (
        <BsFillStarFill className="text-yellow-400 text-sm" />
      ) : (
        <BsStar className="text-yellow-400 text-sm" />
      )}
    </div>
  ));

  return <div className="flex gap-1">{stars}</div>;
}

export default Rating;
