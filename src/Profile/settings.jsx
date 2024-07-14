import React from 'react'
import Sidebar from './profile_sidebar'
import image1 from '../assets/Update_image.jpeg'
import web_logo1 from '../assets/web_logo_bg_removed.png';
import web_logo2  from '../assets/web_logo.png';

export default function settings() {
  return (
    <div className="container mx-auto flex pt-24 pb-5">
    <Sidebar />
    {/* Main content */}
    <div className="flex-1 bg-gray-200">
      {/* Your main content goes here */}
      <div className=''>
        <section className="">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
                alt=""
                src={image1}
                className="absolute inset-0 h-full w-full object-cover brightness-50"
            />
            </aside>

            <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
            <div className="max-w-xl lg:max-w-3xl">
                <a className="block text-blue-600" href="/home">
                <span className="sr-only">Home</span>
                <img 
                src={web_logo1}
                alt='web_logo'
                className='h-12 w-auto sm:h-16 brightness-200'
                ></img>
                </a>

                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Account Settings
                </h1>

                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> New Username </label>

                    <input
                    type="text"
                    id="username"
                    placeholder='Enter new username'
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className="col-span-6">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> New Email </label>

                    <input
                    type="email"
                    id="Email"
                    placeholder='Enter new email'
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> New Password </label>

                    <input
                    type="password"
                    id="Password"
                    placeholder='Enter new password'
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                    Password Confirmation
                    </label>

                    <input
                    type="password"
                    id="PasswordConfirmation"
                    placeholder='Re-enter new password'
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                    Update Account
                    </button>

                </div>
                </form>
            </div>
            </main>
        </div>
        </section>
    </div>
    </div>
  </div>
  )
}
