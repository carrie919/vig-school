"use client";

import * as React from "react";
import Image from "next/image";
import branch_01 from "@/assets/branches/branch_01.jpg";
import branch_00 from "@/assets/branches/branch_00.jpg";

export default function LittleRockIndianSchool() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vignan Educational Institutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src={branch_00}
              alt="Little Rock Indian School Campus"
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              src={branch_01}
              alt="Little Rock Indian School Campus"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Objectives</h3>
          <ul className="space-y-2 text-gray-600 leading-relaxed">
            <li>
              a) To create a nurturing and inclusive learning environment where
              every student can discover their potential and develop into
              confident, responsible, and successful individuals.
            </li>
            <li>
              b) To provide quality education through innovative teaching methods,
              foster critical thinking, and instill values that prepare students
              for future challenges while maintaining strong cultural roots.
            </li>
            <li>
              c) To shape God-fearing, patriotic and responsible citizens.
            </li>
            <li>
              d) To cater to the needs of the parents who want for their children an education that makes a difference.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

