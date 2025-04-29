import React from 'react';
import { Card, CardBody } from 'react-bootstrap';

interface WeatherCardProps {
  weatherData: {
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
  };
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  return (
    <div>
      <Card className="w-50 m-auto mt-4 shadow">
        <CardBody>
          <h5 className="text-center mb-3">Weather Details</h5>
          <ul className="list-unstyled">
            <li><h4>City: {weatherData.name}</h4></li>
            <li><h4>Temp: {weatherData.main.temp}°C</h4></li>
            <li><h4>Humidity: {weatherData.main.humidity}%</h4></li>
            <li><h4>Wind: {weatherData.wind.speed} m/s</h4></li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};

export default WeatherCard;
