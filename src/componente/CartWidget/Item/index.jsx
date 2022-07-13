import "./Item.css";
import React from "react";
import "../../ItemListContainer/index";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div>
      <Link to={`/detalle/${info.id}`} className="pokemon">
        <p> {info.name}</p>
        <img src={info.image} />
      </Link>
    </div>
  );
};

export default Item;
