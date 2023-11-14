"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
  };

  return (
    <main className="flex flex-col ">
      <Navbar />
      <div className="flex justify-center items-center pb-40">
        <div className="flex flex-col  gap-6 justify-center ">
          <p className="flex gap-1 text-grey items-center mt-6 ">
            <span>Home</span>
            <span>/</span>
            <span>Settings</span>
          </p>
          <p className="text-textBlack font-bold text-[45px]">Settings</p>

          <div className="flex flex-col  w-[600px] gap-6 ">
            <div className="flex w-full items-center justify-between border-b text-lg pb-3 text-[#707070]">
              <p>Manage Account</p> <IoIosArrowForward />
            </div>
            <div className="flex w-full items-center justify-between border-b text-lg pb-3 text-[#707070]">
              <p>Change Password</p> <IoIosArrowForward />
            </div>
            <div className="flex w-full items-center justify-between border-b text-lg pb-3 text-[#707070]">
              <p>Notifications</p> <IoIosArrowForward />
            </div>
            <div className="flex w-full items-center justify-between border-b text-lg pb-3 text-[#707070]">
              <p>Dark Mode</p>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                  className="hidden"
                />
                <span className="relative">
                  <span
                    className={`flex items-center justify-center slider ${
                      darkMode ? "bg-teal" : "bg-gray-400"
                    } inline-block w-14 h-8 rounded-full transition`}
                  >
                    <span
                      className={`indicator 
                       bg-white
                       inline-block w-6 h-6 rounded-full transition transform ${
                         darkMode ? "translate-x-3" : "-translate-x-2"
                       }`}
                    ></span>
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Settings;
