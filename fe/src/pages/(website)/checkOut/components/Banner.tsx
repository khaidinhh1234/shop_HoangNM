import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div>
      <section className="banner">
        <img
          src="https://picsum.photos/id/203/1440/500"
          alt=""
          className="banner__img"
        />
      </section>
    </div>
  );
};

export default Banner;
