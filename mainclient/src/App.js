import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Form from "./components/Form/Form";
import Header from './components/Header/Header';
import Main from "./components/Main/Main";

function App() {
  return (
    <div className='container'>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route  path="/form">
          <Form />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
