import React from 'react';
import './App.css';
import Banner from './components/banner'
import Nav from './components/nav'
import Service from './components/service'
import About from './components/about'
import Footer from './components/footer'

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

function App() {
  return (
    <div>
       <Router>
       <Nav />
     <Banner />
     <About />
     <Service />
    
     <Footer />
     </Router>
    </div>
  );
}

export default App;
