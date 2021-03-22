import React from "react";
import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">

            <Weather defaultCity="Kuala Lumpur" />
            
      <section>
        <Footer />
        < br/>
      </section>
      </div>
  );
}
