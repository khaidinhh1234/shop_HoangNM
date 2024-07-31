import { IProduct } from "@/common/types/product";
import instance from "@/config/axios";
import { useState, useEffect } from "react";

const New = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetchProduct = async () => {
    const { data } = await instance.get(`/v1/products`);
    setProducts(data);
    console.log(data, "data");
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <section className="news">
        <div className="container">
          <div className="section-body">
            <div className="products-list">
              {products.map((product) => (
                <div className="products-item" key={product._id}>
                  <div className="products-image">
                    <img
                      src={product.feature_image}
                      alt="#"
                      className="products__thumbnail"
                    />
                    <span className="products-sale">-30%</span>
                  </div>
                  <div className="products-info">
                    <h3 className="products__name">
                      <a href="#" className="products__link">
                        {product.name}
                      </a>
                    </h3>
                    <a href="#" className="products__category ">
                      {product.description}
                    </a>
                    <div className="products-price">
                      <span className="products-price__new">
                        {product.regular_price}đ
                      </span>
                      <del className="products-price__old"></del>
                    </div>
                  </div>
                  <div className="products-actions">
                    <button className="btn products-action__quickview">
                      <a href={`/detail`} className="products-action__link">
                        Quick View
                      </a>
                    </button>
                    <button className="btn products-action__addtocart">
                      <a href="" className="products-action__link">
                        Add to Cart
                      </a>
                    </button>
                    <div className="products-actions-more">
                      <span className="products-action__share">Share</span>
                      <span className="products-action__compare">Compare</span>
                      <span className="products-action__like">Like</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="products-item">
                <div className="products-image">
                  <img
                    src="https://picsum.photos/id/133/300/300"
                    alt="#"
                    className="products__thumbnail"
                  />
                  <span className="products-sale">New</span>
                </div>
                <div className="products-info">
                  <h3 className="products__name">
                    <a href="#" className="products__link">
                      Leviosa
                    </a>
                  </h3>
                  <a href="#" className="products__category">
                    Stylish cafe chair
                  </a>
                  <div className="products-price">
                    <span className="products-price__new">2.500.000đ</span>
                    <del className="products-price__old"></del>
                  </div>
                </div>
                <div className="products-actions">
                  <button className="btn products-action__quickview">
                    <a href={`/detail`} className="products-action__link">
                      Quick View
                    </a>
                  </button>
                  <button className="btn products-action__addtocart">
                    <a href="" className="products-action__link">
                      Add to Cart
                    </a>
                  </button>
                  <div className="products-actions-more">
                    <span className="products-action__share">Share</span>
                    <span className="products-action__compare">Compare</span>
                    <span className="products-action__like">Like</span>
                  </div>
                </div>
              </div>{" "}
              <div className="products-item">
                <div className="products-image">
                  <img
                    src="https://picsum.photos/id/133/300/300"
                    alt="#"
                    className="products__thumbnail"
                  />
                  <span className="products-sale">New</span>
                </div>
                <div className="products-info">
                  <h3 className="products__name">
                    <a href="#" className="products__link">
                      Leviosa
                    </a>
                  </h3>
                  <a href="#" className="products__category">
                    Stylish cafe chair
                  </a>
                  <div className="products-price">
                    <span className="products-price__new">2.500.000đ</span>
                    <del className="products-price__old"></del>
                  </div>
                </div>
                <div className="products-actions">
                  <button className="btn products-action__quickview">
                    <a href={`/detail`} className="products-action__link">
                      Quick View
                    </a>
                  </button>
                  <button className="btn products-action__addtocart">
                    <a href="" className="products-action__link">
                      Add to Cart
                    </a>
                  </button>
                  <div className="products-actions-more">
                    <span className="products-action__share">Share</span>
                    <span className="products-action__compare">Compare</span>
                    <span className="products-action__like">Like</span>
                  </div>
                </div>
              </div>{" "}
              <div className="products-item">
                <div className="products-image">
                  <img
                    src="https://picsum.photos/id/133/300/300"
                    alt="#"
                    className="products__thumbnail"
                  />
                  <span className="products-sale">New</span>
                </div>
                <div className="products-info">
                  <h3 className="products__name">
                    <a href="#" className="products__link">
                      Leviosa
                    </a>
                  </h3>
                  <a href="#" className="products__category">
                    Stylish cafe chair
                  </a>
                  <div className="products-price">
                    <span className="products-price__new">2.500.000đ</span>
                    <del className="products-price__old"></del>
                  </div>
                </div>
                <div className="products-actions">
                  <button className="btn products-action__quickview">
                    <a href={`/detail`} className="products-action__link">
                      Quick View
                    </a>
                  </button>
                  <button className="btn products-action__addtocart">
                    <a href="" className="products-action__link">
                      Add to Cart
                    </a>
                  </button>
                  <div className="products-actions-more">
                    <span className="products-action__share">Share</span>
                    <span className="products-action__compare">Compare</span>
                    <span className="products-action__like">Like</span>
                  </div>
                </div>
              </div>{" "}
              <div className="products-item">
                <div className="products-image">
                  <img
                    src="https://picsum.photos/id/133/300/300"
                    alt="#"
                    className="products__thumbnail"
                  />
                  <span className="products-sale">New</span>
                </div>
                <div className="products-info">
                  <h3 className="products__name">
                    <a href="#" className="products__link">
                      Leviosa
                    </a>
                  </h3>
                  <a href="#" className="products__category">
                    Stylish cafe chair
                  </a>
                  <div className="products-price">
                    <span className="products-price__new">2.500.000đ</span>
                    <del className="products-price__old"></del>
                  </div>
                </div>
                <div className="products-actions">
                  <button className="btn products-action__quickview">
                    <a href={`/detail`} className="products-action__link">
                      Quick View
                    </a>
                  </button>
                  <button className="btn products-action__addtocart">
                    <a href="" className="products-action__link">
                      Add to Cart
                    </a>
                  </button>
                  <div className="products-actions-more">
                    <span className="products-action__share">Share</span>
                    <span className="products-action__compare">Compare</span>
                    <span className="products-action__like">Like</span>
                  </div>
                </div>
              </div>{" "}
              <div className="products-item">
                <div className="products-image">
                  <img
                    src="https://picsum.photos/id/133/300/300"
                    alt="#"
                    className="products__thumbnail"
                  />
                  <span className="products-sale">New</span>
                </div>
                <div className="products-info">
                  <h3 className="products__name">
                    <a href="#" className="products__link">
                      Leviosa
                    </a>
                  </h3>
                  <a href="#" className="products__category">
                    Stylish cafe chair
                  </a>
                  <div className="products-price">
                    <span className="products-price__new">2.500.000đ</span>
                    <del className="products-price__old"></del>
                  </div>
                </div>
                <div className="products-actions">
                  <button className="btn products-action__quickview">
                    <a href={`/detail`} className="products-action__link">
                      Quick View
                    </a>
                  </button>
                  <button className="btn products-action__addtocart">
                    <a href="" className="products-action__link">
                      Add to Cart
                    </a>
                  </button>
                  <div className="products-actions-more">
                    <span className="products-action__share">Share</span>
                    <span className="products-action__compare">Compare</span>
                    <span className="products-action__like">Like</span>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
            </div>{" "}
          </div>{" "}
        </div>
      </section>
      {/*End .news*/}
    </>
  );
};

export default New;
