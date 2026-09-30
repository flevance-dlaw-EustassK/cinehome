import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Overlays from "./components/Overlays";
import "./globals.css";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Overlays />
  </>
);