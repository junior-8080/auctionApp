import { homeText } from "@/constants";
import { BsCaretDownFill, BsSearch } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { RiEqualizerLine } from "react-icons/ri";

const HeroSection = () => {
  return (
    <div className="flex flex-col bg-image bg-no-repeat bg-cover bg-center h-[902px] w-screen relative items-center justify-center">
      <div className="bg-teal w-screen h-[902px] absolute opacity-70 " />
      <div className="flex flex-col w-[900px] items-center text-center z-50">
        <p className="text-[71px] font-bold z-50">{homeText.heroLgText}</p>
        <p className="flex w-[560px]">
          <span className="text-[25px] font-bold z-50">
            {homeText.heroSmText}
          </span>
        </p>
      </div>

      <div className="flex bg-white items-center rounded-xl shadow-md px-5 z-50 h-[102px] absolute -bottom-14">
        <div className="flex gap-3 items-center pr-4 text-[20px] text-black-500">
          <select
            className="bg-transparent appearance-none text-xl text-black-500 items-center p-3 outline-none"
            id="parent"
            name="category"
            required
          >
            <option value="">Select Category</option>
            <option value="Cars">Cars</option>
            <option value="Bike">Bike</option>
          </select>
          <BsCaretDownFill className="text-textBlack" />
        </div>

        <hr className="border-none h-[102px] bg-teal w-[1px]" />

        <div className="flex  ml-3 justify-end gap-5">
          <div className="bg-lightGrey pl-4 pr-[140px] rounded-md flex items-center text-xl  gap-5 flex-1 h-16">
            <BsSearch className="text-grey" />
            <input
              className="border-opacity-0 outline-none flex-1  bg-lightGrey text-grey "
              placeholder="Search Items"
              id="search"
              type="text"
              aria-label="search"
            />
          </div>
          <button className="flex items-center justify-center rounded-lg h-16 w-[165px] border-opacity-0 bg-lightGrey gap-2 text-xl text-textBlack">
            <RiEqualizerLine /> FILTER
          </button>
          <button className="flex items-center justify-center rounded-lg h-16 w-[165px] border-opacity-0 bg-teal gap-2 text-xl text-white">
            <LuSearch /> SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
