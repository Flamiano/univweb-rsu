"use client";
import { useEffect, useState } from "react";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Eye,
  School,
  BookOpenCheck,
  GraduationCap,
  Users,
  BadgeCheck,
  Globe,
  Star,
} from "lucide-react";

export default function AboutPage() {
  const universityHighlights = [
    {
      src: "/about/1.png",
      icon: <School size={28} className="text-white" />,
      title: "World-Class Campus",
      desc: "Experience a state-of-the-art environment that fosters learning, innovation, and student engagement.",
    },
    {
      src: "/about/2.png",
      icon: <GraduationCap size={28} className="text-white" />,
      title: "Academic Excellence",
      desc: "Our programs are designed to equip students with the knowledge and skills needed for global competitiveness.",
    },
    {
      src: "/about/3.png",
      icon: <Users size={28} className="text-white" />,
      title: "Vibrant Community",
      desc: "Be part of a diverse student body committed to leadership, service, and collaboration.",
    },
    {
      src: "/about/4.png",
      icon: <BookOpenCheck size={28} className="text-white" />,
      title: "Innovative Learning",
      desc: "We integrate modern tools and teaching strategies to enhance academic performance.",
    },
    {
      src: "/about/5.png",
      icon: <BadgeCheck size={28} className="text-white" />,
      title: "Recognized Globally",
      desc: "Roel State University is known for producing competent and principled graduates worldwide.",
    },
  ];

  // carousel auto-scroll
  const AUTO_SCROLL_INTERVAL = 5000; //5secs
  const [index, setIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % universityHighlights.length);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [universityHighlights.length]);

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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">
            About
          </h1>
          <p className="text-md md:text-xl">
            Leading with Purpose. Learning for Life.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#0b2344] p-8 rounded-2xl shadow-md text-center"
          >
            <div className="flex justify-center mb-4 text-blue-700">
              <Target className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Our Mission
            </h3>
            <p className="text-gray-300 text-lg">
              To provide quality, inclusive, and transformative education that
              nurtures innovation, critical thinking, and service to society.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#0b2344] p-8 rounded-2xl shadow-md text-center"
          >
            <div className="flex justify-center mb-4 text-green-700">
              <Eye className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Our Vision
            </h3>
            <p className="text-gray-300 text-lg">
              Roel State University envisions itself as a global leader in
              higher education, producing graduates who are competent,
              compassionate, and committed to building a better future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section Content */}
      <section className="bg-gray-900 py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Left: Main Info */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-blue-400">
                Roel State University
              </h2>
              <p className="text-sm text-gray-500 sm:text-right mt-2 sm:mt-0 sm:ml-4">
                Built for the next generation of learners
              </p>
            </motion.div>

            {[
              "Roel State University is a premier institution committed to excellence in education, innovation, and service. With a strong foundation in academic integrity, we provide students with the tools and knowledge to shape the future.",
              "We foster a community of learners who value diversity, collaboration, and continuous growth. Our programs are designed to meet the demands of the modern world and empower students to make meaningful contributions to society.",
              "The university supports cutting-edge research, industry partnerships, and community engagement to ensure students receive holistic education both inside and outside the classroom.",
            ].map((text, idx) => (
              <motion.p
                key={idx}
                className="text-lg text-white leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Right: Quick Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {[
              {
                title: "Quick Facts",
                items: [
                  "✓ Established: 2005",
                  "✓ Students: 15,000+",
                  "✓ Programs: Tech, Engr, Bus",
                  "✓ Campuses: 3 Nationwide",
                ],
              },
              {
                title: "Core Values",
                items: [
                  "✓ Integrity",
                  "✓ Excellence",
                  "✓ Innovation",
                  "✓ Service",
                ],
              },
            ].map((block, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-100 rounded-2xl shadow-md p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <h3 className="text-lg font-semibold text-[#0b2344] mb-3">
                  {block.title}
                </h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={universityHighlights[index].src}
            className="absolute w-full h-full top-0 left-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={universityHighlights[index].src}
              alt={universityHighlights[index].title}
              fill
              className="object-cover"
              priority
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 w-full text-white px-4 sm:px-8 py-6 z-10">
              <div className="flex items-center gap-2 mb-2">
                {universityHighlights[index].icon}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  {universityHighlights[index].title}
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg leading-snug">
                {universityHighlights[index].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-4 flex gap-2 z-20 sm:left-1/2 sm:transform sm:-translate-x-1/2 right-4 sm:right-auto">
          {universityHighlights.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
              transition-all duration-300 rounded-full
              ${i === index ? "bg-white" : "bg-gray-400"}
              w-2.5 h-2.5 sm:w-3 sm:h-3
            `}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-4 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0b2344]">
            Why Choose Roel State University?
          </h2>
          <p className="mb-12 text-lg max-w-2xl mx-auto">
            Discover what sets us apart. Roel State University empowers students
            to reach their full potential through academic excellence, global
            opportunities, and a supportive community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                icon: <GraduationCap size={40} className="text-[#0b2344]" />,
                title: "Top-Quality Education",
                desc: "World-class curriculum taught by dedicated faculty.",
              },
              {
                icon: <Globe size={40} className="text-[#0b2344]" />,
                title: "Global Perspective",
                desc: "Opportunities for international exchange and research.",
              },
              {
                icon: <Users size={40} className="text-[#0b2344]" />,
                title: "Inclusive Community",
                desc: "Supportive campus culture where everyone belongs.",
              },
              {
                icon: <Star size={40} className="text-[#0b2344]" />,
                title: "Student Excellence",
                desc: "Producing leaders, innovators, and achievers.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/apply"
              className="inline-block bg-[#0b2344] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#14386c] transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section
        className="relative bg-center bg-no-repeat bg-cover py-20 px-6 text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11, 35, 68, 0.85), rgba(11, 35, 68, 0.85)), url('/logo.png')",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Shaping Tomorrow&apos;s Leaders Today
            </h2>
            <p className="text-base md:text-lg mb-10 opacity-90">
              At Roel State University, we don&apos;t just educate—we inspire. With a
              commitment to excellence, innovation, and inclusivity, our
              institution empowers every learner to thrive in an ever-changing
              world. Join a legacy of change-makers, visionaries, and scholars
              ready to make an impact.
            </p>
            <a
              href="/admissions"
              className="inline-block bg-white text-[#0b2344] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
            >
              Join Our Community
            </a>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/about/5.png"
              alt="Campus Life 1"
              className="rounded-xl w-full h-40 object-cover"
            />
            <img
              src="/about/2.png"
              alt="Campus Life 2"
              className="rounded-xl w-full h-40 object-cover"
            />
            <img
              src="/about/3.png"
              alt="Campus Life 3"
              className="rounded-xl w-full h-40 object-cover"
            />
            <img
              src="/about/4.png"
              alt="Campus Life 4"
              className="rounded-xl w-full h-40 object-cover"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
