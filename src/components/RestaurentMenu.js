import { useEffect, useState } from "react";
import useResMenu from "../utils/useResMenu";
import Shimmer from "./Shimmer";
import RestaurantAccordian from "./RestaurantAccordian";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }
  console.log(resInfo);

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
      <div className="bg-sky-200 font-bold text-xl w-8/12 mx-auto my-4 rounded-4xl p-4 shadow-4xl">
        <p className=" m-2">{info.cuisines.join(", ")}</p>
        <p className=" m-2"> {info.costForTwoMessage}</p>
        <p className="m-2">{info.city}</p>
      </div>

      {categories.map((cat) => (
        <RestaurantAccordian
          data={cat?.card?.card}
          key={cat?.card?.card?.categoryId}
        />
      ))}
    </div>
  );
};
export default RestaurentMenu;
