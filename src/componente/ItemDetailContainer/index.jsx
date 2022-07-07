import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
import bulbasaur from "../../Recursos/001.png";
import charmander from "../../Recursos/004.png";
import squirtle from "../../Recursos/007.png";
import Title from "../CartWidget/Title";

// const Pokemons = { id: 1, image: bulbasaur, name: "Bulbasaur" };
const Pokemons = [
  { id: 1, image: bulbasaur, name: "Bulbasaur" },
  { id: 4, image: charmander, name: "Charmander" },
  { id: 7, image: squirtle, name: "Squirtle" },
];

export const ItemDetailContainer = ({ texto }) => {
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
        <ItemDetail data={data} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
