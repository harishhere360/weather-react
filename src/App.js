import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import WeatherDisplay from "./WeatherDisplay";
import WeatherChart from "./WeatherChart";

const API_KEY = "8ae73772655e121a0f2121f9742f87b4";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [chartData, setChartData] = useState(null);

  const handleSearch = (value) => {
    setCity(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (city !== "") {
      fetchData();
    }
  }, [city]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`);
        const labels = data.list.map((item) => item.dt_txt);
        const temperature = data.list.map((item) => item.main.temp);
        const humidity = data.list.map((item) => item.main.humidity);
        const conditions = data.list.map((item) => item.weather[0].main);
        setChartData({ labels, temperature, humidity, conditions });
      } catch (error) {
        console.log(error);
      }
    };

    if (city !== "") {
      fetchChartData();
    }
  }, [city]);

  return (
    <div>
      <SearchInput handleSearch={handleSearch} />
      {weather && (
        <div>
          <WeatherDisplay weather={weather} />
          {chartData && <WeatherChart data={chartData} />}
        </div>
      )}
    </div>
  );
};

export default App;
