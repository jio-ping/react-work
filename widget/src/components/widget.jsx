import "./Widget.css";
import React, { Children } from "react";
import WeatherIcon from "/src/components/WeatherIcon.jsx";
import ScaleText from "/src/components/ScaleText.jsx";
import EvaluationText from "/src/components/EvaluationText.jsx";

function Widget(props) {
  console.log(props);

  return (
    <form className="widget">
      <div role="group">
        <ScaleText data={props.data} />
        <EvaluationText data={props.data} />
      </div>
      <WeatherIcon data={props.data} />
    </form>
  );
}

export default Widget;
