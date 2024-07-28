import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import DashboardPage from "@/pages/(dashboard)/dashboard/page";
import LayoutAdmin from "@/pages/(dashboard)/layout";
import ProductsManagementPage from "@/pages/(dashboard)/products/page";
import ProductForm from "@/pages/(dashboard)/products/ProductForm";
import NotFoundPage from "@/pages/(website)/404/page";
import CheckOut from "@/pages/(website)/checkOut/CheckOut";
import HomePage from "@/pages/(website)/home/page";
import LayoutWebsite from "@/pages/(website)/layout";
import Signin from "@/pages/(website)/login/signin/signin";
import Signup from "@/pages/(website)/login/signup/signup";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const Router = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const nav = useNavigate();
  const fetchProduct = async () => {
    const { data } = await instance.get(`/v1/products`);
    setProducts(data);
    // console.log(data, "data");
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  // const handleRemove = async (id: string) => {
  //   if (confirm("Ban chac chua?")) {
  //     await instance.delete(`/products/${id}`);
  //     setProducts(products.filter((item) => item.id !== id));
  //   }
  // };
  const onsubmitProduct = async (data: IProduct) => {
    console.log(data);
    try {
      await instance.post("/v1/products", data);
      fetchProduct();
      nav("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="/checkOut" element={<CheckOut />} />
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<DashboardPage />} />
          <Route path="products" element={<ProductsManagementPage />} />
          <Route
            path="products/edit/:id"
            element={<ProductForm onsubmitProduct={onsubmitProduct} />}
          />
          <Route
            path="product/add"
            element={<ProductForm onsubmitProduct={onsubmitProduct} />}
          />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
