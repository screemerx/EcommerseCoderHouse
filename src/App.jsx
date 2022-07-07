import React from "react";
import Header from "./componente/Header";
import Cart from "./componente/Cart";
import "./App.css";
import ItemDetailContainer from "./componente/ItemDetailContainer";
import ItemListContainer from "./componente/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/detalle"
            element={<ItemDetailContainer texto="Pokemons" />}
          />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer texto="Pokemons" />}
          />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
