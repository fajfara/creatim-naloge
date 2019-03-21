import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SmoothScroll from 'smooth-scroll';

import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';


class App extends Component {
  componentDidMount(){
    // Smooth scroll lib init
    // eslint-disable-next-line
    var scroll = new SmoothScroll('a[href*="#"]');


    // Dva arraya, linki in sekcije/deli strani
    const links = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll('.section');

    // Funkcija za dodajanje active class k pravemu linku v nav med scrollanjem po strani
    function activeLinkChange() {
      let index = sections.length;
      
      while(--index && window.scrollY + 200 < sections[index].offsetTop) {}
      
      links.forEach((link) => link.classList.remove('active'));
      links[index].classList.add('active');
    }

    activeLinkChange();
    window.addEventListener('scroll', activeLinkChange);
    
  }

  

  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
