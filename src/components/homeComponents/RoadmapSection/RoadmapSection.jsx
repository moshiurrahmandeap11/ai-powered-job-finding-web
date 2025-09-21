export default function RoadmapSection() {
  const roadmapSteps = [
    {
      step: 1,
      title: "Skills Assessment",
      description: "Complete our AI-powered assessment to identify your current skills and career aspirations",
      icon: "📊",
      duration: "15 min",
      color: "bg-blue-500"
    },
    {
      step: 2,
      title: "Personalized Roadmap",
      description: "Receive a customized career path with milestones tailored to your goals",
      icon: "🗺️",
      duration: "Instant",
      color: "bg-purple-500"
    },
    {
      step: 3,
      title: "Skill Development",
      description: "Bridge skill gaps with curated learning resources and courses",
      icon: "🛠️",
      duration: "2-6 months",
      color: "bg-green-500"
    },
    {
      step: 4,
      title: "Job Application",
      description: "Apply to matched positions with an AI-optimized resume and cover letter",
      icon: "📝",
      duration: "1-4 weeks",
      color: "bg-yellow-500"
    },
    {
      step: 5,
      title: "Interview Preparation",
      description: "Practice with mock interviews and get AI-powered feedback",
      icon: "🎤",
      duration: "2-3 weeks",
      color: "bg-red-500"
    },
    {
      step: 6,
      title: "Career Growth",
      description: "Continue growing with ongoing skill development and advancement opportunities",
      icon: "🚀",
      duration: "Ongoing",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Career Roadmap</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visual guide showing your career growth path with AI-powered insights and personalized milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector line */}
          <div className="absolute left-4 md:left-1/2 top-10 bottom-10 w-1 bg-blue-400/30 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {roadmapSteps.map((step, index) => (
              <div 
                key={index} 
                className={`bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 ${step.color} relative`}
              >
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gray-900 border-4 border-gray-800 flex items-center justify-center font-bold text-white">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>
                
                {/* Title and duration */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-4">{step.description}</p>
                
                {/* Progress indicator (example) */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full ${step.color}`}
                    style={{ width: `${Math.min(step.step * 15, 100)}%` }}
                  ></div>
                </div>
                
                {/* Action button */}
                <button className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center mt-2">
                  Explore resources
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Start Your Career Journey
          </button>
        </div>
      </div>
    </section>
  );
}