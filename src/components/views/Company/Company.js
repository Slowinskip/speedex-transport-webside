import React from "react";
import Banner from "../../common/Banner/Banner";
import Accomplishments from "../Accomplishments/Accomplishments";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./Company.module.scss";
const Company = () => {
  return (
    <>
      <Banner title="Company" description="Find out about us" />
      <section>
        <Container>
          <Row className={styles.row}>
            <Col xs={10} md={6} className={styles.companyTextBox1}>
              {" "}
              <h1>We give you control of your shipments.</h1>
            </Col>
            <Col xs={10} md={6} className={styles.companyTextBox2}>
              <p>
                Speedex invest time and expertise to fully understand your
                business before designing plans to improve your supply chain. We
                take responsibility for the performance of all our suppliers and
                for ensuring the availability of resources and equipment needed
                to control the flow of goods under our charge.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Accomplishments />
      <section className={styles.employers}>
        <Container className={styles.employers_container}>
          <p className={styles.redBackgroundText}>WE ARE SPEEDEX</p>
          <h1>We provide full assistance in forwarding and storage</h1>

          <Row className={styles.employers_row}>
            <Col className={styles.employer_box} xs={12} sm={6} lg={3}>
              <Card className={styles.card}>
                <Card.Img
                  className={styles.card_img}
                  height={300}
                  variant="top"
                  src="./images/empoyer_6.webp"
                ></Card.Img>
                <Card.Title className={styles.card_Title}>
                  Ronald James
                </Card.Title>
                <Card.Text className={styles.card_Text}>
                  Join CEO, Co-Founder
                </Card.Text>
              </Card>
            </Col>
            <Col className={styles.employer_box} xs={12} sm={6} lg={3}>
              {" "}
              <Card className={styles.card}>
                <Card.Img
                  className={styles.card_img}
                  height={300}
                  variant="top"
                  src="./images/empoyer_8.webp"
                ></Card.Img>
                <Card.Title className={styles.card_Title}>
                  Ralph Bonuea
                </Card.Title>
                <Card.Text className={styles.card_Text}>Supervisor</Card.Text>
              </Card>
            </Col>
            <Col className={styles.employer_box} xs={12} sm={6} lg={3}>
              {" "}
              <Card className={styles.card}>
                <Card.Img
                  className={styles.card_img}
                  height={300}
                  variant="top"
                  src="./images/empoyer_7.webp"
                ></Card.Img>
                <Card.Title className={styles.card_Title}>
                  Jessy Spenser
                </Card.Title>
                <Card.Text className={styles.card_Text}>
                  Join CEO, Co-Founder
                </Card.Text>
              </Card>
            </Col>
            <Col className={styles.employer_box} xs={12} sm={6} lg={3}>
              {" "}
              <Card className={styles.card}>
                <Card.Img
                  className={styles.card_img}
                  height={300}
                  variant="top"
                  src="./images/empoyer_5.webp"
                ></Card.Img>
                <Card.Title className={styles.card_Title}>
                  Helena Rose
                </Card.Title>
                <Card.Text className={styles.card_Text}>
                  Shipping & Warehouse Lead
                </Card.Text>
              </Card>
            </Col>
            <Col className={styles.employer_box} xs={12} sm={6} lg={3}>
              {" "}
              <Card className={styles.card}>
                <Card.Img
                  className={styles.card_img}
                  height={300}
                  variant="top"
                  src="./images/employer_1.jpeg"
                ></Card.Img>
                <Card.Title className={styles.card_Title}>
                  July Bricks
                </Card.Title>
                <Card.Text className={styles.card_Text}>
                  Shipping Coordinator
                </Card.Text>
              </Card>
            </Col>
            <Col className={styles.employer_box} xs={12} sm={6} lg={3}>
              {" "}
              <Card className={styles.card}>
                <Card.Img
                  className={styles.card_img}
                  height={300}
                  variant="top"
                  src="./images/employer_2.webp"
                ></Card.Img>
                <Card.Title className={styles.card_Title}>
                  Corbin Dallas
                </Card.Title>
                <Card.Text className={styles.card_Text}>
                  Warehouse Selector
                </Card.Text>
              </Card>
            </Col>{" "}
            <Col className={styles.employer_box} xs={12} sm={6} lg={3}>
              {" "}
              <Card className={styles.card}>
                <Card.Img
                  className={styles.card_img}
                  height={300}
                  variant="top"
                  src="./images/employer_3.webp"
                ></Card.Img>
                <Card.Title className={styles.card_Title}>
                  Luisa Larson
                </Card.Title>
                <Card.Text className={styles.card_Text}>
                  Warehouse Operator
                </Card.Text>
              </Card>
            </Col>
            <Col className={styles.employer_box} xs={12} sm={6} lg={3}>
              {" "}
              <Card className={styles.card}>
                <Card.Img
                  className={styles.card_img}
                  height={300}
                  variant="top"
                  src="./images/employer_4.jpeg"
                ></Card.Img>
                <Card.Title className={styles.card_Title}>
                  Lin Colton
                </Card.Title>
                <Card.Text className={styles.card_Text}>
                  Material Handler
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Company;
