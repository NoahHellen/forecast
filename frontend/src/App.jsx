import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./app/HomePage";
import BayesPage from "./app/BayesPage";
import RowPage from "./app/RowPage";
import EasterEgg from "./app/EasterEgg";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bayes" element={<BayesPage />} />
        <Route path="/bayes/:id" element={<RowPage />} />
        <Route path="/easter-egg" element={<EasterEgg />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
