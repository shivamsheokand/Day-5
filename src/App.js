import React from "react";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="flex flex-col h-screen bg-[#fff7f4]">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
