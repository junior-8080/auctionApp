import React from "react";
import {
  BsFillFuelPumpFill,
  BsFillLightningFill,
  BsStarFill,
} from "react-icons/bs";
import { IoCarSharp } from "react-icons/io5";
import {
  MdCollectionsBookmark,
  MdOutlineAirlineSeatReclineNormal,
  MdRadioButtonChecked,
  MdVerifiedUser,
} from "react-icons/md";
import { LiaDotCircleSolid } from "react-icons/lia";
import { BiSolidCarWash, BiSolidEvStation } from "react-icons/bi";
import { GrTarget } from "react-icons/gr";
import { BsArrowLeftRight } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import Image from "next/image";
import { RiCalendar2Fill, RiKeyboardBoxLine } from "react-icons/ri";
import { IoMdFlashlight } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";
import ProductListing from "./ProductListing";
import ImageGrid from "./ImageGrid";

const PageContent = () => {
  return (
    <div>
      <div className=" bg-white">
        <ImageGrid />
      </div>
      <div className="flex flex-col px-24 bg-white">
        <div className="flex items-center justify-between py-10 border-b ">
          <div className="flex flex-col items-center">
            <p className="flex items-center text-xl text-grey">
              <BsStarFill className="text-[#EF8354] mr-2 " />
              <span>
                4.91 (98) . 6277 Jaskolski Inlet, Lake Jonchester, WA 00046
              </span>
            </p>
            <p className="font-bold text-textBlack text-[38px]">
              2021 BMW 228 Gran Coupe
            </p>
          </div>
          <strong className="font-bold text-textBlack text-[38px]">
            $35,700
          </strong>
        </div>

        <div className="pb-20 border-b">
          <div className="flex gap-10 my-10">
            <div className="flex gap-2 w-56">
              <p className="flex h-12 w-12 items-center mr-2 justify-center rounded-lg border bg-[#F5F6F7] ">
                <IoCarSharp className="text-grey text-[32px] " />
              </p>
              <p className="flex flex-col">
                <span className="font-bold text-lg text-textBlack">Sedan</span>
                <span className="text-lg text-grey">Body type</span>
              </p>
            </div>
            <div className="flex gap-2 w-56">
              <p className="flex h-12 w-12 items-center mr-2 justify-center rounded-lg border bg-[#F5F6F7] ">
                <MdOutlineAirlineSeatReclineNormal className="text-grey text-[32px] " />
              </p>
              <p className="flex flex-col">
                <span className="font-bold text-lg text-textBlack">
                  5 Seats
                </span>
                <span className="text-lg text-grey">Volume</span>
              </p>
            </div>
            <div className="flex gap-2 w-56">
              <p className="flex h-12 w-12 items-center mr-2 justify-center rounded-lg border bg-[#F5F6F7] ">
                <BsFillFuelPumpFill className="text-grey text-[32px] " />
              </p>
              <p className="flex flex-col">
                <span className="font-bold text-lg text-textBlack">
                  27-28- Mpg
                </span>
                <span className="text-lg text-grey">Consumption</span>
              </p>
            </div>
            <div className="flex gap-2 w-56">
              <p className="flex h-12 w-12 items-center mr-2 justify-center rounded-lg border bg-[#F5F6F7] ">
                <LiaDotCircleSolid className="text-grey text-[32px] " />
              </p>
              <p className="flex flex-col">
                <span className="font-bold text-lg text-textBlack">
                  3.2L 6-Cylinder
                </span>
                <span className="text-lg text-grey">Engine</span>
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex mt-10 ">
              <div className="flex flex-col w-[60%]">
                <div className="flex flex-col">
                  <p className="text-bold">What is the BMW 2 Series?</p>
                  <p className="mt-5 text-textBlack leading-7 whitespace-pre-wrap text-lg pre">
                    The coupe and convertible come in 230i and M240i form. The
                    230i is powered by a 248-horsepower, turbocharged 2.0-liter
                    four-cylinder engine, while the M240i gets a 335-hp,
                    turbocharged 3.0-liter inline-six. Both versions are offered
                    with rear- or all-wheel drive and an eight-speed automatic
                    or six-speed manual transmission. The Gran Coupe is powered
                    by a turbocharged 2.0-liter four-cylinder that makes 228 hp
                    in the 228i and 301 hp in the M235i.
                  </p>
                </div>

                {/* <div className="flex  pb-20 mt-10 border-b">
          <div className="flex  flex-col"> */}

                <div className="flex mt-10 justify-between">
                  <div className="flex flex-col text-lg gap-8">
                    <p className="text-textBlack flex items-center gap-5">
                      <MdRadioButtonChecked className="h-8 w-8" />
                      <span>17-inch wheels</span>
                    </p>
                    <p className="text-textBlack flex items-center gap-5">
                      <BsArrowLeftRight className="h-8 w-8" />
                      <span>Lane departure warning</span>
                    </p>
                    <p className="text-textBlack flex items-center gap-5">
                      <MdCollectionsBookmark className="h-8 w-8" />
                      <span>Push-button start</span>
                    </p>
                    <p className="text-teal">... All Features</p>
                  </div>
                  <div className="flex flex-col text-lg gap-8">
                    <p className="text-textBlack flex items-center gap-5">
                      <LuArrowUpDown className="h-8 w-8" />
                      <span>Forward collision warning</span>
                    </p>
                    <p className="text-textBlack flex items-center gap-5">
                      <IoMdFlashlight className="h-8 w-8" />
                      <span>LED headlights</span>
                    </p>
                    <p className="text-textBlack flex items-center gap-5">
                      <FiTarget className="h-8 w-8" />
                      <span>Front and rear parking sensors</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[40%]  pl-40">
                <p className="text-grey text-xl">Time left:</p>
                <p className="text-2xbold mb-6">1 day 19:47:07</p>
                <button
                  className="h-[72px] text-xl my-2 rounded-lg bg-teal"
                  type="button"
                >
                  Place a Bid
                </button>
                <button
                  className="h-[72px] text-xl my-2 rounded-lg bg-[#FFBA02]"
                  type="button"
                >
                  Buy Now
                </button>
                <button
                  className="h-[72px] text-xl my-2 rounded-lg bg-grey"
                  type="button"
                >
                  View Bid History
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  pb-20 mt-10 border-b">
          <div className="flex w-[60%] flex-col">
            <p className="flex flex-col">
              <span className="text-bold">Warranty</span>
              <span className="text-textBlack">
                New car and certified pre-owned programs by BMW
              </span>
            </p>

            <div className="flex gap-24  mt-10">
              <div className="flex flex-col gap-10">
                <div className="flex gap-3 items-center text-textBlack">
                  <RiKeyboardBoxLine className="h-8 w-8" />
                  <p className="flex flex-col">
                    <span className="text-smbold">Bumper-to-Bumper</span>
                    <span>48 months / 50,000 miles</span>
                  </p>
                </div>
                <div className="flex gap-3 items-center text-textBlack">
                  <BiSolidCarWash className="h-8 w-8" />
                  <p className="flex flex-col">
                    <span className="text-smbold">Roadside Assistance</span>
                    <span>48 months / unlimited distance</span>
                  </p>
                </div>
                <div className="flex gap-3 items-center text-textBlack">
                  <MdCollectionsBookmark className="h-8 w-8" />
                  <p className="flex flex-col">
                    <span className="text-smbold">Basic Warranty Terms</span>
                    <span>1 year</span>
                  </p>
                </div>
                <div className="flex gap-3 items-center text-textBlack">
                  <FaToolbox className="h-8 w-8" />
                  <p className="flex flex-col">
                    <span className="text-smbold">
                      Dealer Certification Required
                    </span>
                    <span>196-point inspection</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10  -ml-5">
                <div className="flex gap-3 items-center text-textBlack">
                  <BsFillLightningFill className="h-8 w-8" />
                  <p className="flex flex-col">
                    <span className="text-smbold">Powertrain</span>
                    <span>48 months / 50,000 miles</span>
                  </p>
                </div>
                <div className="flex gap-3 items-center text-textBlack">
                  <RiCalendar2Fill className="h-8 w-8" />
                  <p className="flex flex-col">
                    <span className="text-smbold">Maximum Age/Mileage</span>
                    <span>Certified Pre-Owned Elite</span>
                  </p>
                </div>
                <div className="flex gap-3 items-center text-textBlack">
                  <GrTarget className="h-8 w-8" />
                  <p className="flex flex-col">
                    <span className="text-smbold">Engine Components</span>
                    <span>50,000 miles</span>
                  </p>
                </div>
                <div className="flex gap-3 items-center text-textBlack">
                  <BiSolidEvStation className="h-8 w-8" />
                  <p className="flex flex-col">
                    <span className="text-smbold">Roadside Assistance</span>
                    <span>I year</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[40%] border border-lightGrey rounded-md">
            <div className="flex my-10 flex-col gap-5 px-10 ">
              <div className="flex gap-4">
                <div className="w-58 h-54 rounded-md border p-1">
                  <Image
                    src="/assets/CarLogo.svg"
                    width={74}
                    height={74}
                    alt="logo"
                  />
                </div>
                <p>
                  <span className="flex items-center gap-3 text-smbold">
                    Subaru Champlin{" "}
                    <MdVerifiedUser className="text-[#7963F0] text-2xl" />
                  </span>
                  <span className="text-grey">Othoberg, HI 78276</span>
                </p>
              </div>
              <p className="text-grey">
                The sunrise and sunset gorges. Horses and local natural
                products.{" "}
              </p>
            </div>
            <div></div>
          </div>
        </div>

        <div className="pt-10 pb-20">
          <ProductListing caption="RELATED PRODUCTS" />
        </div>
      </div>
    </div>
  );
};

export default PageContent;
