"use client";

import * as React from "react";

export default function UpcomingEvents() {
  return (
    <section id="upcoming-events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-[#1e3a8a] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Event 1
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Details about the first upcoming event, including date, time, and
              location.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Event 2
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Details about the second upcoming event, including date, time, and
              location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
