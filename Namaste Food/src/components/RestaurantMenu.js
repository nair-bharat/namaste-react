import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { MENU_API_KEY } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { restaurant } = useParams();
  console.log(restaurant);
  const [restMenu, setRestMenu] = useState([]);
  // const [restInfo, setRestInfo] = useState([]);

  /*
  useEffect(() => {
    fetchMenu();
  }, []);
  */

  // we will use a hook to fetch the data (custom hook concept.)
  const restInfo = useRestaurantMenu(restaurant);
  if (restInfo !== null) {
    console.log(restInfo);
  }

  /*
  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API_KEY}/${restaurant}/order`);
    const jsonData = await data.json();
    setRestInfo(jsonData);
    console.log(restInfo);
    setRestMenu(
      jsonData.page_data.order.menuList.menus[0].menu.categories[0].category
        .items
    );
  };
  */

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return restInfo === null ? (
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
        {restInfo.page_data.order.menuList.menus[0].menu.categories[0].category.items.map(
          (item) => (
            <li key={item?.item?.id}>
              {item?.item?.name} - Rs.
              {item?.item?.price || item?.item?.max_price}
              <button onClick={() => handleAddItem(item)}>Add +</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
