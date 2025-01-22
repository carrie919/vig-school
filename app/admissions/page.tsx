"use client";

import * as React from "react";

export default function Admission() {
  return (
    <section id="admission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Admission Process
          </h2>
          <div className="w-24 h-1 bg-[#1e3a8a] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Application
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Learn about the application process, required documents, and
              important deadlines for admission.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Eligibility
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Find out the eligibility criteria for different programs and
              courses offered at our institution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
