import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./QuestionForm.module.scss";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const QuestionForm = () => {
  return (
    <section>
      <Container>
        <Row xs={1} md={2} className={styles.row}>
          <Col className={"" + styles.questionForm}>
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
              <button className={"col-11 " + styles.questionForm_btn}>
                Submit Message
              </button>
            </div>
          </Col>
          <Col className={"" + styles.questionInformation}>
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
        </Row>
      </Container>
    </section>
  );
};

export default QuestionForm;
