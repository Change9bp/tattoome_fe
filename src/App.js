import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
