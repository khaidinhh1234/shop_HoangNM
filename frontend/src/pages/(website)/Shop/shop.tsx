import { New, Services } from "@/components";
import Category from "@/components/categoryDetailt";
import LimitWeb from "@/components/limit";
import Banner2 from "@/pages/(website)/home/_component/Banner2";

const ShopPage = () => {
  return (
    <div>
      <Banner2 />
      <LimitWeb />

      <Category></Category>
      <Services />
    </div>
  );
};

export default ShopPage;
