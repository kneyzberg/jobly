import logo from './logo.svg';
import './App.css';
import UserContext from "./UserContext";
import {useEffect, useState } from "react";
import {BrowserRouter } from "react-router-dom";
import {decodeToken}  from "react-jwt";
import Routes from "./Routes";
import Navbar from "./Navbar";
import JoblyApi from './api';

function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(function getCurrentUser(){
    async function fetchUser(){
     const decodedToken = decodeToken(token);
     console.log(decodedToken);

     let userResult = await JoblyApi.getUser(decodedToken.username);
      setCurrentUser(userResult);
    }

    if(token){
      fetchUser();
    }
  }, [token]);

  async function loginUser(data){
    let result = await JoblyApi.loginUser(data);
    JoblyApi.token = result;   
    setToken(result);
  }

  async function signUpUser(data){
    let result = await JoblyApi.registerUser(data);
    JoblyApi.token = result;
    setToken(result);
  }

  function logoutUser(){
    setToken("");
    setCurrentUser(null);
  }
  
  return (
    <BrowserRouter>
      <UserContext.Provider value={{currentUser}}>
        <Navbar logout={logoutUser} />
        <Routes login={loginUser} signup={signUpUser} />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
