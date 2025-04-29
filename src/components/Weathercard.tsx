import React from 'react';
import { Card, CardBody, CardImg } from 'react-bootstrap';

const WeatherCard = ({ weatherData }) => {
  return (
    <div>
      <Card className="w-50 m-auto">
        
        <CardBody>
          <h5 className="text-center">Weather Details:</h5>
          <ul>
            <li>
              <h4>City: {weatherData.name}</h4>
            </li>
            <li>
              <h4>Temp: {weatherData.main.temp}°C</h4>
            </li>
            <li>
              <h4>Humidity: {weatherData.main.humidity}%</h4>
            </li>
            <li>
              <h4>Wind: {weatherData.wind.speed} m/s</h4>
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};

export default WeatherCard;
