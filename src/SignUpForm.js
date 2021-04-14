import Alert from "./Alert";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const defualtForm = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};
function SignupForm({signup}) {
  const [formData, setFormData] = useState(defualtForm);
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let errorArr = [];
    for(let key in formData){
      if(formData[key] === ""){
        errorArr.push(`The ${key} field is empty, please fill in all fields`);
      }
    }
    setFormErrors(errorArr);

    if(errorArr.length === 0){
      try {
        await signup(formData);
        history.push("/");
      } catch(err){
        setFormErrors(err);
      }
    } 
  }

  return (
    <div className="SignupForm-Container">
      <h3>Sign Up</h3>
      {!!formErrors.length && <Alert errors={formErrors} />}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="col-sm-2 col-form-label">
          Username
        </label>
        <div className="col-sm-4">
          <input
            onChange={handleChange}
            name="username"
            type="text"
            className="form-control"
            id="username"
            value={formData.username}
          />
        </div>
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-4">
          <input
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control"
            id="password"
            value={formData.password}
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
        <button class="btn btn-primary " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
