"use client";

import React from "react";

function Projects() {
  const images = [
    "/projects/1.png",
    "/projects/2.png",
    "/projects/3.png",
    "/projects/4.png",
    "/projects/5.png",
    "/projects/6.png",
    "/projects/7.png",
    "/projects/8.png",
    "/projects/9.png",
    "/projects/10.png",
    "/projects/11.png",
    "/projects/12.png",
    "/projects/13.png",
    "/projects/14.png",
    "/projects/15.png",
    "/projects/16.png",
    "/projects/17.png",
    "/projects/18.png",
    "/projects/19.png",
    "/projects/20.png",
    "/projects/21.png",
    "/projects/22.png",
    "/projects/23.png",
    "/projects/24.png",
    "/projects/25.png",
    "/projects/26.png",
    "/projects/27.png",
    "/projects/28.png",
    "/projects/29.png",
    "/projects/30.png",
    "/projects/31.png",
    "/projects/32.png",
  ];

  const columns = [[], [], [], []];

  images.forEach((image, index) => {
    columns[index % 4].push(image);
  });

  return (
    <section className="min-h-screen bg-[#121212] flex flex-col py-16 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent inline-block">
          Our Projects
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-md mx-auto">
          A showcase of our latest work, design, and development.
        </p>
      </div>

      {/* Grid Container - Now scrolls naturally down the page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {columns.map((column, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col gap-8"
          >
            {column.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-[#1e1e1e] border border-zinc-800/80 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/5"
              >
                {/* Image Container */}
                <div className="overflow-hidden aspect-[4/3] w-full">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Subtle Subtle Info Overlay on Hover */}
                {/* <div className="p-6 bg-gradient-to-t from-[#121212] to-[#1e1e1e]/90 border-t border-zinc-800/50">
                  <span className="text-xs font-semibold tracking-widest text-orange-400 uppercase">
                    Digital Work
                  </span>
                  <h3 className="text-lg font-bold text-zinc-100 mt-1 group-hover:text-orange-400 transition-colors">
                    Project Card
                  </h3>
                </div> */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;