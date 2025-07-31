import { useEffect, useState } from "react";
import useResMenu from "../utils/useResMenu";
import Shimmer from "./Shimmer";
import RestaurantAccordian from "./RestaurantAccordian";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const info = resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) =>
      c.card?.card?.["@type"]?.includes("ItemCategory")
    );
  console.log(categories);

  return (
    <div>
      <h1 className=" text-center font-bold text-4xl mt-6 text-amber-400">
        {info.name}
      </h1>
      <p className="text-center font-medium text-xl my-1 text-white">
        {info.cuisines} {info.costForTwoMessage}
      </p>
      {categories.map((cat) => (
        <RestaurantAccordian
          data={cat?.card?.card}
          key={cat?.card?.card?.categoryId}
        />
      ))}
    </div>
  );
};

export default Contact;
