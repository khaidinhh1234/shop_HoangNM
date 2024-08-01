import { Link } from "react-router-dom";

const categoryDetailt = () => {
  return (
    <div>
      <section className="shop">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title"> Danh mục sản phẩm</h2>
          </div>

          <option selected>Tất cả</option>

          <div>
            <Link to={`/category`}>
              <h3>abx</h3>
            </Link>
          </div>

          {/* </select> */}
        </div>
      </section>
    </div>
  );
};

export default categoryDetailt;
