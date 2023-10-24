import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import ProductListing from "@/components/ProductListing";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between overflow-hidden">
      <Navbar />
      <HeroSection />
      <Features />
      <ProductListing />
      <ContactForm />
      <Footer />
    </main>
  );
}
