import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./CostCalculation.module.scss";
import { Range } from "react-range";
const CostCalculation = ({
  weightPrice,
  distancePrice,
  typeDomestic,
  typeForeign,
  title,
}) => {
  const [weight, setWeight] = useState(0);
  const [distance, setDistance] = useState(0);
  const [typeDelivery, setTypeDelivery] = useState(0);

  const calculatePrice = function () {
    const weightCalc = weight * weightPrice;
    const distanceCal = distance * distancePrice;
    return (weightCalc + distanceCal + Number(typeDelivery)).toFixed(2);
  };
  return (
    <section>
      <Container>
        <Row className={styles.row}>
          <Col xs={11} lg={6} className={styles.calculationForm}>
            <h2>{title} Cargo Cost Calculator</h2>
            <p className={styles.calcContent}>
              The calculator shows illustrative transport costs. In order to
              obtain an accurate valuation, please contact us.
            </p>
            <input
              type="number"
              placeholder="Weight in tonnes"
              className={styles.calculationInput}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            ></input>
            <select
              onChange={(e) => {
                setTypeDelivery(e.target.value);
              }}
              className={styles.calculationInput}
            >
              {" "}
              <option selected="selected" disabled>
                Type of Delivery
              </option>
              <option value={typeDomestic}>
                Domestic shipment {typeDomestic}$
              </option>
              <option value={typeForeign}>
                Foreign shipment {typeForeign}$
              </option>
            </select>
            <input
              onChange={(e) => {
                setDistance(e.target.value);

                console.log(e.target.value);
              }}
              type="number"
              placeholder="Distance"
              className={styles.calculationInput}
            ></input>
            <h2 className={styles.cost}>Cost: {calculatePrice()}$</h2>
          </Col>
          <Col xs={12} sm={12} md={10} lg={5} className={styles.contactImage}>
            <div className={styles.imageContainer}>
              <img
                className={styles.img}
                alt="img"
                src="./images/infolinia.jpg"
              ></img>
            </div>
            <div className={styles.imageContent}>
              <h3>
                Have Additional Questions?{" "}
                <span>Contact One of Our Agents!</span>
              </h3>
              <p>Phone: 123 123 123</p>
              <p>Phone 2: 333 444 555</p>
              <a href="/contact">Contact Us!</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CostCalculation;
