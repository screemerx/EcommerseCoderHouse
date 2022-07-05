import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
import bulbasaur from "../../Recursos/001.png";

const Pokemons = { id: 1, image: bulbasaur, name: "Bulbasaur" };

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Pokemons);
      });
    });

    getData.then((res) => setData(res));
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
