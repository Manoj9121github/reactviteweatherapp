const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function fetchWeather(city, units = 'metric') {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=${units}&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('enter the city');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather:', error.message);
    throw error;
  }
}

export async function fetchForecast(city, units = 'metric') {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=${units}&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Forecast not available for this city');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching forecast:', error.message);
    throw error;
  }
}
