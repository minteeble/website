import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
  const socials = { Discord: "#", Instagram: "#" };

  return (
    <>
      <BrowserRouter>
      <header>
        <Navbar></Navbar>
      </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
        </Routes>
<Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
