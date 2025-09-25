import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import {
    Users,
    Contact,
    UsersRound,
    Calendar,
    FileText,
    Newspaper,
    Hash,
} from "lucide-react";

const Page = () => {
    return (
        <div>
            <Navbar />

            <div className="flex gap-4 p-4">
                {/* Left Sidebar */}
                <div className="w-1/4 border rounded-lg bg-white shadow-sm">
                    <div className='w-full border-b'>
                        <h3 className="text-lg font-semibold p-4">Manage my network</h3>
                    </div>
                    
                    <ul className="space-y-2 text-sm px-4">
                        <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
                            <Users className="w-4 h-4 text-gray-600" />
                            Connections
                        </li>
                        <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
                            <Contact className="w-4 h-4 text-gray-600" />
                            Contacts
                        </li>
                        <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
                            <UsersRound className="w-4 h-4 text-gray-600" />
                            Groups
                        </li>
                        <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
                            <Calendar className="w-4 h-4 text-gray-600" />
                            Events
                        </li>
                        <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
                            <FileText className="w-4 h-4 text-gray-600" />
                            Pages
                        </li>
                        <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
                            <Newspaper className="w-4 h-4 text-gray-600" />
                            Newsletters
                        </li>
                        <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
                            <Hash className="w-4 h-4 text-gray-600" />
                            Hashtags
                        </li>
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
