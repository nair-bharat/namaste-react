import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div>
      {cartItems?.map((item, i) => (
        <ul key={i}>
          <li>{item.item.name}</li>
          <li>Rs. {item.item.price || item.item.min_price} </li>
        </ul>
      ))}
    </div>
  );
};

export default Cart;
