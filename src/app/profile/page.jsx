"use client";
import Navbar from "@/components/navbar/Navbar";
import Loader from "@/components/sharedItems/Loader/Loader";
import { useAuth } from "@/components/useAuth/useAuth";
import { handleLogout } from "@/lib/actions/auth";
import axiosInstance from "@/lib/axiosInstance/AxiosInstance";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const { user, loading } = useAuth();
  const [profile, setProfile] = useState();

  const email = user?.email

useEffect(() => {
  if (!email) return; // email available na thakle fetch na koro

  const fetchProfile = async () => {
    try {
      const response = await axiosInstance.get(`/users/email/${email}`);
      setProfile(response.data);
    } catch (err) {
      console.log("Failed to load profile", err.response?.data || err.message);
    }
  };

  fetchProfile();
}, [email]);


  if (loading) {
    return <Loader />;
  }

  const getPurposeDisplay = (purpose) => {
    const purposeMap = {
      find_job: { title: "Find a Job", icon: "💼", color: "blue" },
      career_growth: { title: "Career Growth", icon: "📈", color: "green" },
      skill_development: { title: "Skill Development", icon: "🎓", color: "purple" },
      networking: { title: "Professional Networking", icon: "🤝", color: "orange" },
      freelancing: { title: "Start Freelancing", icon: "💻", color: "cyan" },
      startup: { title: "Build a Startup", icon: "🚀", color: "red" },
      mentorship: { title: "Get Mentorship", icon: "👨‍🏫", color: "indigo" },
      portfolio: { title: "Build Portfolio", icon: "🎨", color: "pink" },
      interview_prep: { title: "Interview Preparation", icon: "🎯", color: "yellow" },
      career_change: { title: "Career Change", icon: "🔄", color: "teal" },
      salary_negotiation: { title: "Salary Negotiation", icon: "💰", color: "emerald" },
      explore: { title: "Just Exploring", icon: "🔍", color: "gray" }
    };
    return purposeMap[purpose] || { title: "Unknown", icon: "❓", color: "gray" };
  };

  const purposeData = getPurposeDisplay(user?.purpose);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="hidden md:block h-16"></div>
      <div className="md:hidden h-16"></div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Image */}
            <div className="relative">
              <img
                src={user?.image || "/default-avatar.png"}
                alt={user?.name || "Profile"}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-gray-600 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                {profile?.premium === "free" ? "Free" : "Premium"}
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {profile?.name || "Anonymous User"}
              </h1>
              <p className="text-gray-400 text-lg mb-4">{user?.email}</p>
              
              {/* User Stats */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                <div className="bg-gray-700 px-4 py-2 rounded-lg">
                  <span className="text-gray-400 text-sm">Role:</span>
                  <span className="text-white font-semibold ml-2 capitalize">
                    {profile?.role || "User"}
                  </span>
                </div>
                <div className="bg-gray-700 px-4 py-2 rounded-lg">
                  <span className="text-gray-400 text-sm">Provider:</span>
                  <span className="text-white font-semibold ml-2 capitalize">
                    {profile?.provider || "Unknown"}
                  </span>
                </div>
              </div>

              {/* Logout Button */}
              <button 
                className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200" 
                onClick={handleLogout}
              >
                 Logout
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Purpose Section */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
              🎯 Your Goal
            </h2>
            <p>{profile?.purpose}</p>
          </div>

          {/* Sources Section */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
              📡 How You Found Us
            </h2>
            {profile?.sources && profile.sources.length > 0 ? (
              <div className="space-y-2">
                {profile.sources.map((source, index) => (
                  <div key={index} className="bg-gray-700 px-4 py-2 rounded-lg">
                    <span className="text-white font-medium">{source}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No sources selected</p>
            )}
          </div>

          {/* Tags Section - Full Width */}
          <div className="lg:col-span-2 bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
              🏷️ Your Developer Tags
            </h2>
            {profile?.tags && profile.tags.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {profile.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No tags selected yet</p>
            )}
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Profile Completion */}
          <div className="bg-gray-800 rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Profile</h3>
            <p className="text-sm text-gray-400">
              {user?.tags?.length && user?.purpose && user?.sources?.length 
                ? "Complete" 
                : "Incomplete"}
            </p>
          </div>

          {/* Account Type */}
          <div className="bg-gray-800 rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl mb-2">
              {profile?.premium === "free" ? "🆓" : "⭐"}
            </div>
            <h3 className="font-semibold text-white mb-1">Account</h3>
            <p className="text-sm text-gray-400 capitalize">
              {profile?.premium || "Free"}
            </p>
          </div>

          {/* Tags Count */}
          <div className="bg-gray-800 rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl mb-2">🏷️</div>
            <h3 className="font-semibold text-white mb-1">Skills</h3>
            <p className="text-sm text-gray-400">
              {profile?.tags?.length || 0} Tags
            </p>
          </div>

          {/* Join Status */}
          <div className="bg-gray-800 rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl mb-2">🎉</div>
            <h3 className="font-semibold text-white mb-1">Status</h3>
            <p className="text-sm text-gray-400">Active Member</p>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 mb-8">
          <p className="text-gray-500">
            Welcome to CareerCrafter! 🚀 Your journey to career success starts here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;