import { useState } from "react";
import { useHistory } from "react-router";
import userService from "../../services/users-service";

function Login() {
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(ev) {
    setData({ ...data, [ev.target.name]: ev.target.value });
  }

  function handleSubmit(ev) {
    ev.preventDefault()

    userService.login(data.email, data.password)
      .then(() => {
          history.push('/')
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={data.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
            value={data.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
