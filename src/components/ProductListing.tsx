import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  return (
    <div className="flex flex-col pl-20 pr-20 my-10 gap-20">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-3xl text-black-500 font-bold">LATEST AUCTIONS</p>
          <p className="flex gap-3 items-center">
            <span className="text-gray-500 text-xl font-bold">1/6</span>
            <button className="bg-gray-200 p-2 rounded-md">
              <AiOutlineArrowLeft />
            </button>
            <button className="bg-gray-200 p-2 rounded-md">
              <AiOutlineArrowRight />
            </button>
          </p>
        </div>

        <div className="flex gap-6 mt-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-3xl text-black-500 font-bold">ENDING SOON AUCTIONS</p>
          <p className="flex gap-3 items-center">
            <span className="text-gray-500 text-xl font-bold">1/6</span>
            <button className="bg-gray-200 p-2 rounded-md">
              <AiOutlineArrowLeft />
            </button>
            <button className="bg-gray-200 p-2 rounded-md">
              <AiOutlineArrowRight />
            </button>
          </p>
        </div>

        <div className="flex gap-6 mt-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
