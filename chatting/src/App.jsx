import { createRoot } from "react-dom/client";
import React from "react";
import {
  SpeechBubble,
  MessageInput,
  ChatroomList,
  ChatSummary,
} from "./components/index.js";

function App() {
  return (
    <>
      <ChatroomList />
    </>
  );
}

const root = document.querySelector("#root");

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
