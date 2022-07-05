import React, { useState, useEffect } from "react";
import Title from "../CartWidget/Title";

import "./ItemListContainer.css";
import ItemList from "../CartWidget/ItemList";
import bulbasaur from "../../Recursos/001.png";
import charmander from "../../Recursos/004.png";
import squirtle from "../../Recursos/007.png";

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

  return (
    <>
      <Title className="h1" titles={texto} />

      <div className="container">
        <ItemList data={data} />
      </div>
    </>
  );
};

export default ItemLisContainer;
