"use client";

import React from "react";

function Client() {
  const logos = Array.from({ length: 23 }, (_, i) => `/client/${i + 1}.png`);

  return (
    <section className="bg-[#1a1c1e] py-10 overflow-hidden relative border-t-50 border-b-50 border-white" id="clients">
      
      {/* Background Editorial Accent */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10vw] font-black text-gray-800/5 select-none pointer-events-none tracking-widest uppercase">
        TRUST
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Modernized Minimal Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-2">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Trusted By Industry Leaders.
          </h2>
          <div className="w-12 h-0.5 bg-orange-500 mt-4" />
        </div>

        {/* --- INFINITE MARQUEE WITH EDGE GRADIENT FADES --- */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#1a1c1e] before:to-transparent after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#1a1c1e] after:to-transparent">
          
          <div className="flex w-max animate-logo-slide bg-[#22252a]/40 backdrop-blur-sm border-y border-gray-800/60 py-10 items-center">
            
            {/* First Full Set */}
            {logos.map((logo, index) => (
              <div
                key={`set1-${index}`}
                className="flex items-center justify-center mx-10 flex-shrink-0 group cursor-pointer"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  // CHANGED: Combined scale-100 base with group-hover:scale-110 for a subtle sizing increase
                  className="h-14 w-auto object-contain grayscale opacity-40 scale-100 hover:h-[80px] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-out"
                />
              </div>
            ))}

            {/* Identical Duplicate Set for Seamless Loop */}
            {logos.map((logo, index) => (
              <div
                key={`set2-${index}`}
                className="flex items-center justify-center mx-10 flex-shrink-0 group cursor-pointer"
              >
                <img
                  src={logo}
                  alt={`Client Copy ${index + 1}`}
                  // CHANGED: Same smooth sizing transition applied here to keep the looping mirror seamless
                  className="h-14 w-auto object-contain grayscale opacity-40 scale-100 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-out"
                />
              </div>
            ))}
            
          </div>
        </div>

      </div>
    </section>
  );
}

export default Client;