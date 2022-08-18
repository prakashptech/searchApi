import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
// import About from "./components/Navbar";
import Navbar from "./components/Navbar";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="link" element={<Navbar />} />
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
