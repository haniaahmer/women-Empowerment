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
  { label: "Membership", href: "#Memberhsip" },
  { label: "Enrollment Portal", href: "#Enrollment Portal" },
  { label: "Podcast", href: "#podcast" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="px-25 bg-[#9B9BBD] text-white mt-auto">
      <div className="container mx-auto px-10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
        {/* Logo and Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Women Empowerment</h3>
          <p className="text-sm mb-2">Empowering women worldwide</p>
          <p className="text-sm mb-2">Phone: +1 (555) 123-4567</p>
          <p className="text-sm mb-4">Email: info@womenempowerment.org</p>
          <div className="flex gap-4">
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
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-sm mb-4">
            Get updates on programs, events, and empowerment resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md bg-amber-50 text-black focus:outline-none"
              required
            />
            <button
              className="bg-[#FFD700] text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
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
      <div className="border-t border-white border-opacity-20 py-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Women Empowerment. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;