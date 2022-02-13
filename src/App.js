import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#394659";
      showAlert("Dark Mode Enabled ", "Success");
      setInterval(() => {
        document.title = " Play With Text-Dark mode";
      }, 2000);
      setInterval(() => {
        document.title = " Play With Text is Amazing";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode Enabled ", "Success");
      document.title = " Play With Text-light mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Play with text " mode={mode} toogleMode={toogleMode} />
        <Alert alert="This is Alert" alert={alert} />
        <div className=" my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>

            <Route exact path="/">
              <TextForm
                heading="Enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
          
        </div>
        <Footer mode={mode}/>
      </Router>
    </>
  );
}

export default App;
