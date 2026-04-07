import { Outlet } from "react-router-dom";
import Login from "./login";

function PrivateRoute({ isAuthenticated, onLogin }) {
  return isAuthenticated ? <Outlet /> : <Login onLogin={onLogin} />; //! onLogin
}

export default PrivateRoute;