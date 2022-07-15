import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
import bulbasaur from "../../Recursos/001.png";
import charmander from "../../Recursos/004.png";
import squirtle from "../../Recursos/007.png";
import velozball from "../../Recursos/velozball.png";
import masterball from "../../Recursos/masterball.png";
import pokeball from "../../Recursos/pokeball.png";
import pokedex from "../../Recursos/pokedex.png";
import Title from "../Title/index";
import { useParams } from "react-router-dom";

// const Pokemons = { id: 1, image: bulbasaur, name: "Bulbasaur" };
const Pokemons = [
  {
    id: 1,
    image: bulbasaur,
    name: "Bulbasaur",
    category: "pokemon",
    price: 250,
  },
  {
    id: 4,
    image: charmander,
    name: "Charmander",
    category: "pokemon",
    price: 250,
  },
  { id: 7, image: squirtle, name: "Squirtle", category: "pokemon", price: 250 },
  {
    id: 8,
    image: velozball,
    name: "Velozball",
    category: "pokeball",
    price: 250,
  },
  {
    id: 9,
    image: masterball,
    name: "Masterball",
    category: "pokeball",
    price: 250,
  },
  {
    id: 10,
    image: pokeball,
    name: "Pokeball",
    category: "pokeball",
    price: 250,
  },
  { id: 11, image: pokedex, name: "Pokedex", category: "pokedex", price: 250 },
];

export const ItemDetailContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Pokemons);
      });
    });

    getData.then((res) =>
      setData(res.find((pokemon) => pokemon.id === parseInt(detalleId)))
    );
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
