import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navBackground, setnavBackground] = useState("");
  const [textColor, setTextColor] = useState("white");
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileMenu, setmobileMenu] = useState("0%");
  const [mobileMenuOpacity, setmobileMenuOpacity] = useState(0);

  const showMenu = function () {
    if (mobileMenu === "0%") {
      setmobileMenu("50%");
      setmobileMenuOpacity(1);
    } else {
      setmobileMenu("0%");
      setmobileMenuOpacity(0);
    }
  };

  window.addEventListener("resize", (e) => {
    setWidth(window.innerWidth);
  });

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 10) {
      setnavBackground("white");
      setTextColor("black");
    } else {
      setnavBackground("");
      setTextColor("white");
    }
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
          {width > 800 ? (
            <div className={styles.navigation_container_links}>
              <a style={{ color: `${textColor}` }} href="/">
                Home
              </a>
              <a style={{ color: `${textColor}` }} href="/services">
                Services
              </a>
              <a style={{ color: `${textColor}` }} href="/company">
                Company
              </a>
              <a style={{ color: `${textColor}` }} href="/contact">
                Contact
              </a>
              <a className={styles.links_button} href="/quote">
                Get a Quote
              </a>
            </div>
          ) : (
            <button
              onClick={() => showMenu()}
              className={styles.mobileMenuBtn}
              style={{ color: `${textColor}` }}
            >
              {mobileMenu !== "0%" ? <AiOutlineClose /> : <FiMenu />}
            </button>
          )}{" "}
        </nav>
      </div>
      <div
        className={styles.mobileMenu}
        style={{ width: `${mobileMenu}`, opacity: `${mobileMenuOpacity}` }}
      >
        <h1 className={styles.navigation_container_logo}>
          Sp<span>ee</span>dex
        </h1>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/company">Company</a>
        <a href="/contact">Contact</a>
        <a className={styles.links_button} href="/quote">
          Get a Quote
        </a>
      </div>
    </>
  );
};

export default Navbar;
