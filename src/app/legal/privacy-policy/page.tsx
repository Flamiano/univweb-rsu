"use client";

import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-hidden">
      <Navbar />
      <div className="bg-gradient-to-b from-blue-900 to-gray-900 font-sans text-white h-50vh">
        {/* Hero Section */}
        <div className="relative bg-blue-800 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-12 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                    >
                      <span className="block">Your Privacy</span>
                      <span className="block text-blue-200">
                        Our Commitment
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.1,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                      className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                    >
                      How we protect and use your information at Roel State
                      University
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Icon */}
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
            <svg
              className="w-64 h-64 text-blue-300 opacity-10"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden text-gray-800">
            <div className="px-6 py-8 sm:p-10">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                Privacy Policy
              </h2>

              <div className="w-full bg-blue-800 p-4 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-white text-center">
                  Privacy Policy
                </h3>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-6 max-w-none">
                <p>
                  At Roel State University, we are committed to protecting your
                  privacy and ensuring the security of any personal information
                  you provide through our website. When you interact with
                  us—such as enrolling, submitting forms, or reaching out—we may
                  collect personal details including your name, email, contact
                  number, and academic preferences.
                </p>

                <p>
                  We also collect technical data such as your IP address,
                  browser type, and behavior patterns using cookies to help
                  improve our user experience and online services. This data is
                  used to process requests, respond to inquiries, enhance
                  academic services, and occasionally notify you of school
                  events and updates (if you opted in).
                </p>

                <p>
                  Roel State University implements strict security measures to
                  safeguard your personal information. We do not sell or
                  disclose your data to third parties, except trusted partners
                  and systems essential for educational and operational
                  functions, all under strict confidentiality.
                </p>

                <p>
                  You have the right to access, modify, or request deletion of
                  your information at any time by contacting our administrative
                  office. Our website may contain links to other educational or
                  government sites, and we are not responsible for their privacy
                  practices.
                </p>

                <p>
                  By continuing to use our services, you agree to the terms of
                  this policy. We reserve the right to update this policy to
                  reflect current practices and compliance requirements. Updates
                  will be posted on this page.
                </p>

                <p>
                  For any concerns regarding your data, please contact us at:{" "}
                  <a
                    href="tel:+639123456789"
                    className="text-blue-700 hover:text-blue-800 font-medium"
                  >
                    +63 912 345 6789
                  </a>{" "}
                  or email:{" "}
                  <a
                    href="mailto:privacy@roeluniversity.edu.ph"
                    className="text-blue-700 hover:text-blue-800 font-medium"
                  >
                    privacy@roeluniversity.edu.ph
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
