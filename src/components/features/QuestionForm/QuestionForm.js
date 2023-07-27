import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import styles from "./QuestionForm.module.scss";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const QuestionForm = () => {
  const [alert, setAlert] = useState(false);
  return (
    <section>
      <Container>
        <Row className={styles.row}>
          <Col xs={10} md={10} lg={6} className={"" + styles.questionForm}>
            <h1>Need to Make an Enquiry?</h1>
            <div className={"" + styles.inputContainer}>
              <input
                className={"col-11 col-md-5 " + styles.questionForm_input}
                type="text"
                placeholder="Your name*"
              />
              <input
                className={"col-11 col-md-5 " + styles.questionForm_input}
                type="text"
                placeholder="Affiliation*"
              />
              <input
                className={"col-11 col-md-5 " + styles.questionForm_input}
                type="email"
                placeholder="Email*"
              />
              <input
                className={"col-11 col-md-5 " + styles.questionForm_input}
                type="number"
                placeholder="Number*"
              />
              <input
                className={"col-11 " + styles.questionForm_input}
                type="text"
                placeholder="Topic*"
              />{" "}
              <textarea
                className={"col-11 " + styles.questionForm_textArea}
                placeholder="Your Message*"
              />
              <button
                onClick={() => setAlert(!alert)}
                className={"col-11 " + styles.questionForm_btn}
              >
                Submit Message
              </button>
            </div>
          </Col>
          <Col
            xs={10}
            md={10}
            lg={5}
            className={"" + styles.questionInformation}
          >
            <h6>GET IN TOUCH WITH US</h6>
            <h1>Our company will take care of your transport</h1>
            <p className={styles.questionInformationText}>
              Speedex has many years of experience in the transport and storage
              of goods. We have hundreds of satisfied customers. Contact us to
              learn about all the advantages of our cooperation.
            </p>
            <h4>Wrocław</h4>
            <div className={styles.questionInformation_date}>
              <div>
                <span>
                  <BiMap className={styles.questionInformation_icon} />
                </span>
                <p>53-027 Wrocław, Januszowicka 99/99 Street</p>
              </div>
              <div>
                <span>
                  <AiOutlineMail className={styles.questionInformation_icon} />
                </span>
                <p>speedexoffice@speedex.com</p>
              </div>
              <div>
                <span>
                  <AiOutlinePhone className={styles.questionInformation_icon} />
                </span>
                <p>123-456-789</p>
              </div>
            </div>
          </Col>
          {alert ? (
            <Alert variant="danger" className="mt-3">
              <Alert.Heading>Something is wrong!</Alert.Heading>
              <p>Unfortunately, this functionality does not work yet </p>
            </Alert>
          ) : (
            ""
          )}
        </Row>
      </Container>
    </section>
  );
};

export default QuestionForm;
