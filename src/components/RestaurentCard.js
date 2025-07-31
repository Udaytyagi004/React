const RestaurentCard = (props) => {
  const { resData } = props;
  // Destructuring the resData object to extract properties
  const { resName, cusine, rating, arrivalTime, url } = resData;
  return (
    <div className="m-4 p-3 border w-60  flex-col rounded-xl hover:bg-gray-700 bg-slate-900 text-white">
      <img
        className="w-50 h-40 m-auto rounded-xl"
        alt="Restaurent logo"
        src={url}
      />

      <div className=" m-auto p-2 flex flex-col justify-center">
        <h3 className="font-bold text-center text-lg my-2">{resName}</h3>
        <h4>{cusine}</h4>
        <span className="bg-green-600 w-fit p-1"> {rating}⭐ </span>
        <h4>Arrives in {arrivalTime}</h4>
      </div>
    </div>
  );
};

// Higher Order Component

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white  py-2 px-3 ml-1 rounded-bl-2xl">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
