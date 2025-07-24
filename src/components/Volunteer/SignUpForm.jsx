import React, { useState } from 'react';
import { User, Mail, Phone, Lock, Heart } from 'lucide-react';

export  function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    signupType: ''
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
    alert('Thank you for signing up! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      signupType: ''
    });
  };

  return (
    <div className="max-w-2xl  mt-20 mx-auto bg-white rounded-xl shadow-lg p-6 mb-20">
      <div className="flex items-center space-x-2 mb-6">
        <Heart className="w-6 h-6 text-[#7F264B]" />
        <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1 flex items-center">
            <User className="w-5 h-5 mr-2 text-[#7F264B]"/>
            Name
          </label>
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
          <label className="block text-gray-700 font-medium mb-1 flex items-center">
            <Mail className="w-5 h-5 mr-2 text-[#7F264B]" />
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F264B] transition-all placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1 flex items-center">
            <Phone className="w-5 h-5 mr-2 text-[#7F264B]" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your Phone Number"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F264B] transition-all placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1 flex items-center">
            <Lock className="w-5 h-5 mr-2 text-[#7F264B]" />
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Your Password"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F264B] transition-all placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">How would you like to sign up?</label>
          <select
            name="signupType"
            value={formData.signupType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F264B] transition-all"
          >
            <option value="">Select an option</option>
            <option value="donor">As a Donor</option>
            <option value="member">As a Member</option>
            <option value="volunteer">As a Volunteer</option>
          </select>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-yellow-700 text-white font-medium py-2 rounded-md hover:bg-yellow-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default SignUpForm;