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
import UserContext from "./UserContext";
import {useContext} from "react";


function Routes({login, signup}){
//user state...possibly check true or false if user is logged in or not
  const {currentUser} = useContext(UserContext);
  console.log(currentUser);

  return(
    <Switch>
      <Route exact path="/">
        <Homepage/>
      </Route>
      
      {currentUser ? (
      <>
        <Route exact path="/companies">
          <CompanyList/> 
        </Route>
        <Route exact path="/companies/:handle">
          <CompanyDetail/> 
        </Route>
        <Route exact path="/jobs">
          <JobList/> 
        </Route>
        <Route exact path="/profile">
          <ProfileForm/> 
        </Route>
      </>
        ) : 
        <Redirect exact path = "/" />
      }
      <Route exact path="/login">
        <LoginForm login={login}/>
      </Route>
      <Route exact path="/signup">
        <SignUpForm signup={signup}/>
      </Route>
      
      <Redirect exact path="/"/>
      {/* Todo 404 */}
    </Switch>

)
  
}

export default Routes;