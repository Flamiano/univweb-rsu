"use client";

import { useState, useEffect } from "react";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Newspaper,
  CalendarDays,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function NewsPage() {
  const newsItems = [
    {
      title: "Enrollment Now Open for 2025",
      date: "August 1, 2025",
      summary:
        "We're now accepting enrollees for the next school year. Explore your future with us!",
      image: "/news/1.png",
    },
    {
      title: "Engineering Team Wins Regional Hackathon",
      date: "July 20, 2025",
      summary:
        "Our engineering students triumphed in the 2025 Hack4Change regional competition.",
      image: "/news/2.png",
    },
    {
      title: "New Library Wing Inaugurated",
      date: "July 12, 2025",
      summary:
        "The school unveils a state-of-the-art library extension with collaborative learning pods.",
      image: "/news/3.png",
    },
  ];

  const items = [
    {
      title: "Technology Department",
      desc: `Our Technology Department offers cutting-edge programs in software development, artificial intelligence, machine learning, and cybersecurity. Students gain hands-on experience through labs, real-world simulations, and industry-linked projects. With a focus on innovation, collaboration, and emerging tech trends, we prepare learners to become leaders in a rapidly evolving digital world.`,
      image: "/news/tech.png",
    },
    {
      title: "Engineering Department",
      desc: `The Engineering Department nurtures future civil, electrical, and mechanical engineers through a rigorous curriculum and extensive practical exposure. From sustainable infrastructure and smart grids to automation and CAD modeling, students are immersed in real-world problem-solving. Our partnerships with engineering firms ensure access to internships, mentorships, and national competitions.`,
      image: "/news/engr.png",
    },
    {
      title: "Business Department",
      desc: `The Business Department empowers students to think globally, act ethically, and innovate continuously. Courses cover entrepreneurship, digital marketing, finance, and business analytics. Learners engage in startup incubators, business plan competitions, and case studies to develop leadership and decision-making skills crucial for modern enterprises.`,
      image: "/news/bus.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  // Auto scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

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
            News & Updates
          </h1>
          <p className="text-md md:text-xl text-gray-100">
            Stay updated with school activities, achievements, and events.
          </p>
        </motion.div>
      </section>

      {/* News Section */}
      <main className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3 text-blue-600">
                  <Newspaper className="w-5 h-5 mr-2" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {item.summary}
                </p>
                <Link
                  href="#"
                  className="inline-block text-sm font-semibold text-blue-600 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Upcoming Events Section */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Upcoming Events
          </h2>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: "College Entrance Exam",
                date: "August 15, 2025",
                time: "8:00 AM – 12:00 PM",
                location: "Main Campus, Room 302",
              },
              {
                title: "Parent-Teacher Conference",
                date: "August 20, 2025",
                time: "1:00 PM – 4:00 PM",
                location: "Admin Building, Hall A",
              },
              {
                title: "Career Orientation Week",
                date: "August 26–30, 2025",
                time: "9:00 AM – 3:00 PM",
                location: "Auditorium",
              },
              {
                title: "Science Exhibit",
                date: "September 5, 2025",
                time: "10:00 AM – 4:00 PM",
                location: "Innovation Center",
              },
              {
                title: "Alumni Homecoming",
                date: "September 12, 2025",
                time: "6:00 PM – 9:00 PM",
                location: "Multipurpose Hall",
              },
              {
                title: "Faculty Workshop",
                date: "September 18, 2025",
                time: "8:30 AM – 12:00 PM",
                location: "Training Room B",
              },
              {
                title: "Intramurals Opening",
                date: "October 1, 2025",
                time: "9:00 AM – 11:00 AM",
                location: "Sports Complex",
              },
              {
                title: "Art Fair",
                date: "October 8, 2025",
                time: "10:00 AM – 2:00 PM",
                location: "Gallery Hall",
              },
              {
                title: "Midterm Exams",
                date: "October 15–18, 2025",
                time: "All Day",
                location: "All Classrooms",
              },
            ].map((event, idx) => (
              <div
                key={idx}
                className="relative pl-6 border-l-4 border-blue-600"
              >
                {/* Dot */}
                <div className="absolute -left-3 top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow" />

                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {event.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <CalendarDays className="w-4 h-4 mr-2 text-blue-600" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <Clock className="w-4 h-4 mr-2 text-blue-600" />
                  {event.time}
                </div>
                <p className="text-sm text-gray-600">{event.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Dept Section */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Department Highlights
            </h2>
            <div className="space-x-2">
              <button
                onClick={handlePrev}
                className="p-2 bg-blue-100 rounded-full hover:bg-blue-200"
              >
                <ChevronLeft className="text-blue-600" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-blue-100 rounded-full hover:bg-blue-200"
              >
                <ChevronRight className="text-blue-600" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Text */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  {items[current].title}
                </h3>
                <p className="text-gray-700 text-lg">{items[current].desc}</p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={items[current].image}
                  alt={items[current].title}
                  width={700}
                  height={400}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative py-24 px-6 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/department/3.png')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Stay Informed with RSU Campus News
          </motion.h2>

          <motion.p
            className="text-base md:text-lg mb-12 opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            From major university announcements to highlights of student-led
            initiatives and events—our news keeps you connected with the pulse
            of Roel State University. Your story starts here.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/news/1.png"
              alt="Campus Update"
              width={300}
              height={200}
              className="rounded-xl shadow-lg object-cover"
            />
            <Image
              src="/news/2.png"
              alt="Student Achievement"
              width={300}
              height={200}
              className="rounded-xl shadow-lg object-cover"
            />
            <Image
              src="/news/3.png"
              alt="Cultural Event"
              width={300}
              height={200}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
