import React from "react";
import styles from "./SubscribeComponent.module.scss";
import { Col, Container, Row } from "react-bootstrap";
const SubscribeComponent = () => {
  return (
    <div className={styles.subBackground}>
      <Container>
        <Row className={styles.row}>
          <Col xs={10} md={5} lg={4} className={styles.subText}>
            <h2>Subscribe to our Newsletter!</h2>
          </Col>{" "}
          <Col xs={10} md={5} lg={5} className={styles.subInput}>
            <input
              placeholder="Your email address..."
              className={styles.subInput}
            />
            <button className={styles.subBtn}>Subscribe</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubscribeComponent;
