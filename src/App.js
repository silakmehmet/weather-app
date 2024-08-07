import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="app-container">
      <Container>
        <Row>
          <header className="h1">Weather App</header>
        </Row>
        <Row>
          <section>Display and search bar</section>
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
