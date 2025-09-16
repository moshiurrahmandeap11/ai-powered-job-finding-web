import React from 'react';

const Banner = () => {
  // Dummy data for 2 job posts
  const jobPosts = [
    {
      id: 1,
      title: 'Software Engineer - Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      salary: '$80,000 - $120,000',
      description: 'Join our innovative team to build scalable web applications using React, Node.js, and AWS. Collaborate with designers to create user-friendly interfaces and backend services. At least 2 years of experience required.',
      requirements: ['React.js', 'Node.js', 'AWS', 'Git'],
    },
    {
      id: 2,
      title: 'Senior iOS Developer',
      company: 'InnovateApps LLC',
      location: 'New York, NY',
      salary: '$100,000 - $150,000',
      description: 'Develop cutting-edge iOS apps with Swift and React Native. Work on aviation software projects with equity options. 5+ years of experience in mobile development preferred.',
      requirements: ['Swift', 'React Native', 'iOS SDK', 'Equity Stake'],
    },
  ];

  // Dummy data for 3 normal posts (career advice/social media style)
  const normalPosts = [
    {
      id: 1,
      author: 'CareerGuru',
      content: 'Looking to switch careers? Remember, networking is key! Connect with professionals on LinkedIn and attend virtual events. Your next opportunity might be just one conversation away. #CareerAdvice #Networking',
      likes: 45,
      date: 'Sep 15, 2025',
    },
    {
      id: 2,
      author: 'JobHunterPro',
      content: 'Pro tip: Tailor your resume for every application. Highlight skills that match the job description to stand out. Don\'t forget to quantify your achievements! #JobSearch #ResumeTips',
      likes: 72,
      date: 'Sep 16, 2025',
    },
    {
      id: 3,
      author: 'SuccessPath',
      content: 'Work-life balance is crucial. Set boundaries, prioritize tasks, and take breaks. A happy you is a productive you! What\'s your go-to for staying balanced? #WorkLifeBalance #CareerGrowth',
      likes: 31,
      date: 'Sep 17, 2025',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Job Posts Section - First (Top) */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center lg:text-left text-gray-800">Featured Job Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobPosts.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-primary">{job.title}</h3>
              <p className="text-lg font-medium mb-1 text-gray-700">{job.company}</p>
              <p className="text-sm text-gray-500 mb-2">{job.location} | {job.salary}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
              <ul className="list-disc list-inside mb-4 text-sm text-gray-600">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300 font-semibold">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Normal Posts Section - Second (Below) */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center lg:text-left text-gray-800">Career Insights & Tips</h2>
        <div className="space-y-4">
          {normalPosts.map((post) => (
            <div key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">{post.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{post.author}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">{post.likes} likes</span>
                <button className="hover:text-primary transition-colors">Comment</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Banner;