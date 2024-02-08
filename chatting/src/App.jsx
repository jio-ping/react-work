import { createRoot } from "react-dom/client";
import React from "react";

import SpeechBubble from "./components/SpeechBubble/SpeechBubble";

function App() {
  return <SpeechBubble />;
}

const root = document.querySelector("#root");

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
