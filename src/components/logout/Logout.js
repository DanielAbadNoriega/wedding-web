import { useHistory } from "react-router";
import userService from "../../services/users-service";

function Logout () {
    const history = useHistory()
    function handleLogout() {
        userService.logout()
            .then(() => {
                history.push("/")
            })
    }

    return (              
        <button onClick={handleLogout} className="btn btn-danger btn-sm fa fa-sign-out mt-1" aria-hidden="true"> Logout</button>
    )
}

export default Logout;