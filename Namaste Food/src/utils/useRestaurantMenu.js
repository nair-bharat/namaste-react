// function starting from small letter - react understands it is a hook.

import { useEffect, useState } from "react";
import { MENU_API_KEY } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API_KEY}/${resId}/order`);
    const json = await data.json();
    setResInfo(json);
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
