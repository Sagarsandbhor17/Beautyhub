import "./App.css";
import React, { useEffect } from "react"
import { webTokenjs } from "./components/Webtoken";
import Login from "./components/Login-Signup/Login";
import Signup from "./components/Login-Signup/Signup";


function App() {  

  useEffect(()=>{
    webTokenjs()
  },[])

  return <div className="App">
    <Login />
  </div>;

}

export default App;
