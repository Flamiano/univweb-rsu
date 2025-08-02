"use client";

import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Users,
  FileText,
  User,
  BookOpen,
  ClipboardList,
} from "lucide-react";

export default function CareerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800 dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[50vh] lg:h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/career/main.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">
            Career Opportunities
          </h1>
          <p className="text-md md:text-xl">
            Empowering your future at Roel State University.
          </p>
        </motion.div>
      </section>

      {/* Cards Section */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Briefcase size={40} className="text-blue-600 mb-4" />,
              title: "Professional Growth",
              desc: "Engage in continuous development through research, training, and innovation programs.",
            },
            {
              icon: <GraduationCap size={40} className="text-blue-600 mb-4" />,
              title: "Academic Excellence",
              desc: "Be part of a legacy of educators committed to transformative teaching.",
            },
            {
              icon: <Users size={40} className="text-blue-600 mb-4" />,
              title: "Community Impact",
              desc: "Join efforts that extend beyond campus, improving lives across regions.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center items-center mb-4 text-blue-500 text-4xl">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Career Section */}
      <section className="py-16 px-6 bg-white text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            Career Development Support
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            We support every stage of your professional journey. From resume
            building workshops to mock interviews and mentorship, our Career
            Center equips you with the tools and guidance to thrive beyond
            graduation.
          </p>
          <ul className="list-disc list-inside space-y-3 text-base">
            <li>Personalized career counseling</li>
            <li>Partnerships with local and international employers</li>
            <li>Internship and placement programs</li>
          </ul>
        </motion.div>
      </section>

      {/* Success Section */}
      <section className="py-16 px-6 bg-white text-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            Success Stories
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            Meet some of our outstanding alumni who began their careers here and
            are now leaders in their fields.
          </p>

          {/* Animated List Items */}
          <ul className="space-y-4 text-base">
            {[
              {
                name: "Engr. Angela Cruz",
                story:
                  "Became a national research awardee after her tenure in the engineering faculty.",
              },
              {
                name: "Prof. John Dela Peña",
                story:
                  "Promoted to a national curriculum board after leading our IT department.",
              },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <strong className="text-blue-600">{item.name}</strong> –{" "}
                {item.story}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Apply Section */}
      <section className="w-full py-16 px-4 md:px-10 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
          {/* Left Side with animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative min-h-[300px] p-8 flex items-center justify-center text-white"
            style={{
              backgroundImage: "url('/logo.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 space-y-4">
              <h2 className="text-3xl font-bold">Apply With Us</h2>
              <p className="text-lg">
                Interested in joining our school community? You can apply by
                sending your resume or visiting us in person.
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:careers@school.edu"
                  className="underline text-blue-300"
                >
                  careers@school.edu
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+639123456789" className="underline text-blue-300">
                  +63 912 345 6789
                </a>
              </p>
              <p>
                <strong>Already on campus?</strong> Visit our Career Office
                (Admin Building, 2nd Floor) and look for Ms. Rivera or Mr.
                Santos.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Map with animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15745330.232099697!2d95.23986605376436!3d15.534122285221281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2sph!4v1754071860022!5m2!1sen!2sph"
              width="100%"
              height="100%"
              className="min-h-[300px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Career File Section */}
      <section className="w-full py-16 px-4 md:px-10 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Career Files</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Application Form",
                desc: "Use this form to apply for open positions.",
                icon: <FileText size={32} />,
                color: "text-blue-600",
                file: "/files/application-form.pdf",
              },
              {
                title: "Faculty Job Description",
                desc: "Requirements and expectations for faculty roles.",
                icon: <User size={32} />,
                color: "text-green-600",
                file: "/files/faculty-job-description.pdf",
              },
              {
                title: "Hiring Process Guide",
                desc: "Step-by-step process for recruitment.",
                icon: <ClipboardList size={32} />,
                color: "text-purple-600",
                file: "/files/hiring-process.pdf",
              },
              {
                title: "Admin Job Description",
                desc: "Role outline for administrative staff applicants.",
                icon: <BookOpen size={32} />,
                color: "text-red-600",
                file: "/files/admin-job-description.pdf",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-xl p-6 shadow-sm border border-gray-200 flex items-start gap-4"
              >
                <div className={card.color}>{card.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-sm text-gray-700 mb-2">{card.desc}</p>
                  <a
                    href={card.file}
                    download
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
