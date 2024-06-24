import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar/navbar';
import Footer from './Landing_page/footer';
import Loading from './Components/Loader';
import PrivateRoute from './Components/PrivateRoute';

const Homepage = lazy(() => import('./Home_page/homepage'));
const HeroSection = lazy(() => import('./Landing_page/hero'));
const Aboutpage = lazy(() => import('./About_page/aboutpage'));
const Signuppage = lazy(() => import('./Login_page/signuppage'));
const Loginpage = lazy(() => import('./Login_page/loginpage'));
const Product = lazy(() => import('./Product_page/product'));
const Settings = lazy(() => import('./Profile/settings'));
const Favourites = lazy(() => import('./Profile/favourites'));
const Cart = lazy(() => import('./Cart/cart'));
const Shipping = lazy(() => import('./Orders/shipping'));
const PlaceOrder = lazy(() => import('./Orders/placeorder'));
const Order = lazy(() => import('./Orders/order'));
const Hero = lazy(() => import('./Video_hero_page/hero'));
const Profile = lazy(() => import('./Profile/profile'));
const Orders = lazy(() => import('./Profile/profile_orders'));
const Genrepage = lazy(() => import('./Genres/genrepage'));
const Search = lazy(() => import('./Search_page.jsx/search'));
const Errorpage = lazy(() => import('./404 page/errorpage'));

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Suspense fallback={<Loading />}>
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

            {/* Private routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/placeorder" element={<PlaceOrder />} />
              <Route path="/order/:id" element={<Order />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/wishlist" element={<Favourites />} />
              <Route path="/cart" element={<Cart />} />
            </Route>

            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </Suspense>
        <Toaster />
      </div>
      <Footer />
    </div>
  );
};

export default App;
