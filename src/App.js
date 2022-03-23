import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

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

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
