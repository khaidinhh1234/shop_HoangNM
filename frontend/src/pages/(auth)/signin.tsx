import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-6">Đăng nhập</h1>
      <form className="text-center">
        <div className="mb-3 flex justify-center">
          <label htmlFor="exampleInputEmail1" className="form-label me-24">
            Email :
          </label>
          <br />
          <input
            type="email"
            className="form-control w-25"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-2 flex justify-center ">
          <label htmlFor="exampleInputPassword1" className="form-label me-16">
            Password :
          </label>
          <br />
          <input
            type="password"
            className="form-control w-25"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary w-32 me-2">
          Đăng Nhập
        </button>
        <Link to={"/signup"} className="btn btn-primary w-32 ">
          Đăng Ký
        </Link>
      </form>
    </div>
  );
};

export default Signin;
