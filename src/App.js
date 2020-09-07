import React from 'react';
import './App.css';
import ProductContext from './ProductContext';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import ProductList from './ProductList';


function App() {
  state = {
    products : [
      {id: 1, name: "Lemari", stock:20, price: 2999999},
      {id: 2, name: "Meja", stock:30, price: 4999999},
      {id: 3, name: "Kursi", stock:50, price: 1999999}
  ],
  cart: []
  }
  return (
    <ProductContext.Provider 
      value ={
        {products : state.products},
        {cart: state.cart}
      }
    >

    </ProductContext.Provider>
  );
}

export default App;
