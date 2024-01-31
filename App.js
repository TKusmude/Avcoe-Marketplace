import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.js';
import Navbar from './Navbar1.js';
import Footer from './Footer.js';
import Slider from './Slider.js';

const App=()=>{
  return(
    <>
    <Navbar/>
    {/* <Slider/> */}
    <Home/>
    <Footer/>
    </>
  )
}
export default App;