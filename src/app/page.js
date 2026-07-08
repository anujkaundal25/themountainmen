import AboutUs from "@/component/sections/AboutUs";
import Client from "@/component/sections/Client";
import HeroSection from "@/component/sections/HeroSection";
import Services from "@/component/sections/Services";
import Header from "@/component/ui/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutUs/>
    <Services/>
    <Client/>
    </>
  );
}
