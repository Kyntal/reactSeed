import React, { Component } from 'react';
import Cabecera  from './components/Cabecera';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecera />
        <p className='App-intro'>
          Hola mundo
        </p>
      </div>
    );
  }
}

export default App;
