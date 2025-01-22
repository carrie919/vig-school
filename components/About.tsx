export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            About Our School
          </h2>
          <div className="w-24 h-1 bg-[#1e3a8a] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To create a nurturing and inclusive learning environment where every student can discover their potential and develop into confident, responsible, and successful individuals.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide quality education through innovative teaching methods, foster critical thinking, and instill values that prepare students for future challenges while maintaining strong cultural roots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}