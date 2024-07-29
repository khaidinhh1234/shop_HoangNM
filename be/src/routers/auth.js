import { Router } from "express";
import { Logout, Signin, Signup } from "../controllers/auth";
import { forgotPassword } from "../controllers/forgotPassword";

const RouterAuth = Router();

RouterAuth.post("/signin", Signin);
RouterAuth.post("/signup", Signup);
RouterAuth.post("/forgotPassword", forgotPassword);
RouterAuth.post("/logout", Logout);

export default RouterAuth;
