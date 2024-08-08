import "./App.css";
import { useState, useEffect } from "react";

import logo from "./images/logo.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import WeatherCard from "./components/card/Card";

import { API_KEY } from "./config";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSearch = async () => {
    if (
      weather.some(
        (w) => w.city.toLocaleLowerCase("tr") === city.toLocaleLowerCase("tr")
      )
    ) {
      setMessage("You already know the weather for this city");
      setCity("");

      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        const weatherData = {
          city: data.name,
          temperature: `${data.main.temp}°C`,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          country: data.sys.country,
        };
        console.log(weatherData);
        setWeather([...weather, weatherData]);
        setMessage("");
        setError("");
        setCity("");
      } else {
        setError("City not found");
        setMessage("");
        setCity("");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data");
      setMessage("");
      setCity("");
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    };

    // Attach the event listener to the document
    document.addEventListener("keypress", handleKeyPress);

    // Cleanudivevent listener on component unmount
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  return (
    <div className="app-container">
      <Container>
        <Row>
          <header className="h1 text-black-50 fw-bold">Weather App</header>
        </Row>
        <Row>
          <section>
            <input
              type="text"
              placeholder="Search for a city"
              className="mt-4 me-2 border border-0 rounded p-2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <Button
              variant="success"
              className="my-4 p-2"
              onClick={handleSearch}
            >
              SEARCH
            </Button>
            {error && <div className="text-danger">{error}</div>}
            {message && <div className="text-danger">{message}</div>}
          </section>
        </Row>
        <Row className="d-flex justify-content-center">
          {weather.map((w, index) => (
            <WeatherCard key={index} weather={w} />
          ))}
        </Row>
        <Row>
          <footer className="position-relative">
            <img
              src={logo}
              alt="logo"
              className="image position-absolute top-0 end-0 img-fluid"
            />
          </footer>
        </Row>
      </Container>
    </div>
  );
}

export default App;
