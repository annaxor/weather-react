import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div>
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
