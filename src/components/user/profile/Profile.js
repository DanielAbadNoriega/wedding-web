import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import DeleteUser from "../delete-user/DeleteUser";
import "./Profile.css"

function Profile() {
  const authContext = useContext(AuthContext);
  const { user, remove } = authContext;

  function handleDeleteUser() {
    remove()
  }
  
  return (
    <fieldset disabled className="Profile">
      <div>
        <div className="input-group flex-nowrap mt-2">
          <span className="input-group-text" id="addon-wrapping">
            <i className="fa fa-user fa-fw" aria-hidden="true" />
          </span>
          <input
            name="name"
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={user?.name}
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>

        <div className="input-group flex-nowrap mt-2">
          <span className="input-group-text" id="addon-wrapping">
            <i className="fa fa-phone-square fa-fw" aria-hidden="true" />
          </span>
          <input
            name="phone"
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={user?.phone}
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>

        <div className="input-group flex-nowrap mt-2">
          <span className="input-group-text" id="addon-wrapping">
            <i className="fa fa-envelope-o fa-fw" aria-hidden="true" />
          </span>
          <input
            name="email"
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={user?.email}
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>

        <div className="input-group flex-nowrap mt-2">
          <span className="input-group-text" id="addon-wrapping">
            <i className="fa fa-location-arrow fa-fw" aria-hidden="true" />
          </span>
          <input
            name="address"
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={user?.address}
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
      <div className="Link mt-2">

        <DeleteUser onDeleteUser={handleDeleteUser}/>
      
      </div>
        
      
    </fieldset>
  );
}

export default Profile;
