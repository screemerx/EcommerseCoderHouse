import React, { useState, useEffect } from "react";
import Title from "../Title";
import ItemCount from "../ItemCount";
import "./ItemListContainer.css";
import ItemList from "../ItemList";
import bulbasaur from "../../../Recursos/001.png";
import charmander from "../../../Recursos/004.png";
import squirtle from "../../../Recursos/007.png";

const Pokemons = [
  { id: 1, image: bulbasaur, name: "Bulbasaur" },
  { id: 4, image: charmander, name: "Charmander" },
  { id: 7, image: squirtle, name: "Squirtle" },
];

export const ItemLisContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Pokemons);
      });
    });

    getData.then((res) => setData(res));
  }, []);

  const onAdd = (quiantity) => {
    console.log(`compraste ${quiantity} unidades`);
  };

  return (
    <>
      <Title className="h1" titles={texto} />
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
};

export default ItemLisContainer;
