import React from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Tours from "./pages/Tours";

function App() {
  return (
    <>
      <Routes>
        <Route path="/tailwind_css_react" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;