import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Home_page/homepage.jsx'
import Navbar from './Landing_page/navbar.jsx'
import Footer from './Landing_page/footer.jsx'
import HeroSection from './Landing_page/hero.jsx'
import Aboutpage from './About_page/aboutpage.jsx'
import Manga from './Manga_page/manga.jsx'
import Signuppage from './Login_page/signuppage.jsx'
import Loginpage from './Login_page/loginpage.jsx'
import Genrepage from './Genres/genrepage.jsx'
import Product from './Product_page/product.jsx'
import { Toaster } from 'react-hot-toast'
import Dashboard from './Dashboard/dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/manga' element={<Manga />} />
          <Route path='/signup' element={<Signuppage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path="/manga/:id" element={<Manga />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* <Route path="/genres/:id" element={<Genrepage />} /> */}
        </Routes>
        <Toaster />
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  </React.StrictMode>,
)
