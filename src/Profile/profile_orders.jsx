import React from 'react';
import Sidebar from './profile_sidebar';
import { useGetMyOrdersQuery, useGetOrdersQuery } from '../redux/api/orderApiSlice';
import Loader from '../Components/Loader';
import { useSelector } from 'react-redux';

export default function ProfileOrders() {
  const { userInfo } = useSelector((state) => state.auth);
  const { data: orders, isLoading: loadingMyOrders } = useGetMyOrdersQuery();
  const { data: allOrders, isLoading: loadingAllOrders } = useGetOrdersQuery();

  const renderOrdersTable = (ordersData) => (
    <div className="overflow-x-auto px-2 py-2">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Items</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
            {userInfo.isAdmin ? <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">User</th>: ''}
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Total</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Paid</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Delivered</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {ordersData.map((order) => (
            <tr key={order._id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <img
                  src={order.orderItems[0].images}
                  alt={order.orderItems[0].name}
                  className="w-10 h-10 object-cover rounded"
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {order._id}
              </td>
              {userInfo.isAdmin ? <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {order.user.username}
              </td>: ''}
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {order.createdAt.substring(0, 10)}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {order.totalPrice}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {order.isPaid ? order.paidAt.substring(0, 10) : 'No'}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {order.isDelivered ? order.deliveredAt.substring(0, 10) : 'No'}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href={`/order/${order._id}`}
                  className="inline-block rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-500"
                >
                  View Order
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <div className="container mx-auto flex pt-24 pb-5">
        <Sidebar />
        <div className="flex-1 bg-gray-200">
          {userInfo.isAdmin ? (
            loadingAllOrders ? <Loader /> : renderOrdersTable(allOrders)
          ) : (
            loadingMyOrders ? <Loader /> : renderOrdersTable(orders)
          )}
        </div>
      </div>
    </div>
  );
}
