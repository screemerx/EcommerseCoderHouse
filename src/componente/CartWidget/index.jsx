import { CgPokemon } from "react-icons/cg";
import React, { useContext } from "react";
import "./CartWidget.css";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const nombre = useCartContext(useContext);
  console.log("CartWidget", nombre);

  return (
    <div className="cart1">
      <NavLink className="/cart" to="/cart">
        <CgPokemon size="3rem" color="#e7a76c" />
      </NavLink>
    </div>
  );
};

export default CartWidget;
