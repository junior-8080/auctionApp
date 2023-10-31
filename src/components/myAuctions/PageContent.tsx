import React from "react";
import { BsSearch } from "react-icons/bs";
import ProductListing from "../products/ProductListing";
import { MdArrowRight, MdOutlineKeyboardArrowRight } from "react-icons/md";

const PageContent = () => {
  return (
    <main className="px-20 pb-20">
      <div className="flex flex-col  space-y-6 pb-8">
        <p className="text-grey">Home/My Auctions</p>
        <div className="flex items-center  gap-10 text-grey">
          <p className="px-8 py-2  border text-center">All</p>
          <p>Active auctions</p>
          <p>Pending auctions</p>
          <p>Rejected auctions</p>
        </div>
        <div className="flex items-center rounded-lg px-2 bg-[#E4E6E8] h-16">
          <p className="flex items-center rounded-lg mr-2 p-3 h-10 text-white bg-teal">
            <BsSearch />
          </p>
          <input
            id="search-auctions"
            className="flex-1 bg-transparent px-2 py-1 text-textBlack focus:outline-none  outline-none"
            type="text"
            name="search"
            value=""
            placeholder="Subaru Forester"
            // onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

    <ProductListing caption={""} auctionPage={true} flexCard={true} />

      <div className="text-smbold flex gap-10 items-center">
        <p className="bg-teal py-2 px-5 rounded-lg text-white">1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <button className="flex items-center border rounded-lg font-[400] text-grey py-2 px-5 ">Next <MdOutlineKeyboardArrowRight className='ml-2' /></button>
      </div>
    </main>
  );
};

export default PageContent;
