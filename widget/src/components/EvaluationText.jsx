import React from "react";

const EvaluationText = (props) => {
  if (props.data.dataType === "weather") {
    let relativeTemp = props.data.prevTemp - props.data.temperature;
    if (relativeTemp > 0) {
      return <p>어제보다 {relativeTemp}° 낮아요</p>;
    }
    if (relativeTemp === 0) {
      return <p>어제와 같아요 </p>;
    } else {
      return <p>어제보다{-relativeTemp}° 높아요</p>;
    }
  }
  if (props.data.dataType === "dust") {
    return <p>미세먼지</p>;
  }
  if (props.data.dataType === "finance") {
    let { title, scale, prevScale } = props.data;
    let difference = Math.floor(prevScale - scale);
    return (
      <p>
        {title}
        <span>{difference > 0 ? -(difference / 100) : difference / 100}</span>
      </p>
    );
  }
};
export default EvaluationText;
