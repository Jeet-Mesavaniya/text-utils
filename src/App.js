
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message,type) => {
    setalert({
    msg : message, type : type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = 'gray'
      showAlert("dark mode is on","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("light mode is on","success");

    }
  }
  return (
    <>
    <Router>
    <Navbar nameT = "Text Calc" aboutText = "About Us" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alerts alert = {alert}/>
    <div className="container">

    <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}></TextForm>}></Route>
      </Routes>

    </div>
    </Router>
    </>
  );
}

export default App;
