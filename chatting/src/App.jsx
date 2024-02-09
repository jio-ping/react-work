import { createRoot } from "react-dom/client";
import React from "react";
import {
  SpeechBubble,
  MessageInput,
  ChatroomList,
  ChatSummary,
  ChatroomInfo,
  NavBar,
} from "./components/index.js";

function App() {
  return (
    <>
      <ChatroomInfo />
    </>
  );
}

const root = document.querySelector("#root");

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
