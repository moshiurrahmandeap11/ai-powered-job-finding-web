export default function MentorshipSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Mentorship Hub
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Connect with experienced mentors & industry experts to accelerate your career growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mentor 1 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl">
                  👨‍🏫
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 text-xs rounded-full px-2 py-1">
                  Online
                </div>
              </div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-gray-400">Senior Product Manager</p>
              <div className="flex mt-2">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-gray-500 ml-2">4.9</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-900 text-purple-200 text-xs px-3 py-1 rounded-full">Product Strategy</span>
                <span className="bg-purple-900 text-purple-200 text-xs px-3 py-1 rounded-full">UX Research</span>
                <span className="bg-purple-900 text-purple-200 text-xs px-3 py-1 rounded-full">Leadership</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">Starting at</p>
                <p className="font-bold">$89/hr</p>
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                Connect
              </button>
            </div>
          </div>
          
          {/* Mentor 2 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-pink-500 transition-all duration-300 group">
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center text-3xl">
                  👩‍🏫
                </div>
                <div className="absolute -bottom-1 -right-1 bg-gray-500 text-xs rounded-full px-2 py-1">
                  Offline
                </div>
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-gray-400">Lead Software Engineer</p>
              <div className="flex mt-2">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-gray-500 ml-2">5.0</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-900 text-pink-200 text-xs px-3 py-1 rounded-full">React.js</span>
                <span className="bg-pink-900 text-pink-200 text-xs px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-pink-900 text-pink-200 text-xs px-3 py-1 rounded-full">System Design</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">Starting at</p>
                <p className="font-bold">$95/hr</p>
              </div>
              <button className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                Connect
              </button>
            </div>
          </div>
          
          {/* Mentor 3 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-3xl">
                  👨‍💻
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 text-xs rounded-full px-2 py-1">
                  Online
                </div>
              </div>
              <h3 className="text-xl font-semibold">David Kim</h3>
              <p className="text-gray-400">UX Design Director</p>
              <div className="flex mt-2">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-gray-500 ml-2">4.8</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-900 text-blue-200 text-xs px-3 py-1 rounded-full">UI/UX Design</span>
                <span className="bg-blue-900 text-blue-200 text-xs px-3 py-1 rounded-full">Design Systems</span>
                <span className="bg-blue-900 text-blue-200 text-xs px-3 py-1 rounded-full">Figma</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">Starting at</p>
                <p className="font-bold">$82/hr</p>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                Connect
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center">
            Explore All Mentors
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}