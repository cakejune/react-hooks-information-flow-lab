import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";

function App() {
  const [isDark, setIsDarkMode] = useState(false);
  function isDarkMode() {
    setIsDarkMode(!isDark);
  }

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} state={isDark} />
    </div>
  );
}

export default App;
