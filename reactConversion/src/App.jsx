import { createRoot } from "react-dom/client";
import React from "react";
import Profile from "/src/component/Profile";
function App() {
  return <Profile />;
}
const root = document.querySelector("#root");

createRoot(root).render(
  <React.StrictMode>
    <App />;
  </React.StrictMode>
);
