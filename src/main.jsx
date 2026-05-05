import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/style.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Geofox">
      {/*il basename fa ignorare lo Geofox dentro dell'url e cerca / per home oppure /quiz perche dentro a vite.config.js ho dichiarato base: "/Geofox/"*/}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
