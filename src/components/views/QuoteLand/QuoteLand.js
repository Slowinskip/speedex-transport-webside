import React from "react";
import ServicesBanner from "../../common/ServicesBanner/ServicesBanner";
import CostCalculation from "../../features/CostCalculation/CostCalculation";

const QuoteLand = () => {
  return (
    <>
      <ServicesBanner title="Land Freight" />
      <CostCalculation
        weightPrice={1.1}
        distancePrice={1.1}
        typeDomestic={10}
        typeForeign={20}
        title="Land"
      />
    </>
  );
};

export default QuoteLand;
