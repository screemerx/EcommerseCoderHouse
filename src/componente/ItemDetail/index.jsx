import React from "react";
import ItemCount from "../CartWidget/ItemCount";
import "./ItemDetail.css";

const onAdd = (quiantity) => {
  console.log(`compraste ${quiantity} unidades`);
};

export const ItemDetail = ({ data }) => {
  return (
    <div>
      <div className="pokemon">
        <p> {data.name}</p>
        <img src={data.image} />
      </div>

      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
