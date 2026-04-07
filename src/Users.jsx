import { useNavigate } from "react-router-dom";

const Users = () => {
  const naviate = useNavigate();

  return (
    <div>
      <h2>Users</h2>
      <div>
        <button onClick={(e) => naviate(`/users/${e.target.innerText}`)}>1</button>
        <button onClick={(e) => naviate(`/users/${e.target.innerText}`)}>2</button>
        <button onClick={(e) => naviate(`/users/${e.target.innerText}`)}>3</button>
        <button onClick={(e) => naviate(`/users/${e.target.innerText}`)}>4</button>
      </div>
    </div>
  )
}

export default Users;