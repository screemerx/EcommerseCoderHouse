import { CgPokemon } from "react-icons/cg";
import React, { useContext } from "react";
import "./CartWidget.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../src/context/CartContext";

export const CartWidget = () => {
  const nombre = useContext(CartContext);
  console.log("CartWidget", nombre);

  return (
    <div className="cart1">
      <NavLink className="cart" to="cart">
        <CgPokemon size="3rem" color="white" />
      </NavLink>
    </div>
  );
};

export default CartWidget;
