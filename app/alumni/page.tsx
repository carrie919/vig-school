"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  yearOfPassing: Yup.string().required("Required"),
  class: Yup.string().required("Required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .max(10)
    .min(10)
    .required("Required"),
  address: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  occupation: Yup.string().required("Required"),
});

export default function Alumni() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      yearOfPassing: "",
      class: "",
      mobile: "",
      address: "",
      email: "",
      occupation: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await addDoc(collection(db, "alumni"), values);
        setIsModalOpen(true);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
  });

  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
  const years = ["2020", "2019", "2018", "2017", "2016"];

  return (
    <section id="alumni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Alumni
          </h2>
          <div className="w-24 h-1 bg-[#1e3a8a] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Letter to Old Students
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Dear student,
              <br />
              <br />
              Greetings from your alma-mater, Little Rock.
              <br />
              <br />
              I am sure you would like to be in touch with your School, on a
              regular basis. Let me make a few suggestions in this connection:
              <br />
              <br />
              a) Visit the Campus: You are always welcome to the campus. Please
              find time to visit us whenever you come home to visit your parents
              and dear ones.
              <br />
              <br />
              b) Start Alumni Chapters: Let me also suggest that in cities with
              a concentration of our old students, we start Alumni Chapters.
              Recently when we visited Dubai, a few old students met us and they
              have assured us that they would initiate the process of gathering
              and organizing old students living in Dubai and in other Gulf
              countries and set up an Alumni Chapter there. Similarly students
              from Bengaluru have promised us that they would also do the same.
              I request those living in such places to take this initiative. It
              would be great if you could do this. It’s good to keep alive our
              contacts and also your mutual contacts. Many reputed schools have
              similar Alumni Chapters. Let’s do the same.
              <br />
              <br />
              c) Alumni Reunion: We may consider having an Alumni Reunion next
              year when we complete 40 years and celebrate our Ruby Anniversary.
              We shall give sufficient advance notice about this, to facilitate
              maximum attendance.
              <br />
              <br />
              d) Alumni Registration: We have a provision to register our
              students in our website. Please open the link and complete the
              form given there. This will help us communicate with you whenever
              needed.
              <br />
              <br />
              e) Alumni Achievers: We would like to carry a feature on our old
              students who are great achievers, in our Year Book year after
              year. To make this possible, old students can write to us about
              any of their batch mates who they think deserve to be classified
              as great achievers. We need details of such old students, with all
              relevant evidence of their achievements and their photographs. We
              need this information before end of February every year. Details
              of those selected by the Editorial Board will be published in the
              Yearbook to be published in May.
              <br />
              <br />
              Best wishes,
              <br />
              <br />
              (Mathew C Ninan)
              <br />
              Director
              <br />
              <br />
              February 05, 2020
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Alumni Registration
            </h3>
            <form
              onSubmit={formik.handleSubmit}
              className="text-gray-600 leading-relaxed"
            >
              <label className="block mb-2">
                Your Name
                <input
                  type="text"
                  name="name"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500">{formik.errors.name}</div>
                ) : null}
              </label>
              <label className="block mb-2">
                Year of Passing *
                <select
                  name="yearOfPassing"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.yearOfPassing}
                >
                  <option value="" label="Select year" />
                  {years.map((year) => (
                    <option key={year} value={year} label={year} />
                  ))}
                </select>
                {formik.touched.yearOfPassing && formik.errors.yearOfPassing ? (
                  <div className="text-red-500">
                    {formik.errors.yearOfPassing}
                  </div>
                ) : null}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block mb-2">
                  Your Class *
                  <select
                    name="class"
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.class}
                  >
                    <option value="" label="Select class" />
                    {classes.map((cls) => (
                      <option key={cls} value={cls} label={cls} />
                    ))}
                  </select>
                  {formik.touched.class && formik.errors.class ? (
                    <div className="text-red-500">{formik.errors.class}</div>
                  ) : null}
                </label>
                <label className="block mb-2">
                  Your Mobile *
                  <input
                    type="text"
                    name="mobile"
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobile}
                  />
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <div className="text-red-500">{formik.errors.mobile}</div>
                  ) : null}
                </label>
              </div>
              <label className="block mb-2">
                Your Address *
                <textarea
                  name="address"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  rows={3}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                ></textarea>
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-red-500">{formik.errors.address}</div>
                ) : null}
              </label>
              <label className="block mb-2">
                Your Email *
                <input
                  type="email"
                  name="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
              </label>
              <label className="block mb-2">
                Your Occupation *
                <input
                  type="text"
                  name="occupation"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.occupation}
                />
                {formik.touched.occupation && formik.errors.occupation ? (
                  <div className="text-red-500">{formik.errors.occupation}</div>
                ) : null}
              </label>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded shadow-lg z-10">
            <h2 className="text-2xl font-semibold mb-4">Registration Successful</h2>
            <p>Your registration has been successfully submitted.</p>
            <div className="mt-4 flex justify-center">
              <Image src="https://media.tenor.com/hQ_Uoo3-73MAAAAi/dance-bunny.gif" alt="Dancing bunny" width={200} height={200} />
            </div>
            <div className="mt-4 flex justify-end">
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Close
            </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
