import React from "react";
import ItemCount from "../CartWidget/ItemCount";

const onAdd = (quiantity) => {
  console.log(`compraste ${quiantity} unidades`);
};

export const ItemDetail = ({ data }) => {
  return (
    <div href="" className="pokemon">
      <p> {data.name}</p>
      <img src={data.image} />
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
