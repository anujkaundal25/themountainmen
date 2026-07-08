"use client";

import React, { useState, useEffect } from "react";

function HeroSection() {
  const slides = [
    "/hero-section/slide1.png",
    "/hero-section/slide2.png",
    "/hero-section/slide3.png",
    "/hero-section/slide4.png",
    "/hero-section/slide5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slider */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((image, index) => (
          <div
            key={index}
            className="h-full w-full flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 backdrop-blur-md text-white transition hover:bg-white/30 cursor-pointer"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 backdrop-blur-md text-white transition hover:bg-white/30 cursor-pointer"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;