import Image from "next/image";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="flex flex-col w-screen">
      <div className="flex bg-[#57B3AC]   px-[90px] h-[168px] items-center">
        <p className="text-xl font-bold flex-1">SEARCH THE PRODUCTS</p>

        <div className="flex  justify-end gap-5">
          <div className="bg-white px-5 flex items-center text-xl  rounded-lg gap-5 w-4/5 h-16">
            <BsSearch className="text-[#9A9EA7]" />
            <input
              className="border-opacity-0 outline-none flex-1  bg-white text-[#9A9EA7] "
              placeholder="Search Items"
              id="search"
              type="text"
              aria-label="search"
            />
          </div>
          <button className="flex items-center justify-center rounded-lg h-16 w-[165px] border-opacity-0 bg-white gap-5 text-xl text-[#57b3ac]">
            <LuSearch /> SEARCH
          </button>
        </div>
      </div>

      <div className="flex justify-between bg-[#0D0A19]  px-[90px] h-[237px]">
        <div className="flex items-center">
          <Image src="/assets/logo.svg" width={144} height={144} alt="logo" />
          <p className="flex flex-col ml-5">
            <span className="font-bold text-[31px] text-[#57B3AC]">
              WEB NAME
            </span>
            <span className="text-[19px]">SUBTITLE</span>
          </p>
        </div>
        <div className="flex flex-col gap-3 py-10">
          <p className="font-bold text-lg">About</p>
          <p>How it works</p>
          <p>About us</p>
          <p>Media</p>
        </div>
        <div className="flex flex-col gap-3 py-10">
          <p className="font-bold text-lg">Community</p>
          <p>Against Discrimination</p>
          <p>Invite friends</p>
          <p>Gift cards</p>
        </div>

        <div className="flex flex-col gap-3 py-10">
          <p className="font-bold text-lg">Become seller</p>
          <p>Add your vehicle</p>
          <p>Business account</p>
          <p>Resource Center</p>
          <p>Community </p>
        </div>
        <div className="flex flex-col gap-3 py-10">
          <p className="font-bold text-lg">Contact Info</p>
          <p className="font-bold flex flex-col">
            <span>Address</span>
            <span>info@webname.com</span>
          </p>
          <p className="font-bold flex flex-col">
            <span>Phone </span>
            <span>+9136458434-9</span>
          </p>
        </div>
      </div>

      <div className="flex text-black-500 items-center justify-center h-[44px] bg-[#9A9EA7]">
        <p>Copyright © 2009 - 2021 webname. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
