import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import UnitCreate from './pages/home/Home'
import UnitSearch from './components/UnitSearch'
import UnitUpdate from './components/UnitUpdate'
import UnitsList from './components/UnitsList'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={UnitCreate} path="/unitcreate" ></Route>
          <Route component={UnitSearch} path="/unitsearch" ></Route>
          <Route component={UnitUpdate} path="/unitupdate" ></Route>
          <Route component={UnitsList} path="/unitslist" ></Route>
          <Route component={Home} path="/" ></Route>
        </Switch>        
      </Router>
    </div>
  );
}

export default App;
