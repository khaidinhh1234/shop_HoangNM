const Cart = () => {
  return (
    <div>
      <section className="cart">
        <div className="container">
          <div className="cart-info">
            <div className="cart-table">
              <div className="cart-table-title">
                <span className="cart-table-title__name">Product</span>
                <span className="cart-table-title__price">Price</span>
                <span className="cart-table-title__name">Quantity</span>
                <span className="cart-table-title__name">Subtotal</span>
              </div>

              <div className="cart-table-body">
                <div className="cart-table_img">
                  <img
                    src="https://picsum.photos/id/204/1440/500"
                    alt=""
                    className="cart-table_image"
                  />
                </div>{" "}
                <span className="cart-table_itemA">Asgaard sofa</span>
                <span className="cart-table_itemB">25.000.000đ</span>
                <button className=" bg-slate-500 w-5 me-2">-</button>{" "}
                <span className="cart-table_itemC">1</span>
                <button className="bg-orange-600 w-5 ms-2">+</button>
                <span className="cart-table_itemD">25.000.000đ</span>
                <span className="cart-table_itemE">
                  <a href="#">
                    <img src="./public/images/cart/delete.svg" alt="" />
                  </a>
                </span>
              </div>
            </div>
            <div className="cart-totals">
              <div className="cart-totals-title">Cart Totals</div>
              <div className="cart-totals-info">
                <div className="cart-totals_item">
                  <span className="cart-totals_name">Subtotal</span>
                  <span className="cart-totals_name">Total</span>
                </div>
                <div className="cart-totals_item">
                  <span className="cart-totals_priceA">25.000.000đ</span>
                  <span className="cart-totals_priceB">25.000.000đ</span>
                </div>
              </div>
              <div className="cart-totals">
                <button className="cart-totals_btn">
                  <a href="/order" className="cart-totals_link">
                    Check Out
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
