import { useState } from "react";
import axios from "axios";

function Login({ setAuth }) {
  const [data, setData] = useState({ username: "", password: "" });

  const login = async e => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      data
    );
    localStorage.setItem("token", res.data.token);
    setAuth(true);
  };

  return (
    <form onSubmit={login} className="container mt-5">
      <input className="form-control mb-2"
        placeholder="Username"
        onChange={e => setData({...data, username: e.target.value})} />
      <input type="password" className="form-control mb-2"
        placeholder="Password"
        onChange={e => setData({...data, password: e.target.value})} />
      <button className="btn btn-primary">Login</button>
    </form>
  );
}
localStorage.setItem("role", res.data.role);
export default Login;
