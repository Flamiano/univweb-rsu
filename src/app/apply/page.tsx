"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, School } from "lucide-react";
import type { ChangeEvent } from "react";
import Image from "next/image";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    course: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(
      "Thank you for applying!\n\nWe've received your application.\n\nCheck the email you provided—we’ll send you the necessary forms to complete your admission process."
    );

    // Optional: Reset form after submission
    setFormData({
      name: "",
      email: "",
      category: "",
      course: "",
    });
  };

  // Course options grouped by category
  const courseOptions: Record<string, { dept: string; courses: string[] }[]> = {
    "New Applicants": [
      {
        dept: "Technology Department",
        courses: [
          "BS in Information Technology",
          "BS in Computer Science",
          "BS in Computer Engineering",
        ],
      },
      {
        dept: "Engineering Department",
        courses: [
          "BS in Civil Engineering",
          "BS in Mechanical Engineering",
          "BS in Chemical Engineering",
        ],
      },
      {
        dept: "Business Department",
        courses: [
          "BS in Accountancy",
          "BS in Business Administration",
          "BS in Real Estate Management",
        ],
      },
    ],
    Transferee: [
      {
        dept: "Technology Department",
        courses: ["BS in Information Technology", "BS in Computer Science"],
      },
      {
        dept: "Engineering Department",
        courses: ["BS in Civil Engineering", "BS in Mechanical Engineering"],
      },
      {
        dept: "Business Department",
        courses: ["BS in Business Administration", "BS in Accountancy"],
      },
    ],
    "TESDA Passers": [
      {
        dept: "Technology Department",
        courses: ["BS in Information Technology"],
      },
      {
        dept: "Engineering Department",
        courses: ["BS in Mechanical Engineering"],
      },
      {
        dept: "Business Department",
        courses: ["BS in Real Estate Management"],
      },
    ],
  };

  const availableCourses = formData.category
    ? courseOptions[formData.category]
    : [];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 h-[50vh] lg:h-[80vh] overflow-hidden">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">
          <div className="z-20 px-6 py-20 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl leading-tight">
                Begin Your Future
              </h1>
              <p className="text-blue-300">At Roel State University</p>
              <p className="mt-6 text-sm md:text-lg lg:text-xl text-blue-100 max-w-xl">
                Choose your category and apply to our respected academic
                programs. Education tailored for New Applicants, Transferees,
                and TESDA Passers.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="absolute right-0 bottom-0 top-0 hidden lg:flex justify-end items-center w-1/2 pr-12 pointer-events-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/logo.png"
              alt="RSU Logo"
              width={600}
              height={600}
              className="object-contain w-full max-w-md opacity-90"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15745330.232099697!2d95.23986605376436!3d15.534122285221281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2sph!4v1754071860022!5m2!1sen!2sph"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Right: Application Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-10 rounded-lg shadow-lg space-y-6 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-blue-900">
              Admission Application Form
            </h2>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <User className="w-4 h-4 text-blue-800" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 bg-white text-gray-900"
                placeholder="Juan Dela Cruz"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-800" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 bg-white text-gray-900"
                placeholder="you@example.com"
              />
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <School className="w-4 h-4 text-blue-800" />
                Application Category
              </label>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 bg-white text-gray-900"
              >
                <option value="">Select category</option>
                <option value="New Applicants">New Applicants</option>
                <option value="Transferee">Transferee</option>
                <option value="TESDA Passers">TESDA Passers</option>
              </select>
            </div>

            {/* Course Selection */}
            {availableCourses.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Choose Your Program
                </label>
                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 bg-white text-gray-900"
                >
                  <option value="">Select a course</option>
                  {availableCourses.map((group, idx) => (
                    <optgroup key={idx} label={group.dept}>
                      {group.courses.map((course, i) => (
                        <option key={i} value={course}>
                          {course}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition w-full"
            >
              Submit Application
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
