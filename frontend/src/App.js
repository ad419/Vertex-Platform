import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from './Screens/Register'
import ContinueRegister from "./Screens/ContinueRegister";
import HireDeveloper from "./Screens/HireDeveloper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire-developer" element={<HireDeveloper />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/continue-register" element={<ContinueRegister/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
