import React from 'react';
import { useGetMyOrdersQuery } from '../redux/api/orderApiSlice';

export default function ProfileRecentOrders() {
    const { data: orders, isLoading, error } = useGetMyOrdersQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-semibold px-4 py-2 text-gray-900 dark:text-gray-50 bg-gray-100">Recent Orders</h3>
                </div>
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Order ID</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Total Price</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Paid</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Delivered</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {orders.map((order) => (
                            <tr className="odd:bg-gray-50" key={order._id}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{order._id}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">${order.totalPrice}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.isPaid ? 'Yes' : 'No'}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.isDelivered ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
