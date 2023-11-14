import React from "react";
import { IoClose, IoStar, IoStarOutline } from "react-icons/io5";
import BidingHistoryItem from "./BidingHistoryItem";

const BidingHistoryModal = ({ setShowHistoryModal }) => {
  return (
    <div className="fixed  top-0 bottom-0 flex flex-col w-full  h-full  items-center justify-center ">
      <div className="bg-black-500  w-full h-full absolute opacity-70 " />

      <div className="flex flex-col h-[90%] px-4 relative min-w-[900px] max-w-[1000px] z-50 bg-white rounded-2xl border-teal">
        <div className="flex items-center justify-center border-0 border-b-[1px] border-b-[#D8D8D8] h-[72px] p-5 text-textBlack">
          <p className="font-bold text-2xl flex-1 text-center">
            Bidding History
          </p>
          <IoClose
            onClick={() => setShowHistoryModal((prevState) => !prevState)}
            className="text-[22px]"
          />
        </div>

        <div className="flex items-center justify-between  border-b pb-4  pt-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 justify-center">
              <IoStar className="text-[#EF8354]" />{" "}
              <p className="text-xl font-bold text-textBlack">4.91</p>{" "}
              <p className="text-xl text-grey">
                (98) . 6277 Jaskolski Inlet, Lake Jonchester, WA 00046
              </p>
            </div>
            <p className="text-textBlack font-bold text-[38px]">$35,700</p>
          </div>
          <p className="text-textBlack font-bold text-[38px]">$35,700</p>
        </div>

        <div className="overflow-y-auto  custom-scrollbar px-4 my-6 ">
          <BidingHistoryItem />
          <BidingHistoryItem />
          <BidingHistoryItem />
          <BidingHistoryItem />
          <BidingHistoryItem />
          <BidingHistoryItem />
          <BidingHistoryItem />
        </div>
      </div>
    </div>
  );
};

export default BidingHistoryModal;
