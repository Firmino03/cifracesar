import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CifraCesar from "./CifraCesar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CifraCesar />
  </StrictMode>
);
