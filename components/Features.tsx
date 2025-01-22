import { BookOpen, Users, Trophy, Heart } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-[#1e3a8a] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<BookOpen className="w-12 h-12 text-[#1e3a8a]" />}
            title="Quality Education"
            description="Expert faculty and modern teaching methods ensure comprehensive learning"
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-[#1e3a8a]" />}
            title="Small Class Size"
            description="Individual attention and personalized learning experience"
          />
          <FeatureCard
            icon={<Trophy className="w-12 h-12 text-[#1e3a8a]" />}
            title="Extra Curricular"
            description="Wide range of activities for holistic development"
          />
          <FeatureCard
            icon={<Heart className="w-12 h-12 text-[#1e3a8a]" />}
            title="Safe Environment"
            description="Secure and nurturing atmosphere for students"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}