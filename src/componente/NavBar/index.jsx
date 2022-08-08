import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/index";
import { NavLink } from "react-router-dom";
// import bullbasaur from "../../Recursos/bullbasaur.jpg";
// import charizard from "../../Recursos/charizard.png";
// import squirtle from "../../Recursos/squirtle.jpg";
// import { useParams } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <ul className="header__nav__ul">
        <li className=" header__nav__li">
          <NavLink className="link__style" to="/categoria/pokemon">
            Pokemons
          </NavLink>
        </li>
        <li className=" header__nav__li">
          <NavLink className="link__style" to="/categoria/pokeball">
            Pokeballs
          </NavLink>
        </li>
        <li className=" header__nav__li">
          <NavLink className="link__style" to="/categoria/objects">
            Objects
          </NavLink>
        </li>
        <li className=" header__nav__li">
          <CartWidget />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
