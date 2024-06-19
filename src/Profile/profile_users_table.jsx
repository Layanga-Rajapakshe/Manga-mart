import React from 'react';
import { useGetUsersQuery } from '../redux/api/usersApiSlice';


export default function ProfileUsersTable() {
    const { data: usersList, isLoading, error } = useGetUsersQuery();

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
                    <h3 className="font-semibold px-4 py-2 text-gray-900 dark:text-gray-50 bg-gray-100">Users</h3>
                </div>
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Username</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Admin</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {usersList.map((user) => (
                            <tr className="odd:bg-gray-50" key={user._id}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{user._id}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.username}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.isAdmin ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
