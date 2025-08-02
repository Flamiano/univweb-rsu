"use client";

import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StudentLifePage() {
  const sections = [
    {
      title: "Living in Friartown",
      desc: "At Roel State University, campus living offers more than just a place to sleep — it’s a community where lifelong friendships begin. Friartown is the heart of RSU's vibrant residential life, filled with supportive dorm communities, late-night study sessions, and spontaneous courtyard gatherings.",
      images: [
        "/student-life/friartown/1.png",
        "/student-life/friartown/2.png",
        "/student-life/friartown/3.png",
      ],
    },
    {
      title: "Student Activities",
      desc: "Roel State University encourages you to get involved. With over 100 student organizations, from academic clubs and leadership programs to volunteer groups and sports, there’s always something happening on campus that matches your interests and values.",
      images: [
        "/student-life/activities/1.png",
        "/student-life/activities/2.png",
        "/student-life/activities/3.png",
      ],
    },
    {
      title: "Spiritual Life",
      desc: "RSU welcomes students of all faiths and backgrounds. Our spiritual life programs create a space for reflection, connection, and growth — offering retreats, prayer services, and interfaith dialogue that support your personal and spiritual journey.",
      images: [
        "/student-life/spiritual/1.png",
        "/student-life/spiritual/2.png",
        "/student-life/spiritual/3.png",
      ],
    },
    {
      title: "Health and Wellness",
      desc: "At Roel State University, your well-being is a top priority. Our campus health center, counseling services, fitness programs, and wellness workshops help you maintain a balanced lifestyle academically, physically, and emotionally.",
      images: [
        "/student-life/health-wellness/1.png",
        "/student-life/health-wellness/2.png",
        "/student-life/health-wellness/3.png",
      ],
    },
    {
      title: "Arts and Culture",
      desc: "From theater performances and gallery exhibitions to music festivals and creative writing workshops, RSU’s arts and culture scene is thriving. Students are encouraged to express themselves and engage in the rich cultural fabric of the university.",
      images: [
        "/student-life/arts-culture/1.png",
        "/student-life/arts-culture/2.png",
        "/student-life/arts-culture/3.png",
      ],
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[50vh] lg:h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/student-life/main.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">
            Student Life
          </h1>
          <p className="text-md md:text-xl">
            Who you want to be is formed by how you live.
          </p>
        </motion.div>
      </section>

      {/* Section Content */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {sections.map((sec, i) => (
          <section key={sec.title}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-blue-900 mb-6"
            >
              {sec.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 mb-6 leading-relaxed"
            >
              {sec.desc}
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {sec.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`${sec.title} ${idx + 1}`}
                    width={600}
                    height={400}
                    className="object-cover rounded-xl shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Closing Section */}
      <section
        className="relative bg-center bg-no-repeat bg-cover py-24 px-6 text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11, 35, 68, 0.85), rgba(11, 35, 68, 0.85)), url('/logo.png')",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Live the Roel State Experience
          </motion.h2>

          <motion.p
            className="text-base md:text-lg mb-12 opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            At Roel State University, student life is a journey shaped by
            discovery, tradition, and a sense of belonging. From the dorms to
            the dance floor, the chapel to the cultural stage — your next
            adventure starts here.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/student-life/friartown/1.png"
              alt="Campus Living"
              width={300}
              height={200}
              priority
              className="rounded-xl shadow-lg object-cover"
            />
            <Image
              src="/student-life/activities/1.png"
              alt="Student Activities"
              width={300}
              height={200}
              priority
              className="rounded-xl shadow-lg object-cover"
            />
            <Image
              src="/student-life/spiritual/1.png"
              alt="Spiritual Life"
              width={300}
              height={200}
              priority
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
