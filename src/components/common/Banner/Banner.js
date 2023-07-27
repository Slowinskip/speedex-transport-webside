import React from "react";
import styles from "./Banner.module.scss";
const Banner = ({ btn2, btn1, title, description }) => {
  return (
    <>
      <div className={styles.banner_background}></div>
      <div className={styles.baner_content}>
        <img src="./images/logo_white.png" alt="img"></img>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.content_btn}>
          {btn1}
          {btn2}
        </div>
      </div>
    </>
  );
};

export default Banner;
