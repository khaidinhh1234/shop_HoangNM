import React from "react";

const Content = () => {
  return (
    <div>
      {" "}
      <div>
        <div className="container">
          <hr />
        </div>
        {/*End .news*/}
        <section className="shop">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-heading__title">Shop</h2>
            </div>
            <div className="section-body">
              <div className="shops">
                <div className="shop-item">
                  <a href="" className="shop__link">
                    <img
                      src="https://picsum.photos/id/12/665/500"
                      alt=""
                      className="shop__image"
                    />
                  </a>
                </div>
                <div className="shop-item">
                  <a href="" className="shop__link">
                    <img
                      src="https://picsum.photos/id/13/665/500"
                      alt=""
                      className="shop__image"
                    />
                  </a>
                </div>
                <div className="shop-item">
                  <a href="" className="shop__link">
                    <img
                      src="https://picsum.photos/id/14/665/500"
                      alt=""
                      className="shop__image"
                    />
                  </a>
                </div>
                <div className="shop-item">
                  <a href="" className="shop__link">
                    <img
                      src="https://picsum.photos/id/15/665/500"
                      alt=""
                      className="shop__image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End .shop*/}
        <section className="blog">
          <div className="container">
            <div className="section-heading section-blog-heading">
              <h2 className="section-heading__title">Blog</h2>
            </div>
            <div className="section-body">
              <div className="post-list">
                <div className="post-item">
                  <div className="post-image">
                    <a href="">
                      <img
                        src="https://picsum.photos/id/16/665/250"
                        alt=""
                        className="post__thumbnail"
                      />
                    </a>
                  </div>
                  <div className="post-info">
                    <h3 className="post__title">
                      <a href="" className="post__link">
                        THE ULTIMATE SOFA BUYING GUIDE
                      </a>
                    </h3>
                    <p className="post__excerpt">
                      The versatility of our living space is more crucial than
                      ever. But buying a sofa might be a difficult undertaking.
                      Your needs and the size of your living area will determine
                      everything, However, don’t worry, were are here to help
                      you
                    </p>
                    <a href="" className="post__readmore">
                      Readmore
                    </a>
                  </div>
                </div>
                {/*End .post-item*/}
                <div className="post-item">
                  <div className="post-image">
                    <a href="">
                      <img
                        src="https://picsum.photos/id/17/665/250"
                        alt=""
                        className="post__thumbnail"
                      />
                    </a>
                  </div>
                  <div className="post-info">
                    <h3 className="post__title">
                      <a href="" className="post__link">
                        THE ULTIMATE SOFA BUYING GUIDE
                      </a>
                    </h3>
                    <p className="post__excerpt">
                      The versatility of our living space is more crucial than
                      ever. But buying a sofa might be a difficult undertaking.
                      Your needs and the size of your living area will determine
                      everything, However, don’t worry, were are here to help
                      you
                    </p>
                    <a href="" className="post__readmore">
                      Readmore
                    </a>
                  </div>
                </div>
                {/*End .post-item*/}
              </div>
            </div>
          </div>
        </section>
        {/*End .blog*/}
        <section className="services">
          <div className="container-fluid">
            <div className="service-list">
              <div className="service-item">
                <img
                  src="./public/images/sevicse 1.svg"
                  className="service__image"
                />
                <div className="service-info">
                  <h4 className="service__name">High Quality</h4>
                  <p className="service__description">
                    crafted from top materials
                  </p>
                </div>
              </div>
              {/*End service-item*/}
              <div className="service-item">
                <img
                  src="./public/images/secvise 2.svg"
                  className="service__image"
                />
                <div className="service-info">
                  <h4 className="service__name">High Quality</h4>
                  <p className="service__description">
                    crafted from top materials
                  </p>
                </div>
              </div>
              {/*End service-item*/}
              <div className="service-item">
                <img
                  src="./public/images/secvise 3.svg"
                  className="service__image"
                />
                <div className="service-info">
                  <h4 className="service__name">High Quality</h4>
                  <p className="service__description">
                    crafted from top materials
                  </p>
                </div>
              </div>
              {/*End service-item*/}
              <div className="service-item">
                <img
                  src="./public/images/secvise 4.svg"
                  className="service__image"
                />
                <div className="service-info">
                  <h4 className="service__name">High Quality</h4>
                  <p className="service__description">
                    crafted from top materials
                  </p>
                </div>
              </div>
              {/*End service-item*/}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;
