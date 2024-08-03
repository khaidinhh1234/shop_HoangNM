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
      const orders = {
        orderId: order.data._id,
        amounts: order.data.totalPrice,
      };
      // toast.success("Đơn hàng đã được tạo");
      const response = await instance.post("/v1/payment", orders);
      {
        response.data.payUrl
          ? (window.location.href = response.data.payUrl)
          : toast.error("Thanh toán thất bại");
      }
      // toast.success("Đơn hàng đã được tạo");
      // const check = await instance.post("/v1/callblack", {
      //   orderId: response.data.orderId,
      // });
      // console.log(check);

      // console.log(api);
      // toast.success("Vui lòng kiểm tra email để xác nhận đơn hàng");
    },
  });
};
