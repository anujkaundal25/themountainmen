"use client";

import React, { useState } from 'react';

function AboutUs() {
  const [showMoreDeepak, setShowMoreDeepak] = useState(false);
  const [showMoreGaurav, setShowMoreGaurav] = useState(false);

  return (
    <div className="relative bg-white py-20 px-4 md:px-8 lg:px-16 font-sans text-gray-700 max-w-7xl mx-auto overflow-hidden">
      
      {/* Decorative Background Element representing Peaks/Angles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-bl-full -z-10 opacity-70 hidden lg:block" id='about'/>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* --- LEFT SIDE: THE MANIFESTO --- */}
        <div className="lg:col-span-5 lg:sticky lg:top-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">Who We Are</span>
              <div className="h-px bg-orange-300 flex-1"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-none">
              THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r select-none from-gray-900 to-orange-500">
                MOUNTAIN
              </span> <br />
              MEN.
            </h2>
            
            <p className="text-base leading-relaxed text-gray-600 font-light pt-2">
              We are a dedicated team of raconteurs, philosophers, cinema enthusiasts, 
              and nature lovers that understands your requirements and delivers complete satisfaction. 
              We provide not only what is promised, but also the thoughtful details beyond 
              expectations—and that is exactly what makes us different.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-bold uppercase tracking-wider text-gray-900 rounded-none group bg-gradient-to-br from-orange-500 to-amber-600 group-hover:from-orange-500 group-hover:to-amber-600 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-orange-300">
                <span className="relative px-6 py-3.5 transition-all ease-in duration-150  dark:bg-gray-900 rounded-none ">
                  Our Story
                </span>
              </button>

              <button className="text-xs uppercase tracking-wider font-bold text-gray-900 hover:text-orange-500 transition duration-200 flex items-center gap-2 py-3 px-4">
                Get In Touch <span>→</span>
              </button>
            </div>

            {/* Premium Minimal Dual Toggle */}
            <div className="grid grid-cols-2 border border-gray-100 bg-gray-50/50 p-1.5 mt-12 max-w-sm">
              <button className="bg-gray-900 text-white text-[11px] font-bold tracking-wider uppercase py-3 px-4 text-center transition duration-200">
                Overview
              </button>
              <button className="text-gray-600 hover:text-gray-900 text-[11px] font-bold tracking-wider uppercase py-3 px-4 text-center transition duration-200">
                Direct Line
              </button>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: TEAM PORTRAITS --- */}
        <div className="lg:col-span-7 space-y-12">
          <div className="hidden lg:block border-b border-gray-100 pb-4">
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase">Creative Leadership</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
            
            {/* Team Member 1: Deepak */}
            <div className="bg-white border-t-4 hover:border-orange-500 shadow-xl shadow-gray-100/70 p-6 flex flex-col justify-between transition-all duration-700 hover:-translate-y-1">
              <div>
                {/* Image frame style */}
                <div className="w-full h-80 bg-gray-100 overflow-hidden mb-6 relative group">
                  <img 
                    src="/aboutus/team1.png" 
                    alt="Deepak Malhotra" 
                    className="w-full h-full object-cover grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border-[12px] border-white/10 group-hover:border-white/0 transition-all duration-300" />
                </div>

                <div className="mb-2">
                  <h3 className="text-lg font-bold tracking-tight text-gray-900">Deepak Malhotra</h3>
                  <span className="text-xs text-orange-500 font-semibold tracking-wider uppercase">Director </span>
                </div>

                <p className={`text-xs leading-relaxed text-gray-500 mt-4 transition-all duration-300 ${!showMoreDeepak ? 'line-clamp-3' : ''}`}>
                  A multi talented personality with an extensive on and off field production experience from the industry of more than 10 years, Deepak has been handling the projects with a perfection nobody could match. A humble with a sharp mind personality taking the organization to a new height.
                </p>
                
                <button 
                  onClick={() => setShowMoreDeepak(!showMoreDeepak)}
                  className="text-[11px] text-gray-900 hover:text-orange-500 font-bold uppercase tracking-wider mt-2 transition-colors"
                >
                  {showMoreDeepak ? '[-] Show Less' : '[+] Read Bio'}
                </button>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">10+ Yrs Exp</span>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-orange-500 hover:text-white flex items-center justify-center text-xs transition duration-200">
                  🡥
                </a>
              </div>
            </div>

            {/* Team Member 2: Gaurav */}
            <div className="bg-white border-t-4 border-gray-900 hover:border-orange-500 shadow-xl shadow-gray-100/70 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 md:translate-y-6">
              <div>
                {/* Image frame style */}
                <div className="w-full h-80 bg-gray-100 overflow-hidden mb-6 relative group">
                  <img 
                    src="/aboutus/team2.png" 
                    alt="Gaurav Gairola" 
                    className="w-full h-full object-cover grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border-[12px] border-white/10  group-hover:border-white/0 transition-all duration-300" />
                </div>

                <div className="mb-2">
                  <h3 className="text-lg font-bold tracking-tight text-gray-900">Gaurav Gairola</h3>
                  <span className="text-xs text-orange-500 font-semibold tracking-wider uppercase">Director</span>
                </div>

                <p className={`text-xs leading-relaxed text-gray-500 mt-4 transition-all duration-300 ${!showMoreGaurav ? 'line-clamp-3' : ''}`}>
                  An experienced mountaineer and seasoned traveller who has been to the core of Uttarakhand to live and experience the roots. With an experience of local know-hows, folklores and tradition, he has been working closely with the state tourism board to promote and advertise the tradition and beauty of Uttarakhand, especially, making documentaries.
                </p>
                
                <button 
                  onClick={() => setShowMoreGaurav(!showMoreGaurav)}
                  className="text-[11px] text-gray-900 hover:text-orange-500 font-bold uppercase tracking-wider mt-2 transition-colors"
                >
                  {showMoreGaurav ? '[-] Show Less' : '[+] Read Bio'}
                </button>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Expedition Specialist</span>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-orange-500 hover:text-white flex items-center justify-center text-xs transition duration-200">
                  🡥
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;