import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Mumbai",
    feelslike: 24.84,
    temp: 32,
    tempMin: 22.05,
    tempMax: 45.55,
    humidity: 54,
    weather: "haze",
  });

  const [bgClass, setBgClass] = useState("haze-bg");

  const updateInfo = (result) => {
    setWeatherInfo(result);
    const w = result.weather.toLowerCase();
    if (w.includes("cloud")) setBgClass("cloud-bg");
    else if (w.includes("rain")) setBgClass("rain-bg");
    else if (w.includes("clear")) setBgClass("clear-bg");
    else if (w.includes("snow")) setBgClass("snow-bg");
    else if (w.includes("thunder")) setBgClass("thunder-bg");
    else if (w.includes("haze") || w.includes("mist")) setBgClass("haze-bg");
    else setBgClass("default-bg");
  };

  return (
    <div className={`WeatherApp ${bgClass}`}>
      <div className="app-container">
        <h2>🌦️ Weather App by AJIT</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}
