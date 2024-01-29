import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url =
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a0f23a0d5c5c6f55456cd6f8cd601ba5&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Выберите местоположение"
        ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Tel-Aviv</p>
          </div>
          <div className="temp">
            <h1 className="bold">15°C</h1>
          </div>
          <div className="description">
            <p>Rain</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">12°C</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">14 MPH</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
