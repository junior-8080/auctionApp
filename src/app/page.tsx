import React from "react";
import ProductListing from "@/components/products/ProductListing";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between overflow-hidden">
      <HeroSection />
      <Features />
      <ProductListing />
      <ContactForm />
    </main>
  );
}
