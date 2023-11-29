// import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet>
        <Home />
      </Outlet>
      <div>Footer</div>
    </>
  );
}

export default App;
