import instance from "@/configs/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

type Order = {
  userId: any;
  customerName: string;
  totalPrice: number;
  items: Array<{ productId: string; quantity: number }>;
};

export const useOrder = () => {
  return useMutation({
    mutationFn: async (data: Order) => {
      const order = await instance.post("/v1/orders", {
        userId: data.userId,
        items: data.items,
        customerName: data.customerName,
        totalPrice: data.totalPrice,
      });
      toast.success("Order successfully");
      console.log(order.data);
      return order.data;
    },
  });
};
