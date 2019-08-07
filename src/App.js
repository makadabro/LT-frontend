import React from 'react';
import './index.css'
import NavBar from './components/Navbar'
import Home from './components/Home'

import Contact from './components/Contact'
import { BrowserRouter, Route } from 'react-router-dom'
import PostImage from './components/PostImage';
import Product from './components/Product'
import ProductDesktop from './components/ProductDesktop'
import EditProduct from './components/EditProduct'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div className="Mobile">
      <NavBar/>
        <Route exact path='/' component={Home}/>
        <Route path='/product/:id' component={Product}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/admin' component={PostImage}/>
        <Route path='/edit/:id' component={EditProduct}/>
        </div>
        <div className="Desktop">
      <NavBar/>
        <Route exact path='/' component={Home}/>
        <Route path='/product/:id' component={ProductDesktop}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/admin' component={PostImage}/>
        <Route path='/edit/:id' component={EditProduct}/>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
