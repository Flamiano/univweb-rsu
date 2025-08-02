"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `hover:text-white ${
      isActive(path) ? "text-white font-semibold" : "text-gray-300"
    }`;

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo & Mission */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/logo.png"
                alt="RSU Logo"
                width={50}
                height={50}
                className="rounded-md"
              />
              <h2 className="text-2xl font-extrabold">RSU</h2>
            </div>
            <p className="text-sm text-white">
              Roel State University – Empowering future leaders through quality
              education, research, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/academics" className={linkClass("/academics")}>
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className={linkClass("/admissions")}>
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/departments" className={linkClass("/departments")}>
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/careers" className={linkClass("/careers")}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Student Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/student-life"
                  className={linkClass("/student-life")}
                >
                  Student Life
                </Link>
              </li>
              <li>
                <Link href="/faqs" className={linkClass("/faqs")}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/news" className={linkClass("/news")}>
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass("/contact")}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                55 University Ave, Quezon City, PH
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (+63) 9412345678
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@roel.edu
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4 text-gray-400">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Text */}
        <div className="border-t border-gray-700 pt-4 text-sm text-center text-gray-500 space-y-2">
          <div>&copy; {new Date().getFullYear()} RSU. All rights reserved.</div>
          <div className="space-x-4">
            <Link
              href="/legal/privacy-policy"
              className={linkClass("/legal/privacy-policy")}
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/legal/terms-and-conditions"
              className={linkClass("/legal/terms-and-conditions")}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
