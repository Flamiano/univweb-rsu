"use client";

import Footer from "@/comps/Footer";
import Navbar from "@/comps/Navbar";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  School,
  ArrowRight,
  GraduationCap,
  Users,
  Landmark,
  Briefcase,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-black overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <main className="relative flex-1">
        {/* Background Image with Stronger Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/home/school.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex items-center justify-center min-h-[100vh] pt-24 text-white px-4"
        >
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 tracking-tight"
              >
                Welcome to <br />
                <span className="text-blue-400">Roel State University</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed max-w-2xl md:max-w-none mx-auto md:mx-0"
              >
                Empowering students through academic excellence,
                <br className="hidden md:block" />
                innovative research, and a commitment to service.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                {/* Mobile Buttons */}
                <div className="flex md:hidden flex-row justify-between gap-3 w-full max-w-sm mx-auto mt-6">
                  <Link
                    href="/apply"
                    className="text-sm flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition duration-300 text-center"
                  >
                    Apply Now
                  </Link>
                  <Link
                    href="/programs"
                    className="text-sm flex-1 border border-white hover:bg-white hover:text-black text-white font-semibold px-4 py-2 rounded-md transition duration-300 text-center"
                  >
                    Explore
                  </Link>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex flex-row justify-start items-center gap-4 mt-6">
                  <Link
                    href="/apply"
                    className="w-48 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 text-center"
                  >
                    Apply Now
                  </Link>
                  <Link
                    href="/programs"
                    className="w-48 border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-md transition duration-300 text-center"
                  >
                    Explore
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* About */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex justify-center mb-4 text-blue-600">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-[#0b2344] text-xl font-semibold mb-2">
                Accredited Excellence
              </h3>
              <p className="text-gray-600">
                Our institution is fully accredited and recognized for
                maintaining high academic standards and performance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex justify-center mb-4 text-green-600">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-[#0b2344] text-xl font-semibold mb-2">
                Driven by Mission
              </h3>
              <p className="text-gray-600">
                We are committed to nurturing minds and building futures through
                holistic, values-driven education.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex justify-center mb-4 text-purple-600">
                <School className="w-10 h-10" />
              </div>
              <h3 className="text-[#0b2344] text-xl font-semibold mb-2">
                Modern Campus
              </h3>
              <p className="text-gray-600">
                Our facilities are equipped with cutting-edge technology,
                comfortable classrooms, and a vibrant learning environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section with Full Background Image */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-5 md:py-40 lg:py-60 px-6 text-white"
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
              your career path. Our programs are flexible, forward-thinking, and
              student-focused.
            </p>
            {/* CTA Button with Right Arrow */}
            <div className="flex justify-center md:justify-start mb-6">
              <Link href="/programs">
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 text-lg rounded-xl text-white">
                  View Programs <ArrowRight size={20} />
                </button>
              </Link>
            </div>
            {/* 4 rows images */}
            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              {/* Image 1 */}
              <div className="relative" style={{ width: 80, height: 80 }}>
                <Image
                  src="/home/1.png"
                  alt="Program 1"
                  fill
                  className="rounded-xl shadow-md object-cover"
                  sizes="80px"
                />
              </div>

              {/* Image 2 */}
              <div className="relative" style={{ width: 80, height: 80 }}>
                <Image
                  src="/home/2.png"
                  alt="Program 2"
                  fill
                  className="rounded-xl shadow-md object-cover"
                  sizes="80px"
                />
              </div>

              {/* Image 3 */}
              <div className="relative" style={{ width: 80, height: 80 }}>
                <Image
                  src="/home/3.png"
                  alt="Program 3"
                  fill
                  className="rounded-xl shadow-md object-cover"
                  sizes="80px"
                />
              </div>

              {/* Image 4 */}
              <div className="relative" style={{ width: 80, height: 80 }}>
                <Image
                  src="/home/4.png"
                  alt="Program 4"
                  fill
                  className="rounded-xl shadow-md object-cover"
                  sizes="80px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="bg-[#f9fafb] py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Discover Student Life at Our Campus
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Campus life goes beyond academics — it&apos;s about building
              connections, embracing diversity, and exploring passions. Whether
              you&apos;re engaging in vibrant student organizations, enjoying campus
              events, or unwinding in green open spaces, every moment
              contributes to personal growth.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Our students thrive in a supportive environment filled with
              creativity, collaboration, and leadership opportunities. From
              academic clubs and cultural groups to sports and volunteer work,
              there’s a space for everyone to feel inspired and involved.
            </p>
            <p className="text-gray-600 text-lg">
              We believe that a well-rounded student experience empowers you for
              life — not just for graduation day. Join a community that
              celebrates you and helps you grow into the best version of
              yourself.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/home/5.png"
              alt="Student Life"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-4 sm:px-8 border-t">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Our University?
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            We are committed to academic excellence, personal development, and
            career readiness. Our community thrives on innovation, diversity,
            and a passion for learning.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
            {[
              {
                icon: (
                  <GraduationCap className="text-blue-600 w-8 h-8 mb-3 mx-auto" />
                ),
                title: "Accredited Programs",
                desc: "Degrees that meet global education standards.",
              },
              {
                icon: <Users className="text-blue-600 w-8 h-8 mb-3 mx-auto" />,
                title: "Expert Faculty",
                desc: "Learn from professionals who mentor and inspire.",
              },
              {
                icon: (
                  <Landmark className="text-blue-600 w-8 h-8 mb-3 mx-auto" />
                ),
                title: "Vibrant Campus",
                desc: "A dynamic environment filled with events and clubs.",
              },
              {
                icon: (
                  <Briefcase className="text-blue-600 w-8 h-8 mb-3 mx-auto" />
                ),
                title: "Future Careers",
                desc: "Real-world skills and strong industry connections.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow-md text-center w-full max-w-[240px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Closing Section */}
      <section
        className="relative bg-center bg-no-repeat bg-cover py-32 px-6 text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11, 35, 68, 0.85), rgba(11, 35, 68, 0.85)), url('/logo.png')",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Ready to Shape Your Future?
          </h2>
          <p className="text-white/90 text-lg leading-relaxed">
            Join a vibrant academic community where leadership, innovation, and
            excellence thrive. Whether you&apos;re just beginning or advancing your
            path, we&apos;re here to empower your journey.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
