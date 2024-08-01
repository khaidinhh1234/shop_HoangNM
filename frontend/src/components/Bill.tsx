const Bill = () => {
  return (
    <>
      {" "}
      <div className="container-fluid">
        <section className="bill">
          {" "}
          <form action="" method="post">
            <div className="container">
              <div className="bill-info">
                <div className="bill-details">
                  <div className="bill-title">
                    <h1 className="bill-title-h1">Chi tiết thanh toán</h1>
                  </div>
                  <div className="bill-name">
                    <div className="bill-firstname">
                      <label htmlFor="firtname" className="bill-namelable">
                        Tên của bạn
                      </label>
                      <br />
                      <input
                        type="text"
                        className="bill-nameinput"
                        placeholder="Tên của bạn "
                        // value={users.name}
                      />
                    </div>
                    <div className="bill-lastname">
                      <label htmlFor="lastname" className="bill-namelable">
                        Họ của bạn
                      </label>
                      <br />

                      <input
                        type="text"
                        className="bill-nameinput"
                        placeholder="Họ của bạn "
                      />
                    </div>
                  </div>

                  <div className="bill-form">
                    <label htmlFor="comparyname" className="bill-formlable">
                      Địa chỉ đường phố
                    </label>
                    <br />
                    <input
                      type="text"
                      className="bill-forminput"
                      placeholder="Địa chỉ của bạn "
                    />
                  </div>
                  <div className="bill-form">
                    <label htmlFor="comparyname" className="bill-formlable">
                      Thị trấn / Thành phố
                    </label>
                    <br />
                    <input
                      type="text"
                      className="bill-forminput"
                      placeholder="Thành Phố "
                    />
                  </div>

                  <div className="bill-form">
                    <label htmlFor="comparyname" className="bill-formlable">
                      Số điện thoại
                    </label>
                    <br />
                    <input
                      type="tel"
                      className="bill-forminput"
                      placeholder="số điện thoại  "
                    />
                  </div>

                  <div className="bill-additional">
                    <input
                      type="text"
                      className="bill-forminput"
                      placeholder="Additional information"
                    />
                  </div>
                </div>
                <div className="bill-checkout">
                  {" "}
                  <div className=" border-1 border-orange-400 w-75 rounded-md ">
                    <div className="flex p-2 border-2 ">
                      <div className="p-2">
                        <img src="" alt="" width={100} />
                      </div>
                      <div className="p-4">
                        {" "}
                        <h4>name</h4>
                        <span>2000 đ</span>
                      </div>
                    </div>

                    <div className="p-2">
                      <span>Sản phẩm : {length}</span>
                      <br />
                      <span>Thuế VAT (tạm tính) : 100.000 đ </span>
                      <h5> Tổng tiền: 123489D</h5>
                    </div>
                  </div>
                  <div className="bill-total">
                    <div className="bill-total-name pt-2">
                      <span className="bill-name_products">Product</span>{" "}
                      <p>
                        <span className="bill-name_asgaard">name</span> x 3
                      </p>
                      <span className="bill-name_total">Subtotal</span>
                      <span className="bill-name_total">Total</span>
                    </div>

                    <div className="bill-price">
                      <span className="bill-name_products">Subtotal</span>

                      <span className="bill-price_item">123984 đ</span>

                      <span className="bill-price_item"> 234 đ</span>
                      <span className="bill-price_total">3564 đ</span>
                    </div>
                  </div>
                  <hr />
                  <div className="bill-bank">
                    <div className="bill-bank-radio">
                      <span className="bill-bank-black">
                        <img src="./public/images/checkout/cham.svg" alt="" />
                      </span>
                      <span className="bill-bank_name">Chuyển khoản</span>
                    </div>
                    <p className="bill-bank_des1">
                      Thanh toán trực tiếp vào tài khoản ngân hàng của chúng
                      tôi. Vui lòng sử dụng Mã đơn hàng của bạn làm tham chiếu
                      thanh toán. Đơn hàng của bạn sẽ không được giao cho đến
                      khi tiền được chuyển vào tài khoản của chúng tôi.
                    </p>
                    <div className="bill-bank-radio">
                      <input
                        type="radio"
                        name="abc"
                        className="bill-bank_input"
                      />
                      <span className="bill-bank_name">
                        Chuyển khoản trực tiếp
                      </span>
                    </div>
                    <div className="bill-bank-radio">
                      <input
                        type="radio"
                        name="abc"
                        className="bill-bank_input"
                      />
                      <span className="bill-bank_name">
                        Thanh toán khi giao hàng
                      </span>
                    </div>
                    <p className="bill-bank_des2">
                      Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải
                      nghiệm của bạn trên toàn bộ trang web này, để quản lý
                      quyền truy cập vào tài khoản của bạn và cho các mục đích
                      khác được mô tả trong chính sách bảo mật của chúng tôi.
                    </p>
                  </div>
                  <div className="bill-btn">
                    <button type="submit" className="bill-button">
                      Đặt hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </form>
        </section>
      </div>
    </>
  );
};

export default Bill;
