import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="">
      {" "}
      <section className="banner">
        <img
          src="../src/assets/images/banner.jpg"
          alt=""
          className="banner__img"
        />
      </section>
    </div>
  );
};

export default Banner;
