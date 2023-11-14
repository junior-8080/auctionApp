import React from "react";
import Image from "next/image";

const BidingHistoryItem = () => {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div className="flex items-center gap-2">
        <div className="w-58 h-54 rounded-xl border  p-1">
          <Image
            className="rounded-xl"
            src="/assets/CarLogo.svg"
            width={60}
            height={60}
            alt="logo"
          />
        </div>
        <p className="flex flex-col justify-center ">
          <span className="text-textBlack font-bold text-xl">
            Alberta Oswald
          </span>
          <span className="text-lightGrey ">1hr 12mins ago</span>
        </p>
      </div>
      <p className="bg-[#FFBA02] text-bold rounded-lg px-4 py-2">$50</p>
    </div>
  );
};

export default BidingHistoryItem;
