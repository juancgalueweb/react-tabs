import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-danger">Our Solar System</h1>
          <ButtonGroup aria-label="Tabs in React">
            <Button
              variant="danger"
              className={toggleState === 1 ? "active p-2" : "p-2"}
              onClick={() => toggleTab(1)}
            >
              Tab-1
            </Button>
            <Button
              variant="danger"
              className={toggleState === 2 ? "active p-2" : "p-2"}
              onClick={() => toggleTab(2)}
            >
              Tab-2
            </Button>
            <Button
              variant="danger"
              className={toggleState === 3 ? "active p-2" : "p-2"}
              onClick={() => toggleTab(3)}
            >
              Tab-3
            </Button>
          </ButtonGroup>
        </Col>
        <Row>
          <Col className="col-6 border border-2 m-2 rounded">
            <div className={toggleState === 1 ? "d-block" : "d-none"}>
              <h3>Size and Distance</h3>
              <p>
                Our solar system extends much farther than the eight planets
                that orbit the Sun. The solar system also includes the{" "}
                <a
                  href="https://solarsystem.nasa.gov/solar-system/kuiper-belt/overview/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kuiper Belt
                </a>{" "}
                that lies past Neptune's orbit. This is a sparsely occupied ring
                of icy bodies, almost all smaller than the most popular Kuiper
                Belt Object – dwarf planet{" "}
                <a
                  href="https://solarsystem.nasa.gov/planets/dwarf-planets/pluto/overview/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pluto
                </a>
                .
              </p>
            </div>
            <div className={toggleState === 2 ? "d-block" : "d-none"}>
              <h3>Moons</h3>
              <p>
                There are more than 200 known moons in our solar system and
                several more awaiting confirmation of discovery. Of the eight
                planets, Mercury and Venus are the only ones with no moons. The
                giant planets Jupiter and Saturn lead our solar system’s moon
                counts. In some ways, the swarms of moons around these worlds
                resemble mini versions of our solar system. Pluto, smaller than
                our own moon, has five moons in its orbit, including the Charon,
                a moon so large it makes Pluto wobble. Even tiny asteroids can
                have moons.
              </p>
            </div>
            <div className={toggleState === 3 ? "d-block" : "d-none"}>
              <h3>Formation</h3>
              <p>
                Our solar system formed about 4.5 billion years ago from a dense
                cloud of interstellar gas and dust. The cloud collapsed,
                possibly due to the shockwave of a nearby exploding star, called
                a supernova. When this dust cloud collapsed, it formed a solar
                nebula – a spinning, swirling disk of material.
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
