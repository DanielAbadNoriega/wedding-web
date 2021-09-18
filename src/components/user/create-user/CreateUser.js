import { useState } from "react";
import { useHistory } from "react-router";
import userService from "../../../services/users-service";

const PHONE_PATTERN = /^\d{6,10}$/;
const EMAIL_PATTERN = /\S+@\S+\.\S+/;

const validations = {
  name: (value) => {
    let message;
    if (!value) {
      message = "Name is required";
    }
    return message;
  },
  phone: (value) => {
    let message;
    if (!value) {
      message = "Phone is required";
    }
    if (value && !PHONE_PATTERN.test(value)) {
      message = "Phone number is not valid";
    }
    return message;
  },
  email: (value) => {
    let message;
    if (!value) {
      message = "Email is required";
    }
    if (value && !EMAIL_PATTERN.test(value)) {
      message = "Email is not valid";
    }
    return message;
  },
  avatar: (value) => {
    let message;
    if (!value) {
      message = "Avatar is required";
    }
    return message;
  },
  address: (value) => {
    let message;
    if (!value) {
      message = "Address is required";
    }
    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = "Password is required";
    }
    return message;
  },
};

function CreateUser() {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    avatar: "",
    address: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: validations.name(""),
    phone: validations.phone(""),
    email: validations.email(""),
    avatar: validations.avatar(""),
    address: validations.address(""),
    password: validations.password(""),
  });

  const [select, setSelect] = useState({
    name: false,
    phone: false,
    email: false,
    avatar: false,
    address: false,
    password: false,
  });

  function handleBlur(ev) {
    const inputName = ev.target.name;
    setSelect({ ...select, [inputName]: true });
  }

  function handleChange(ev) {
    const inputName = ev.target.name;
    const value = ev.target.value;
    setUser({ ...user, [inputName]: value });
    setErrors({
      ...errors,
      [inputName]: validations[inputName]
        ? validations[inputName](value)
        : undefined,
    });
  }

  function isFormValid() {
    return !Object.keys(errors).some((key) => errors[key] !== undefined);
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    if (isFormValid()) {
      userService
        .create(user)
        .then(() => {
          history.push("/login");
        })
        .catch((error) => {
          const { errors, message } = error.response?.data || error;
          console.error(message);

          const select = Object.keys(errors || {}).reduce((select, key) => {
            select[key] = true;
            return select;
          }, {});

          setErrors({
            name: errors ? undefined : message,
            email: errors ? undefined : message,
            ...errors,
          });

          setSelect({
            name: errors ? false : true,
            email: errors ? false : true,
            ...select,
          });

          history.push("/user");
        });
    }
  }
  return (
    <div className="row m-2">
      <form className="col-12 col-sm-10" onSubmit={handleSubmit}>

        <div className="inpout-group flex-nowrap mb-1">
          <span className="input-group-text col-2" id="addon-wrapping">
            <i className="fa fa-user fa-fw" aria-hidden="true" />
          </span>
          <input
            name="name"
            type="text"
            className={`form-control ${
              errors.name && select.name ? "is-invalid" : ""
            }`}
            placeholder="Name"
            aria-describedby="addon-wrapping"
            onChange={(ev) => handleChange(ev)}
            onBlur={(ev) => handleBlur(ev)}
            value={user.name}
          />
          {errors.name && select.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>

        <div className="inpout-group mb-1">
          <span className="input-group-text col-2">
            <i className="fa fa-phone-square fa-fw" aria-hidden="true" />
          </span>
          <input
            name="phone"
            type="text"
            className={`form-control ${
              errors.phone && select.phone ? "is-invalid" : ""
            }`}
            placeholder="Phone number."
            onChange={(ev) => handleChange(ev)}
            onBlur={(ev) => handleBlur(ev)}
            value={user.phone}
          />
          {errors.phone && select.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )}
        </div>

        <div className="inpout-group mb-1">
          <span className="input-group-text col-2">
            <i className="fa fa-envelope-o fa-fw" aria-hidden="true" />
          </span>
          <input
            name="email"
            type="email"
            className={`form-control ${
              errors.email && select.email ? "is-invalid" : ""
            }`}
            placeholder="user@example.com"
            onChange={(ev) => handleChange(ev)}
            onBlur={(ev) => handleBlur(ev)}
            value={user.email}
          />
          {errors.email && select.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="inpout-group mb-1">
          <span className="input-group-text col-2">
            <i className="fa fa-camera-retro fa-fw" aria-hidden="true" />
          </span>
          <input
            name="avatar"
            type="avatar"
            className={`form-control ${
              errors.avatar && select.avatar ? "is-invalid" : ""
            }`}
            placeholder="Avatar"
            onChange={(ev) => handleChange(ev)}
            onBlur={(ev) => handleBlur(ev)}
            value={user.avatar}
          />
          {errors.avatar && select.avatar && (
            <div className="invalid-feedback">{errors.avatar}</div>
          )}
        </div>

        <div className="inpout-group mb-1">
          <span className="input-group-text col-2">
            <i className="fa fa-location-arrow fa-fw" aria-hidden="true" />
          </span>
          <input
            name="address"
            type="text"
            className={`form-control ${
              errors.address && select.address ? "is-invalid" : ""
            }`}
            placeholder="Address"
            onChange={(ev) => handleChange(ev)}
            onBlur={(ev) => handleBlur(ev)}
            value={user.address}
          />
          {errors.address && select.address && (
            <div className="invalid-feedback">{errors.address}</div>
          )}
        </div>

        <div className="inpout-group mb-1">
          <span className="input-group-text col-2">
            <i className="fa fa-key fa-fw" aria-hidden="true" />
          </span>
          <input
            name="password"
            type="password"
            className={`form-control ${
              errors.password && select.password ? "is-invalid" : ""
            }`}
            placeholder="Password"
            onChange={(ev) => handleChange(ev)}
            onBlur={(ev) => handleBlur(ev)}
            value={user.password}
          />
          {errors.password && select.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-success mt-2">
          Create user
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
