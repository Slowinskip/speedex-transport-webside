import React from "react";
import styles from "./QuoteChoising.modules.scss";
import ServicesBanner from "../../common/ServicesBanner/ServicesBanner";
import Service from "../Service/Service";
export const QuoteChoising = () => {
  return (
    <>
      <ServicesBanner title="Get a Quote" />
      <Service title="Choose a method of transport" />
    </>
  );
};
