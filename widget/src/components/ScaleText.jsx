import React from "react";

const ScaleText = (props) => {
  if (props.data.dataType === "weather") {
    return <p>{props.data.temperature}°</p>;
  }
  if (props.data.dataType === "finance") {
    return <p>{props.data.scale}</p>;
  }
  if (props.data.dataType === "dust") {
    const evaluation = 0 < props.data.scale ? "좋음" : "나쁨";
    return <p className="scale-dust">{props.data.scale + " " + evaluation}</p>;
  }
};
export default ScaleText;
