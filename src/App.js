import "./App.css";
import logo from "./images/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import WeatherCard from "./components/card/Card";

const dummyWeather = {
  city: "San Francisco",
  temperature: "15°C",
  icon: "01d",
  description: "Cloudy",
};

function App() {
  return (
    <div className="app-container">
      <Container>
        <Row>
          <header className="h1 text-white-50 fw-bold">Weather App</header>
        </Row>
        <Row>
          <section>
            <input
              type="text"
              placeholder="Search for a city"
              className="my-4 me-2 border border-0 rounded p-2"
            />
            <Button variant="success" className="my-4 p-2">
              SEARCH
            </Button>
          </section>
        </Row>
        <Row>
          <WeatherCard weather={dummyWeather} />
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
