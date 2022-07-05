import React from "react";
import Header from "./componente/Header";

import "./App.css";
import ItemLisContainer from "./componente/ItemListContainer";
import ItemDetailContainer from "./componente/ItemDetailContainer";

const App = () => {
  return (
    <>
      <Header />
      <ItemLisContainer texto="Pokemons" />
      <ItemDetailContainer />
    </>
  );
};

export default App;
