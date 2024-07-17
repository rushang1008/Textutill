import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [ mode, setMode] = useState('light');
  const [ alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("dark mode enabled", "sucess");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "sucess");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" blog="About" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/textform" element={<TextForm showalert={showAlert} heading="Enter the text to analyz" mode={mode} />}>
            </Route>
            <Route path="/About" element={<About mode={mode}  />}>
            </Route>
          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
