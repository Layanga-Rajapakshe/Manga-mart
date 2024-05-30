import React from 'react';
import Sidebar from './sidebar';
import MainContent from './maincontent';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        {/* Your dashboard content here */}
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <div className="flex h-screen">
                                    <Sidebar />
                                    <MainContent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
