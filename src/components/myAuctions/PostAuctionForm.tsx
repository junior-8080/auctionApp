import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const PostAuctionForm = ({}) => {
    
  return (
    <div className="fixed top-0 bottom-0 flex flex-col  h-[902px] w-full items-center">
     <div className="bg-black-500  w-full h-[902px] absolute opacity-70 " />
     
      <form className="flex my-auto flex-col h-4/5 relative w-[700px]  z-50 bg-white rounded-2xl border-teal">
        <div className="flex items-center justify-center border-0 border-b-[1px] border-b-[#D8D8D8] h-[72px] p-5 text-textBlack">
          <p className="font-bold text-2xl flex-1 text-center">
            Post an auctions
          </p>
          <IoClose className="text-[22px]" />
        </div>
        <h1 className="text-red-500">FORM CONTENT</h1>
      </form>
    </div>
  );
};

export default PostAuctionForm;