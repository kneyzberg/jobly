import Alert from "./Alert";
import {useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";
import {useContext} from "react";
import JoblyApi from "react";

function ProfileForm(){
  const {currentUser, setCurrentUser} = useContext(UserContext);

  const initialFormdata = {
    "firstName":currentUser.firstName,
    "lastName": currentUser.lastName,
    "email" : currentUser.email,
  }

  const [formData, setFormData] = useState(initialFormdata);
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    // let errorArr = [];
    // for(let key in formData){
    //   if(formData[key] === ""){
    //     errorArr.push(`The ${key} field is empty, please fill in all fields`);
    //   }
    // }
    // setFormErrors(errorArr);

    // // if(errorArr.length === 0){
    // //   try {
    // //     await signup(formData);
    // //     history.push("/");
    // //   } catch(err){
    // //     setFormErrors(err);
    // //   }
    // // } 

    // check user password is valid
    //ping the API to patch the changes 
    //update the state of the user 

  }

  return(
    <div className="ProfileForm-Container">
    <h3>Profile</h3>
    {/* {!!formErrors.length && <Alert errors={formErrors} />} */}
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" className="col-sm-2 col-form-label">
        Username
      </label>
      <div className="col-sm-4">
        <input
          onChange={handleChange}
          value={currentUser.username} 
          readonly
          type="text"
          name="username"
          className="form-control-plaintext"
          id="username"
        />
      </div>
      <label htmlFor="firstName" className="col-sm-2 col-form-label">
        First Name
      </label>
      <div className="col-sm-4">
        <input
          onChange={handleChange}
          name="firstName"
          type="text"
          className="form-control"
          id="firstName"
          value={formData.firstName}
        />
      </div>
      <label htmlFor="lastName" className="col-sm-2 col-form-label">
        Last Name
      </label>
      <div className="col-sm-4">
        <input
          onChange={handleChange}
          name="lastName"
          type="text"
          className="form-control"
          id="lastName"
          value={formData.lastName}
        />
      </div>
      <label htmlFor="email" className="col-sm-2 col-form-label">
        Email
      </label>
      <div className="col-sm-4">
        <input
          onChange={handleChange}
          name="email"
          type="email"
          className="form-control"
          id="email"
          value={formData.email}
        />
      </div>
      <label htmlFor="password" className="col-sm-2 col-form-label">
        Confirm Password
      </label>
      <div className="col-sm-4">
        <input
          onChange={handleChange}
          name="password"
          type="password"
          className="form-control"
          id="password"
        />
      </div>
      <button class="btn btn-primary " type="submit">
        Save Changes
      </button>
    </form>
  </div>
  )

}

export default ProfileForm;