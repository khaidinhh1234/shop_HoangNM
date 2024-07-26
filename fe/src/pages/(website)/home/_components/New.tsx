import React from "react";

const New = () => {
  return (
    <div>
      {" "}
      <section className="news">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">New</h2>
          </div>
          <div className="section-body">
            <div className="product-list">
              <div className="product-item">
                <div className="product-image">
                  <img
                    src="https://picsum.photos/id/101/300/300"
                    alt=""
                    className="product__thumbnail"
                  />
                  <span className="product-sale">-30%</span>
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <a href="" className="product__link">
                      Syltherine
                    </a>
                  </h3>
                  <a href="" className="product__category">
                    Stylish cafe chair
                  </a>
                  <div className="product-price">
                    <span className="product-price__new">2.500.000đ</span>
                    <del className="product-price__old">3.500.000đ</del>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="btn product-action__quickview border-black  border hover:bg-black  text-white/70 bg-black/50">
                    <a href="detail.html" className="product-action__link  ">
                      Quick View
                    </a>
                  </button>
                  <button className="btn product-action__addtocart border-black  border hover:bg-black  text-white/70  bg-black/50">
                    <a href="cart.html" className="product-action__link">
                      Add to Cart
                    </a>
                  </button>
                  <div className="product-actions-more *:mx-3">
                    <span className="product-action__share">Share</span>
                    <span className="product-action__compare">Compare</span>
                    <span className="product-action__like">Like</span>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
              <div className="product-item">
                <div className="product-image">
                  <img
                    src="https://picsum.photos/id/133/300/300"
                    alt=""
                    className="product__thumbnail"
                  />
                  <span className="product-new">New</span>
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <a href="" className="product__link">
                      Leviosa
                    </a>
                  </h3>
                  <a href="" className="product__category">
                    Stylish cafe chair
                  </a>
                  <div className="product-price">
                    <span className="product-price__new">2.500.000đ</span>
                    <del className="product-price__old" />
                  </div>
                </div>
                <div className="product-actions">
                  <button className="btn product-action__quickview border-black  border hover:bg-black  text-white/70 bg-black/50">
                    <a href="detail.html" className="product-action__link">
                      Quick View
                    </a>
                  </button>
                  <button className="btn product-action__addtocart border-black  border hover:bg-black  text-white/70  bg-black/50">
                    <a href="cart.html" className="product-action__link">
                      Add to Cart
                    </a>
                  </button>
                  <div className="product-actions-more  *:mx-3">
                    <span className="product-action__share">Share</span>
                    <span className="product-action__compare">Compare</span>
                    <span className="product-action__like">Like</span>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
              <div className="product-item">
                <div className="product-image">
                  <img
                    src="https://picsum.photos/id/123/300/300"
                    alt=""
                    className="product__thumbnail"
                  />
                  <span className="product-sale">-50%</span>
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <a href="" className="product__link">
                      Lolito
                    </a>
                  </h3>
                  <a href="" className="product__category">
                    Luxury big sofa
                  </a>
                  <div className="product-price">
                    <span className="product-price__new">7.000.000đ</span>
                    <del className="product-price__old">14.000.000đ</del>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="btn product-action__quickview border-black  border hover:bg-black  text-white/70 bg-black/50">
                    <a href="detail.html" className="product-action__link">
                      Quick View
                    </a>
                  </button>
                  <button className="btn product-action__addtocart border-black  border hover:bg-black  text-white/70  bg-black/50">
                    <a href="cart.html" className="product-action__link">
                      Add to Cart
                    </a>
                  </button>
                  <div className="product-actions-more  *:mx-3">
                    <span className="product-action__share">Share</span>
                    <span className="product-action__compare">Compare</span>
                    <span className="product-action__like">Like</span>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
              <div className="product-item">
                <div className="product-image">
                  <img
                    src="https://picsum.photos/id/312/300/300"
                    alt=""
                    className="product__thumbnail"
                  />
                  <span className="product-new">New</span>
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <a href="" className="product__link">
                      Respira
                    </a>
                  </h3>
                  <a href="" className="product__category">
                    Outdoor bar table and stool
                  </a>
                  <div className="product-price">
                    <span className="product-price__new">5.000.000</span>
                    <del className="product-price__old" />
                  </div>
                </div>
                <div className="product-actions">
                  <button className="btn product-action__quickview border-black  border hover:bg-black  text-white/70 bg-black/50">
                    <a href="detail.html" className="product-action__link">
                      Quick View
                    </a>
                  </button>
                  <button className="btn product-action__addtocart border-black  border hover:bg-black  text-white/70  bg-black/50">
                    <a href="cart.html" className="product-action__link">
                      Add to Cart
                    </a>
                  </button>
                  <div className="product-actions-more *:mx-3">
                    <span className="product-action__share">Share</span>
                    <span className="product-action__compare">Compare</span>
                    <span className="product-action__like">Like</span>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default New;
