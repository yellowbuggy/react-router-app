import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import UserDetail from "./UserDetail";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          element={
            <PrivateRoute
              isAuthenticated={isAuth}
              onLogin={setIsAuth}
            />
          }
        >
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;