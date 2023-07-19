import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Destinations from './Components/Destinations/Destinations';
import Search from './Components/Search/Search';
import Selects from './Components/Select/Select';
import CustomCarousel from './Components/Carousel/CustomCarousel';
import Footer from './Components/Footer/Footer';

class App extends React.Component{
  render(){
    return(
      <div> 
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <CustomCarousel />
      <Footer />
     </div>
      )
  }
}

export default App;
