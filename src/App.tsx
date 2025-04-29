import React, { useState, useEffect } from 'react';
import { fetchWeather, fetchForecast } from './utils/Api.js';
import WeatherCard from './components/Weathercard'
import Forecast from './components/Forecast';
import Searchbar from './components/Searchbar';

const App = () => {
  const [city, setCity] = useState('');
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getData() {
      if (!city) return;
      try {
        setError('');
        const weather = await fetchWeather(city, units);
        const forecast = await fetchForecast(city, units);
        setWeatherData(weather);
        setForecastData(forecast);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
        setWeatherData(null);
        setForecastData(null);
      }
    }
    getData();
  }, [city, units]);

  return (
    <div className="App container text-center">
      <h2 className="mt-4">Weather App</h2>
      <Searchbar onSearch={setCity} />

      {error && <p className="text-danger">{error}</p>}

      {weatherData && <WeatherCard weatherData={weatherData} />}
      {forecastData && <Forecast forecastData={forecastData} units={units} />}
    </div>
  );
};

export default App;
