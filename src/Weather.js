import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Search from "./Search";
import City from "./City";
import Description from "./Description";
import CurrentIcon from "./CurrentIcon";
import TemperatureNow from "./TemperatureNow";
import FeelsLike from "./FeelsLike";
import Forecast from "./Forecast";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
        ready: true,
        city: response.data.name,
        temperature: Math.round(response.data.main.temp),
        humidity: Math.round(response.data.main.humidity),
        wind: Math.round(response.data.wind.speed),
        description: response.data.weather[0].desciption,
        feelsLike: Math.round(response.data.main.feels_like)
        
    });
    
  }

  if (weatherData.ready) {
  return (
    <div className="Weather">
            <Search />
            <City />
            <Description data={weatherData}/>
            <CurrentIcon />
            <TemperatureNow />
            <FeelsLike />
            < hr/>
            <Forecast />

          </div>
  );
} else {

  const apiKey = "86c2f666f31a39c50f5fcfdde17550ce";
  let city = "Kuala Lumpur";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

      return (
      <Loader
      className="loader"
        type="ThreeDots"
        color="#000000"
        height={100}
        width={100}
      />
    );
  
}
}