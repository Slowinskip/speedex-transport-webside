import React from "react";
import styles from "./QuoteAir.module.scss";
import ServicesBanner from "../../common/ServicesBanner/ServicesBanner";
import CostCalculation from "../../features/CostCalculation/CostCalculation";
const QuoteAir = () => {
  return (
    <>
      <ServicesBanner title="Air Freight" />
      <CostCalculation
        weightPrice={1.4}
        distancePrice={1.4}
        typeDomestic={20}
        typeForeign={40}
        title="Air"
      />
    </>
  );
};

export default QuoteAir;
