import logo from './logo.svg';
import './App.css';

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
      <Navbar logout={logoutUser} user={currentUser}/>
      <Routes user={currentUser} login={loginUser} signup={signUpUser} />
    </BrowserRouter>
  );
}

export default App;
