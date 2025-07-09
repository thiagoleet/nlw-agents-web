import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Import Tailwind CSS
import { App } from "./app";

// biome-ignore lint/style/noNonNullAssertion: Mandatory for createRoot
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
