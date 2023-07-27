import React from "react";
import styles from "./Pack.module.scss";
import { Col, Container, Row } from "react-bootstrap";
const Pack = () => {
  return (
    <section className={styles.sectionPack}>
      <div className={styles.packBackground}></div>
      <Container>
        <Row xs={1} md={2} lg={3} className={styles.row}>
          <Col className={styles.packBox}>
            <h3>Starter Pack</h3>
            <p>$100</p>
            <p>Monthly</p>
            <p>1 warehouse</p>
            <p>Custom business rules</p>
            <p>Real-time rate shopping</p>
            <p>100 freight shipments / month</p>
          </Col>{" "}
          <Col className={styles.packBox}>
            <h3>Regular Pack</h3>
            <p>$200</p>
            <p>Monthly</p>
            <p>Multiple warehouses</p>
            <p>Custom business rules</p>
            <p>Assisted On-boarding</p>
            <p>250 freight shipments / month</p>
          </Col>
          <Col className={styles.packBox}>
            <h3>AdvancedPack</h3>
            <p>$300</p>
            <p>Monthly</p>
            <p>Multiple warehouses</p>
            <p>Carrier invoice audit</p>
            <p>Discounted marketplace rates</p>
            <p>Unlimited freight shipments</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pack;
