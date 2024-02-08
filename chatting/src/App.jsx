import { createRoot } from "react-dom/client";
import React from "react";
import { SpeechBubble, MessageInput } from "./components/index.js";

function App() {
  return (
    <>
      <MessageInput />
    </>
  );
}

const root = document.querySelector("#root");

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
