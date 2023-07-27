import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Service.module.scss";
const Service = () => {
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.servie_title}>
          <p>SERVICE</p>
          <h1>We provide full assistance in forwarding and storage</h1>
        </div>
        <Row className={styles.row_content}>
          <Col xs={10} md={5} lg={3} className={styles.srvice_box}>
            <img alt="img" src="./images/plane1.png"></img>
            <h3>Air Freight</h3>
            <p>
              By ordering air transport, you know that the shipment will arrive
              as soon as possible
            </p>
          </Col>
          <Col xs={10} md={5} lg={3} className={styles.srvice_box}>
            <img alt="img" src="./images/ship1.png"></img>
            <h3>Ocean Freight</h3>
            <p>
              Water transport is recommended for large-size shipments, such as a
              car
            </p>
          </Col>
          <Col xs={10} md={5} lg={3} className={styles.srvice_box}>
            <img alt="img" src="./images/bus.png"></img>
            <h3>Land Express</h3>
            <p>
              Ground transport will easily transport your package between nearby
              cities.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
