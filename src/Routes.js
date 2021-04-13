import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ProfileForm from "./ProfileForm";


function Routes(){

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
        <LoginForm/>
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