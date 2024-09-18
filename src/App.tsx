import Labs from "./Labs";
import Kanbas from "./Kanbas";
import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import TOC from "./Labs/TOC";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>

          <Route path="/" element={<TOC />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
