import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const root = createRoot(document.getElementById("root")!);
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
