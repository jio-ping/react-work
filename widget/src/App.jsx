import React from "react";
import { createRoot } from "react-dom/client";

import Widget from "/src/components/Widget.jsx";

function bodyStyling() {
  document.body.style.backgroundColor = `#f4f6f8`;
}
bodyStyling();

const data1 = {
  dataType: "weather",
  temperature: 10,
  prevTemp: 13,
  atmosphereStatus: "partly-cloudy",
};

const data3 = {
  dataType: "dust",
  scale: 13,
};

const data2 = {
  dataType: "finance",
  title: "코스피",
  scale: 872.13,
  prevScale: 900,
};

function App() {
  return (
    <div className="app">
      <Widget data={data1} />
      <Widget data={data2} />
      <Widget data={data3} />
    </div>
  );
}
createRoot(document.getElementById("root")).render(App());
