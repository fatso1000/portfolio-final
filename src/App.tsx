import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about-me" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
