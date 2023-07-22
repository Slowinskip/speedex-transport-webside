import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navBackground, setnavBackground] = useState("");
  const [textColor, setTextColor] = useState("white");

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 10) {
      setnavBackground("white");
      setTextColor("black");
    } else {
      setnavBackground("");
      setTextColor("white");
    }
    console.log(window.scrollY);
  });
  return (
    <>
      <div
        className={styles.navigation}
        style={{ background: `${navBackground}` }}
      >
        <nav className={styles.navigation_container}>
          <h1
            className={styles.navigation_container_logo}
            style={{ color: `${textColor}` }}
          >
            Sp<span>ee</span>dex
          </h1>
          <div className={styles.navigation_container_links}>
            <a style={{ color: `${textColor}` }} href="">
              Home
            </a>
            <a style={{ color: `${textColor}` }} href="">
              Services
            </a>
            <a style={{ color: `${textColor}` }} href="">
              Company
            </a>
            <a style={{ color: `${textColor}` }} href="">
              Contact
            </a>
            <a className={styles.links_button} href="">
              Get a Quote
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
