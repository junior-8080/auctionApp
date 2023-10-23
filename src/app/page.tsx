import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import ProductListing from "@/components/ProductListing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen pb-5 flex-col items-center justify-between overflow-hidden">
      <Navbar />
      <ProductListing />
      <Footer />
    </main>
  );
}
