export interface User {
  _id?: string | number;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  role?: "admin" | "member";
}
