import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        
          <Link to="/public">Public Page</Link>
          <Link to="/protected">Protected Page</Link>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
