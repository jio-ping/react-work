import React from "react";
import { createRoot } from "react-dom/client";

import Widget from "/src/components/Widget.jsx";

function bodyStyling() {
  document.body.style.backgroundColor = `#f4f6f8`;
}
bodyStyling();

const weatherData = {
  dataType: "weather",
  temperature: 10,
  prevTemp: 13,
  atmosphereStatus: "partly-cloudy",
};

const dustData = {
  dataType: "dust",
  scale: 13,
};

const financeData = {
  dataType: "finance",
  title: "코스피",
  scale: 872.13,
  prevScale: 900,
};

function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <Widget data={weatherData} />
        <Widget data={financeData} />
        <Widget data={dustData} />
      </div>
    </React.StrictMode>
  );
}
createRoot(document.getElementById("root")).render(App());
