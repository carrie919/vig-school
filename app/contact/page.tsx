"use client";

import * as React from "react";

export default function ContactUs() {
  return (
    <section id="contact-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[#1e3a8a] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Wish to enquire about admissions, syllabus, or anything else? You can walk in during office hours, give us a call or simply submit the form here.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              <strong>Phone:</strong> Office: 2561199, 2562400<br />
              <strong>STD Code:</strong> 0820<br />
              <strong>Mobile No.:</strong> 918277061199, 917892045200, 917349151977<br />
              <strong>Kindergarten:</strong> 2561899, 9741206119<br />
              <strong>Hostel/Vehicles Office:</strong> 2561110<br />
              <strong>Girls’ Hostel:</strong> 9008679814, 9449453432<br />
              <strong>Boys’ Hostel:</strong> 9008678548, 9449417620<br />
              <strong>Email:</strong> litroc77@hotmail.com, principal@vignanschool.edu.in, director@vignanschool.edu.in
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              <strong>School Office Hours:</strong><br />
              Monday to Friday: 09.30 a.m. to 04.30 p.m.<br />
              Saturday: 09.30 a.m. to 12.30 p.m.
            </p>
          </div> */}

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Visit Us
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Come visit our campus to learn more about our facilities and programs.
            </p>
            {/* <p className="text-gray-600 leading-relaxed mt-4">
              <strong>Address:</strong><br />
              VIGNAN HIGH SCHOOL<br />
              Priority Highlands Post Box No. 7<br />
              Brahmavar 576 213, Udupi District<br />
              Karnataka State, India
            </p> */}
            <p className="text-gray-600 leading-relaxed mt-4">
              <strong>Address:</strong><br />
              6-1126, opp. market yard, vignan nagar,<br />
              Jaggaiahpet, Andhra Pradesh 521175<br />
              <strong>Phone:</strong> 08654223177
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
