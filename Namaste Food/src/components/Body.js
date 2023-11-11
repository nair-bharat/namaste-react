import { useEffect, useState } from "react";
import restaurantList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState(restaurantList);
  const [filteredList, setFilteredList] = useState(restaurantList);
  // const [testAPI, settestAPI] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  /*
  useEffect(() => {
    fetchRestaurantData();
  }, []);
  const fetchRestaurantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    settestAPI(jsonData);
  };
  */
  // the above lines will be abstracted out into the useRestaurant.js hook.

  const testAPI = useRestaurant();

  const onlineStatus = useOnlineStatus();

  const filterRestaurants = (searchText) => {
    const data = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredList(data);
  };

  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline, please check your internet connection</h1>
    );
  }

  // this function is a higher order component as it takes RestaurantCard and gives back a new enhanced component RestaurantCardPromoted.
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  return testAPI.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="body-header">
        <div className="search">
          <input
            type="text"
            className="search-txt"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
              filterRestaurants(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              filterRestaurants(searchTxt);
            }}
          >
            Search
          </button>
          {console.log(filteredList)}
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const topRated = resList.filter(
                (res) => parseFloat(res.info.rating.aggregate_rating, 10) >= 4
              );
              setResList(topRated);
            }}
          >
            Top Rated
          </button>
          <button
            className="filter-btn-remove"
            onClick={() => {
              setResList(restaurantList);
            }}
          >
            Remove Filter
          </button>
        </div>
      </div>

      {filteredList.length === 0 ? (
        <h3>Couldn't find any restaurant "{searchTxt}"</h3>
      ) : (
        <div className="restaurant-cards">
          {filteredList.map((res) => (
            <Link
              to={res.cardAction.clickUrl.split("/")[2]}
              key={res.info.resId}
            >
              {res.isPromoted === false ? (
                <RestaurantCardPromoted restaurant={res.info} />
              ) : (
                <RestaurantCard restaurant={res.info} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
