// App
import App from "./App.tsx";

// Styles
import "./styles/globals.css";

// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Render
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
