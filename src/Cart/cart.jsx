import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import Cartcard from "./cartcard";

export default function Cart() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <div className='pt-12'>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Your Cart</h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">Find your cart items here</p>
          </div>

          {cartItems.length === 0 ? (
            <div className="mt-4 text-base font-normal leading-7 text-gray-600 text-center">
              <b>Oops!!!</b> Your cart is empty <Link to="/home" className='text-blue-600 hover:underline'>Go To Shop</Link>
            </div>
          ) : (
            <>
              <div className="flex flex-col w-full lg:w-[80%] mx-auto mt-8">
                <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

                {cartItems.map((item,index) => (
                  <Cartcard key={index} item={item}/>
                ))}

                <div className="mt-8 w-full lg:w-[40rem] mx-auto">
                  <div className="p-4 rounded-lg border">
                    <h2 className="text-xl font-semibold mb-2">
                      Items ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                    </h2>

                    <div className="text-2xl font-bold">
                      ${cartItems.reduce((acc, item) => acc + item.qty * 58, 0).toFixed(2)}
                    </div>

                    <button
                      className="bg-blue-700 hover:bg-blue-500 text-white mt-4 py-2 px-4 rounded-full text-lg w-full"
                      disabled={cartItems.length === 0}
                      onClick={checkoutHandler}
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
