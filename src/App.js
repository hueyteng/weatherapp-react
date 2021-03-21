import React, {useState } from "react";
import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">

            <Weather defaultCity="Kuala Lumpur" />
            
          </div>
        </div>
      <section>
        <Footer />
        < br/>
      </section>
      </div>
    </div>
  );
}
