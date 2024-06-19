import React from 'react';
import { useGetTotalUsersQuery } from '../redux/api/usersApiSlice';
import { useGetTotalOrdersQuery, useGetTotalSalesQuery } from '../redux/api/orderApiSlice';

export function Profile_statistics_card_users() {
  const { data: users, isLoading, error } = useGetTotalUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <div className="bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <svg
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="stroke-current text-gray-800 transform transition-transform duration-500 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </div>
        <div className="text-right">
          <p className="text-2xl">{users.totalUsers ?? 'N/A'}</p>
          <p>Users</p>
        </div>
      </div>
    </div>
  );
}

export function Profile_statistics_card_orders() {
  const { data: orders, isLoading, error } = useGetTotalOrdersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <div className="bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <svg
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="stroke-current text-gray-800 transform transition-transform duration-500 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            ></path>
          </svg>
        </div>
        <div className="text-right">
          <p className="text-2xl">{orders.totalOrders ?? 'N/A'}</p>
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
}

export function Profile_statistics_card_sales() {
  const { data: sales, isLoading, error } = useGetTotalSalesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <div className="bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <svg
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="stroke-current text-gray-800 transform transition-transform duration-500 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            ></path>
          </svg>
        </div>
        <div className="text-right">
          <p className="text-2xl">${sales.totalSales ?? 'N/A'}</p>
          <p>Sales</p>
        </div>
      </div>
    </div>
  );
}
