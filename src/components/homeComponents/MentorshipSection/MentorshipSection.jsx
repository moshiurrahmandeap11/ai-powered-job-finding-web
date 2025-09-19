export default function MentorshipSection() {
  return (
    <section className="bg-gray-800 text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Mentorship Hub</h2>
      <p className="max-w-2xl mx-auto">
        Connect with mentors & industry experts to grow your career.
      </p>
      <div className="mt-10 flex justify-center gap-6">
        <div className="bg-gray-700 p-6 rounded-lg">👨‍🏫 Mentor 1</div>
        <div className="bg-gray-700 p-6 rounded-lg">👩‍🏫 Mentor 2</div>
        <div className="bg-gray-700 p-6 rounded-lg">👨‍💻 Mentor 3</div>
      </div>
    </section>
  );
}
