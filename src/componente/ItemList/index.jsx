import React from "react";
import "./ItemList.css";
import CartWidget from "../CartWidget/index";

export const ItemList = () => {
  return (
    <div>
      <ul className="header__nav__ul">
        <li className=" header__nav__li">
          <a className="link__style" href="#">
            Pokemons
          </a>
        </li>
        <li className=" header__nav__li">
          <a className="link__style" href="#">
            Pokeballs
          </a>
        </li>
        <li className=" header__nav__li">
          <a className="link__style" href="#">
            Objects
          </a>
        </li>
        <li className=" header__nav__li">
          <CartWidget />
        </li>
      </ul>
    </div>
  );
};

export default ItemList;
