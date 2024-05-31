import React, { useState,useEffect } from 'react';
import HeroSection from './Landing_page/hero';
import Navbar from './Landing_page/navbar';
import Footer from './Landing_page/footer';
import Card from './Home_page/card';
import Homepage from './Home_page/homepage';
import Loginpage from './Login_page/loginpage';
import Aboutpage from './About_page/aboutpage';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
