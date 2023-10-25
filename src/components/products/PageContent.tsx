import React from "react";
import { BsFillFuelPumpFill, BsStarFill } from "react-icons/bs";
import { IoCarSharp } from "react-icons/io5";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { LiaDotCircleSolid } from "react-icons/lia";

const PageContent = () => {
  return (
    <div>
      {/* <div className='h-[836px] bg-transparent'>

        </div> */}
      <div className="flex flex-col px-24 bg-white">
        <div className="flex items-center justify-between py-10  border-b ">
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

        <div>
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

          
        </div>
      </div>
    </div>
  );
};

export default PageContent;
