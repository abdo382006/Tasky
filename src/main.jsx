// React Main Libraries
import React from "react";
import ReactDOM from "react-dom/client";
// Root Component
import App from "./components/App.jsx";
// Custom CSS Files
import "./assets/css/main.css";
import "./assets/css/components.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
