const ItemList = ({ items }) => {
  const CDN_URL = " https://media-assets.swiggy.com/swiggy/image/upload/";

  if (!Array.isArray(items)) {
    return <div className="text-white">No items available.</div>;
  }

  return (
    <div className="bg-gray-700 m-2 p-2">
      {items.map((item) => {
        const info = item?.card?.info;

        if (!info) return null;

        return (
          <div key={item.card.info.id} className="p-2 m-2 border-b">
            <div className="py-2 flex justify-between">
              <div className="m-2 w-8/12">
                <p className="text-2xl my-2">{item.card.info.name}</p>
                <p className="text-xl my-1">
                  ₹{" "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </p>
                <p className="text-[16px]">
                  <span className="text-green-500 ">
                    ✪ {item?.card?.info?.ratings?.aggregatedRating?.rating || 0}
                  </span>
                  <span>
                    (
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </span>
                </p>
              </div>
              <div className="relative">
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-40 h-36"
                ></img>
                <button className="text-green-600 bg-white py-1 px-4 rounded-2xl  absolute  bottom-2 left-1/2 transform -translate-x-1/2 font-bold text-sm">
                  ADD
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-300">
              {item.card.info.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
