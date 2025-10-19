import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const getWeatherImage = (weather) => {
    weather = weather.toLowerCase();
    if (weather.includes("cloud"))
      return "https://images.unsplash.com/photo-1564932319746-a617dab0b940?auto=format&fit=crop&q=60&w=1000";
    if (weather.includes("rain"))
      return "https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?auto=format&fit=crop&q=60&w=1000";
    if (weather.includes("clear"))
      return "https://images.unsplash.com/photo-1691848746386-d5de9f5c05a2?auto=format&fit=crop&q=60&w=1000";
    if (weather.includes("haze") || weather.includes("mist"))
      return "https://plus.unsplash.com/premium_photo-1667239532950-db28085dacd0?auto=format&fit=crop&q=60&w=1000";
    if (weather.includes("snow"))
      return "https://images.unsplash.com/photo-1739489247996-f9aad38174f2?auto=format&fit=crop&q=60&w=600";
    if (weather.includes("thunder"))
      return "https://images.unsplash.com/photo-1720752881752-de84159fbc55?auto=format&fit=crop&q=60&w=1000";
    if (weather.includes("smoke"))
      return "https://images.unsplash.com/photo-1565115399809-04a714aaa956?auto=format&fit=crop&q=60&w=1000";
    if (weather.includes("sunny"))
      return "https://plus.unsplash.com/premium_photo-1666241368300-a1115df75b7c?auto=format&fit=crop&q=60&w=1000";
    return "https://images.unsplash.com/photo-1612018072386-2a3be37a43f1?auto=format&fit=crop&q=60&w=1000";
  };

  const getWeatherIcon = (weather) => {
    weather = weather.toLowerCase();
    if (weather.includes("cloud")) return "☁️";
    if (weather.includes("rain")) return "🌧️";
    if (weather.includes("clear")) return "☀️";
    if (weather.includes("haze") || weather.includes("mist")) return "🌫️";
    if (weather.includes("snow")) return "❄️";
    if (weather.includes("thunder")) return "⛈️";
    if (weather.includes("smoke")) return "🌫️";
    if (weather.includes("sunny")) return "☀️";
    return "🌍";
  };

  const weatherImage = getWeatherImage(info.weather);
  const weatherIcon = getWeatherIcon(info.weather);

  return (
    <div className="InfoBox fade-in">
      <Card
        sx={{
          maxWidth: 650,
          borderRadius: 8,
          boxShadow: "0 10px 50px rgba(0, 0, 0, 0.35)",
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(12px)",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 12px 60px rgba(0, 0, 0, 0.45)",
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 350,
            width: "100%",
            objectFit: "cover",
          }}
          image={weatherImage}
          alt={info.weather}
        />

        <CardContent sx={{ textAlign: "center" }}>
          {/* City Name */}
          <Typography
            gutterBottom
            variant="h4"
            sx={{
              fontWeight: "bold",
              textTransform: "capitalize",
              color: "#0b3954",
            }}
          >
            {info.city} {weatherIcon}
          </Typography>

          {/* Temperature */}
          <Typography
            variant="h2"
            className="temp-overlay"
            sx={{
              fontWeight: "bold",
              color: "#ff6b6b",
              marginTop: 1,
            }}
          >
            {info.temp}°C
          </Typography>

          {/* Weather Description */}
          <Typography
            variant="h5"
            sx={{
              textTransform: "capitalize",
              color: "#555",
              marginBottom: 2,
            }}
          >
            {info.weather}
          </Typography>

          {/* Other Details */}
          <Typography
            variant="body1"
            sx={{ color: "#333", lineHeight: 1.8 }}
          >
            🌤️ Min Temp: {info.tempMin}°C <br />
            ☀️ Max Temp: {info.tempMax}°C <br />
            💧 Humidity: {info.humidity}% <br />
            🤗 Feels Like: {info.feelslike}°C
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
