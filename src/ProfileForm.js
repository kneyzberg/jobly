import Alert from "./Alert";
import UserContext from "./UserContext";
import {useContext} from "react";
import {Redirect} from "react-router-dom";

function ProfileForm(){

  const {currentUser} = useContext(UserContext);

  return(
    <div>This is the Profile Form
      <Alert/>
    </div>
  )

}

export default ProfileForm;