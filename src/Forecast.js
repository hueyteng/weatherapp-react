import React from "react";
import "./Forecast.css";

export default function Forecast() {
    return (
        <div className="Forecast">
      <div className="row ">
        <div class="col-2">
          <h4>00:00</h4>
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            className="forecast"
            alt=""
          />
          
        </div>

        <div class="col-2">
          <h4>03:00</h4>
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            id="weather-icon"
            className="forecast"
            alt=""
          />
          
        </div>

        <div class="col-2">
          <h4>06:00</h4>
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            id="weather-icon"
            className="forecast"
            alt=""
          />
          
        </div>

        <div class="col-2">
          <h4>09:00</h4>
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            id="weather-icon"
            className="forecast"
            alt=""
          />
          

        <div class="col-2">
          <h4>12:00</h4>
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            id="weather-icon"
            className="forecast"
            alt=""
          />
          
        </div>
      </div>
    </div>
    </div>
    );
}
