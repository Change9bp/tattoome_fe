import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import AuthorPage from "./pages/authorPage/AuthorPage";
import CreatorPage from "./pages/creatorPage/CreatorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/authorpage" element={<AuthorPage />} />
        <Route path="/creatorpage" element={<CreatorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
