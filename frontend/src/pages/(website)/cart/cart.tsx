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

              <div className="cart-table-body w-[900px]">
                <div className=" w-24 h-24 ">
                  <img
                    src="https://picsum.photos/id/237/300/300"
                    alt=""
                    className="h-full w-full rounded-lg"
                  />
                </div>{" "}
                <span className="">Asgaard sofa</span>
                <span className="">25.000.000đ</span>{" "}
                <div className="lg:mt-0 mb:mt-[12.5px] flex items-center *:grid *:place-items-center *:lg:w-9 *:lg:h-9 *:mb:w-8 *:mb:h-8 ml-5">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-minus text-xs"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div className="bg-[#F4F4F4] text-xs rounded">1</div>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-plus text-xs"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </button>{" "}
                </div>
                <div className="flex">
                  <span className="">25.000.000đ</span>
                  <a href="#" className="ml-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-7 h-7"
                    >
                      <path
                        fill="#812709"
                        d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                      />
                    </svg>
                  </a>
                </div>
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
