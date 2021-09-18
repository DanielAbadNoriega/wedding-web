import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import userService from "../services/users-service";

export const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : undefined
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      history.push("/login");
    } else {
      profile();
      history.push("/home");
    }
  }, [history]);

  function login(user) {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  function profile() {
    const storedUser = localStorage.getItem("user");
    userService.profile().then((user) => {
      if (JSON.stringify(user) !== JSON.stringify(storedUser)) {
        setUser(user);
      }
    });
  }

  function remove() {
    userService
      .remove(user.id)
      .then(() => {
        localStorage.removeItem("user");
        setUser(null);
        history.push("/home");
      })
      .catch((error) => console.error(error));
  }

/*   function edit(editUser) {
    userService
      .edit(user.id)
      .then((editUser) =>
        userService.create(editUser).then(() => history.push("/profile"))
      );
  } */

  const value = {
    user,
    login,
    logout,
    profile,
    remove
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
