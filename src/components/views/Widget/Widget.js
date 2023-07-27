import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./Widget.module.scss";
const Widget = () => {
  return (
    <section id="widget">
      <div className={styles.widgetBackground}>
        <Container>
          <Row xs={1} md={2} lg={3} className={styles.row}>
            <Col className={styles.widgetBox}>
              <Card className={styles.card}>
                <Card.Img variant="top" src="./images/store.jpg"></Card.Img>
                <Card.Title className={styles.card_Title}>
                  Storage spaces tailored to your needs
                </Card.Title>
                <Card.Text className={styles.card_Text}>
                  We have 6 wireless transshipments throughout the country
                  country. Thanks to the support of logistics partners around
                  the world, we will meet all challenges{" "}
                </Card.Text>
              </Card>
            </Col>
            <Col className={styles.widgetBox}>
              {" "}
              <Card className={styles.card}>
                <Card.Img
                  variant="top"
                  src="./images/TruckWidget.jpg"
                ></Card.Img>
                <Card.Title className={styles.card_Title}>
                  Newly purchased fleet
                </Card.Title>
                <Card.Text className={styles.card_Text}>
                  We have users with many years of experience equipping them
                  with the latest equipment{" "}
                </Card.Text>
              </Card>
            </Col>
            <Col className={styles.widgetBox}>
              {" "}
              <Card className={styles.card}>
                <Card.Img variant="top" src="./images/employer.jpg"></Card.Img>
                <Card.Title className={styles.card_Title}>
                  We focus on our employees
                </Card.Title>
                <Card.Text className={styles.card_Text}>
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
