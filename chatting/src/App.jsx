import { createRoot } from "react-dom/client";
import React from "react";
import { SpeechBubble, MessageInput, ChatSummary } from "./components/index.js";

function App() {
  return (
    <>
      <ChatSummary />
    </>
  );
}

const root = document.querySelector("#root");

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
