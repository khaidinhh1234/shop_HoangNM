import instance from "@/configs/axios";
import { UserContext, UserContextType } from "@/contexts/UserContexts";
import { User } from "@/interfaces/User";
import { userSchema } from "@/untils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UserForm = () => {
  const { handleUser } = useContext(UserContext) as UserContextType;
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<User>({
    resolver: zodResolver(userSchema),
  });
  if (id) {
    useEffect(() => {
      (async () => {
        const { data } = await instance.get(`/v1/auth/users/${id}`);
        reset(data);
      })();
    }, [id]);
  }

  return (
    <div>
      <h1>Edit user</h1>
      <form onSubmit={handleSubmit((data) => handleUser({ ...data, _id: id }))}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-danger">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            readOnly
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}
        </div>

        <div className="mb-3">
          <button className="btn btn-primary w-100">Edit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
