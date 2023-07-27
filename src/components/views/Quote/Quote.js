import React from "react";
import styles from "./Quote.module.scss";
import ServicesBanner from "../../common/ServicesBanner/ServicesBanner";
import Service from "../Service/Service";
export const Quote = () => {
  return (
    <>
      <ServicesBanner title="Get a Quote" />
      <Service title="Choose a method of transport" />
    </>
  );
};
