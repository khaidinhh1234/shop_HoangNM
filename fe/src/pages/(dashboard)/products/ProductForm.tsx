import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { IProduct } from "../../../common/types/product";
import instance from "../../../configs/axios";

type Props = { onsubmitProduct: (data: IProduct) => void };
const productSchema = z.object({
  name: z.string().min(6, "Title must be at least 6 characters"),
  regular_price: z.string().min(0, "Price must be a positive number"),
  feature_image: z.string().nonempty("Feature image is required"),
  description: z.string().optional(),
});

const ProductForm = ({ onsubmitProduct }: Props) => {
  const { id } = useParams();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<IProduct>({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          console.log(id);
          const { data } = await instance.get(`/v1/products/${id}`);
          reset(data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      })();
    }
  }, [id, reset]);
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmitProduct)}>
        <h1>{id ? "Update product" : "Add new product"}</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-control" {...register("name")} />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="regular_price" className="form-label">
            regular_price
          </label>
          <input
            type="text"
            className="form-control"
            {...register("regular_price")}
          />
          {errors.regular_price && (
            <p className="text-danger">{errors.regular_price.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="feature_image" className="form-label">
            feature_image
          </label>
          <input
            type="text"
            className="form-control"
            {...register("feature_image")}
          />
          {errors.feature_image && (
            <p className="text-danger">{errors.feature_image.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <button className="btn btn-primary">{id ? "Update" : "Add"}</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
