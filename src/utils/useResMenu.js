import { useEffect, useState } from "react";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.630251&lng=77.3463139&restaurantId=" +
          resId
      );
      const json = await data.json();
      setResInfo(json.data);
    };
    fetchData();
  }, []);

  return resInfo;
};
export default useResMenu;
//burger king API  => https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.630251&lng=77.3463139&restaurantId=18762
