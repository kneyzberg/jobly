import Alert from "./Alert";
import JoblyApi from "./api";
import {useState} from "react";
import {useHistory} from "react-router-dom";

function LoginForm({ updateToken }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData, "formData");
    try {
      let result = await JoblyApi.loginUser(formData);
      console.log(result, "result");
      updateToken(result);
      history.push("/")
    } catch(err){
      setFormErrors(err);
    }
  }


  return (
    <div className="">
      {!!formErrors.length && 
        <Alert errors={formErrors}/>
      }
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-6">
            <input onChange={handleChange} name="username" type="text" className="form-control" id="username" placeholder="enter username" value={formData.username}/>
          </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-6">
            <input onChange={handleChange} name="password" type="password" className="form-control" id="password" placeholder="Password" value={formData.value}/>
          </div>
        </div>
        <button class="btn btn-primary " type="submit">Submit</button>
      </form>
    </div>
  )

}

export default LoginForm;
