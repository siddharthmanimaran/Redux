import { useSelector, useDispatch } from "react-redux";
import { VALIDATION } from "../store/actions";
const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.ur.users);

  const logInUser = (e) => {
    let lt = e.target.options[e.target.selectedIndex].text;
    dispatch(VALIDATION(lt));
  };
  return (
    <div className="customDiv">
      <select onChange={(e) => logInUser(e)}>
        {users.map((user, index) => {
          return <option key={index}>{user}</option>;
        })}
      </select>
    </div>
  );
};

export default Users;
