export default function InsightsSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Salary Insights & Job Trends</h2>
      <p className="max-w-2xl mx-auto">
        Get real-time salary data and visualize job market trends.
      </p>
      <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg">💰 Salary Data</div>
        <div className="bg-gray-800 p-6 rounded-lg">📊 Job Market Trends</div>
      </div>
    </section>
  );
}