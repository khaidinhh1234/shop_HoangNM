import React from "react";
import Banner from "./components/Banner";
import Bill from "./components/Bill";
import Services from "./components/Services";

type Props = {};

const CheckOut = (props: Props) => {
  return (
    <div>
      <Banner />
      <Bill />
      <Services />
    </div>
  );
};

export default CheckOut;
