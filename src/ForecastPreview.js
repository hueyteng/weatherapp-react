import React from "react";
import ForecastIcons from "./ForecastIcons";

export default function ForecastPreview(props) {
function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
}

function celsiustemp() {
    let temp = Math.round(props.data.main.temp);
    return `${temp}°C`;
}

function fahrenheittemp() {
    let temp = Math.round((props.data.main.temp * 9) / 5 + 32);
    return `${temp}°F`;
}

if (props.unit === "celsius") {
return (
   <div className="ForecastPreview col">
        <h4> {hours()} </h4>
        <ForecastIcons code={props.data.weather[0].icon} />
        <span className="ForecastTemp"> {celsiustemp()} </span>
    </div>
)
} else {
    return (
        <div className="ForecastPreview col">
        <p className="ForecastHours"> {hours()} </p>
        <ForecastIcons code={props.data.weather[0].icon} />
        <span className="ForecastTemp"> {fahrenheittemp()} </span>
    </div>
    );
}
}