import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Forecast = ({ forecastData, units }) => {
  const unitSymbol = units === 'metric' ? '°C' : '°F';
  const daily = [];
  const seen = new Set();

  for (let item of forecastData.list) {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!seen.has(date)) {
      seen.add(date);
      daily.push(item);
    }
    if (daily.length === 5) break;
  }

  return (
    <Row className="justify-content-center mt-5">
      {daily.map((day, idx) => (
        <Col key={idx} xs={6} sm={4} md={2} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>{new Date(day.dt * 1000).toLocaleDateString()}</Card.Title>
              <p>{day.main.temp}{unitSymbol}</p>
              <p>{day.weather[0].main}</p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Forecast;