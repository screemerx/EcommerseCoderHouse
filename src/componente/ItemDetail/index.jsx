import React from "react";
import Item from "../CartWidget/Item";

export const ItemDetail = ({ data }) => {
  return data.map((pokemon) => <Item key={pokemon.id} info={pokemon} />);
};

export default ItemDetail;
