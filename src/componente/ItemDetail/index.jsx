import React, { useState } from "react";
import ItemCount from "../ItemCount/index";
import "./ItemDetail.css";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quiantity) => {
    setGoToCart(true);
    addProduct(data, quiantity);
  };

  return (
    <div>
      <div className="pokemon">
        <p> {data.name}</p>
        <img src={data.image} />
      </div>
      {goToCart ? (
        <Link to="/cart">Ir al carrito</Link>
      ) : (
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
