import React, { useState } from "react";
import logo from "./logo.png";
import pic1 from "./pic1.jpg";
import pic2 from "./logo.png";
import "./App.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [values, setValues] = useState({
    fname: "",
  });
  const [cool, setCool] = useState("");

  const handleInputChange = (event) => {
    setValues((prevProps) => ({
      ...prevProps,
      fname: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.fname.toLowerCase().replace(/ /g, "") === "rplgrime" ||
      values.fname.toLowerCase().replace(/ /g, "") === "greywizard"
    ) {
      setCool("lame");
    } else {
      setCool("cool!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>A place for world class artists (so not rplgrime or grey wizard)</p>
      </header>{" "}
      <img src={logo} className="App-logo" alt="logo" />
      <p>h1 Generative rocketpool art h1</p>
      <h1>Dr Doofus, MD, DDS</h1>
      <div>
        This is to join artists EXCEPT GREYWIZARD AND RPLGRIME to make
        generit-whatever art. Whatever the fuck that is
      </div>
      <Container border="red">
        <Row border="green">
          <Col className="border">Please verify identity</Col>
          <Col fluid className="m-5">
            <form fluid onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="fname"
                  onChange={handleInputChange}
                  value={values.fname}
                />
              </label>
              <input type="submit" value="Submit" />
              <h2>You are {cool}</h2>
            </form>
          </Col>
        </Row>
        <Row>
          <Col>
            Coming soon, build amazing art projects of rocketpool rockets mixed
            with other art. As far as I know, that is probably generitive art.
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            Here is an example. You can put these images over a photo of a
            rocket randomly. Pretty cool!
          </Col>
          <Col xs={8}>
            <Carousel>
              <Carousel.Item>
                <img className="w-20" src={pic1} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Put a ROCKET HERE! </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-20"
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>OR HERE!</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="w-20" src={pic2} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>EVEN HERE!</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
