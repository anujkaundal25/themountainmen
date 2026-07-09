"use client";

import React from 'react';
// Importing Font Awesome icons from react-icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="w-full min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-500">We'd love to hear from you. Please fill out the form or reach out directly.</p>
        </div>

        {/* --- TOP SECTION: 3 Info Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-100">
            <div className="p-3 bg-indigo-50 rounded-full text-indigo-600 mb-4">
              <FaMapMarkerAlt className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
            <p className="mt-2 text-sm text-gray-600">A-25 Ekta Vihar, Mohakampur,Dehradun, Uttarakhand-248001</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-100">
            <div className="p-3 bg-indigo-50 rounded-full text-indigo-600 mb-4">
              <FaPhoneAlt className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
            <p className="mt-2 text-sm text-gray-600">Tel : +91-9137443249 | +91-9897203153</p>
            <p className="text-xs text-gray-400 mt-1">Mon-Fri from 9am to 6pm</p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-100">
            <div className="p-3 bg-indigo-50 rounded-full text-indigo-600 mb-4">
              <FaEnvelope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Email Address</h3>
            <p className="mt-2 text-sm text-gray-600">Info@themountainmen.in</p>
            <p className="text-xs text-gray-400 mt-1">We reply within 24 hours</p>
          </div>
        </div>

        {/* --- BOTTOM SECTION: Split Layout (Form & Map) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"></textarea>
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition shadow-sm">
                  <FaPaperPlane className="w-4 h-4 mr-2" /> Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Map Embed */}
          <div className="w-full min-h-[350px] lg:min-h-full bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100 relative">
            <iframe 
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617539335911!2d-73.98682332342502!3d40.74844443538411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}