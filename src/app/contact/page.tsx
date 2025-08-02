"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you could validate or send to backend
    alert("I miss you ^^");
  };
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-hidden">
      <Navbar />

      {/* Contact Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 overflow-hidden h-[50vh] lg:h-[80vh] font-sans">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">
          {/* Left Side: Contact Info */}
          <div className="z-20 px-6 py-20 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Let&apos;s Talk.</span>
                <span className="block text-blue-100">
                  Get in Touch with RSU
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="mt-4 text-lg text-blue-100 sm:mt-6 max-w-xl">
                Whether you’re a student, parent, or guest, we’re here to help.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Logo styled like SVG */}
          <motion.div
            className="absolute right-0 bottom-0 top-0 hidden lg:flex justify-end items-center w-1/2 pr-12 pointer-events-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/logo.png"
              alt="Roel State University Logo"
              width={600}
              height={600}
              className="object-contain w-full max-w-md opacity-80"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Contact Details + Map */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-900 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900">Main Campus</h4>
                  <p className="text-gray-600">
                    55 University Ave, Quezon City, PH
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-900 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900">Phone</h4>
                  <p className="text-gray-600">(+63) 941-234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-900 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900">Email</h4>
                  <p className="text-gray-600">info@roel.edu</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15745330.232099697!2d95.23986605376436!3d15.534122285221281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2sph!4v1754071860022!5m2!1sen!2sph"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6 w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-blue-900 font-sans">
              Send Us a Message
            </h2>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 bg-white"
                placeholder="John Roel Flamiano"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 bg-white"
                placeholder="example@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 bg-white resize-none"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition w-full"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
