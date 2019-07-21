import React from 'react';
import './index.css'
import NavBar from './components/Navbar'
import ImageList from './components/ImageList'
import ImageListDesktop from './components/ImageListDesktop'
import ProductDetails from "./components/ProductDetails";
import Contact from './components/Contact'
import { BrowserRouter, Route } from 'react-router-dom'
import PostImage from './components/PostImage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="Mobile">
        <NavBar/>
        <Route exact path='/' component={ImageList}/>
        <Route path='/product/:id' component={ProductDetails}/>
        <Route path='/admin' component={PostImage}/>
        <Route path='/contact' component={Contact}/>
      </div>
      <div className="Desktop">
        <NavBar/>
        <Route exact path='/' component={ImageListDesktop}/>
        <Route path='/product/:id' component={ProductDetails}/>
        <Route path='/admin' component={PostImage}/>
        <Route path='/contact' component={Contact}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
