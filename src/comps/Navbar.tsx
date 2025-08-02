"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Academics",
    path: "#",
    subLinks: [
      { label: "Programs", path: "/programs" },
      { label: "Departments", path: "/departments" },
    ],
  },
  { label: "Careers", path: "/careers" },
  { label: "Admissions", path: "/admissions" },
  { label: "News", path: "/news" },
  { label: "FAQs", path: "/faqs" },
  { label: "Student Life", path: "/student-life" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "#") {
      return (
        pathname.startsWith("/programs") || pathname.startsWith("/departments")
      );
    }
    return pathname === path;
  };

  const linkClass = (path: string) =>
    `transition font-medium text-base ${
      isActive(path)
        ? "text-blue-400 font-semibold"
        : scrolled
        ? "text-gray-800 hover:text-blue-600"
        : "text-white hover:text-blue-200"
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white shadow-md backdrop-blur border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="RSU Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span
              className={`font-bold text-xl hidden sm:inline ${
                scrolled ? "text-[#0b2344]" : "text-white"
              }`}
            >
              RSU
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`${linkClass(
                      link.path
                    )} flex items-center gap-1 focus:outline-none`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 mt-0.5" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        className="absolute left-0 top-full bg-white shadow-lg rounded-md mt-2 w-44 py-2 z-50"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.path}
                            href={sub.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={linkClass(link.path)}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Contact Button */}
            <Link
              href="/contact"
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition ${
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-blue-800 hover:bg-gray-200"
              }`}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${scrolled ? "text-gray-800" : "text-white"}`}
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-3"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.label ? null : link.label
                      )
                    }
                    className="w-full flex justify-between items-center text-left font-medium text-gray-700 hover:text-blue-600"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transform transition-transform ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          href={sub.path}
                          onClick={() => setMenuOpen(false)}
                          className="block text-sm text-gray-600 hover:text-blue-600"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block font-medium transition ${
                    isActive(link.path)
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center w-full justify-center px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition text-sm font-medium"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
