"use client";

import Footer from "@/comps/Footer";
import Navbar from "@/comps/Navbar";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Medal,
  FileText,
  BadgeCheck,
  Repeat,
  UserPlus,
} from "lucide-react";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-hidden">
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
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">
            Admissions
          </h1>
          <p className="text-md md:text-xl text-white">
            Discover our programs and opportunities available for future
            leaders.
          </p>
        </motion.div>
      </section>

      {/* Application Types Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {/* New Applicants */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg text-white relative group"
              style={{
                backgroundImage: "url('/admissions/1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px",
              }}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-[#0b2344]/80 group-hover:bg-[#0b2344]/70 transition duration-300 flex flex-col justify-center p-8">
                <UserPlus className="w-10 h-10 mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-2">New Applicants</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  For senior high school graduates entering college for the
                  first time. Prepare original documents like Form 138, good
                  moral, PSA birth certificate, and ID pictures.
                </p>
              </div>
            </motion.div>

            {/* Transferees */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg text-white relative group"
              style={{
                backgroundImage: "url('/admissions/2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px",
              }}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-[#0b2344]/80 group-hover:bg-[#0b2344]/70 transition duration-300 flex flex-col justify-center p-8">
                <Repeat className="w-10 h-10 mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-2">Transferees</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  For students from other colleges or universities. Submit TOR,
                  honorable dismissal, course syllabus, and other standard
                  admission requirements.
                </p>
              </div>
            </motion.div>

            {/* TESDA Graduates */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg text-white relative group"
              style={{
                backgroundImage: "url('/admissions/3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px",
              }}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-[#0b2344]/80 group-hover:bg-[#0b2344]/70 transition duration-300 flex flex-col justify-center p-8">
                <BadgeCheck className="w-10 h-10 mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-2">TESDA Graduates</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  If you&apos;ve completed a TESDA course, apply for credit
                  equivalency. Submit TESDA NC II/III certificates, transcript,
                  and credentials for assessment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      {/* Technology Department Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-blue-900 mb-4"
          >
            Explore Technology Programs
          </motion.h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            The Technology Department opens doors to dynamic careers in
            computing, innovation, and digital infrastructure. Our three
            specialized programs—Information Technology, Computer Science, and
            Computer Engineering—each offer a unique focus, shaping students
            into tomorrow’s digital leaders.
          </p>

          {/* Information Technology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex flex-col md:flex-row items-center gap-8"
          >
            <img
              src="/department/tech1.png"
              alt="Information Technology"
              className="w-full md:w-1/2 rounded-2xl shadow-lg"
            />
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold text-blue-800 mb-3">
                Bachelor of Science in Information Technology (BSIT)
              </h3>
              <p className="text-gray-700 mb-4">
                Focused on practical and applied tech skills, BSIT trains
                students in system administration, programming, networking,
                cybersecurity, and a touch of hardware knowledge. It’s ideal for
                those who want to build real-world applications and keep digital
                systems running smoothly.
              </p>
              <h4 className="font-medium text-gray-800 mb-2">
                Possible Careers:
              </h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Software Developer</li>
                <li>Network Administrator</li>
                <li>IT Support Specialist</li>
                <li>Cybersecurity Analyst</li>
                <li>Systems Analyst</li>
                <li>Database Administrator</li>
              </ul>
            </div>
          </motion.div>

          {/* Computer Science */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 flex flex-col-reverse md:flex-row items-center gap-8"
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold text-blue-800 mb-3">
                Bachelor of Science in Computer Science (BSCS)
              </h3>
              <p className="text-gray-700 mb-4">
                BSCS emphasizes logic, algorithms, and the theoretical
                foundation of computing. Students explore complex
                problem-solving, software engineering principles, and advanced
                programming—geared toward creating innovative software and
                research-based applications.
              </p>
              <h4 className="font-medium text-gray-800 mb-2">
                Possible Careers:
              </h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Software Engineer</li>
                <li>Data Scientist</li>
                <li>AI/ML Engineer</li>
                <li>Systems Developer</li>
                <li>Research Programmer</li>
                <li>Game Developer</li>
              </ul>
            </div>
            <img
              src="/department/tech2.png"
              alt="Computer Science"
              className="w-full md:w-1/2 rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Computer Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <img
              src="/department/tech3.png"
              alt="Computer Engineering"
              className="w-full md:w-1/2 rounded-2xl shadow-lg"
            />
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold text-blue-800 mb-3">
                Bachelor of Science in Computer Engineering (BSCpE)
              </h3>
              <p className="text-gray-700 mb-4">
                BSCpE bridges hardware and software, offering a blend of
                computer science and electronics. Students design embedded
                systems, robotics, and low-level computing solutions, making it
                the perfect path for those passionate about innovation at the
                machine level.
              </p>
              <h4 className="font-medium text-gray-800 mb-2">
                Possible Careers:
              </h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Embedded Systems Engineer</li>
                <li>Hardware Design Engineer</li>
                <li>IoT Developer</li>
                <li>Robotics Engineer</li>
                <li>Systems Architect</li>
                <li>Automation Specialist</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Department Section */}
      <section className="bg-gray-900 py-20 px-6 text-white">
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-white mb-4"
          >
            Explore Engineering Programs
          </motion.h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
            The Engineering Department builds the physical and chemical
            foundations of our world. From infrastructure to mechanical
            innovation and chemical processes, our three distinct courses offer
            the tools and training to shape industries and communities.
          </p>

          {/* Civil Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
          >
            <img
              src="/department/engr1.png"
              alt="Civil Engineering"
              className="w-full rounded-2xl shadow-xl"
            />
            <div>
              <h3 className="text-3xl font-semibold text-yellow-400 mb-3">
                Bachelor of Science in Civil Engineering (BSCE)
              </h3>
              <p className="text-gray-200 mb-4">
                Civil Engineering focuses on the design, construction, and
                maintenance of infrastructure such as buildings, roads, bridges,
                and water systems. It blends creativity with technical expertise
                to create sustainable and safe environments.
              </p>
              <h4 className="font-medium text-gray-100 mb-2">
                Possible Careers:
              </h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Structural Engineer</li>
                <li>Construction Project Manager</li>
                <li>Urban Planner</li>
                <li>Transportation Engineer</li>
                <li>Geotechnical Engineer</li>
                <li>Environmental Engineer</li>
              </ul>
            </div>
          </motion.div>

          {/* Mechanical Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
          >
            <div>
              <h3 className="text-3xl font-semibold text-yellow-400 mb-3">
                Bachelor of Science in Mechanical Engineering (BSME)
              </h3>
              <p className="text-gray-200 mb-4">
                Mechanical Engineering delves into machines, energy systems, and
                manufacturing. Students learn how to analyze, design, and
                maintain mechanical devices—from engines to HVAC
                systems—empowering them to solve industrial challenges.
              </p>
              <h4 className="font-medium text-gray-100 mb-2">
                Possible Careers:
              </h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Mechanical Engineer</li>
                <li>Automotive Engineer</li>
                <li>HVAC Engineer</li>
                <li>Product Design Engineer</li>
                <li>Manufacturing Engineer</li>
                <li>Maintenance Engineer</li>
              </ul>
            </div>
            <img
              src="/department/engr2.png"
              alt="Mechanical Engineering"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Chemical Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
          >
            <img
              src="/department/engr3.png"
              alt="Chemical Engineering"
              className="w-full rounded-2xl shadow-xl"
            />
            <div>
              <h3 className="text-3xl font-semibold text-yellow-400 mb-3">
                Bachelor of Science in Chemical Engineering (BSChE)
              </h3>
              <p className="text-gray-200 mb-4">
                Chemical Engineering blends chemistry, physics, and biology to
                develop processes for manufacturing chemicals, fuels,
                pharmaceuticals, and food. It’s key to innovations in materials
                and sustainable solutions.
              </p>
              <h4 className="font-medium text-gray-100 mb-2">
                Possible Careers:
              </h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Chemical Process Engineer</li>
                <li>Petroleum Engineer</li>
                <li>Pharmaceutical Engineer</li>
                <li>Materials Engineer</li>
                <li>Food Processing Engineer</li>
                <li>Environmental Health & Safety Engineer</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Department Section */}
      <section className="bg-white py-20 px-6 text-gray-800">
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-gray-900 mb-4"
          >
            Explore Business Programs
          </motion.h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            The Business Department cultivates analytical, strategic, and
            entrepreneurial minds to thrive in today’s dynamic economy. Explore
            our courses to gain leadership skills and financial acumen for a
            successful business career.
          </p>

          {/* Accountancy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
          >
            <img
              src="/department/bus1.png"
              alt="Accountancy"
              className="w-full rounded-2xl shadow-xl"
            />
            <div>
              <h3 className="text-3xl font-semibold text-blue-700 mb-3">
                Bachelor of Science in Accountancy (BSA)
              </h3>
              <p className="text-gray-700 mb-4">
                The Accountancy program provides students with essential
                knowledge in financial reporting, auditing, taxation, and
                managerial accounting. It prepares future Certified Public
                Accountants (CPAs) and finance professionals.
              </p>
              <h4 className="font-medium text-gray-800 mb-2">
                Possible Careers:
              </h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Certified Public Accountant (CPA)</li>
                <li>Auditor</li>
                <li>Tax Consultant</li>
                <li>Budget Analyst</li>
                <li>Internal Auditor</li>
                <li>Chief Financial Officer</li>
              </ul>
            </div>
          </motion.div>

          {/* Business Administration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
          >
            <div>
              <h3 className="text-3xl font-semibold text-blue-700 mb-3">
                Bachelor of Science in Business Administration (BSBA)
              </h3>
              <p className="text-gray-700 mb-4">
                BSBA equips students with skills in management, marketing,
                operations, and finance. It is ideal for future entrepreneurs,
                managers, and business leaders aiming to drive innovation and
                organizational success.
              </p>
              <h4 className="font-medium text-gray-800 mb-2">
                Possible Careers:
              </h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Business Development Manager</li>
                <li>Marketing Executive</li>
                <li>Operations Manager</li>
                <li>Entrepreneur</li>
                <li>Financial Analyst</li>
                <li>Management Consultant</li>
              </ul>
            </div>
            <img
              src="/department/bus2.png"
              alt="Business Administration"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Real Estate Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
          >
            <img
              src="/department/bus3.png"
              alt="Real Estate Management"
              className="w-full rounded-2xl shadow-xl"
            />
            <div>
              <h3 className="text-3xl font-semibold text-blue-700 mb-3">
                Bachelor of Science in Real Estate Management (BSREM)
              </h3>
              <p className="text-gray-700 mb-4">
                The Real Estate Management program prepares students to become
                professionals in property brokerage, appraisal, and management.
                Graduates are equipped to pass the Real Estate Licensure Exam
                and excel in a growing industry.
              </p>
              <h4 className="font-medium text-gray-800 mb-2">
                Possible Careers:
              </h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Licensed Real Estate Broker</li>
                <li>Property Manager</li>
                <li>Real Estate Appraiser</li>
                <li>Leasing Consultant</li>
                <li>Real Estate Analyst</li>
                <li>Development Project Coordinator</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scholarship Discounts */}
      <section className="bg-white py-20 px-6 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-10"
          >
            Scholarships & Tuition Discounts
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* 50% Discount */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Medal className="text-blue-500 w-7 h-7" />
                <h3 className="text-xl font-semibold text-blue-700">
                  50% Discount for With Honors
                </h3>
              </div>
              <p>
                Students who graduated with honors are eligible for a{" "}
                <strong>50% discount</strong> on their tuition fees for one
                academic year. We believe your hard work deserves real rewards.
              </p>
            </motion.div>

            {/* 80% Discount */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-yellow-500 w-7 h-7" />
                <h3 className="text-xl font-semibold text-yellow-700">
                  80% Discount for With High Honors
                </h3>
              </div>
              <p>
                Graduates with high honors can enjoy an{" "}
                <strong>80% tuition discount</strong> valid for one academic
                year. A prestigious recognition for exceptional academic
                performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements Section with 3 Cards */}
      <section className="bg-white py-20 px-6 font-sans">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#0b2344] mb-12">
            Admission Requirements
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* New Applicants */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0b2344] flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                New Applicants
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm leading-relaxed">
                <li>Accomplished application form (online or printed)</li>
                <li>Senior High School Report Card (Form 138)</li>
                <li>Certificate of Good Moral Character</li>
                <li>PSA Birth Certificate (original & photocopy)</li>
                <li>High School Diploma (if already graduated)</li>
                <li>2x2 or passport-size ID pictures (recent)</li>
                <li>Entrance Exam Result / University Admission Test</li>
                <li>Certificate of Residency (for public universities)</li>
                <li>Medical Certificate / Health Clearance</li>
                <li>Barangay Clearance</li>
                <li>Income Tax Return / Certificate of Indigency</li>
                <li>Vaccination Card (if required)</li>
                <li>Parent/Guardian valid ID (photocopy)</li>
              </ul>
            </motion.div>

            {/* Transferee */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0b2344] flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Transferees
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm leading-relaxed">
                <li>Accomplished Transfer Application Form</li>
                <li>Pass the Interview</li>
                <li>
                  Certificate of Transfer Credentials / Honorable Dismissal
                </li>
                <li>Transcript of Records (TOR) or Certified Copy of Grades</li>
                <li>Course Description / Syllabus (for subject crediting)</li>
                <li>Certificate of Good Moral Character</li>
                <li>PSA Birth Certificate</li>
                <li>2x2 or passport-size ID pictures</li>
                <li>Medical Certificate</li>
                <li>Entrance Exam / Interview (if required)</li>
                <li>Barangay Clearance</li>
                <li>Recommendation Letter (if applicable)</li>
                <li>Parent/Guardian valid ID (photocopy)</li>
              </ul>
            </motion.div>

            {/* TESDA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0b2344] flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                TESDA Program Enrollees
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm leading-relaxed">
                <li>Duly Accomplished Application Form</li>
                <li>
                  At least 10 years of basic education (Grade 10 completer)
                </li>
                <li>ALS Certificate of Completion (if applicable)</li>
                <li>Transcript of Records / Form 137 / Report Card</li>
                <li>NSO/PSA Birth Certificate (photocopy)</li>
                <li>Barangay Clearance / Police or NBI Clearance</li>
                <li>1x1 or 2x2 ID pictures</li>
                <li>Medical Certificate (if required)</li>
                <li>Certificate of Good Moral Character</li>
                <li>Resume / Bio-Data (for short courses)</li>
                <li>Interview</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 text-gray-800">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-blue-900 mb-6"
          >
            Build Your Future With Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10"
          >
            Whether you&apos;re passionate about technology, driven to innovate in
            engineering, or inspired to lead in the business world—our programs
            are built to shape your path to success. Discover your potential,
            gain real-world experience, and prepare for global careers. Your
            journey starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="/apply"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg transition duration-300"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
