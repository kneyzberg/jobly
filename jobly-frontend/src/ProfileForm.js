import Alert from "./Alert";
import { useState } from "react";
import UserContext from "./UserContext";
import { useContext } from "react";
import JoblyApi from "./api";
import "./ProfileForm.css"

function ProfileForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const initialFormdata = {
    "firstName": currentUser.firstName,
    "lastName": currentUser.lastName,
    "email": currentUser.email,
    "password": ""
  }

  const [formData, setFormData] = useState(initialFormdata);
  const [formErrors, setFormErrors] = useState([]);
  const [updateSuccessful, setUpdateSuccessful] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formValidated = validateForm(formData);
    if (!formValidated) return

    let userData = { ...formData };
    delete userData.password;
    try {
      const passwordData = { username: currentUser.username, password: formData.password };

      await JoblyApi.confirmPassword(passwordData);

      let result = await JoblyApi.updateUser(currentUser.username, userData);
      setCurrentUser(result);
      setFormData(({
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        password: ""
      }));
      setUpdateSuccessful(true);
    } catch (err) {
      setUpdateSuccessful(false);
      setFormErrors(err);
    }

  }

  function validateForm(data) {
    let errorArr = [];
    for (let key in data) {
      if (data[key] === "") {
        errorArr.push(`The ${key} field is empty, please fill in all fields`);
      }
    }
    setFormErrors(errorArr);
    return errorArr.length === 0
  }

  return (
    <section className="CompanyList-container">
      <div className="ProfileForm-content">
      <h3 className="text-center">Edit Profile</h3>
      {!!formErrors.length && <Alert errors={formErrors} alertType="danger"/>}
      {updateSuccessful && <Alert alertType="success"/>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="col-form-label">
          <b>Username</b>
      </label>
        <div>
          <input
            value={currentUser.username}
            readonly
            type="text"
            name="username"
            className="form-control-plaintext"
            id="username"
          />
        </div>
        <label htmlFor="firstName" className="col-form-label">
          <b>First Name</b>
      </label>
        <div>
          <input
            onChange={handleChange}
            name="firstName"
            type="text"
            className="form-control"
            id="firstName"
            value={formData.firstName}
          />
        </div>
        <label htmlFor="lastName" className="col-form-label">
          <b>Last Name</b>
      </label>
        <div>
          <input
            onChange={handleChange}
            name="lastName"
            type="text"
            className="form-control"
            id="lastName"
            value={formData.lastName}
          />
        </div>
        <label htmlFor="email" className="col-form-label">
          <b>Email</b>
      </label>
        <div>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
          />
        </div>
        <label htmlFor="password" className="col-form-label">
          <b>Confirm Password</b>
      </label>
        <div>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control"
            id="password"
            value={formData.password}
          />
        </div>
        <button class="btn btn-primary mt-3" type="submit">
          <b>Save Changes</b>
      </button>
      </form>
    </div>

    </section>
    
  )

}

export default ProfileForm;