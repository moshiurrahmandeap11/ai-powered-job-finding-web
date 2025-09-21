export default function FeaturesSection() {
  const features = [
    {
      title: "Smart Job Suggestions",
      description: "AI-powered job matching based on your skills, experience, and preferences",
      icon: "🔍",
      color: "bg-blue-500"
    },
    {
      title: "Career Roadmap",
      description: "Visual guidance showing your potential career growth path and milestones",
      icon: "🗺️",
      color: "bg-green-500"
    },
    {
      title: "Skill Gap Detector",
      description: "Identify missing skills for your target roles and get learning recommendations",
      icon: "📊",
      color: "bg-purple-500"
    },
    {
      title: "AI Resume Builder",
      description: "Create and optimize ATS-friendly resumes with AI-powered suggestions",
      icon: "📝",
      color: "bg-yellow-500"
    },
    {
      title: "Salary Insights",
      description: "Access real-time salary data for your role and region to negotiate better offers",
      icon: "💰",
      color: "bg-teal-500"
    },
    {
      title: "Career Personality Test",
      description: "Discover the best career fit based on your personality traits and strengths",
      icon: "🧠",
      color: "bg-pink-500"
    },
    {
      title: "Company Fit Checker",
      description: "Evaluate how well you align with a company's culture and values",
      icon: "🏢",
      color: "bg-indigo-500"
    },
    {
      title: "Interview Helper",
      description: "Practice with AI-powered mock interviews and get personalized feedback",
      icon: "🎤",
      color: "bg-red-500"
    },
    {
      title: "Mentorship Hub",
      description: "Connect with experienced mentors and industry experts in your field",
      icon: "👥",
      color: "bg-orange-500"
    },
    {
      title: "Job Market Trends",
      description: "Stay updated with visual dashboards of hiring trends and industry demands",
      icon: "📈",
      color: "bg-cyan-500"
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Leverage our AI-powered tools to advance your career with personalized insights and recommendations
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 group"
          >
            <div className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300 mb-4">{feature.description}</p>
            <button className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
          Explore All Features
        </button>
      </div>
    </section>
  );
}