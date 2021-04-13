import logo from './logo.svg';
import './App.css';

import {BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
