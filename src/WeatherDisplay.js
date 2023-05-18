import React from "react";

const WeatherDisplay = ({ weather }) => {
  return (
    <div>
      <h2>{weather.name}</h2>
      <p>Weather: {weather.weather[0].main}</p>
      <p>Temperature: {weather.main.temp}°F</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} mph</p>
      <p>Date and Time: {new Date().toLocaleString()}</p>
    </div>
  );
};

export default WeatherDisplay;
