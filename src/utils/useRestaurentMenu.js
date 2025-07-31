import { useState } from "react";
import menuData from "./menuData";
const useRestaurentMenu = (resId) => {
  const updatedList = menuData.filter((obj) => obj.id === resId);

  return updatedList;
};
export default useRestaurentMenu;
