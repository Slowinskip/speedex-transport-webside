import React from "react";
import styles from "./ServicesBanner.module.scss";
const ServicesBanner = ({ title }) => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.imgContainer}>
        {" "}
        <img className="col-3 " src="./images/plane_Services.jpeg"></img>
        <img className={"col-3 "} src="./images/ship_Services.jpeg"></img>
        <img className="col-3 " src="./images/truck_Services.jpeg"></img>
      </div>{" "}
      <div className={styles.banerServicesContent}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default ServicesBanner;
