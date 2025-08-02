"use client";

import { useState } from "react";
import Head from "next/head";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import { motion } from "framer-motion";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What courses are offered at Roel State University?",
      answer:
        "We offer a wide range of programs across Technology, Engineering, Business. Each department is committed to academic excellence and real-world preparation.",
    },
    {
      question: "Does the university host interdepartmental events?",
      answer:
        "Yes! RSU is known for its vibrant campus life. We regularly host competitions, exhibits, research summits, and career fairs among departments.",
    },
    {
      question: "Are there scholarships available?",
      answer:
        "Absolutely. We offer merit-based, need-based, and government-funded scholarships. Visit our scholarship office or website for details.",
    },
    {
      question: "Do you provide on-campus housing?",
      answer:
        "Yes. RSU offers limited dormitory facilities. Priority is given to students from far-flung areas. Applications are processed through the Student Affairs Office.",
    },
    {
      question: "What is the admission process?",
      answer:
        "Applicants must pass the entrance examination and submit the required documents. Details and timelines are published on our admissions page.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-hidden">
      <Head>
        <title>FAQs - Roel State University</title>
        <meta
          name="description"
          content="Frequently asked questions about Roel State University"
        />
      </Head>

      <Navbar />

      {/* FAQs Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 overflow-hidden h-100vh lg:h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 py-24 sm:py-32 lg:max-w-2xl lg:w-full">
            <div className="px-4 sm:px-6 lg:px-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                  <span className="block">Have Questions?</span>
                  <span className="block text-blue-100">We Have Answers.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p className="mt-4 text-lg text-blue-100 sm:mt-6 sm:max-w-xl">
                  Everything you need to know about the Roel State University.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative Knowledge/Help SVG */}
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
          <svg
            className="w-72 h-72 text-blue-200 opacity-15"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 
                10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 
                12.9 12 13.5 12 15h-2v-.5c0-1 .45-1.75 
                1.17-2.42l1.24-1.26A1.49 1.49 0 0013 9.5c0-.83-.67-1.5-1.5-1.5S10 
                8.67 10 9.5H8c0-1.66 1.34-3 3-3s3 1.34 
                3 3c0 .79-.31 1.5-.93 2.08z"
            />
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-lg border transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "border-blue-600 bg-white shadow"
                    : "border-gray-300 bg-white hover:shadow"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      activeIndex === index
                        ? "rotate-180 text-blue-600"
                        : "text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-5 pt-1 text-gray-700 text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
