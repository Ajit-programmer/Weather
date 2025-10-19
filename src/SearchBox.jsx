import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "69cd404890e444c886c87a42ed9749f0";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        alert("❌ City not found! Please enter a valid city name.");
        return;
      }

      let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      updateInfo(result);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("⚠️ Something went wrong while fetching data.");
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim() === "") {
      alert("Please enter a city name.");
      return;
    }
    getWeatherInfo();
    setCity("");
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Enter City"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
          sx={{ backgroundColor: "white", borderRadius: 2 }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            ml: 2,
            bgcolor: "#1976d2",
            "&:hover": { bgcolor: "#004aad" },
          }}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
