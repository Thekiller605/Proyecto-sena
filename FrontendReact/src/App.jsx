import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import Inicio from "./pages/Inicio/Inicio";
import UserProfile from "./pages/Inicio/PerfilUsuario";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
