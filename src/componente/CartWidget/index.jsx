import { CgPokemon } from "react-icons/cg";
import React from "react";
import "./CartWidget.css";
import { NavLink } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div className="cart1">
      <NavLink className="cart" to="cart">
        <CgPokemon size="3rem" color="white" />
      </NavLink>
    </div>
  );
};

export default CartWidget;
