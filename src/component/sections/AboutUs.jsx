"use client";

import React, { useState } from 'react'

function AboutUs() {
  // State to manage expanding/collapsing descriptions
  const [showMoreDeepak, setShowMoreDeepak] = useState(false)
  const [showMoreGaurav, setShowMoreGaurav] = useState(false)

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-12 font-sans text-gray-700 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* --- LEFT SIDE: ABOUT US --- */}
        <div className="lg:col-span-5 lg:sticky lg:top-8">
          <div className="text-left">
            <h2 className="text-3xl tracking-wide text-gray-800 font-light mb-2 uppercase">
              About Us
            </h2>
            <div className="w-12 h-0.5 bg-orange-500 mb-6"></div>
            
            <p className="text-sm leading-relaxed text-gray-600 mb-8">
              The Mountain Men is a dedicated team of raconteurs, philosophers, cinema enthusiasts, 
              and nature lovers that understands your requirements and delivers complete satisfaction. 
              We provide not only what is promised, but also the thoughtful details beyond 
              expectations – and that is what makes us different.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs uppercase tracking-wider font-semibold py-3 px-6 transition duration-200">
              Read More
            </button>

            {/* Info/Contact Split Bar */}
            <div className="flex flex-col sm:flex-row justify-center items-center mt-12 shadow-sm max-w-md">
              <div className="w-full bg-[#2d3134] text-white p-4 text-center sm:text-right sm:pr-6 relative">
                <h4 className="text-xs font-bold tracking-wider uppercase">About Us</h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-tight">Complete Info</p>
              </div>
              
              {/* OR Badge */}
              <div className="z-10 bg-orange-500 border-2 border-white rounded-full w-8 h-8 flex items-center justify-center text-[10px] text-white font-bold my-[-10px] sm:my-0 sm:mx-[-16px] shrink-0">
                OR
              </div>

              <div className="w-full bg-orange-500 text-white p-4 text-center sm:text-left sm:pl-6">
                <h4 className="text-xs font-bold tracking-wider uppercase">Contact Us</h4>
                <p className="text-[10px] text-orange-100 uppercase tracking-tight">Get in Touch with Us</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: OUR TEAM --- */}
        <div className="lg:col-span-7">
          <div className="text-left mb-6">
            <h2 className="text-3xl tracking-wide text-gray-800 font-light mb-2 uppercase">
              Our Team
            </h2>
            <div className="w-12 h-0.5 bg-orange-500 mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Team Member 1: Deepak */}
            <div className="group bg-white border border-gray-100 shadow-md flex flex-col items-center overflow-hidden h-full">
              
              {/* Image Container with Relative Position & Hover Title Overlay */}
              <div className="relative w-full h-72 bg-gray-200 overflow-hidden">
                <img 
                  src="/aboutus/team1.png" 
                  alt="Deepak Malhotra" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Smooth Slide-up Overlay for Name and Position */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#2d3134]/95 text-white py-4 px-3 text-center transform translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-sm font-bold tracking-wide text-white">Deepak Malhotra</h3>
                  <span className="text-[10px] text-orange-400 font-medium block mt-0.5">(Director)</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between items-center w-full">
                <div className="mb-6 text-center w-full">
                  {/* Truncation via line-clamp-2 */}
                  <p className={`text-xs leading-relaxed text-gray-500 px-2 transition-all duration-300 ${!showMoreDeepak ? 'line-clamp-2' : ''}`}>
                    A multi talented personality with an extensive on and off field production experience from the industry of more than 10 years, Deepak has been handling the projects with a perfection nobody could match. A humble with a sharp mind personality taking the organization to a new height.
                  </p>
                  
                  <button 
                    onClick={() => setShowMoreDeepak(!showMoreDeepak)}
                    className="text-[11px] text-orange-500 hover:text-orange-600 font-semibold mt-2 focus:outline-none"
                  >
                    {showMoreDeepak ? 'View Less' : 'View More'}
                  </button>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="text-orange-500 mb-4 cursor-pointer text-sm font-semibold border border-orange-500 rounded-full w-5 h-5 flex items-center justify-center">
                    i
                  </div>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs uppercase tracking-wider font-semibold py-3 px-4 transition duration-200">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            {/* Team Member 2: Gaurav */}
            <div className="group bg-white border border-gray-100 shadow-md flex flex-col items-center overflow-hidden h-full">
              
              {/* Image Container with Relative Position & Hover Title Overlay */}
              <div className="relative w-full h-72 bg-gray-200 overflow-hidden">
                <img 
                  src="/aboutus/team2.png" 
                  alt="Gaurav Gairola" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Smooth Slide-up Overlay for Name and Position */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#2d3134]/95 text-white py-4 px-3 text-center transform translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-sm font-bold tracking-wide text-white">Gaurav Gairola</h3>
                  <span className="text-[10px] text-orange-400 font-medium block mt-0.5">(Director)</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between items-center w-full">
                <div className="mb-6 text-center w-full">
                  {/* Truncation via line-clamp-2 */}
                  <p className={`text-xs leading-relaxed text-gray-500 px-2 transition-all duration-300 ${!showMoreGaurav ? 'line-clamp-2' : ''}`}>
                    An experienced mountaineer and seasoned traveller who has been to the core of Uttarakhand to live and experience the roots. With an experience of local know-hows, folklores and tradition, he has been working closely with the state tourism board to promote and advertise the tradition and beauty of Uttarakhand, especially, making documentaries.
                  </p>

                  <button 
                    onClick={() => setShowMoreGaurav(!showMoreGaurav)}
                    className="text-[11px] text-orange-500 hover:text-orange-600 font-semibold mt-2 focus:outline-none"
                  >
                    {showMoreGaurav ? 'View Less' : 'View More'}
                  </button>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="text-orange-500 mb-4 cursor-pointer text-sm font-semibold border border-orange-500 rounded-full w-5 h-5 flex items-center justify-center">
                    i
                  </div>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs uppercase tracking-wider font-semibold py-3 px-4 transition duration-200">
                    Read More
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs