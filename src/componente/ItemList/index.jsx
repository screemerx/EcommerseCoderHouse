import Item from "../Item";
import React from "react";

const ItemList = ({ data = [] }) => {
  return data.map((pokemon) => <Item key={pokemon.id} info={pokemon} />);
};

export default ItemList;
