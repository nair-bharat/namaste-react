import { useEffect, useState } from "react";

const useRestaurant = () => {
  const [rest, setRest] = useState([]);
  const fetchRestaurantData = async () => {
    const data = await fetch(
      `"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = data.json();
    setRest(json);
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  return rest;
};

export default useRestaurant;
