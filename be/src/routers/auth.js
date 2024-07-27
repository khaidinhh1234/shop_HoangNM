import { Router } from "express";
import { Logout, Signin, Signup } from "../controllers/auth";

const RouterAuth = Router();

RouterAuth.post("/signin", Signin);
RouterAuth.post("/signup", Signup);
RouterAuth.post("/logout", Logout);

export default RouterAuth;
