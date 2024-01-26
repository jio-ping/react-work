import "/src/style/style.css";
import "/src/style/main.css";
import { createRoot } from "react-dom/client";
import React from "react";
import Profile from "/src/ProfilePage";
function App() {
  return <Profile />;
}
const root = document.querySelector(".app");

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
