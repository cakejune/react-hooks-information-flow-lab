import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function Header({ isDarkMode, state }) {
  return (
    <>
      <header>
        <h2>Shopster</h2>
        <button onClick={isDarkMode}>
          {!state ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </>
  );
}

export default Header;
