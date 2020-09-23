import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;
