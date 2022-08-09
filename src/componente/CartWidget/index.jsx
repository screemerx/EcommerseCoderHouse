import { CgPokemon } from "react-icons/cg";
import "./CartWidget.css";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <div className="cart1">
      <NavLink className="cart" to="/cart">
        <CgPokemon size="3rem" color="#e7a76c" />
        <span>{totalProducts() || ""}</span>
      </NavLink>
    </div>
  );
};

export default CartWidget;
