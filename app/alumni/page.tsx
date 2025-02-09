"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postAlumni } from "@/lib/actions";

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
        const result = await postAlumni({
          ...values,
          date: new Date().toLocaleString()
        });
        if (result.status === "SUCCESS") {
          setIsModalOpen(true);
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
  });

  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"];
  const years = Array.from({ length: 25 }, (_, i) => (2000 + i).toString());

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
              Letter to Alumni
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Dear Alumni,
              <br />
              <br />
              Greetings from Vignan School.
              <br />
              <br />
              We hope this message finds you well. We would like to stay connected with you and keep you updated on the latest happenings at Vignan School. Here are a few suggestions to maintain our connection:
              <br />
              <br />
              a) Visit the Campus: You are always welcome to visit the campus. Please find time to visit us whenever you are in town.
              <br />
              <br />
              b) Start Alumni Chapters: We encourage you to start Alumni Chapters in cities with a significant number of our alumni. This will help in keeping the Vignan spirit alive and foster mutual connections.
              <br />
              <br />
              c) Alumni Reunion: We are considering organizing an Alumni Reunion to celebrate our milestones. We will provide sufficient advance notice to ensure maximum participation.
              <br />
              <br />
              d) Alumni Registration: Please register on our website to help us communicate with you effectively. Your registration will ensure that you receive all important updates and invitations.
              <br />
              <br />
              e) Alumni Achievers: We would like to feature our distinguished alumni in our Year Book. If you know any alumni who have achieved great success, please share their details with us. We need relevant evidence of their achievements and their photographs.
              <br />
              <br />
              Best wishes,
              <br />
              <br />
              Principal
              <br />
              Vignan School
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Alumni Registration
            </h3>
            <form
              onSubmit={formik.handleSubmit}
              className="text-gray-600 leading-relaxed"
              id="alumni-form"
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
              onClick={() => {
                setIsModalOpen(false);
                formik.resetForm();
              }}
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
