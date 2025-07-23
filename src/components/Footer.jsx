import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Membership", href: "/membership" },
  { label: "Enrollment Portal", href: "/enrollment-portal" },
  { label: "Podcast", href: "#podcast" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#9B9BBD] text-white mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-9 grid grid-cols-1 md:grid-cols-3 gap-7">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1" />
            <div>
              <p className="font-semibold">Head Office:</p>
              <p className="text-sm">Main Broadway Commercial, Phase 8, DHA, Lahore</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt />
            <p className="text-sm">03221774376</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope />
            <p className="text-sm">info@growingwomenpk.org</p>
          </div>
          <div className="flex items-center gap-3">
            <FaGlobe />
            <p className="text-sm">www.growingwomenpk.org</p>
          </div>
          <div className="flex gap-4 pt-2">
            <a href="#" className="hover:text-yellow-300" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-yellow-300" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-yellow-300" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-yellow-300" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
          <p className="text-sm">
            Get updates on programs, events, and empowerment resources.
          </p>
          <form className="w-full flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[345px] p-2 rounded-md bg-amber-50 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <div className="px-1 flex flex-col sm:flex-row gap-3 w-full">
              <button
                type="submit"
                className="bg-yellow-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-white transition w-full sm:w-auto"
              >
                Subscribe
              </button>
              <a
                href="#membership"
                className="bg-yellow-700 px-6 py-2 rounded-full text-white font-semibold hover:bg-yellow-900 transition w-full sm:w-auto text-center"
              >
                Become a Member
              </a>
            </div>
          </form>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 md:pl-20">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-4">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-20 py-4 text-center text-sm px-4 sm:px-6 lg:px-10">
        <p>© {new Date().getFullYear()} Growing Women PK. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
