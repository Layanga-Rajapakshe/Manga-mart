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
import Signuppage from './Login_page/signuppage.jsx'
import Loginpage from './Login_page/loginpage.jsx'
import Product from './Product_page/product.jsx'
import { Toaster } from 'react-hot-toast'
import Dashboard from './Dashboard/dashboard.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  
      <BrowserRouter>
        <div>
          <Navbar />
          <div className='main-content'>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path='/home' element={<Homepage />} />
              <Route path='/about' element={<Aboutpage />} />
              <Route path='/signup' element={<Signuppage />} />
              <Route path='/login' element={<Loginpage />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
            <Toaster />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
