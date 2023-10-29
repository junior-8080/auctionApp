import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageContent from "@/components/products/PageContent";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <PageContent />
      <Footer />
    </div>
  );
};

export default page;
