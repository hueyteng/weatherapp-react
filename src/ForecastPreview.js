import React from "react";
import ForecastIcons from "./ForecastIcons";

export default function ForecastPreview(props) {
function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
}

function TemperatureMax() {
    let temperature = Math.round(props.data.main.temp_max);
    return `${temperature}°`;
}

function TemperatureMin() {
    let temperature = Math.round(props.data.main.temp_min);
    return `${temperature}°`;
}

return (
   <div className="ForecastPreview col">
        <h4> {hours()} </h4>
        <ForecastIcons code={props.data.weather[0].icon} />
        <span className="TemperatureMax">{TemperatureMax()}</span> | <span className="TemperatureMin">{TemperatureMin()}</span>
    </div>
);
}