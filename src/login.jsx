import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => { //!
    onLogin();
    navigate("/about");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>로그인</button> //!
    </div>
  );
};

export default Login;