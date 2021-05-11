import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import SlideShow from './Components/Carousel/carousel';


const App = () => {
  return (
    <div>
      <Navbar />
      <SlideShow/>
      <Products />
    </div>
  )
}

export default App
