import React from "react";
import Image from "next/image";

const HomeContent: React.FC = () => {
  return (
    <div>
      <div className="w-full max-w-6xl mx-auto p-8">
        <div className="text-gray-800 leading-relaxed">
          <span className="font-semibold">Vignan Educational Institutions</span>
          <span className="text-lg">
            , a leading Educational Institutions in the region was founded by
            Sri. Tanneeru Nageswara Rao, who had extensive knowledge and
            interest in the field of Education and creating a better society.
            The natural aura blended with its passion to provide the best for
            the students to learn and explore has truly created a powerful
            atmosphere for everyone to nurture their skills and excel. Vignan
            shapes individuals who are an optimum mix of right attitude, skill,
            culture & knowledge.
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left side - Image */}
        <div className="lg:w-2/3">
          <Image
            src={"https://picsum.photos/id/114/4000/2670"}
            alt="Slide"
            width={4000}
            height={2670}
          />
        </div>

        {/* Right side - Content */}
        <div className="lg:w-1/3 p-8 bg-orange-50">
          <div className="space-y-6">
            <div className="text-gray-800">
              <p className="italic mb-4">To quote the words of the Founder,</p>
              <p className="text-lg mb-6">
                &quot;As the Children of today will make the India of tomorrow,
                we try to accumulate all the best qualities and skills for
                children , right from start. &quot;
              </p>
            </div>

            <div>
              <span className="font-bold text-red-800">Vignan</span>
              <p className="mt-2 text-gray-700">
                always strives to provide the best possible facilities to its
                students, including a highly qualified teaching faculty, with
                the ultimate aim of providing an education of the highest order.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto my-10 p-8 gap-12">
        {/* Mission Statement Section */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-6 text-red-800">
            Mission Statement
          </h1>
          <p className="text-gray-800 text-lg leading-relaxed">
            The school seeks to provide Excellent Education with a view to
            shaping sensible , patriotic and responsible citizens for the future
            of our country. The children educated here must be Intellectually
            Robust, Morally Upright and socially aware.
          </p>
        </div>

        {/* Upcoming Events Section */}
        <div className="lg:w-1/3">
          <h1 className="text-4xl font-bold mb-6 text-red-800">
            Upcoming Events
          </h1>
          <div className="space-y-4">
            <div className="py-2 border-b border-gray-200">
              <p className="text-lg text-gray-800">Kindergarten Sports Day</p>
            </div>
            <div className="py-2 border-b border-gray-200">
              <p className="text-lg text-gray-800">Commencement Day 2024</p>
            </div>
            <div className="py-2 border-b border-gray-200">
              <p className="text-lg text-gray-800">UKG Convocation 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
