import React from "react";
import Banner from "../../common/Banner/Banner";
import Service from "../Service/Service";
import styles from "./ServicesPage.module.scss";
import { Col, Container, Row } from "react-bootstrap";
const ServicesPage = () => {
  return (
    <>
      <Banner title="Services" description={"Find out what we offer!"} />
      <Service />
      <section className={styles.servicesSection}>
        <Container>
          <Row className={styles.sectionRow}>
            <div className={styles.titleDiv}>
              <p className={styles.sestionSmallTitle}>Air Freight</p>
              <h1 className={styles.sestionTitle}>
                Because time plays a role!
              </h1>
            </div>
            <Col className={styles.servicesBox}>
              <div className={"col-12 col-lg-5 " + styles.serviceTextContent}>
                <h2>Why the plane?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sit amet rhoncus arcu. Vivamus a elit a turpis feugiat auctor
                  non eget purus. Duis blandit maximus dui, egestas semper nisi
                  placerat dictum. In at ligula at dui rutrum posuere ac non
                  arcu. Nullam fringilla porta tincidunt. Duis quis felis at
                  ipsum iaculis eleifend. Nulla sollicitudin quam et ligula
                  lobortis, ut commodo turpis sagittis. Praesent ac volutpat
                  nisl, in imperdiet orci. Donec blandit porttitor ornare.
                </p>
              </div>
              <img
                className="col-12 col-lg-5 "
                src="./images/plane_Services.jpeg"
              ></img>
            </Col>
          </Row>
          <Row className={styles.sectionRow}>
            <div className={styles.titleDiv}>
              <p className={styles.sestionSmallTitle}>Ocean Freight</p>
              <h1 className={styles.sestionTitle}>No weight is terrible!</h1>
            </div>
            <Col className={styles.servicesBox}>
              <img
                className="col-12 col-lg-5 "
                src="./images/ship_Services.jpeg"
              ></img>
              <div className={"col-12 col-lg-5 " + styles.serviceTextContent}>
                <h2>The only king of the seas</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sit amet rhoncus arcu. Vivamus a elit a turpis feugiat auctor
                  non eget purus. Duis blandit maximus dui, egestas semper nisi
                  placerat dictum. In at ligula at dui rutrum posuere ac non
                  arcu. Nullam fringilla porta tincidunt. Duis quis felis at
                  ipsum iaculis eleifend. Nulla sollicitudin quam et ligula
                  lobortis, ut commodo turpis sagittis. Praesent ac volutpat
                  nisl, in imperdiet orci. Donec blandit porttitor ornare.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={styles.sectionRow}>
            <div className={styles.titleDiv}>
              <p className={styles.sestionSmallTitle}>Land Freight</p>
              <h1 className={styles.sestionTitle}>
                Huge space, Huge possibilities
              </h1>
            </div>
            <Col className={styles.servicesBox}>
              <div className={"col-12 col-lg-5 " + styles.serviceTextContent}>
                <h2>Why the plane?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sit amet rhoncus arcu. Vivamus a elit a turpis feugiat auctor
                  non eget purus. Duis blandit maximus dui, egestas semper nisi
                  placerat dictum. In at ligula at dui rutrum posuere ac non
                  arcu. Nullam fringilla porta tincidunt. Duis quis felis at
                  ipsum iaculis eleifend. Nulla sollicitudin quam et ligula
                  lobortis, ut commodo turpis sagittis. Praesent ac volutpat
                  nisl, in imperdiet orci. Donec blandit porttitor ornare.
                </p>
              </div>{" "}
              <img
                className="col-12 col-lg-5 "
                src="./images/truck_Services.jpeg"
                height={400}
              ></img>
            </Col>
          </Row>
          <Row className={styles.sectionRow}>
            <div className={styles.titleDiv}>
              <p className={styles.sestionSmallTitle}>Warehousing</p>
              <h1 className={styles.sestionTitle}>
                Huge space, Huge possibilities
              </h1>
            </div>
            <Col className={styles.servicesBox}>
              <img
                className="col-12 col-lg-5 "
                src="./images/warehouse_Services.jpeg"
              ></img>
              <div className={"col-12 col-lg-5 " + styles.serviceTextContent}>
                <h2>Everything within reach of a forklift!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sit amet rhoncus arcu. Vivamus a elit a turpis feugiat auctor
                  non eget purus. Duis blandit maximus dui, egestas semper nisi
                  placerat dictum. In at ligula at dui rutrum posuere ac non
                  arcu. Nullam fringilla porta tincidunt. Duis quis felis at
                  ipsum iaculis eleifend. Nulla sollicitudin quam et ligula
                  lobortis, ut commodo turpis sagittis. Praesent ac volutpat
                  nisl, in imperdiet orci. Donec blandit porttitor ornare.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServicesPage;
