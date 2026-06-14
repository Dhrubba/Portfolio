import { useState } from "react";
import "../styles/Weather.css";

// Weather API
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function Weather() {
  // useState hooks to store data
  const [city, setCity] = useState("");       // what user types
  const [weather, setWeather] = useState(null); // API response
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // This function runs when user clicks Search
  const fetchWeather = async () => {
    // Don't fetch if input is empty
    if (!city.trim()) return;

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      // WeatherAPI.com endpoint
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );

      // If city not found, WeatherAPI returns error code 400
      if (!res.ok) {
        throw new Error("City not found. Please check the name and try again.");
      }

      const data = await res.json();
      setWeather(data); // save the result

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Allow pressing Enter to search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  // Pick an emoji based on weather condition text
  const getWeatherEmoji = (condition) => {
    const c = condition.toLowerCase();
    if (c.includes("sunny") || c.includes("clear")) return "☀️";
    if (c.includes("cloud") || c.includes("overcast")) return "☁️";
    if (c.includes("rain") || c.includes("drizzle")) return "🌧️";
    if (c.includes("thunder") || c.includes("storm")) return "⛈️";
    if (c.includes("snow") || c.includes("sleet")) return "❄️";
    if (c.includes("fog") || c.includes("mist") || c.includes("haze")) return "🌫️";
    return "🌤️";
  };

  return (
    <div className="weather-page">

      <div className="page-header">
        <h1 className="page-title">WEATHER APP</h1>
        <p className="page-subtitle">Check real-time weather for any city in the world</p>
      </div>

      {/* Search Bar */}
      <div className="weather-search">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter city name (e.g. Guwahati)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            className="city-input"
          />
          <button onClick={fetchWeather} className="search-btn">
            Search
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="weather-loading">
          <div className="spinner"></div>
          <p>Fetching weather data...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="weather-error">
          <span>⚠️</span>
          <p>{error}</p>
        </div>
      )}

      {/* Weather Result Card */}
      {weather && !loading && (
        <div className="weather-card">

          {/* City Name */}
          <div className="weather-city">
            <h2>{weather.location.name}, {weather.location.country}</h2>
            <p className="weather-date">{new Date().toDateString()}</p>
          </div>

          {/* Temperature & Condition */}
          <div className="weather-main">
            <span className="weather-emoji">
              {getWeatherEmoji(weather.current.condition.text)}
            </span>
            <div className="weather-temp">{weather.current.temp_c}°C</div>
            <p className="weather-desc">{weather.current.condition.text}</p>
          </div>

          {/* Extra Details */}
          <div className="weather-details">
            <div className="detail-item">
              <span>💧 Humidity</span>
              <strong>{weather.current.humidity}%</strong>
            </div>
            <div className="detail-item">
              <span>🤔 Feels Like</span>
              <strong>{weather.current.feelslike_c}°C</strong>
            </div>
            <div className="detail-item">
              <span>🌬️ Wind</span>
              <strong>{weather.current.wind_kph} km/h</strong>
            </div>
          </div>

        </div>
      )}


    </div>
  );
}

export default Weather;
