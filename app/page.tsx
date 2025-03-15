"use client";

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import {
  FeaturedSection,
  GamesSection,
  HeroSection,
  ReachedSection,
  UserStorySection,
} from "@/components/homepage";
import "@/styles/pages/homepage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <GamesSection />
      <ReachedSection />
      <UserStorySection />
      <Footer />
    </>
  );
}
