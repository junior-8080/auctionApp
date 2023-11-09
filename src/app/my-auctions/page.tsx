import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageContent from "@/components/myAuctions/PageContent";
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
