"use client";

import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="bg-white text-gray-800 py-24 px-4 md:px-8 lg:px-16 min-h-screen relative overflow-hidden" id='contact'>
      
      {/* Background Editorial Watermark */}

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Modern Minimalist Header */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-bold tracking-widest text-orange-600 uppercase mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Let's Plan Your Next Shoot.
          </h2>
          <div className="w-12 h-0.5 bg-orange-500 mt-4" />
          <p className="text-gray-500 mt-4 text-sm font-light max-w-md mx-auto leading-relaxed">
            Have a project in mind or need assistance with logistics in Uttarakhand? Drop us a line or visit our production base.
          </p>
        </div>

        {/* MAIN SPLIT STRUCTURAL CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT PANEL: INFO CARDS BOX (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            
            {/* Address Box */}
            <div className="bg-gray-50 border border-gray-200 p-6 flex items-start gap-4 transition-all duration-300 hover:border-orange-500/50">
              <div className="p-3 bg-orange-500 text-white text-base flex-shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Our Location</h3>
                <p className="mt-2 text-xs md:text-sm text-gray-600 font-light leading-relaxed">
                  A-25 Ekta Vihar, Mohakampur,<br />Dehradun, Uttarakhand-248001
                </p>
              </div>
            </div>

            {/* Phone Box */}
            <div className="bg-gray-50 border border-gray-200 p-6 flex items-start gap-4 transition-all duration-300 hover:border-orange-500/50">
              <div className="p-3 bg-orange-500 text-white text-base flex-shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Phone Number</h3>
                <p className="mt-2 text-xs md:text-sm text-gray-600 font-medium">
                  +91-9137443249 <span className="text-gray-300">|</span> +91-9897203153
                </p>
              </div>
            </div>

            {/* Email Box */}
            <div className="bg-gray-50 border border-gray-200 p-6 flex items-start gap-4 transition-all duration-300 hover:border-orange-500/50">
              <div className="p-3 bg-orange-500 text-white text-base flex-shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Email Address</h3>
                <p className="mt-2 text-xs md:text-sm text-gray-600 font-semibold hover:text-orange-600 transition-colors">
                  Info@themountainmen.in
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: SECURE MESSAGE FORM (7 Columns) */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-200 p-8 flex flex-col justify-between shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-lg font-bold tracking-wide text-gray-900 uppercase border-b border-gray-200 pb-3">
                Send us a Message
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">First Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-white text-gray-900 px-4 py-3 border border-gray-200 focus:border-orange-500 focus:ring-0 outline-none transition text-sm font-light" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Last Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-white text-gray-900 px-4 py-3 border border-gray-200 focus:border-orange-500 focus:ring-0 outline-none transition text-sm font-light" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Email Address</label>
                <input 
                  type="email" 
                  required 
                  className="w-full bg-white text-gray-900 px-4 py-3 border border-gray-200 focus:border-orange-500 focus:ring-0 outline-none transition text-sm font-light" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Message</label>
                <textarea 
                  rows={4} 
                  required 
                  className="w-full bg-white text-gray-900 px-4 py-3 border border-gray-200 focus:border-orange-500 focus:ring-0 outline-none transition text-sm font-light resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-orange-500 hover:bg-[#1a1c1e] cursor-pointer text-white font-bold text-xs uppercase tracking-widest transition shadow-md outline-none"
              >
                <FaPaperPlane className="text-[10px]" /> Dispatch Transmission
              </button>
            </form>
          </div>

        </div>

        {/* FULL WIDTH MAP ROW */}
        <div className="w-full h-[350px] bg-gray-100 border border-gray-200 relative shadow-sm overflow-hidden group">
          <div className="absolute inset-0 bg-orange-950/5 pointer-events-none group-hover:bg-transparent transition duration-500 z-10" />
          <iframe
            title="A-25 Ekta Vihar, Mohakampur, Dehradun Location"
            src="https://www.google.com/maps?q=A-25%20Ekta%20Vihar%2C%20Mohakampur%2C%20Dehradun%2C%20Uttarakhand%20248001&output=embed"
            className="absolute top-0 left-0 w-full h-full border-0 opacity-80 contrast-115 group-hover:opacity-100 group-hover:contrast-100 transition-all duration-700 ease-out"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}