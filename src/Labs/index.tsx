import React from "react";
import { Route, Routes } from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";

export default function Labs() {
  return (
    <div id="wd-labs">
      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
        <Route path="/" element={<div>Select a lab from the list</div>} />
        <Route path="/" element={<div>Yifeng Lu</div>} />
      </Routes>
    </div>
  );
}
