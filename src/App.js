import React from 'react';
import './App.css';
import {  Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import UnitSearch from './components/UnitSearch'
import UnitUpdate from './components/UnitUpdate'
import UnitsList from './components/UnitsList'
import UnitCreate from './pages/unit/UnitCreate'
import List from './pages/list/List'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={UnitSearch} path="/unitsearch" ></Route>
          <Route component={UnitUpdate} path="/unitupdate" ></Route>
          <Route component={UnitsList} path="/unitslist" ></Route>
          <Route component={List} path="/list" ></Route>
          <Route component={UnitCreate} path="/add" ></Route>
          <Route component={Home} path="/" ></Route>
        </Switch>        
      </Router>
    </div>
  );
}

export default App;
