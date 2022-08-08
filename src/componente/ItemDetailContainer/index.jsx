import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
// import bulbasaur from "../../Recursos/001.png";
// import charmander from "../../Recursos/004.png";
// import squirtle from "../../Recursos/007.png";
// import velozball from "../../Recursos/velozball.png";
// import masterball from "../../Recursos/masterball.png";
// import pokeball from "../../Recursos/pokeball.png";
// import pokedex from "../../Recursos/pokedex.png";

import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  const { detalleId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "pokemones", detalleId);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [detalleId]);

  return (
    <div className="container">
      <div>
        <ItemDetail data={data} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
