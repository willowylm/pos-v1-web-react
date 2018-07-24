import React, { Component } from 'react';
import './App.css';
import Product from './displayProduct.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
          <Product />
        </div>
      </div>
    );
  }
}

export default App;
