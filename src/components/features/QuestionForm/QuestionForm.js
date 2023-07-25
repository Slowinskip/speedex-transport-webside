import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./QuestionForm.module.scss";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const QuestionForm = () => {
  return (
    <section>
      <Container>
        <Row xs={1} md={2}>
          <Col className={"" + styles.questionForm}>
            <h1>Need to Make an Enquiry?</h1>
            <input
              className={"col-5 " + styles.questionForm_input}
              type="text"
              placeholder="Your name*"
            />
            <input
              className={"col-5 " + styles.questionForm_input}
              type="text"
              placeholder="Affiliation*"
            />
            <input
              className={"col-5 " + styles.questionForm_input}
              type="emaik"
              placeholder="Email*"
            />
            <input
              className={"col-5 " + styles.questionForm_input}
              type="number"
              placeholder="Number*"
            />
            <input
              className={"col-10 " + styles.questionForm_input}
              type="text"
              placeholder="Topic*"
            />{" "}
            <textarea
              className={"col-10 " + styles.questionForm_input}
              placeholder="Your Message*"
            />
            <button className={"col-10 " + styles.questionForm_btn}>
              Submit Message
            </button>
          </Col>
          <Col className={"" + styles.questionInformation}>
            <h6>GET IN TOUCH WITH US</h6>
            <h1>Our company will take care of your transport</h1>
            <p>
              Speedex has many years of experience in the transport and storage
              of goods. We have hundreds of satisfied customers
            </p>
            <h4>Wrocław</h4>
            <BiMap />
            <p>53-027 Wrocław, Januszowicka 99/99 Street</p>
            <AiOutlineMail />
            <p>speedexoffice@speedex.com</p>
            <AiOutlinePhone />
            <p>123-456-789</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuestionForm;
