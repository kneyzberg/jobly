import Alert from "./Alert";
import JoblyApi from "./api";
import {useState} from "react";
import {useHistory} from "react-router-dom";

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
    } catch(err){
      setFormErrors(err);
    }
  }


  return (
    <div className="LoginForm-Container">
      <h3>Log In</h3>
      {!!formErrors.length && 
        <Alert errors={formErrors}/>
      }
      <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-4">
            <input onChange={handleChange} name="username" type="text" className="form-control" id="username" placeholder="enter username" value={formData.username}/>
          </div>
            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-4">
            <input onChange={handleChange} name="password" type="password" className="form-control" id="password" placeholder="Password" value={formData.value}/>
          </div>
        <button class="btn btn-primary " type="submit">Submit</button>
      </form>
    </div>
  )

}

export default LoginForm;
