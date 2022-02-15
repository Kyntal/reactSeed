import React, { Component } from 'react';
import Cabecera  from './components/Cabecera';
import './App.css';

class App extends Component {
  manejaClick = texto => {
    console.log(texto)
  }
  render() {
    const miau = "Bienvenido miau"
    return (
      <div className="App">
        <Cabecera miau={miau} manejaClick={this.manejaClick}/>
        <p className='App-intro'>
          Hola mundo
        </p>
      </div>
    );
  }
}

export default App;
