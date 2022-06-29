import React from "react";
import Header from "./componente/Header";

import "./App.css";
import ItemLisContainer from "./componente/CartWidget/ItemListContainer";

const App = () => {
  return (
    <>
      <Header />
      <ItemLisContainer texto="Pokemon" />
    </>
  );
};

export default App;
