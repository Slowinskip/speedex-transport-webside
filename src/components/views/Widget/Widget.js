import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./Widget.module.scss";
const Widget = () => {
  return (
    <section>
      <div className={styles.widgetBackground}>
        <Container>
          <Row xs={1} md={3}>
            <Col className={styles.widgetBox}>
              <Card>
                <Card.Img variant="top" src="./images/store.jpg"></Card.Img>
                <Card.Title>Storage spaces tailored to your needs</Card.Title>
                <Card.Text>
                  We have 6 transshipment centers located throughout the country
                </Card.Text>
              </Card>
            </Col>
            <Col className={styles.widgetBox}>
              {" "}
              <Card>
                <Card.Img
                  variant="top"
                  src="./images/TruckWidget.jpg"
                ></Card.Img>
                <Card.Title>Newly purchased fleet</Card.Title>
                <Card.Text>
                  We have a large range of cars from trucks to buses to meet
                  your expectations
                </Card.Text>
              </Card>
            </Col>
            <Col className={styles.widgetBox}>
              {" "}
              <Card>
                <Card.Img variant="top" src="./images/employer.jpg"></Card.Img>
                <Card.Title>We focus on our employees</Card.Title>
                <Card.Text>
                  We believe that taking care of employee development and
                  satisfaction translates into long-term cooperation
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Widget;
