import React, { Component } from 'react'
import axios from 'axios'
//SE IMPORTA AXIOS desde https://axios-http.com/docs/intro
/* 
 Qué es axios?

 Axios es una promesa para node.js y el navegador. 
 Es isomorfo (= puede ejecutarse en el navegador y nodejs con la misma base de código). 
 En el lado del servidor, usa el módulo http nativo de node.js, 
  mientras que en el cliente (navegador) usa XMLHttpRequests.
*/
import FormularioSimple from './components/FormularioSimple'

class App extends Component {
  constructor() {
    super()
    //axios simplifica el uso de api y resuelve los json de manera mas simple

    // axios.get('https://jsonplaceholder.typicode.com/users')
    // .then(({ data }) => console.log(data))
    
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: 'Claudio Chuhaicura',
      username: 'Kyntal'
    }).then(({ data }) => console.log(data))
  }
  render() {
    return (
      <div className="App">
        <FormularioSimple />
      </div>
    );
  }
}

export default App;
