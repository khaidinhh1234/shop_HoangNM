import { useCartMutate } from "@/common/hook/useCart";
import useUserQuery from "@/common/hook/userQuery";
import { useLocalStorage } from "@/common/hook/useStoratge";
import { New, Services } from "@/components";
import Category from "@/components/categoryDetailt";
import LimitWeb from "@/components/limit";
import Banner2 from "@/pages/(website)/home/_component/Banner2";

const ShopPage = () => {
  const [user] = useLocalStorage("user", {});
  const userId = user?._id;
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useUserQuery({
    action: "products",
  });
  const { mutate } = useCartMutate();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error?.message}</div>;
  }
  return (
    <div>
      <Banner2 />

      <Category></Category>

      <Services />
    </div>
  );
};

export default ShopPage;
