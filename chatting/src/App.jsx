import { createRoot } from "react-dom/client";
import React from "react";
import { ChatPage } from "./components/index.js";

function App() {
  return (
    <>
      <ChatPage />
    </>
  );
}

const root = document.querySelector("#root");

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
