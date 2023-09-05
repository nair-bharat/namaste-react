import { useState } from "react";
import logo from "../assets/images/namaste_food_logo.png";

const Header = () => {
  const [authBtn, setAuthBtn] = useState("Login");
  return (
    <div className="header">
      <div>
        <img src={logo} alt="namaste-food-logo" className="logo-image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
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
