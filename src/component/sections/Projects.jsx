"use client";

import React from "react";

function Projects() {
  const images = Array.from({ length: 32 }, (_, i) => `/projects/${i + 1}.png`);

  const columns = [[], [], [], []];
  images.forEach((image, index) => {
    columns[index % 4].push({ src: image, id: index + 1 });
  });

  return (
    <section className="min-h-screen bg-[#1a1c1e] py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden" id="projects">
      
      {/* Background Editorial Accent */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[12vw] font-black text-gray-800/5 select-none pointer-events-none tracking-widest uppercase">
        PORTFOLIO
      </div>

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center text-center mb-20">
        <span className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-2">
          Featured Work
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Captured On Location.
        </h2>
        <div className="w-12 h-0.5 bg-orange-500 mt-4" />
        <p className="text-gray-400 mt-4 text-sm font-light max-w-md mx-auto leading-relaxed">
          A visual archive of commercial productions, independent cinema, and demanding expeditions across the terrains of Uttarakhand.
        </p>
      </div>

      {/* Grid Container - True Masonry Flow */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start relative z-10">
        {columns.map((column, colIndex) => (
          <div
            key={colIndex}
            className="grid gap-6"
          >
            {column.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden bg-[#22252a] border border-gray-800/60 shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image Wrap Layer - No fixed aspect ratio for true mosaic flow */}
                <div className="w-full h-auto overflow-hidden relative">
                  <img
                    src={project.src}
                    alt={`Production Project ${project.id}`}
                    className="w-full h-full object-cover contrast-[1.1] transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient vignette on unhovered cards */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-0" />
                </div>

                {/* Micro-Interactive Title Slide-up Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141619]/95 via-[#141619]/40 to-transparent flex flex-col justify-end p-5 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-20">
                  <span className="text-[10px] font-bold tracking-widest text-orange-500 uppercase mb-1">
                    Production Shot
                  </span>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    Project Card #{project.id}
                  </h3>
                  <div className="w-0 h-0.5 bg-orange-500 mt-2 transition-all duration-500 group-hover:w-12" />
                </div>

              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;