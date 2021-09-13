import { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import userService from "../../services/users-service";

function Logout () {
    const history = useHistory()
    const auth = useContext(AuthContext)
    function handleLogout() {
        userService.logout()
        .then(() => {
          auth.logout();
          history.push("/login");
        });
      }

    return (              
        <button onClick={handleLogout} className="btn btn-danger btn-sm fa fa-sign-out mt-1" aria-hidden="true"></button>
    )
}

export default Logout;