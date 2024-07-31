import DashboardPage from "@/pages/(dashboard)/dashboard/page";
import LayoutAdmin from "@/pages/(dashboard)/layout";
import ProductsManagementPage from "@/pages/(dashboard)/products/page";
import UserForm from "@/pages/(dashboard)/users/UserForm";
import Users from "@/pages/(dashboard)/users/Users";
import NotFoundPage from "@/pages/(website)/404/page";
import CheckOut from "@/pages/(website)/checkOut/CheckOut";
import HomePage from "@/pages/(website)/home/page";
import LayoutWebsite from "@/pages/(website)/layout";
import ForgotPassword from "@/pages/(website)/login/forgotPassword/forgotPassword";
import Signin from "@/pages/(website)/login/signin/signin";
import Signup from "@/pages/(website)/login/signup/signup";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="/checkOut" element={<CheckOut />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<DashboardPage />} />
          <Route path="/admin/products" element={<ProductsManagementPage />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/users/usersEdit/:id" element={<UserForm />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
