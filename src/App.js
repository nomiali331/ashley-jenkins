import React, { useState } from 'react';
import './App.css';
import {  Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import UnitSearch from './components/UnitSearch'
import UnitsList from './components/UnitsList'
import UnitCreate from './pages/unit/UnitCreate'
import UnitUpdate from './pages/unit/UnitUpdate'
import Login from './pages/login/Login'
import Signup from './pages/login/Signup'

import List from './pages/list/List'
import { UserAuthContextProvider } from './Context/UserAuthContext';
function App() {
    const [unitId, setUnitId] = useState("");
  return (
    <div className="App">
      <Router>
      <UserAuthContextProvider>
        <Switch>
          <Route component={UnitSearch} path="/unitsearch" ></Route>
          <Route component={UnitUpdate} path="/unitupdate" ></Route>
          <Route component={UnitsList} path="/unitslist" ></Route>
          <Route component={List} path="/list" ></Route>
          <Route component={UnitCreate} path="/add" ></Route>
          <Route component={UnitUpdate} path="/update" ></Route>
          <Route component={Home} path="/home" ></Route>          
          <Route component={Signup} path="/signup" ></Route>
          <Route component={Login} path="/" ></Route>
        </Switch>  
        </UserAuthContextProvider>      
      </Router>
    </div>
  );
}

export default App;
