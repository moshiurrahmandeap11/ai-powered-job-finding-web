export default function InsightsSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Salary Insights & Job Trends
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get real-time salary data and visualize job market trends to make informed career decisions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Salary Insights Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-900 p-3 rounded-lg mr-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold">Salary Data by Role</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>Software Engineer</span>
                <span className="font-bold">$112,300</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>Data Scientist</span>
                <span className="font-bold">$125,400</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '92%'}}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>Product Manager</span>
                <span className="font-bold">$108,700</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '82%'}}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-700 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-300">Entry Level</p>
                <p className="font-bold text-lg">$87,500</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-300">Senior Level</p>
                <p className="font-bold text-lg">$145,800</p>
              </div>
            </div>
          </div>
          
          {/* Job Market Trends Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-purple-900 p-3 rounded-lg mr-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold">Job Market Trends</h3>
            </div>
            
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-300">Remote Jobs</span>
              <span className="text-sm font-bold flex items-center">
                12.8% 
                <span className="text-green-500 ml-2 text-xs flex items-center">
                  ↗ 3.4%
                </span>
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-6">
              <div className="bg-green-500 h-2.5 rounded-full" style={{width: '65%'}}></div>
            </div>
            
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-300">Hybrid Roles</span>
              <span className="text-sm font-bold flex items-center">
                24.5% 
                <span className="text-green-500 ml-2 text-xs flex items-center">
                  ↗ 5.1%
                </span>
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-6">
              <div className="bg-green-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
            </div>
            
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-300">Tech Industry</span>
              <span className="text-sm font-bold flex items-center">
                18.2% 
                <span className="text-green-500 ml-2 text-xs flex items-center">
                  ↗ 2.7%
                </span>
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-6">
              <div className="bg-green-500 h-2.5 rounded-full" style={{width: '55%'}}></div>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg mt-8">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-300">Job Growth Rate</p>
                  <p className="font-bold text-lg">7.2%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-300">Avg. Hiring Time</p>
                  <p className="font-bold text-lg">34 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
            Explore All Insights
          </button>
        </div>
      </div>
    </section>
  );
}