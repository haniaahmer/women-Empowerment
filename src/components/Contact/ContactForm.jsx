import React, { useState } from 'react';
import { Mail, MapPin, Globe, Facebook, Instagram } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="max-w-5xl mt-20 mb-20 mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 bg-[#7F264B] p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5" />
              <span>Main Broadway Commercial, Phase 8, DHA, Lahore</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <span>info@growingwomenpk.org</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5" />
              <a href="https://www.growingwomenpk.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                www.growingwomenpk.org
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <a href="https://www.facebook.com/growingwomenpk" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/growingwomenpk" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 p-8 bg-gray-50">
          <div className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400 resize-none"
              ></textarea>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-yellow-700 text-white font-medium py-2 rounded-md hover:bg-yellow-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;