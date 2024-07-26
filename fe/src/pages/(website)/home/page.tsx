import React from "react";
import Banner from "./_components/Banner";
import New from "./_components/New";
import Content from "./_components/Content";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="">
      <Banner />
      <New />
      <Content></Content>
    </div>
  );
};

export default HomePage;
