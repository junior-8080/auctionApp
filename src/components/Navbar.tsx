"use client";
import React, { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillCameraFill } from "react-icons/bs";
import PostAuctionForm from "./myAuctions/PostAuctionForm";
import { routes } from "@/lib/routes";

const Navbar = () => {
  const user = true;

  const [showMenu, setShowMenu] = useState(false);

  const [showPostForm, setShowPostForm] = useState(false);
  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  const toggleShowPostForm = () => {
    setShowPostForm((prevState) => !prevState);
  };
  return (
    <nav className={"flex flex-col w-full z-50"}>
      <div className={"flex   bg-teal p-3"}>
        <div className={"flex flex-1 items-center gap-10 pl-20"}>
          <Link href={routes.help}>Help</Link>
          <Link href={routes.howToBuy}>How to buy</Link>
          <Link href={routes.howToSell}>How to sell</Link>
        </div>
        <div className={"flex gap-2 items-center pr-20"}>
          <p>Cart</p>
          <LuShoppingCart className="text-xl" />
        </div>
      </div>

      <div className="flex flex-row shadow-sm bg-white h-24 text-black-500 justify-end pl-10 pr-10">
        <div className="flex ml-12">
          <Image src="/assets/logo.svg" width={40} height={40} alt="logo" />
        </div>
        <div className={"flex-1 flex items-center justify-end p-5 gap-16"}>
          <ul className="flex items-center  gap-8  -pr-10 justify-end text-gray-900 ">
            {user && (
              <>
                <Link href={routes.dashboard}>
                  <li>Dashboard</li>
                </Link>
                <Link href={routes.premiumServices}>
                  <li>Premium Services</li>
                </Link>
              </>
            )}
            <Link
              href={routes.myAuctions}
              className="flex items-center text-teal font-bold border-b-4 border-teal h-24 "
            >
              {user ? "My " : ""}Auctions
            </Link>
            <Link href={routes.aboutUs}>
              <li>About us</li>
            </Link>
            <Link href={routes.faq}>
              <li>FAQ</li>
            </Link>
            <Link href={routes.contact}>
              <li>Contact</li>
            </Link>
          </ul>
          {user ? (
            <div className={"flex items-center font-bold mr-8 gap-5"}>
              <button
                onClick={toggleShowPostForm}
                className="bg-teal font-bold text-lg text-center w-40 text-white rounded-md h-11 "
              >
                Post an Auction
              </button>
              <IoIosNotificationsOutline className="text-3xl cursor-pointer text-grey" />
              <div onClick={toggleShowMenu} className="flex cursor-pointer">
                <Image
                  src="/assets/avaImg.png"
                  width={50}
                  height={50}
                  alt="logo"
                />
              </div>
              <AiFillCaretDown />
            </div>
          ) : (
            <div className={"flex font-bold mr-8 -500 w-60 gap-4"}>
              <Link href={routes.signup}>
                {" "}
                <button className="bg-teal text-center p-1 text-white rounded-md h-82 w-36">
                  Login
                </button>
              </Link>
              <Link href={routes.signup}>
                <button className="bg-white border text-teal-500 p-1 border-teal-500 rounded-md h-82 w-36 ">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* //Menu modal */}
        <div
          onClick={toggleShowMenu}
          className={`${
            showMenu ? "flex" : "hidden"
          } absolute mt-[100px] flex flex-col justify-around rounded-md shadow-xl  z-50 bg-white w-[272px] h-[420px]`}
        >
          <div className="relative flex flex-col items-center justify-center">
            <div className="relative">
              <Image src="/assets/avaImg.png" width={87} height={87} alt="" />
            </div>
            <p className="z-50 absolute bg-white flex items-center justify-center text-teal h-10 w-10 rounded-full border-2 border-teal right-[85px]">
              <BsFillCameraFill />
            </p>
            <p className="mt-5 text-smbold">Hector Mariano</p>
          </div>
          <div className="flex justify-between bg-lightGrey py-3 px-8">
            <div className="flex flex-col ">
              <p className="text-smbold">$500</p>
              <span className="text-grey text-sm">Your Balance</span>
            </div>
            <div className="flex flex-col ">
              <p className="text-smbold">$500</p>
              <span className="text-grey text-sm">Your Balance</span>
            </div>
          </div>
          <ul className="px-5 text-[15px] text-textBlack flex flex-col items-start gap-5">
            <li>Transaction History</li>
            <li>Settings</li>
            <button className="text-[#EB5757]">Logout</button>
          </ul>
        </div>
      </div>

      {showPostForm && (
        <PostAuctionForm toggleShowPostForm={toggleShowPostForm} />
      )}
    </nav>
  );
};

export default Navbar;
