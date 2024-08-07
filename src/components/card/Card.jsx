import React from "react";
import Card from "react-bootstrap/Card";
import "./Card.css";

const WeatherCard = ({ weather }) => {
  return (
    <Card className="m-2 weather-card py-2">
      <div className="d-flex justify-content-start ">
        <Card.Title>
          {weather.city}
          <sup className="ms-2 p-1 rounded text-white bg-success">
            {weather.country}
          </sup>
        </Card.Title>
      </div>
      <Card.Text>
        <div className="d-flex justify-content-start fs-4 ">
          {weather.temperature}
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="weather icon"
        />
        <div className="d-flex justify-content-end fw-medium fst-italic">
          {weather.description}
        </div>
      </Card.Text>
    </Card>
  );
};

export default WeatherCard;
