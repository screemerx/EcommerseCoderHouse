import React from "react";
import "./Inicio.css";

const Inicio = ({ fondo }) => {
  return (
    <div className="fondo">
      <h1>Poke-commerce</h1>
      <img src={fondo} alt="" />
    </div>
  );
};

export default Inicio;
