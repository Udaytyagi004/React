import { useEffect, useState } from "react";
import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import resList from "../utils/resData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import NoInternet from "./NoInternet";

const Body = () => {
  //state variable
  const [listOfRestaurent, setListOfRestaurent] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState(listOfRestaurent);

  // this concept is known as conditional rendering ,where we have a condition to render something
  if (listOfRestaurent.length === 0) {
    return <Shimmer />;
  }
  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);
  const status = useOnlineStatus();
  if (status === false) {
    return <NoInternet />;
  }
  return (
    <div>
      <div className="flex justify-around">
        <div className="search m-4 p-4 flex items-center  ">
          <input
            type="text"
            className="border rounded-xl w-100 h-10 bg-white"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-amber-300  rounded-lg font-bold"
            onClick={() => {
              const filteredList = listOfRestaurent.filter((res) =>
                res.resName.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredList);

              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 m-4 bg-amber-300  rounded-xl font-bold  "
            onClick={() => {
              const filteredList = listOfRestaurent.filter(
                (res) => res.rating > 4.0
              );
              setFilteredList(filteredList);
            }}
          >
            Top Rated Restaurent
          </button>
        </div>
      </div>
      <div className="m-5 flex flex-wrap justify-center">
        {filteredList.map((res) => {
          return (
            <Link
              key={res.resName}
              to={"/restaurants/" + res.resId}
              className="nav-tags"
            >
              {res.promoted ? (
                <RestaurentCardPromoted resData={res} />
              ) : (
                <RestaurentCard resData={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
