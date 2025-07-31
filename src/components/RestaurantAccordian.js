import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantAccordian = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className=" bg-slate-900 mx-auto my-4 text-white p-4 w-3/5 shadow-2xl font-semibold text-xl">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {data.title}( {data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems ? <ItemList items={data?.itemCards} /> : <></>}
    </div>
  );
};
export default RestaurantAccordian;
