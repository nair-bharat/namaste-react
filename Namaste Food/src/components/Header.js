import { useState } from "react";
import logo from "../assets/images/namaste_food_logo.png";
import { Link } from "react-router-dom";
import restaurantList from "../utils/mockData";
import { useSelector } from "react-redux";

const Header = () => {
  const [authBtn, setAuthBtn] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header">
      <div>
        <img src={logo} alt="namaste-food-logo" className="logo-image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li>
            <Link to={restaurantList[0].cardAction.clickUrl}>Test</Link>
          </li>
          <button
            onClick={() => {
              authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login");
            }}
          >
            {authBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
