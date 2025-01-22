"use client";

import * as React from "react";

export default function Circulars() {
  return (
    <section id="circulars" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Circulars
          </h2>
          <div className="w-24 h-1 bg-[#1e3a8a] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Latest Circulars
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Stay updated with the latest circulars and announcements from our institution.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Archive
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access past circulars and important notices in our archive section.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
