"use client";
import { routes } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsDot, BsSlashLg, BsThreeDots } from "react-icons/bs";
import { PiWarningCircleLight } from "react-icons/pi";

const ProductCard = ({
  flexCard,
  auctionPage,
}: {
  flexCard: boolean;
  auctionPage: boolean;
}) => {
  return (
    <Link href={`${routes.product}/6`}>
      <div
        className={`${
          flexCard ? "flex-row gap-6" : "flex-col"
        }  flex p-3 h-628 rounded-2xl border `}
      >
        <div className="relative">
          <Image
            className={`${flexCard && "h-full"}`}
            src="/assets/Car1.svg"
            width={`${auctionPage ? 500 : flexCard ? 280 : 472}`}
            height={`${flexCard ? 300 : 277}`}
            alt="product"
          />
          {!flexCard && (
            <p className="flex bg-slate-100 items-center justify-center absolute top-3 right-3 rounded-md w-6 h-6  cursor-pointer ">
              <PiWarningCircleLight className="text-gray-500" />
            </p>
          )}
        </div>

        <div
          className={`flex flex-col ${
            auctionPage && "gap-4"
          } text-black-500 pt-3 pb-1 `}
        >
          <div className="flex flex-col">
            {auctionPage && (
              <div className="flex justify-between items-center">
                <p className="bg-[#ffeab1] rounded-lg text-[#FFBA02] font-bold px-8 py-2 mb-2">
                  Home Use
                </p>
                <BsThreeDots />
              </div>
            )}
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

          {!auctionPage && (
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
          )}

          {flexCard && (
            <>
              <div className="flex gap-12 items-center">
                <p className="flex flex-col">
                  <span className="font-bold text-lg">10d 12hrs</span>
                  <span className="text-gray-400 ">Time Left</span>
                </p>
                <BsSlashLg
                  className={`${
                    auctionPage ? "flex h-16 w-10 text-[#E4E6E8] " : "hidden"
                  }`}
                />
                <p className={`flex flex-col ${!auctionPage && "hidden"}`}>
                  <span className="font-bold text-lg">Sunday, 9:38PM</span>
                  <span className="text-gray-400">Auction Ending</span>
                </p>
                <BsSlashLg
                  className={`${
                    auctionPage ? "flex h-16 w-10 text-[#E4E6E8] " : "hidden"
                  }`}
                />
                <p className="flex flex-col">
                  <span className="font-bold text-lg">18</span>
                  <span className="text-gray-400">Active bids</span>
                </p>
                <BsSlashLg
                  className={`${
                    auctionPage ? "flex h-16 w-10 text-[#E4E6E8] " : "hidden"
                  }`}
                />
                <p className="flex flex-col">
                  <span className="font-bold text-lg">$14,000</span>
                  <span className="text-gray-400">Current bid</span>
                </p>
              </div>
            </>
          )}

          <div className={`flex  justify-between items-center -mt-1`}>
            {auctionPage && (
              <div className="flex text-sm w-9/12 flex-col justify-center rounded-lg g px-2 py-2 bg-transparent border h-[50px]">
                <p className=" text-grey ">Enter your bid (Minimum $14,500)</p>
                <input
                  id="search-auctions"
                  className="flex-1 placeholder-textBlack bg-transparent text-textBlack focus:outline-none  outline-none"
                  type="text"
                  name="search"
                  value=""
                  placeholder="Start typing …"
                  // onChange={(e) => handleChange(e)}
                />
              </div>
            )}

            {flexCard && (
              <button className="bg-teal px-6 h-[50px] rounded-md text-base font-bold text-white ">
                {auctionPage ? "Place Bid" : " View Auction"}
              </button>
            )}
            {!auctionPage && !flexCard && (
              <div className="w-full justify-center items-center mt-5">
                <button className="bg-teal h-16 rounded-md text-2xl font-bold text-white w-full">
                  Place Bid
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
