import "./Item.css";
import React from "react";
import ItemCount from "../ItemCount";
import "../ItemListContainer/index";

const onAdd = (quiantity) => {
  console.log(`compraste ${quiantity} unidades`);
};

const Item = ({ info }) => {
  return (
    <div href="" className="pokemon">
      <div className="row">
        <p> {info.name}</p>
        <img src={info.image} />
      </div>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  );
};

export default Item;
