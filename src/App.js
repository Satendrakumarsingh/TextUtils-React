
import React, { useState } from 'react';
import './App.css';
//import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
// import About from './components/About.js';
// import {
//    BrowserRouter as Router,
//    Routes,
//    Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
         msg : message,
         type :type
      })

      setTimeout(()=>{
         setAlert(null);
      }, 1000);
  }



  const toggleMode = ()=>{
     if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#33363d';
        showAlert('Dark mode is enabled.', 'success');
        document.title = "TextUtils - Dark Mode";   // To change the page title dynamically
     }
     else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled.', 'success');
      document.title = "TextUtils - Light Mode";
     }
  };

  const changeModeColor = (modeColor)=>{
      if(modeColor === 'blue'){
         document.body.style.backgroundColor = '#363062';
         showAlert('Blue mode enabled.', 'success');
      }
      else if(modeColor==='grey'){
         document.body.style.backgroundColor = '#435585';
         showAlert('Grey mode is enabled.', 'success');
      
      }
      else{
         document.body.style.backgroundColor = '#32012F';
         showAlert('Purple mode is enabled.', 'success');
      }
};
  return (
    <>
    {/* <Router> */}
     <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode} changeModeColor={changeModeColor}/>
      <Alert alert = {alert}/>
      
     <div className="container my-3">
     <TextForm showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode}/>
         {/* <Routes>
            <Route exact path="/about" element={<About/>}/> */}
            {/* <Route exact   path="/" element={<TextForm showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode}/>}/>
         </Routes> */}
        
        {/* <About/> */}
     </div>
    {/* </Router> */}
    </>
  );
}

export default App;
