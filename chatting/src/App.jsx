import { createRoot } from "react-dom/client";
import React from "react";
import { Chatroom } from "./components/index.js";

function App() {
  return (
    <>
      <Chatroom />
    </>
  );
}

const root = document.querySelector("#root");

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
