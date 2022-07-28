import React, { useState, useEffect } from "react";
import Title from "../Title/index";
import "./ItemListContainer.css";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import {
  getDocs,
  collection,
  query,
  where,
  getFirestore,
  Query,
} from "firebase/firestore";
import Inicio from "../../Inicio/index";

export const ItemLisContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "pokemones");

    if (categoriaId) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoriaId)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoriaId]);

  return (
    <div>
      <Inicio />
      <div className="container__general">
        <Title className="h1" titles={texto} />
        <div className="container">
          <ItemList data={data} />
        </div>
      </div>
    </div>
  );
};

export default ItemLisContainer;
