import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
  const socials = { Discord: "#", Instagram: "#" };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
