import React, { useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import "./Weather.css";
import City from "./City";
import Description from "./Description";
import CurrentIcon from "./CurrentIcon";
import WeatherTemperature from "./WeatherTemperature";
import FeelsLike from "./FeelsLike";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");
  
  function handleResponse(response) {
    setWeatherData({
        ready: true,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        temperature: Math.round(response.data.main.temp),
        humidity: Math.round(response.data.main.humidity),
        wind: Math.round(response.data.wind.speed),
        description: response.data.weather[0].description,
        icon: `Images/${response.data.weather[0].icon}.png`,
        feelsLike: Math.round(response.data.main.feels_like)
        
    });
  }

  function search() {
    const apiKey = "c9bb4c07d87b1dd0afbb2c68a3814742";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchLocation(position) {
    const apiKey = "c9bb4c07d87b1dd0afbb2c68a3814742";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

  if (weatherData.ready) {
  return (
    <div className="Weather">
        <div className="container">
        <div className="card">
          <div className="card-body">

    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            size="33"
            id="search-city"
            placeholder="Enter City Name"
            autocomplete="off"
            autoFocus="on"
            onChange={handleCityChange}
          />
         
          <button className="btn btn-info" type="submit" id="search-button">
            <i className="fas fa-search" />
          </button>

          <button onClick={getCurrentPosition} className="btn btn-secondary" type="button" id="current-location-button">
            <i className="fas fa-location-arrow" />
          </button>
      </div>
      </form> 
</div>
            <City data={weatherData} />
            <Description data={weatherData} />
            <CurrentIcon data={weatherData} />
            <WeatherTemperature celsius={weatherData.temperature} unit={unit} setUnit={setUnit} />
            <FeelsLike data={weatherData} unit={unit} />
            < hr />
            <Forecast city={weatherData.city} unit={unit} />

          </div>
          </div>
          </div>
          </div>
  );
} else {
    search();

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
