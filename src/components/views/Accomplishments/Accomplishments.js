import React from "react";
import styles from "./Accomplishments.module.scss";
import { Col, Container, Row } from "react-bootstrap";
const Accomplishments = () => {
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.accomplishments_title}>
          <p>ACCOMPLISHMENTS</p>
          <h1>Let the numbers speak for us</h1>
        </div>
        <Row xs={1} md={2} lg={3} className={styles.accomplishments_row}>
          <Col className={styles.accomplishments_box}>
            <img
              className={styles.box_img}
              alt="img"
              src="./images/car.png"
            ></img>
            <h2>6281</h2>
            <h2>Delivered packages.</h2>
            <p>
              We strongly support best practice sharing across our operations
              around the world and across various industrial sectors.
            </p>
          </Col>
          <Col className={styles.accomplishments_box}>
            <img
              className={styles.box_img}
              alt="img"
              src="./images/mapa.png"
            ></img>
            <h2>109</h2>
            <h2>Countries covered.</h2>
            <p>
              As one of the world’s leading supply chain management companies,
              we design and implement industry-leading solutions.
            </p>
          </Col>
          <Col className={styles.accomplishments_box}>
            <img
              className={styles.box_img}
              alt="img"
              src="./images/paczki.png"
            ></img>
            <h2>359</h2>
            <h2>Tons of goods</h2>
            <p>
              Our commitment to sustainability helps us reduce waste and share
              the benefits with our customers.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Accomplishments;
