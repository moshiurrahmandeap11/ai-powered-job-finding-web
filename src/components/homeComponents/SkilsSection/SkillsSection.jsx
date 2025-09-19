export default function SkillsSection() {
  return (
    <section className="bg-gray-800 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Skill Gap Detector</h2>
      <p className="text-center max-w-2xl mx-auto">
        Discover missing skills & get learning suggestions to boost your career.
      </p>
      <div className="mt-10 flex justify-center">
        <input
          type="text"
          placeholder="Enter your skills..."
          className="px-4 py-2 rounded-l-lg bg-gray-700 text-white"
        />
        <button className="bg-blue-600 px-6 py-2 rounded-r-lg">
          Analyze
        </button>
      </div>
    </section>
  );
}
