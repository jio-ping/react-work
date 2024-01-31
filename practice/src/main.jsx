import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Order } from "/src/components/index.js";

export default function App() {
  return (
    <div>
      <Order />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
