import React, { useState, useEffect } from 'react';
import { fetchWeather, fetchForecast } from './utils/api';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import Searchbar from './components/Searchbar';

const App = () => {
  const [city, setCity] = useState('');
  const [units, setUnits] = useState('metric'); 
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');
  console.log(weatherData)

  useEffect(() => {
    async function getData() {
      try {
        const weatherData = await fetchWeather(city, units);
        const forecastData = await fetchForecast(city, units);
        setWeatherData(weatherData);
        setForecastData(forecastData);
      } catch (error) {
        setError(error.message);
      }
    }
    getData();
  }, [city, units]);

  return (
    <div className="App">
      {error && <p>{error}</p>}
      <Searchbar onSearch={setCity} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
      {forecastData && <Forecast forecastData={forecastData} />}
    </div>
  );
};

export default App;
