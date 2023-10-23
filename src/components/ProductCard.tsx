"use client";
import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";
import { PiWarningCircleLight } from "react-icons/pi";

const ProductCard = () => {
  return (
    <div className="p-3 h-628 rounded-2xl border">
      <div className="relative">
        <Image src="/assets/Car1.svg" width={472} height={277} alt="product" />
        <p className="flex bg-slate-100 items-center justify-center absolute top-3 right-3 rounded-md w-6 h-6  cursor-pointer ">
          <PiWarningCircleLight className="text-gray-500" />
        </p>
      </div>

      <div className="flex flex-col text-black-500 pt-3 pb-1 ">
        <div className="flex flex-col">
          <p className="text-2xl mb-1 font-bold">
            2013 Subaru Forester Premium Plus
          </p>
          <p className="flex gap-1 text-gray-400 text-base items-center">
            <span>11 475 Miles</span>
            <BsDot />
            <span>white</span>
            <BsDot />
            <span>AWD</span>
            <BsDot />
            <span>4-Clinder Turbo</span>
          </p>
        </div>

        <div className="flex mt-4 mb-4 ">
          <div className="w-58 h-54 rounded-md border p-1">
            <Image
              src="/assets/CarLogo.svg"
              width={40}
              height={40}
              alt="logo"
            />
          </div>
          <div className="flex flex-col text-gray-400 ml-2 justify-center ">
            <p className="text-lg text-black-500">Subaru Champlin</p>
            <span>Seller</span>
          </div>
        </div>

        <div className="flex gap-12 ">
          <p className="flex flex-col">
            <span className="font-bold text-lg">10d 12hrs</span>
            <span className="text-gray-400 ">Time Left</span>
          </p>
          <p className="flex flex-col">
            <span className="font-bold text-lg">18</span>
            <span className="text-gray-400">Active bids</span>
          </p>
          <p className="flex flex-col">
            <span className="font-bold text-lg">$14,000</span>
            <span className="text-gray-400">Current bid</span>
          </p>
        </div>
        <div className="justify-center items-center mt-5">
          <button className="bg-teal-400 h-16 rounded-md text-2xl font-bold text-white w-full">
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
