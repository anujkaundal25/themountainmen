"use client";

import React from "react";

function Client() {
  const logos = Array.from({ length: 23 }, (_, i) => `/client/${i + 1}.png`);

  return (
    <section className="py-5 overflow-hidden">
      <div className="relative w-full">
        <h1 className="text-5xl font-semibold text-orange-500 text-center p-20">Our Clients</h1>
        <div className="flex w-max animate-logo-slide bg-[#2d2d2d] p-10">
          {/* First Set */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12 flex-shrink-0"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-36 w-auto object-contain transition-all rounded-xl duration-300"
              />
            </div>
          ))}

          {/* Duplicate */}
          {logos.map((logo, index) => (
            <div
              key={`copy-${index}`}
              className="flex items-center justify-center mx-12 flex-shrink-0"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Client;