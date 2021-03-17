import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search";
import City from "./City";
import Description from "./Description";
import CurrentIcon from "./CurrentIcon";
import TemperatureNow from "./TemperatureNow";
import FeelsLike from "./FeelsLike";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Search />
            <City />
            <Description />
            <CurrentIcon />
            <TemperatureNow />
            <FeelsLike />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
