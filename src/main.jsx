import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/style.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/*il basename fa ignorare lo Geofox dentro dell'url e cerca "/ per home" oppure "/quiz" perche dentro a vite.config.js ho dichiarato base: "/Geofox/"*/}
      <QuizProvider>
        <App />
      </QuizProvider>
    </BrowserRouter>
  </StrictMode>,
);
