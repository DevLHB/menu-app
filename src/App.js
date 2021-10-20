import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu/Menu";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <span className="material-icons menu-btn" onClick={() => setIsOpen(true)}>
        menu
      </span>
      <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
    </div>
  );
}

export default App;
