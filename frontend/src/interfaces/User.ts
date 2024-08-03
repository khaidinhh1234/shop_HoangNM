export interface User {
  _id?: string | number;
  name: string;
  avatar: string;
  email: string;
  password: string;
  confirmPassword?: string;
  role?: "admin" | "member";
}
