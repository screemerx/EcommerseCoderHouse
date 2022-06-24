import { CgPokemon } from "react-icons/cg";
import React from "react";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div className="cart1">
      <a className="cart" href="#">
        <CgPokemon size="3rem" color="white" />
      </a>
    </div>
  );
};

export default CartWidget;
