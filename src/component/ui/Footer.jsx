"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1c1e] text-gray-300 border-t border-gray-800/60 pt-24 pb-12 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Subtle Large Watermark at the Absolute Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center text-[5vw] sm:text-[5vw] md:text-[7vw] font-black text-gray-800/20 select-none pointer-events-none tracking-tighter leading-none z-0 whitespace-nowrap uppercase">
        THE MOUNTAIN MEN
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TOP BLOCK: Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 pb-16 border-b border-gray-800/60">
          {/* Column 1: Brand Profile */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* FIXED: Logo image on top, text stacked cleanly underneath */}
            <div className="flex flex-col items-start gap-3">
              <img 
                src="/logo.png" 
                alt="The Mountain Men Logo" 
                className="h-16 w-auto object-contain"
              />
              <h3 className="text-xl font-black text-white tracking-wider uppercase leading-none">
                The <span className="text-orange-500">Mountain</span> Men
              </h3>
            </div>

            <p className="text-sm font-light text-gray-400 leading-relaxed max-w-sm">
              Uttarakhand's premier line production and location logistics
              collective. Turning complex geographical challenges into seamless
              cinematic realities.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-[#22252a] border rounded-lg border-gray-800 text-gray-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 text-xs"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-orange-500 pl-3">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              {[
                "Home",
                "About Us",
                "Our Capabilities",
                "Project Archive",
                "Contact Base",
              ].map((item, idx) => (
                <li key={idx} className="group flex items-center gap-1">
                  <FaChevronRight className="text-[8px] text-orange-500 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-orange-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities Showcase */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-orange-500 pl-3">
              On-Site Logistics
            </h4>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              {[
                "Lodging & Basecamp Setups",
                "Location Scouting & Recce",
                "Official Regulatory Permits",
                "All-Terrain Transport",
                "Talent & Local Casting",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-white transition-colors duration-200 cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Input Block */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-orange-500 pl-3">
              Production Updates
            </h4>
            <p className="text-xs font-light text-gray-400 leading-relaxed">
              Subscribe to receive updates on newly cleared filming locations
              across the state.
            </p>
            <div className="flex border border-gray-800 p-1 bg-[#22252a]">
              <input
                type="email"
                placeholder="Production Email"
                className="w-full bg-transparent px-3 py-2 text-xs text-white outline-none font-light placeholder-gray-500"
              />
              <button className="text-orange-500 font-bold text-[16px] cursor-pointer uppercase tracking-widest px-4 transition-colors duration-200">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BLOCK: Copyright and Key Locations */}
        <div className="text-center space-y-5 pt-12">
          <p className="text-white/50 text-sm pb-5 border-b-2 border-white/20">
            © Copyright {currentYear}. Mountain Men Films LLP. Designed by Best Web Development Company in Dehradun
          </p>
          <h1 className="text-orange-500 text-xl font-semibold tracking-wide">
            Key Shooting Locations
          </h1>

          <ul className="flex flex-wrap justify-center gap-5 list-disc list-inside text-sm text-gray-400 uppercase">
            {[
              "Dehradun",
              "Mussoorie",
              "Rishikesh",
              "Nainital",
              "Almora",
              "Haridwar",
              "Tehri",
              "Auli",
              "Uttarkashi",
            ].map((city) => (
              <li
                key={city}
                className="hover:text-orange-500 cursor-pointer transition-colors duration-200"
              >
                <span className="relative -left-1">{city}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}