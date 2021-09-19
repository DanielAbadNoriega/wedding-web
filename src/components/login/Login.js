import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import userService from "../../services/users-service";

function Login() {
  const history = useHistory();
  const authContext = useContext(AuthContext)
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
      .then((user) => {
        authContext.login(user)
        history.push('/')
      })
  }

  return (
    <div className="container mt-3">
      <form className="col-12 col-sm-10" onSubmit={handleSubmit}>
        <div className="mb-2">
          <span className="input-group-text col-2">
            <i className="fa fa-envelope-o fa-fw" aria-hidden="true" />
          </span>
          <input
            name="email"
            type="email"
            className="form-control mt-1"
            placeholder="email@example.com"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={data.email}
          />
        </div>
        <div className="mb-2">
          <span className="input-group-text col-2">
            <i className="fa fa-key fa-fw" aria-hidden="true" />
          </span>
          <input
            name="password"
            type="password"
            className="form-control mt-1"
            placeholder="********"
            id="exampleInputPassword1"
            onChange={handleChange}
            value={data.password}
          />
        </div>
        
      <div className="btn-group-vertical col-3">
        <button type="submit" className="btn btn-success fa fa-sign-in mt-1" aria-hidden="true"> Login</button>
        <button type="submit" className="btn btn-success fa fa-user mt-1" aria-hidden="true">
        <NavLink className="nav-link" exact to="/user"/>New profile</button>
      </div>
      </form>
      
    </div>
  );
}

export default Login;
