"use client"
import { useState } from 'react';

export default function SkillsSection() {
  const [currentSkill, setCurrentSkill] = useState('');
  const [skills, setSkills] = useState([]);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // Sample data for demonstration
  const sampleSkills = [
    { name: 'React', level: 70, target: 90 },
    { name: 'Node.js', level: 60, target: 85 },
    { name: 'UI/UX Design', level: 30, target: 70 },
    { name: 'AWS', level: 40, target: 80 },
    { name: 'GraphQL', level: 20, target: 75 },
  ];

  const learningResources = [
    {
      title: "Advanced React Course",
      provider: "Udemy",
      duration: "12 hours",
      rating: 4.8,
      link: "#"
    },
    {
      title: "Node.js Masterclass",
      provider: "Coursera",
      duration: "24 hours",
      rating: 4.7,
      link: "#"
    },
    {
      title: "UI/UX Design Principles",
      provider: "LinkedIn Learning",
      duration: "8 hours",
      rating: 4.5,
      link: "#"
    }
  ];

  const handleAddSkill = () => {
    if (currentSkill.trim() && skills.length < 5) {
      setSkills([...skills, currentSkill.trim()]);
      setCurrentSkill('');
    }
  };

  const handleAnalyze = () => {
    if (skills.length > 0) {
      setAnalysisComplete(true);
    }
  };

  const handleReset = () => {
    setSkills([]);
    setAnalysisComplete(false);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Skill Gap Detector</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover missing skills & get personalized learning suggestions to boost your career
          </p>
        </div>

        {!analysisComplete ? (
          <div className="bg-gray-800/50 p-8 rounded-2xl shadow-lg border border-gray-700">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Add your current skills</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  placeholder="Enter a skill (e.g., React, Python, UX Design)"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                />
                <button 
                  onClick={handleAddSkill}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium whitespace-nowrap"
                >
                  Add Skill
                </button>
              </div>
            </div>

            {skills.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">Your Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full flex items-center">
                      {skill}
                      <button 
                        onClick={() => setSkills(skills.filter((_, i) => i !== index))}
                        className="ml-2 text-xs"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-center mt-8">
              <button 
                onClick={handleAnalyze}
                disabled={skills.length === 0}
                className={`px-8 py-3 rounded-lg font-semibold ${skills.length > 0 ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 cursor-not-allowed'}`}
              >
                Analyze Skill Gaps
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gray-800/50 p-8 rounded-2xl shadow-lg border border-gray-700">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">Your Skill Gap Analysis</h3>
              <button 
                onClick={handleReset}
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Start Over
              </button>
            </div>

            <div className="mb-10">
              <h4 className="text-xl font-semibold mb-6">Skill Assessment</h4>
              <div className="space-y-6">
                {sampleSkills.map((skill, index) => (
                  <div key={index} className="bg-gray-700/50 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">
                        Current: {skill.level}% → Target: {skill.target}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-3 mb-2">
                      <div 
                        className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-300">
                      Gap: <span className="text-red-400">{skill.target - skill.level}%</span> • 
                      Priority: <span className={skill.target - skill.level > 30 ? "text-red-400" : "text-yellow-400"}>
                        {skill.target - skill.level > 30 ? "High" : "Medium"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6">Recommended Learning Resources</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {learningResources.map((resource, index) => (
                  <div key={index} className="bg-gray-700/50 p-4 rounded-xl hover:bg-gray-700 transition-colors">
                    <h5 className="font-medium mb-2">{resource.title}</h5>
                    <div className="flex items-center text-sm text-gray-300 mb-2">
                      <span className="mr-3">{resource.provider}</span>
                      <span className="flex items-center">
                        ⭐ {resource.rating}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400 mb-3">
                      Duration: {resource.duration}
                    </div>
                    <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">
                      Explore Course →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-6 bg-blue-900/20 rounded-xl border border-blue-700/30">
              <h4 className="text-lg font-semibold mb-3">🎯 Personalized Learning Plan</h4>
              <p className="text-gray-300 mb-4">
                Based on your skill gaps, we recommend focusing on React and UI/UX Design first. 
                Allocate 5-7 hours per week to see significant improvement in 2-3 months.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium">
                Generate Learning Schedule
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}