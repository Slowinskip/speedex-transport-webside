import React from "react";
import styles from "./QuoteOcean.module.scss";
import ServicesBanner from "../../common/ServicesBanner/ServicesBanner";
import CostCalculation from "../../features/CostCalculation/CostCalculation";
const QuoteOcean = () => {
  return (
    <>
      <ServicesBanner title="Ocean Freight" />
      <CostCalculation
        weightPrice={1.3}
        distancePrice={1.3}
        typeDomestic={40}
        typeForeign={60}
        title="Air"
      />
    </>
  );
};

export default QuoteOcean;
