import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Destinations from './Components/Destinations/Destinations';

class App extends React.Component{
  render(){
    return(
      <div> 
      <Navbar />
      <Hero />
      <Destinations />
     </div>
      )
  }
}

export default App;
