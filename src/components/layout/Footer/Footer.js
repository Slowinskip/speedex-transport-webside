import React from "react";
import styles from "./Footer.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className={styles.footerBackground}>
      <Container>
        <Row className={styles.row}>
          <Col xs={12} lg={4} className={styles.logo_box}>
            <img src="./images/logo_white.png" alt="img"></img>
            <p>53-027 Wrocław, Januszowicka 99/99 Street</p>
            <p>speedexoffice@speedex.com</p>
            <p>123-456-789</p>
            <div className={styles.footer_icon}>
              <BiLogoFacebookCircle className={styles.icon} />
              <AiFillInstagram className={styles.icon} />
              <BsTwitter className={styles.icon} />
            </div>
          </Col>
          <Col xs={6} lg={2} className={styles.links_box}>
            <h4>Services</h4>
            <ul>
              <li>
                <a>Air Freght</a>
              </li>
              <li>
                <a>Ocean Freight</a>
              </li>
              <li>
                <a>Railway Freight</a>
              </li>
              <li>
                <a>Warehousing</a>
              </li>
              <li>
                <a>Distribution</a>
              </li>
              <li>
                <a>Value added</a>
              </li>
            </ul>
          </Col>
          <Col className={styles.links_box} xs={6} lg={2}>
            {" "}
            <h4>Company</h4>{" "}
            <ul>
              <li>
                <a>Mission</a>
              </li>
              <li>
                <a>Why choose Us?</a>
              </li>
              <li>
                <a>Care Studies</a>
              </li>
              <li>
                <a>Our Certificates</a>
              </li>
              <li>
                <a>Our Partners</a>
              </li>
              <li>
                <a>Constact Us</a>
              </li>
            </ul>
          </Col>
          <Col className={styles.links_box} xs={6} lg={2}>
            {" "}
            <h4>Industries</h4>{" "}
            <ul>
              Global coverage
              <li>
                <a>Air Freght</a>
              </li>
              <li>
                <a>Distribution</a>
              </li>
              <li>
                <a>Accounting Tools</a>
              </li>
              <li>
                <a>Freight Recovery</a>
              </li>
              <li>
                <a>Supply Chain</a>
              </li>
              <li>
                <a>Warehousing</a>
              </li>
            </ul>
          </Col>
          <Col className={styles.links_box} xs={6} lg={2}>
            <h4>Usefull links</h4>{" "}
            <ul>
              <li>
                <a>Air Freght</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Price Table</a>
              </li>
              <li>
                <a>Cost Calculator</a>
              </li>
              <li>
                <a>Location</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
