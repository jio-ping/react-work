import React from "react";
function WeatherIcon(props) {
  if (props.data.dataType != "finance") {
    let { atmosphereStatus } = props.data;
    const label = atmosphereStatus ?? "fine-dust";
    const imageSrc = `/public/images/weather-${label}.svg`;
    return <img src={imageSrc} alt={label} />;
  }
}
export default WeatherIcon;
