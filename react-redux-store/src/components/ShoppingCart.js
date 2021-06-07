import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.Cart);
  console.log(cart);
  return (
    <div>
      <h1 className="cart-header">Your Cart</h1>
      <p>Number of Items: {cart.products.length}</p>
      <p>Total: ${cart.total}</p>
      <div className="shopping-cart">
        {cart.products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
