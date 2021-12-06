import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar } from './Component/Navbar';
 import { Home } from './Component/Home';
 import { About } from './Component/About';
import NoteState from './context/notes/NoteState';
import Alert from './Component/Alert';
import Login from './Component/Login';
import Signup from './Component/Signup';
import { useState } from 'react';
import Footer from './Component/Footer';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <NoteState>
    <Router>
      <Navbar showAlert={showAlert} />
      <Alert alert={alert}/>
      <div className="container">
      <Switch>
          <Route exact path="/">
            <Home showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About showAlert={showAlert} />
          </Route>
          <Route exact path="/login">
            <Login showAlert={showAlert}/>
          </Route>
          <Route exact path="/signup">
            <Signup showAlert={showAlert}/>
          </Route>
        </Switch>
        </div>
        <Footer/>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
