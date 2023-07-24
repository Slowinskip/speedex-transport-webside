import React from "react";
import styles from "./Banner.module.scss";
const Banner = () => {
  return (
    <>
      <div className={styles.banner_background}></div>
      <div className={styles.baner_content}>
        <img src="./images/logo_white.png" alt="img"></img>
        <h1>Taking Logistics to Another Level</h1>
        <p>
          A new player in the transport industry. Trust Speedex and entrust us
          with your shipment
        </p>
        <div className={styles.content_btn}>
          <button className={styles.btn1}>What Sets us Appart?</button>
          <button className={styles.btn2}>List of Out Services</button>
        </div>
      </div>
    </>
  );
};

export default Banner;
