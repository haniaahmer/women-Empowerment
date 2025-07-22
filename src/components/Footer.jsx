import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Enrollment Portal", href: "#enrollment-portal" },
  { label: "Podcast", href: "#podcast" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#9B9BBD] text-white mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Women Empowerment</h3>
          <p className="text-sm">Empowering women worldwide</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
          <p className="text-sm">Email: info@womenempowerment.org</p>
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
          <form className="flex flex-col sm:flex-row gap-2 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 flex-1 rounded-md bg-amber-50 text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#FFD700] text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-4">
            {footerLinks.map(({ label, href }) => (
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
        <p>© {new Date().getFullYear()} Women Empowerment. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
