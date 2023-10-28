import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Esto de webVitals es para ver o tener por ahí las analiticas del perfomance de la app
reportWebVitals();
// reportWebVitals(console.log);
