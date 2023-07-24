import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Service.module.scss";
const Service = () => {
  return (
    <section>
      <Container>
        <div className={styles.servie_title}>
          <p>SERVICE</p>
          <h1>We provide full assistance in forwarding and storage</h1>
        </div>
        <Row xs={1} md={2} lg={3}>
          <Col className={styles.srvice_box}>
            <img alt="img" src="./images/"></img>
            <h3>Air Freight</h3>
            <p>
              By ordering air transport, you know that the shipment will arrive
              as soon as possible
            </p>
          </Col>
          <Col className={styles.srvice_box}>
            <img alt="img" src="./images/"></img>
            <h3>Ocean Freight</h3>
            <p>
              Water transport is recommended for large-size shipments, such as a
              car
            </p>
          </Col>
          <Col className={styles.srvice_box}>
            <img alt="img" src="./images/"></img>
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
