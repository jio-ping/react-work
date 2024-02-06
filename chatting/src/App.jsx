import { createRoot } from "react-dom/client";
import React from "react";
import Exercise from "/src/hooks/useImperativeHandle";

function App() {
  return <Exercise />;
}

const root = document.querySelector("#root");

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
