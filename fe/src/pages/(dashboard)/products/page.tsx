import { IProduct } from "@/common/types/product";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/services/product";
import axios from "axios";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await getAllProducts();
        if (response.status !== 200) {
          return setIsError(true);
        }
        setProducts(response.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  const remove = async (id: string) => {
    console.log(id);
    try {
      const response = await axios.delete(`/products/` + id);
      console.log(response);
      const data = response.data;
      if (data.success) {
        setProducts(products.filter((product) => product._id !== id));
      }
    } catch {
      console.log("Error");
    }
  };
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1>Quản lý sản phẩm</h1>
        <Button variant="violet">
          <Plus /> Thêm
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Giá</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item: IProduct, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => remove(item._id!)}>Remove</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
