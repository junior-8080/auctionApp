import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className={"flex flex-col w-full "}>
      <div className={"flex   bg-teal p-3"}>
        <div className={"flex flex-1 items-center gap-10 pl-20"}>
          <p>Help</p>
          <p>How to buy</p>
          <p>How to sell</p>
        </div>
        <div className={"flex gap-2 items-center pr-20"}>
          <p>Cart</p>
          <LuShoppingCart className="text-xl" />
        </div>
      </div>

      <div className="flex flex-row bg-white text-black-500 justify-end pl-10 pr-10">
        <div className="flex ml-12">
          <Image src="/assets/logo.svg" width={40} height={40} alt="logo" />
        </div>
        <div className={"flex-1 flex items-center justify-end p-5 gap-16"}>
          <ul className="flex  gap-16 pl-10 pr-0 w-1/2 justify-end text-gray-900 ">
            {/* <li>Dashboard</li>
            <li>Premium Services</li> */}
            <li>Auctions</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          <div className={"flex font-bold mr-8 -500 w-60 gap-4"}>
            <Link href={"/auth/login"}>
              {" "}
              <button className="bg-teal text-center p-1 text-white rounded-md h-82 w-36">
                Login
              </button>
            </Link>
            <Link href={"/auth/signup"}>
              <button className="bg-white border text-teal-500 p-1 border-teal-500 rounded-md h-82 w-36 ">
                Sign up
              </button>
            </Link>
          </div>
          {/* <div className={"flex font-bold mr-8 -500 w-60 gap-4"}>
            <button className="bg-teal font-bold text-lg text-center px-10 text-white rounded-md h-16 ">
              Post an Auction
            </button>
            <IoIosNotificationsOutline />
            <div className="flex ml-12">
              <Image src="/assets/logo.svg" width={40} height={40} alt="logo" />
            </div>
            <AiFillCaretDown />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
