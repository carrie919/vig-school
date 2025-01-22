"use client";

import * as React from "react";

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Facilities
          </h2>
          <div className="w-24 h-1 bg-[#1e3a8a] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Modern Classrooms
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our classrooms are equipped with the latest technology to enhance
              the learning experience and provide a comfortable environment for
              students.
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed mt-4">
              <li>Well-ventilated classrooms, with lights and fans</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Sports Facilities
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We offer a wide range of sports facilities to encourage physical
              fitness and teamwork among students.
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed mt-4">
              <li>Sports and Games Complex with facilities for various games including Basketball and Handball</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Libraries
            </h3>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>Separate Libraries for all the sections (5 libraries including KG Library)</li>
              <li>An exclusive Science and Technology Library</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Computer Centres
            </h3>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>4 Computer Centres with 200 computers, printers, accessories with internet facility</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Science Laboratories
            </h3>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>Well-equipped Science Laboratories (Physics, Chemistry, Biology Labs of 2500 sq.ft. each)</li>
              <li>Maths Lab</li>
              <li>Atal Tinkering Lab</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Audio-Visual Facilities
            </h3>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>Audio-visual halls, with LCD projectors, Smart Boards etc.</li>
              <li>Seminar Hall</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Art and Craft
            </h3>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>Art and Craft Room</li>
              <li>Activity Halls in School Section and KG Section</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Additional Facilities
            </h3>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>Reprographic Centre for in-house printing</li>
              <li>Diesel Generators as stand-by, to supply power</li>
              <li>Bio-gas plant</li>
              <li>Water coolers with built-in filters</li>
              <li>Fire Extinguishers throughout the School buildings</li>
              <li>GPS, CC cameras, Speed Governors and Fire Extinguishers in School Buses</li>
              <li>Spacious Mess Hall</li>
              <li>In-house Bakery attached to Mess</li>
              <li>Dish washer and UV Water Purifier in the Kitchen</li>
              <li>Science Park with 20 working models</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
