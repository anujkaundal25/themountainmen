"use client";

import React from 'react';
import { 
  FaArrowRight, 
  FaHotel, 
  FaMapMarkedAlt, 
  FaFileContract, 
  FaBus, 
  FaTools, 
  FaUserFriends, 
  FaUtensils 
} from 'react-icons/fa';

const servicesData = [
  {
    title: "Lodging Arrangements",
    description: "We provide all categories of hotels across Uttarakhand. Be it a luxury or a budget hotel, for celebrity or crew, we provide all types along with special requirements.",
    image: "/services/lodging.png", 
    icon: FaHotel
  },
  {
    title: "Recce Services",
    description: "We have a team of experienced people who have thorough demographic, geographic and cultural knowledge of Uttarakhand.",
    image: "/services/recce.png",
    icon: FaMapMarkedAlt
  },
  {
    title: "Permissions",
    description: "We provide complete permissions from local to government authorities, for the smooth transition of all the projects saving time, money and ensuring the safety of cast and crew.",
    image: "/services/permissions.png",
    icon: FaFileContract
  },
  {
    title: "Transport Services",
    description: "We provide hassle-free and best transport during, pre and post shoot. We use best vehicles for cast, crew, equipment transfers, and airport/station pick up and drop.",
    image: "/services/transport.png",
    icon: FaBus
  },
  {
    title: "One Stop Equipment Solution",
    description: "We have tie ups with numerous studios and equipment rental houses all over India to meet all the necessary requirements for shoot on-time. Our trusted partners always ensure the timely supply of all the latest equipment.",
    image: "/services/equipment.png",
    icon: FaTools
  },
  {
    title: "Casting",
    description: "Our experienced team of casting directors, model and extra coordinators not only provide professionals locally but also helps in arranging country-wide casting.",
    image: "/services/casting.png",
    icon: FaUserFriends
  },
  {
    title: "Catering Services",
    description: "We have a team of hard working professionals with magical hands and we have been providing scrumptious food since our first project till date.",
    image: "/services/catering.png",
    icon: FaUtensils
  }
];

export default function Services() {
  return (
    <section className="bg-[#1a1c1e] text-gray-100 py-24 px-4 md:px-8 lg:px-16 min-h-screen relative overflow-hidden" id='services'>
      
      {/* Editorial Watermark Text */}
      <div className="absolute top-4 right-4 text-[12vw] font-black text-gray-800/10 select-none pointer-events-none tracking-tighter leading-none">
        PRODUCTION
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* --- STICKY LEFT COLUMN: TEXT INTRO --- */}
        <div className="lg:col-span-4 lg:sticky lg:top-12 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">Services</span>
            <div className="h-px bg-orange-500/30 flex-1"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Film & Line <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400">
              Production
            </span> <br />
            Services.
          </h2>
          
          <p className="text-sm text-gray-400 font-light leading-relaxed max-w-md">
            We operate seamlessly across Uttarakhand, turning raw, rugged terrains into structured, efficient production sets. From logistics to location scouting, we manage the chaos so you can capture the magic.
          </p>

          <div className="pt-4">
            {/* <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500 border-b border-orange-500/30 pb-2 hover:border-orange-500 transition-all cursor-pointer">
              Download Production Kit <span>↓</span>
            </div> */}
            {servicesData.slice(0,1).map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div 
                key={index}
                className="group relative h-[280px] bg-[#22252a] border border-gray-800 hover:border-orange-500/50 transition-all duration-500 flex flex-col justify-end p-6 overflow-hidden shadow-2xl"
              >
                {/* Background Image Layer */}
                <div 
                  className="absolute inset-0 bg-cover bg-center contrast-125 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-5"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Rich Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141619] via-[#141619]/70 to-transparent opacity-95 transition-opacity duration-500 z-10 group-hover:opacity-100" />

                {/* Controlled Wrapper Box */}
                <div className="relative z-20 w-full transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                  
                  {/* Default State Header Block */}
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-orange-500 text-white text-xl mb-3 transition-all duration-500 group-hover:bg-transparent group-hover:text-orange-400 group-hover:p-0">
                      <IconComponent />
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-orange-400">
                      {service.title}
                    </h3>
                    
                    <div className="w-0 h-0.5 bg-orange-500 mt-2 transition-all duration-500 group-hover:w-16" />
                  </div>

                  {/* Revealing Content Block */}
                  <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[140px] pt-1">
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-wider cursor-pointer">
                      <span>Learn Logistics</span>
                      <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
          </div>
        </div>

        {/* --- RIGHT COLUMN: DYNAMIC GRID --- */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.slice(1,).map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div 
                key={index}
                className="group relative h-[280px] bg-[#22252a] border border-gray-800 hover:border-orange-500/50 transition-all duration-500 flex flex-col justify-end p-6 overflow-hidden shadow-2xl"
              >
                {/* Background Image Layer */}
                <div 
                  className="absolute inset-0 bg-cover bg-center contrast-125 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-5"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Rich Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141619] via-[#141619]/70 to-transparent opacity-95 transition-opacity duration-500 z-10 group-hover:opacity-100" />

                {/* Controlled Wrapper Box */}
                <div className="relative z-20 w-full transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                  
                  {/* Default State Header Block */}
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-orange-500 text-white text-xl mb-3 transition-all duration-500 group-hover:bg-transparent group-hover:text-orange-400 group-hover:p-0">
                      <IconComponent />
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-orange-400">
                      {service.title}
                    </h3>
                    
                    <div className="w-0 h-0.5 bg-orange-500 mt-2 transition-all duration-500 group-hover:w-16" />
                  </div>

                  {/* Revealing Content Block */}
                  <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[140px] pt-1">
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-wider cursor-pointer">
                      <span>Learn Logistics</span>
                      <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}