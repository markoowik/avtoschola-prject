import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "font-awesome/css/font-awesome.min.css";
import Modal from "react-modal";
import { ThemeProvider } from "./context/ThemeContext.js";
import { BrowserRouter } from "react-router-dom";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
