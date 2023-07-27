import React from "react";
import styles from "./Pack.module.scss";
import { Col, Container, Row } from "react-bootstrap";
const Pack = () => {
  return (
    <section className={styles.sectionPack}>
      <div className={styles.packBackground}></div>
      <Container>
        <Row className={styles.row}>
          <Col xs={10} md={5} lg={4} className={styles.packBox}>
            <h4>Starter Pack</h4>
            <p>$100</p>
            <p className={styles.montlyP}>Monthly</p>
            <p>1 warehouse</p>
            <p>Custom business rules</p>
            <p>Real-time rate shopping</p>
            <p>100 freight shipments / month</p>
            <button className={styles.packBtn}>Buy Plan</button>
          </Col>{" "}
          <Col xs={10} md={5} lg={4} className={styles.packBox}>
            <h4>Regular Pack</h4>
            <p>$200</p>
            <p className={styles.montlyP}>Monthly</p>
            <p>Multiple warehouses</p>
            <p>Custom business rules</p>
            <p>Assisted On-boarding</p>
            <p>250 freight shipments / month</p>{" "}
            <button className={styles.packBtn}>Buy Plan</button>
          </Col>
          <Col xs={10} md={5} lg={4} className={styles.packBox}>
            <h4>AdvancedPack</h4>
            <p>$300</p>
            <p>Monthly</p>
            <p>Multiple warehouses</p>
            <p>Carrier invoice audit</p>
            <p>Discounted marketplace rates</p>
            <p>Unlimited freight shipments</p>{" "}
            <button className={styles.packBtn}>Buy Plan</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pack;
