import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext"

function Profile() {

  const authContext = useContext(AuthContext)
  const {user} = authContext;
  console.log(user)
  
  return ( 
    <fieldset disabled>
        <div>
            <div className="input-group flex-nowrap mt-2">
                <span className="input-group-text" id="addon-wrapping"><i className="fa fa-user fa-fw" aria-hidden="true" /></span>
                <input type="text" id="disabledTextInput" className="form-control" placeholder={user?.name} aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>

            <div className="input-group flex-nowrap mt-2">
                <span className="input-group-text" id="addon-wrapping"><i className="fa fa-phone-square fa-fw" aria-hidden="true" /></span>
                <input type="text" id="disabledTextInput" className="form-control" placeholder={user?.phone} aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>

            <div className="input-group flex-nowrap mt-2">
                <span className="input-group-text" id="addon-wrapping"><i className="fa fa-user fa-fw" aria-hidden="true" /></span>
                <input type="text" id="disabledTextInput" className="form-control" placeholder={user?.email} aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>

            <div className="input-group flex-nowrap mt-2">
                <span className="input-group-text" id="addon-wrapping"><i className="fa fa-user fa-fw" aria-hidden="true" /></span>
                <input type="text" id="disabledTextInput" className="form-control" placeholder={user?.address} aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>
        
        </div>
    </fieldset>
  );
}

export default Profile;
