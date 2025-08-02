"use client";

import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, BookOpen, Atom } from "lucide-react";
import { motion } from "framer-motion";

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[50vh] lg:h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">
            Explore Our Academic Programs
          </h1>
          <p className="text-md md:text-xl">
            Discover a wide range of undergraduate and graduate programs
            designed to shape future leaders, innovators, and professionals.{" "}
          </p>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Featured Programs
          </h2>
          <p className="text-lg md:text-xl opacity-80">
            Explore our top programs in technology, engineering, and business—
            crafted for tomorrow&apos;s leaders.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Technology Program */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-2xl p-6 text-center border border-gray-200"
          >
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-[#0b2344]" />
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Science in Information Technology
            </h3>
            <p className="text-gray-700">
              Specializing in software development, cybersecurity, and data
              systems to empower digital innovators.
            </p>
          </motion.div>

          {/* Engineering Program */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-2xl p-6 text-center border border-gray-200"
          >
            <Atom className="w-12 h-12 mx-auto mb-4 text-[#0b2344]" />
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Science in Civil Engineering
            </h3>
            <p className="text-gray-700">
              Designed for aspiring engineers with focus on infrastructure
              design, structural analysis, and sustainability.
            </p>
          </motion.div>

          {/* Business Program */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-2xl p-6 text-center border border-gray-200"
          >
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-[#0b2344]" />
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Science in Business Administration
            </h3>
            <p className="text-gray-700">
              Equips students with strategic, financial, and marketing skills
              for the competitive business world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section*/}
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-5 md:py-40 lg:py-19 px-6 text-white"
        style={{ backgroundImage: "url('/home/programs.png')" }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-start gap-8">
          {/* Text Content */}
          <div className="bg-black/60 p-6 rounded-xl max-w-xl w-full text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Explore Our Academic Programs
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              Discover diverse fields of study designed to help you succeed in
              your career path.
            </p>

            {/* Technology */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                Technology
              </h3>
              <ul className="list-disc list-inside text-white/90 text-base space-y-1 text-left">
                <li>BSIT - Bachelor of Science in Information Technology</li>
                <li>BSCS - Bachelor of Science in Computer Science</li>
                <li>BSCpE - Bachelor of Science in Computer Engineering</li>
              </ul>
            </div>

            {/* Engineering */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                Engineering
              </h3>
              <ul className="list-disc list-inside text-white/90 text-base space-y-1 text-left">
                <li>BSC - Bachelor of Science in Civil Engineering</li>
                <li>BSME - Bachelor of Science in Mechanical Engineering</li>
                <li>BSChem - Bachelor of Science in Chemical Engineering</li>
              </ul>
            </div>

            {/* Business */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                Business
              </h3>
              <ul className="list-disc list-inside text-white/90 text-base space-y-1 text-left">
                <li>BSA - Bachelor of Science in Accountancy</li>
                <li>BSBA - Bachelor of Science in Business Administration</li>
                <li>BSRM - Bachelor of Science in Real Estate Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="bg-white py-20 px-6 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Scholarship Opportunities for Honor Graduates
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-700">
            At RSU, we recognize and reward academic excellence. We proudly
            offer generous tuition discounts to students who have graduated with
            honors — empowering them to continue their academic journey with
            confidence and support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* With Honors */}
            <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl shadow-md text-center">
              <div className="text-6xl font-extrabold text-blue-600 mb-4">
                50%
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Discount for With Honors
              </h3>
              <p className="text-gray-700">
                Students who graduated with honors are eligible for a{" "}
                <strong>50% discount</strong> on their tuition fees for one
                academic year. We believe your hard work deserves real rewards.
              </p>
            </div>

            {/* With High Honors */}
            <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl shadow-md text-center">
              <div className="text-6xl font-extrabold text-yellow-600 mb-4">
                80%
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Discount for With High Honors
              </h3>
              <p className="text-gray-700">
                Graduates with high honors can enjoy an outstanding{" "}
                <strong>80% tuition discount</strong> valid for one academic
                year. A prestigious recognition for exceptional academic
                performance.
              </p>
            </div>
          </div>

          <p className="mt-12 text-base md:text-lg text-gray-600">
            These scholarships aim to make higher education more accessible for
            achievers. Don&apos;t miss this opportunity to reduce your academic costs
            and pursue your goals with RSU&apos;s support.
          </p>
        </div>
      </section>

      {/* Why Choose Our Programs Section with Animation */}
      <section className="bg-white px-6 text-gray-900 py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 max-w-md mx-auto lg:mx-0"
          >
            <Image
              src="/programs/1.png"
              alt="Why Choose Our Programs"
              width={500}
              height={350}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Animated Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#0b2344]">
              Why Choose Our Academic Programs?
            </h2>

            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Our programs are designed to be{" "}
              <span className="font-semibold text-[#0b2344]">
                industry-aligned
              </span>
              , forward-thinking, and student-centered—built to empower your
              academic and professional growth.
            </p>

            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-xl font-semibold text-[#0b2344] mb-1">
                  📘 Industry-Driven Curriculum
                </h3>
                <p className="text-gray-700">
                  Stay ahead with courses developed alongside industry experts
                  for real-world impact.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0b2344] mb-1">
                  👩‍🏫 Experienced Faculty
                </h3>
                <p className="text-gray-700">
                  Learn from professionals who bring practical insights into the
                  classroom.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0b2344] mb-1">
                  🎓 Student-Centered Learning
                </h3>
                <p className="text-gray-700">
                  Thrive in an environment focused on your success, well-being,
                  and career readiness.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link href="/admissions">
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 text-lg rounded-xl text-white font-semibold shadow-lg">
                  Apply for Admission
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section
        className="relative bg-center bg-no-repeat bg-cover py-24 px-6 text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11, 35, 68, 0.85), rgba(11, 35, 68, 0.85)), url('/logo.png')",
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Elevate Your Future With Roel State University
          </motion.h2>

          <motion.p
            className="text-base md:text-lg mb-8 opacity-90"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            Whether you&apos;re aiming to innovate, lead, serve, or create—your
            journey starts here. Our programs are designed to not just prepare
            you for a job, but to shape you into a visionary ready to transform
            the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="/admissions"
              className="inline-block bg-white text-[#0b2344] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
            >
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
