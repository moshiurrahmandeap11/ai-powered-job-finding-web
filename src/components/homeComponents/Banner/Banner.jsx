"use client";
import React, { useState } from "react";

const Banner = () => {
  // Merged job posts data
  const jobPosts = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      posted: "2 days ago",
      logo: "💼",
      description:
        "Join our innovative team to build scalable web applications using React, Node.js, and AWS. Collaborate with designers to create user-friendly interfaces and backend services. At least 2 years of experience required.",
      requirements: ["React.js", "Node.js", "AWS", "Git"],
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "Remote",
      type: "Contract",
      salary: "$80 - $100/hour",
      posted: "1 day ago",
      logo: "🎨",
      description:
        "Design user-centric interfaces for cutting-edge applications. Work closely with developers to create seamless user experiences. 3+ years of experience in UX/UI design preferred.",
      requirements: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    },
  ];

  // Merged normal posts data
  const normalPosts = [
    {
      id: 1,
      title: "How to Ace Your Next Technical Interview",
      author: "Jane Smith",
      authorTitle: "Senior Developer at Google",
      excerpt:
        "Looking to switch careers? Remember, networking is key! Connect with professionals on LinkedIn and attend virtual events. Your next opportunity might be just one conversation away.",
      likes: 245,
      comments: 32,
      shares: 18,
      date: "Sep 15, 2025",
    },
    {
      id: 2,
      title: "The Most In-Demand Tech Skills for 2023",
      author: "Tech Careers Magazine",
      authorTitle: "Industry Insights",
      excerpt:
        "Pro tip: Tailor your resume for every application. Highlight skills that match the job description to stand out. Don't forget to quantify your achievements!",
      likes: 512,
      comments: 47,
      shares: 29,
      date: "Sep 16, 2025",
    },
    {
      id: 3,
      title: "Building a Personal Brand as a Developer",
      author: "Alex Johnson",
      authorTitle: "Tech Influencer",
      excerpt:
        "Work-life balance is crucial. Set boundaries, prioritize tasks, and take breaks. A happy you is a productive you! What's your go-to for staying balanced?",
      likes: 387,
      comments: 41,
      shares: 56,
      date: "Sep 17, 2025",
    },
  ];

  const [activeTab, setActiveTab] = useState("jobs");

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden pt-30 pb-16 px-6">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main banner content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CareerCrafter <span className="text-blue-400">🚀</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            AI-Powered Job Matching & Career Guidance Portal. Find your dream job,
            detect skill gaps, build winning resumes & shape your career path.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Get Started Free
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-300">
                50K+
              </div>
              <div className="text-sm md:text-base">Jobs Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-300">
                92%
              </div>
              <div className="text-sm md:text-base">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-300">
                10K+
              </div>
              <div className="text-sm md:text-base">Career Advices</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-300">
                98%
              </div>
              <div className="text-sm md:text-base">User Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Tabs for job posts and career advice */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mt-8">
          <div className="flex border-b border-gray-700 mb-6">
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === "jobs"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-300"
              }`}
              onClick={() => setActiveTab("jobs")}
            >
              Featured Jobs
            </button>
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === "advice"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-300"
              }`}
              onClick={() => setActiveTab("advice")}
            >
              Career Advice
            </button>
          </div>

          {activeTab === "jobs" ? (
            <div className="grid md:grid-cols-2 gap-6">
              {jobPosts.map((job) => (
                <div
                  key={job.id}
                  className="bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-xl transition-all duration-300 border border-gray-700/30"
                >
                  <div className="flex items-start mb-4">
                    <div className="text-3xl mr-4">{job.logo}</div>
                    <div>
                      <h3 className="font-bold text-lg">{job.title}</h3>
                      <p className="text-blue-300">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-900/30 text-blue-300 text-xs px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                      {job.location}
                    </span>
                    <span className="bg-green-900/30 text-green-300 text-xs px-3 py-1 rounded-full">
                      {job.salary}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <ul className="list-disc list-inside mb-4 text-sm text-gray-300">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{job.posted}</span>
                    <button className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {normalPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-xl transition-all duration-300 border border-gray-700/30"
                >
                  <h3 className="font-bold text-lg mb-3">{post.title}</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white mr-3">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{post.author}</p>
                      <p className="text-xs text-gray-400">{post.authorTitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>👍 {post.likes}</span>
                    <span>💬 {post.comments}</span>
                    <span>↗️ {post.shares}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Banner;