import RouterAuth from "./auth";
import CartRoute from "./cart";
import CategoryRouter from "./category";
import ProductRoute from "./product";
import searchProduct from "./search";

export function Router(app) {
  app.use("/api/v1/products", ProductRoute);
  app.use("/api/v1/category", CategoryRouter);
  app.use("/api/v1/auth", RouterAuth);
  app.use("/api/v1/carts", CartRoute);
  app.use("/api/v1/search", searchProduct);
}
