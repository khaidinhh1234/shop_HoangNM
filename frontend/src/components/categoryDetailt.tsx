import { useState } from "react";
import useUserQuery from "@/common/hook/userQuery";
import { ICategory } from "@/common/types/category";
import { IProduct } from "@/common/types/product";
import { Select } from "antd";

const { Option } = Select;

const CategoryDetail = () => {
  const { data: categories, isLoading: isCategoryLoading } = useUserQuery({
    action: "category",
  });
  const { data: products, isLoading: isProductLoading } = useUserQuery({
    action: "products",
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  if (isCategoryLoading || isProductLoading) {
    return <div>Loading...</div>;
  }

  const handleChange = (value: string) => {
    setSelectedCategory(value);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products?.filter(
          (product: IProduct) =>
            product.category && product.category._id === selectedCategory
        );

  return (
    <div>
      <section className="shop">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">Danh mục sản phẩm</h2>
          </div>
          <Select
            value={selectedCategory}
            style={{ width: 200 }}
            onChange={handleChange}
          >
            <Option value="all">Tất cả</Option>
            {categories?.map((category: ICategory) => (
              <Option key={category._id} value={category._id}>
                {category.name}
              </Option>
            ))}
          </Select>
          <div className="container">
            <div className="section-body">
              <div className="products-list">
                {filteredProducts?.length > 0 ? (
                  filteredProducts.map((product: IProduct) => (
                    <div className="products-item" key={product._id}>
                      <div className="products-image">
                        <img
                          src={product.feature_image}
                          alt="#"
                          className="products__thumbnail"
                        />
                        <span className="products-sale">New</span>
                      </div>
                      <div className="products-info">
                        <h3 className="products__name">
                          <a href="#" className="products__link  ">
                            {product.name}
                          </a>
                        </h3>
                        <a href="#" className="products__category">
                          {product.description}
                        </a>
                        <div className="products-price">
                          <span className="products-price__new">
                            {product.regular_price}
                          </span>
                          <del className="products-price__old">
                            {product.discount}
                          </del>
                          <a href="#" className="products__category">
                            {product.category?.name}
                          </a>
                        </div>
                      </div>
                      <div className="products-actions">
                        <button className="btn products-action__quickview">
                          <a
                            href={`/detail/${product._id}`}
                            className="products-action__link"
                          >
                            Quick View
                          </a>
                        </button>
                        <button className="btn products-action__addtocart">
                          <p className="products-action__link">Add to Cart</p>
                        </button>
                        <div className="products-actions-more">
                          <span className="products-action__share">Share</span>
                          <span className="products-action__compare">
                            Compare
                          </span>
                          <span className="products-action__like">Like</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Không có sản phẩm nào trong danh mục này.</p>
                )}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetail;
