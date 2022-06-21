import React from "react";
import logo from "../../Recursos/pokecommerce.png";
import carrito from "../../Recursos/pokedex.png";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="header__logo" src={logo} alt="" />
      </div>
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
            <img className="header__carrito" src={carrito} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
