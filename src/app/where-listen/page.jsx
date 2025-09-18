"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import axiosInstance from "@/lib/axiosInstance/AxiosInstance";
import { useAutoSaveUser } from "@/lib/actions/auth";
import { useAuth } from "@/components/useAuth/useAuth";
import Loader from "@/components/sharedItems/Loader/Loader";

const WhereListen = () => {
  const { user, loading } = useAuth();

  const email = user?.email


  useAutoSaveUser();
  const router = useRouter();
  const [selectedSources, setSelectedSources] = useState([]);

  const sources = [
    "Friend",
    "Social Media",
    "Job Board",
    "Company Website",
    "Recruiter",
    "Other",
  ];

  const handleCheckboxChange = (source) => {
    if (selectedSources.includes(source)) {
      setSelectedSources(selectedSources.filter((item) => item !== source));
    } else {
      setSelectedSources([...selectedSources, source]);
    }
  };

  const handleSubmit = async () => {
    try {
      // ✅ use axiosInstance instead of fetch
      const response = await axiosInstance.put(`/users/${email}`, {
        sources: selectedSources,
      });

      if (response.status === 200 || response.status === 201) {
        router.push("/tags");
      } else {
        console.error("Failed to submit sources");
      }
    } catch (error) {
      console.error(
        "Error submitting sources:",
        error.response?.data || error.message
      );
    }
  };

  if(loading){
    return <Loader></Loader>
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
        <div className="bg-gray-600 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            How did you hear about CareerCrafter?
          </h2>
          <div className="space-y-4">
            {sources.map((source) => (
              <label key={source} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedSources.includes(source)}
                  onChange={() => handleCheckboxChange(source)}
                  className="h-5 w-5 cursor-pointer text-primary"
                />
                <span className="text-white">{source}</span>
              </label>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-primary cursor-pointer text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhereListen;
