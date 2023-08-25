import React, { useState  } from 'react';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York');  
  const [showResults, setShowResults] = useState(false);  
  const apiKey = 'd149c00fdde65604d920797e383c2d4f';

  

  const fetchWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(data => setWeatherData(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('City not found. Please enter a valid city name.');
      });
  };

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    setShowResults(true);
    fetchWeatherData();
  };

  return (
    <div id="weather-container" className="weather-container">
      <h2 id="weather-heading" className="weather-heading">Weather Information</h2>
      <div id="search-bar" className="search-bar">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name"
        />
        <button id="search-button" onClick={handleSearchClick}>Search</button>
      </div>
      {showResults ? (
        weatherData ? (
          <div id="weather-details" className="weather-details">
            <p id="city">City: {weatherData.name}</p>
            {weatherData.main ? (
              <>
                <p id="temperature">Temperature: {weatherData.main.temp}°C</p>
                <p id="weather">Weather: {weatherData.weather[0].description}</p>
                <p id="humidity">Humidity: {weatherData.main.humidity}%</p>
              </>
            ) : (
              <p>Loading weather data...</p>
            )}
          </div>
        ) : null
      ) : null}
    </div>
  );
};

export default WeatherDisplay;
