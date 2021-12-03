import React from 'react';
import {Brand, CTA, NavBar} from "./components";
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from "./containers";
import './index.css'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;