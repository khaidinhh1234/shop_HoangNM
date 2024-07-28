import { IProduct } from "@/common/types/product";
import { Button } from "@/components/ui/button";
import instance from "@/configs/axios";
import { getAllProducts } from "@/services/product";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      const response = await instance.delete(`/v1/products/` + id);
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

        <Link to={"/admin/product/add"}>Add</Link>
      </div>
      <table className="table ">
        <thead>
          <tr>
            <th>#</th>
            <th>anh</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item: IProduct, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.feature_image}
                    alt={item.name}
                    className=" w-20 h-20"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.regular_price}</td>
                <td>{item.description}</td>
                <td>
                  <Link to={"/admin/products/edit/" + item._id}>Edit</Link>
                  <button onClick={() => remove(String(item._id))}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
