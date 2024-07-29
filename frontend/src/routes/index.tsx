import LayoutWebsite from "@/pages/(auth)/layout";
import Signin from "@/pages/(auth)/signin";
import Signup from "@/pages/(auth)/signup";
import LayoutNhShop from "@/pages/(dashboard)/Layout";
import LayoutAdmin from "@/pages/(dashboard)/admin/Layoutadmin";
import CategoryDetail from "@/pages/(dashboard)/user/home/_component/categoryDetail";
import DetailPage from "@/pages/(dashboard)/user/home/_component/detail";
import LayoutHome from "@/pages/(dashboard)/user/home/layout";
import PageHome from "@/pages/(dashboard)/user/home/page";
import NotFound from "@/pages/(website)/404/page";
import ShopPage from "@/pages/(website)/Shop/shop";
import AboutPage from "@/pages/(website)/about/about";
import CartPage from "@/pages/(website)/cart/page";
import ContectPage from "@/pages/(website)/contect/contect";
import { Route, Routes } from "react-router-dom";

import ThankyouPage from "@/pages/(dashboard)/user/home/_component/thankyou";
import OrderPage from "@/pages/(website)/order/order";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutNhShop />}>
          <Route path="/" element={<LayoutWebsite />}>
            <Route path="/" element={<LayoutHome />}>
              <Route index element={<PageHome />}></Route>
              <Route path="shop" element={<ShopPage />}></Route>
              <Route path="detail" element={<DetailPage />}></Route>
              <Route path="category" element={<CategoryDetail />}></Route>
              <Route path="about" element={<AboutPage />}></Route>
              <Route path="contact" element={<ContectPage />}></Route>
              <Route path="cart" element={<CartPage />}></Route>{" "}
              <Route path="signin" element={<Signin />}></Route>
              <Route path="signup" element={<Signup />}></Route>
              <Route path="order" element={<OrderPage />}></Route>
              <Route path="thankyou" element={<ThankyouPage />}></Route>{" "}
            </Route>
          </Route>
          <Route
            path="admin"
            element={
              // <PrivateRoute>
              <LayoutAdmin />
              // </PrivateRoute>
            }
          >
            {/* <Route path="products" element={<LayoutProduct />}>
              {/* <Route index element={<PageAdmin />}></Route>
              <Route path="add" element={<ProductsAdd />}></Route>

              <Route path=":id/edit" element={<ProductsEdit />}></Route> */}
            {/* </Route> */}
          </Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default Router;
