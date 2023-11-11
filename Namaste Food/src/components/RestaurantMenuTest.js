import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { MENU_API_KEY_2 } from "../utils/constants";

const RestaurantMenuTest = () => {
  const { place, rest } = useParams();
  console.log(place, rest);
  const [restMenu, setRestMenu] = useState([]);
  const [restInfo, setRestInfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API_KEY_2}/${place}/${rest}/order`);
    const jsonData = await data.json();
    setRestInfo(jsonData);
    console.log(restInfo);
    setRestMenu(
      jsonData.page_data.order.menuList.menus[0].menu.categories[0].category
        .items
    );
  };

  return restMenu.length === 0 ? (
    <h3>Restaurant Menu Loading...</h3>
  ) : (
    <div>
      <img
        src={restInfo?.page_data?.sections?.SECTION_BASIC_INFO?.res_thumb}
        alt="restaurant-image"
        className="resturantMenu-info"
      />
      <h2>{restInfo?.page_info?.pageTitle}</h2>
      <p>{restInfo?.page_info?.pageDescription}</p>
      {console.log(restMenu)}
      <ul>
        {restMenu.map((item) => (
          <li key={item?.item?.id}>
            {item?.item?.name} - Rs.{item?.item?.price || item?.item?.max_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenuTest;
