import { createRoot } from "react-dom/client";
import React from "react";
import Profile from "/src/ProfilePage";
function App() {
  return <Profile />;
}
const root = document.querySelector("#root");

createRoot(root).render(
  <React.StrictMode>
    <App />;
  </React.StrictMode>
);
