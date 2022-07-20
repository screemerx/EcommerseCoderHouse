import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No Hay Elementos en el Carrito</p>
        <Link to="/">Ver nuestros Productos</Link>
      </>
    );
  }
  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total: {totalPrice()}</p>
    </>
  );
};

export default Cart;
