import Navbar from '@/components/navbar/Navbar';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Navbar />

            <div className="flex gap-4 p-4">
                {/* Left Sidebar */}
                <div className="w-1/4 border rounded-lg bg-white shadow-sm p-4">
                    <h3 className="text-lg font-semibold mb-3">Manage my network</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Connections</li>
                        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Contacts</li>
                        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Groups</li>
                        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Events</li>
                        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Pages</li>
                        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Newsletters</li>
                        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Hashtags</li>
                    </ul>
                </div>

                {/* Right Content */}
                <div className="flex-1 border rounded-lg bg-white shadow-sm p-4">
                    {/* Invitations Section */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">Invitations</h3>
                        <div className="border p-3 rounded mb-2 flex items-center justify-between">
                            <div>
                                <p className="font-medium">John Doe</p>
                                <p className="text-sm text-gray-600">Software Engineer at XYZ</p>
                            </div>
                            <div className="space-x-2">
                                <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">Ignore</button>
                                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Accept</button>
                            </div>
                        </div>
                    </div>

                    {/* Suggested Connections */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">People you may know</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5, 6].map((person) => (
                                <div key={person} className="border rounded-lg p-3 text-center shadow-sm hover:shadow-md transition">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-gray-200 mb-2"></div>
                                    <p className="font-medium">Person {person}</p>
                                    <p className="text-sm text-gray-600">Job Title</p>
                                    <button className="mt-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                                        Connect
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
