import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Home_page/homepage.jsx';
// import Navbar from './Landing_page/navbar.jsx'
import Footer from './Landing_page/footer.jsx';
import HeroSection from './Landing_page/hero.jsx';
import Aboutpage from './About_page/aboutpage.jsx';
import Signuppage from './Login_page/signuppage.jsx';
import Loginpage from './Login_page/loginpage.jsx';
import Product from './Product_page/product.jsx';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Settings from './Profile/settings.jsx';
import Favourites from './Profile/favourites.jsx';
import Cart from './Cart/cart.jsx';
import PrivateRoute from './Components/PrivateRoute';
import Shipping from './Orders/shipping.jsx';
import PlaceOrder from './Orders/placeorder.jsx';
import Order from './Orders/order.jsx';
import Hero from './Video_hero_page/hero.jsx';
import Navbar from './Navbar/navbar.jsx';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Profile from './Profile/profile.jsx';
import Orders from './Profile/profile_orders.jsx';
import Genrepage from './Genres/genrepage.jsx';
import Search from './Search_page.jsx/search.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider>
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="main-content">
              <Routes>
                <Route path="/test" element={<HeroSection />} />
                <Route path="/" element={<Hero />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/signup" element={<Signuppage />} />
                <Route path="/login" element={<Loginpage />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/genre/:name/:genre" element={<Genrepage />} />
                <Route path="/search/:query" element={<Search />} />

                <Route path="" element={<PrivateRoute />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/shipping" element={<Shipping />} />
                  <Route path="/placeorder" element={<PlaceOrder />} />
                  <Route path="/order/:id" element={<Order />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/wishlist" element={<Favourites />} />
                  <Route path="/cart" element={<Cart />} />
                </Route>
              </Routes>
              <Toaster />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);
