import React from "react";
import Title from "../../Title";
import ItemCount from "../../ItemCount";
import "./ItemListContainer.css";

export const ItemLisContainer = ({ texto }) => {
  const onAdd = (quiantity) => {
    console.log(`compraste ${quiantity} unidades`);
  };

  return (
    <>
      <Title className="h1" titles={texto} />
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  );
};

export default ItemLisContainer;
