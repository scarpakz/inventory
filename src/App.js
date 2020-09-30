import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login'
import Dashboard from './pages/main/Dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>        
        </div>
      </Router>
    );
  }
}

export default App;
