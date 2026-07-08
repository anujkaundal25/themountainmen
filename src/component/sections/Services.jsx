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
    <section className="bg-[#2d2d2d] text-white py-16 px-4 md:px-10 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Header Centered */}
        <div className="flex flex-col items-center text-center mb-12 border-b border-gray-800 pb-8">
          <span className="text-orange-500 font-bold uppercase tracking-[3px] text-xs block mb-2">
            WHAT WE DO
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight max-w-xl leading-tight">
            Film & Line Production Services In Uttarakhand
          </h2>
          <div className="w-12 h-[2.5px] bg-orange-500 mt-4" />
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => {
            const isLastItem = index === servicesData.length - 1;
            const IconComponent = service.icon;

            return (
              <div 
                key={index}
                // CHNAGES HERE: 'border border-gray-700/50' default ke liye aur 'group-hover:border-orange-500' dynamic orange border ke liye
                className={`relative h-[240px] rounded-xl overflow-hidden shadow-xl group cursor-pointer bg-[#2d2d2d] border border-white/50 group-hover:border-orange-500 transition-all duration-500 ${
                  isLastItem ? "md:col-span-2 max-w-xl mx-auto w-full" : ""
                }`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-0"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-85 group-hover:opacity-0 transition-opacity duration-500 z-10" />

                {/* Content Layer */}
                <div className="absolute inset-0 z-20 p-5 flex flex-col justify-center items-center text-center h-full">
                  
                  {/* Dynamic Icon */}
                  <div className="text-orange-500 text-3xl mb-3 transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <IconComponent />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-wide transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    {service.title}
                  </h3>

                  {/* Expandable Description Section on Hover */}
                  <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-2">
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-md line-clamp-3">
                      {service.description}
                    </p>
                    
                    {/* Read More Anchor */}
                    <div className="mt-3 flex items-center justify-center gap-1.5 text-orange-500 font-semibold text-[11px] uppercase tracking-wider group/btn">
                      <span>Read More</span>
                      <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover/btn:translate-x-1" />
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