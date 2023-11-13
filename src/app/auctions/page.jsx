// import Navbar from "@/components/Navbar";
import Navbar from "@/components/Navbar";
import AuctionsSidebar from "@/components/auctions/AuctionsSidebar";
import ProductListing from "@/components/products/ProductListing";
import React from "react";
import { AUCTION_PROPERTIES } from "@/constants/data";
import Footer from "@/components/Footer";

const dummyData = {
  accordionItems: [
    {
      title: "Year",
      checkboxes: ["2020", "2021", "2022"],
    },
    {
      title: "Model",
      checkboxes: ["Sedan", "SUV", "Truck"],
    },
    {
      title: "Make",
      checkboxes: ["Toyota", "Ford", "Honda"],
    },
    {
      title: "Transmission",
      checkboxes: ["Automatic", "Manual"],
    },
    {
      title: "Body style",
      checkboxes: ["Hatchback", "Convertible", "Coupe"],
    },
    {
      title: "Engine",
      checkboxes: ["3.5 V-6 cyl", "3.7 V-6 cyl", "4.5 V-5 cyl"],
    },
    {
      title: "Drive train",
      checkboxes: ["4WD", "RWD"],
      subItems: [
        {
          title: "Engine",
          checkboxes: ["3.5 V-6 cyl", "3.7 V-6 cyl", "4.5 V-5 cyl"],
        },
      ],
    },
    {
      title: "Interior",
      checkboxes: ["Leather", "Cloth"],
    },
    {
      title: "Color",
      checkboxes: ["Red", "Blue", "Green"],
    },
    {
      title: "Price",
      checkboxes: ["$15,700", "$25,000", "$38,990"],
    },
    {
      title: "Features",
      checkboxes: ["Bluetooth", "Navigation", "Sunroof"],
    },
  ],
};

const page = () => {
  return (
    <main>
      <Navbar />

      <div className="flex items-start p-20 gap-4">
     
        <div className="flex flex-col -mt-10 w-4/5">
        <p className="flex gap-1 text-grey items-center -mb-10">
          <span>Home</span>
          <span>/</span>
          <span>Auctions</span>
        </p>
          <ProductListing caption={""} flexCard={true} auctionList={true} myAuctionPage={false} />
        </div>

        <AuctionsSidebar data={AUCTION_PROPERTIES} />
      </div>
      <Footer />
    </main>
  );
};

export default page;
