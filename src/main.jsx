// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/index.css";

import { Analytics } from "@vercel/analytics/react"; // correct for Vite + React

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* Analytics must be rendered once at the app root */}
    <Analytics />
  </React.StrictMode>
);
