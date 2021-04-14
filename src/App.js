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
  const [currentUser, setCurrentUser] = useState(null);
  const [isToken, setIsToken] = useState(false);
  
  useEffect(function getCurrentUser(){
    const token = localStorage.getItem("token");
    
    async function fetchUser(){
     
      const decodedToken = decodeToken(token);

      let userResult = await JoblyApi.getUser(decodedToken.username);
      setCurrentUser(userResult);
    }

    if(token){
      fetchUser();
    }
  }, [isToken]);
  
  async function loginUser(data){
    let token = await JoblyApi.loginUser(data);
    JoblyApi.token = token;   
    localStorage.setItem("token", token)
    setIsToken(true);
  }

  async function signUpUser(data){
    let result = await JoblyApi.registerUser(data);
    JoblyApi.token = result;
    localStorage.setItem("token", result)
    setIsToken(true);
  }

  async function updateUser(data){
    let result = await JoblyApi.updateUser()
  }


  function logoutUser(){
    localStorage.removeItem("token");
    setCurrentUser(null);
    setIsToken(false);
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
