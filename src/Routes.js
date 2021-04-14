import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ProfileForm from "./ProfileForm";
import { useState } from "react";
import JoblyApi from "./api";


function Routes(){
//user state...possibly check true or false if user is logged in or not
  const [token, setToken] = useState("");


  function updateToken(token) {
    JoblyApi.token = setToken(token);
  }

  return(
    <Switch>
      <Route exact path="/">
        <Homepage/>
      </Route>
      <Route exact path="/companies">
        <CompanyList/>
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetail/>
      </Route>
      <Route exact path="/jobs">
        <JobList/>
      </Route>
      <Route exact path="/login">
        <LoginForm updateToken={updateToken}/>
      </Route>
      <Route exact path="/signup">
        <SignUpForm/>
      </Route>
      <Route exact path="/profile">
        <ProfileForm/>
      </Route>
      <Redirect exact path="/"/>
      {/* Todo 404 */}
    </Switch>
)
  
}

export default Routes;