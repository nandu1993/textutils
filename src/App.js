import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (text, type) => {
    setAlert({
      message: text,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode enabled", "success")

    } else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success")
    }
  }
//test
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}>
            </Route>
            <Route exact path="/about" element={<About />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
