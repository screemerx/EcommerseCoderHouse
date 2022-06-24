import React from "react";
import "./Header.css";
import { SiPokemon } from "react-icons/si";
import ItemList from "../ItemList/index";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="header__logo">
          <SiPokemon size="8rem" color="white" />{" "}
        </h1>
      </div>
      <ItemList />
    </div>
  );
};

export default Header;
