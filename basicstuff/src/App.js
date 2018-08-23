import React, { Component } from 'react';
import logo from './logo.svg';
import video from './background.mp4'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <video autoPlay muted loop>
          <source src='https://i.imgur.com/nPNAVPN.mp4' type='video/mp4'/>
        </video>
      </div>
    );
  }
}

export default App;
