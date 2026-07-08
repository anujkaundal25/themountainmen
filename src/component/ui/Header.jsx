"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  
  // FIX: Initial state ko "" (khaali) kiya taaki page load par 'About Us' galti se orange na ho
  const [activeSection, setActiveSection] = useState("");

  // Scroll effect for shadow
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active state
  useEffect(() => {
    const ids = ["about", "team", "services", "clients", "gallery", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        // rootMargin lagane se scroll karte waqt upar aate hi section sahi se detect hota hai
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0.2 
      }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "About Us", id: "about" },
    { name: "Team", id: "team" },
    { name: "Services", id: "services" },
    { name: "Our Clients", id: "clients" },
    { name: "Gallery", id: "gallery" },
    { name: "Our Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-400 transition-all duration-300 ${
        scroll ? "shadow-sm py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between lg:justify-start lg:gap-40">
          
          {/* Logo Section */}
          <Link href="/" className="z-50 flex flex-col items-center text-center shrink-0">
            <Image
              src="/logo.png"
              alt="Mountain Men Logo"
              width={150}
              height={150}
              priority
              className="object-contain"
            />
            <span className="text-orange-500 font-bold text-[13px] mt-1 uppercase">
              Mountain Men Films
            </span>
          </Link>

          {/* Desktop Nav (Left-Aligned, Ultra-Bold aur Black) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xs xl:text-sm font-black uppercase transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-orange-500"
                    : "text-black/80 hover:text-orange-500"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden text-black text-3xl z-50 focus:outline-none ml-auto"
          >
            {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-500 lg:hidden flex flex-col justify-center items-center h-screen gap-6 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {navLinks.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setIsOpen(false)}
            className={`uppercase text-lg font-black transition-colors ${
              activeSection === item.id ? "text-orange-500" : "text-black"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}