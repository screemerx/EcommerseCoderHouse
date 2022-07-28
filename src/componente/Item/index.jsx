import "./Item.css";
import "../ItemDetailContainer/index";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useCartContext } from "../../context/CartContext";

const Item = ({ info }) => {
  const { nombre } = useCartContext(useContext);
  console.log("Item:", nombre);
  return (
    <div className="recuadro">
      <Link to={`/detalle/${info.id}`} className="pokemon">
        <p> {info.name}</p>
        <img src={info.image} />
      </Link>
    </div>
  );
};

export default Item;
