import { UserContext, UserContextType } from "@/contexts/UserContexts";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Users = () => {
  const { state, removeUser } = useContext(UserContext) as UserContextType;
  console.log(state.users);
  return (
    <div>
      <h1>Danh sach user</h1>
      <table className="table table-bodered table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {state.users.map((item, index: number) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Link
                  to={`/admin/users/usersEdit/${item._id}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => removeUser(item._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
