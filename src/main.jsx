import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here */}
    </Routes>
  </Router>
);
