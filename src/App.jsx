// import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>Navbar</div>
      <Outlet>
        <Home />
      </Outlet>
      <div>Footer</div>
    </>
  );
}

export default App;
