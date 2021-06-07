import Alert from "./Alert";
import JoblyApi from "./api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginForm.css"

function LoginForm({ login }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(formData);
      history.push("/");
    } catch (err) {
      setFormErrors(err);
    }
  }

  console.log(formErrors);


  return (
    <div className="Homepage-home">
      <div className="LoginForm-text-container">
        <h3>Log In</h3>
        {!!formErrors.length &&
          <Alert errors={formErrors} alertType="danger" />
        }
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="col-form-label">Username</label>
          <div>
            <input onChange={handleChange} name="username" type="text" className="form-control" id="username" placeholder="enter username" value={formData.username} />
          </div>
          <label htmlFor="password" className="col-form-label">Password</label>
          <div>
            <input onChange={handleChange} name="password" type="password" className="form-control" id="password" placeholder="Password" value={formData.value} />
          </div>
          <button class="btn btn-primary mt-2" type="submit">Submit</button>
        </form>

      </div>

    </div>
  )

}

export default LoginForm;
