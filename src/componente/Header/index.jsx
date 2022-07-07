import React from "react";
import "./Header.css";
import { SiPokemon } from "react-icons/si";
import NavBar from "../NavBar/index";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="header__logo">
          <NavLink to="/">
            {" "}
            <SiPokemon size="8rem" color="white" />{" "}
          </NavLink>
        </h1>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
