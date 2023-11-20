import React from "react";
import { BsGoogle, BsTwitter } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";

function SocialButton() {
  return (
    <div>
      {" "}
      <div className="flex -mt-5 flex-col p-5">
        <div className="flex mb-5 gap-5 bg-red items-center text-grey">
          <hr className="border-none h-[1px]  w-2/4  bg-[#D8D8D8]" /> Or{" "}
          <hr className="border-none h-[1px]  w-2/4  bg-[#D8D8D8]" />
        </div>
        <div className="flex flex-col gap-2">
          <button className="w-full h-[54px] justify-start  flex items-center text-grey rounded-xl border border-[#D8D8D8]">
            <BsGoogle className="ml-5 text-xl mr-[30%]" />
            <p>Sign Up with Google</p>
          </button>
          <button className="w-full h-[54px] flex items-center text-grey rounded-xl border border-[#D8D8D8]">
            <BiLogoFacebook className="ml-5 text-xl mr-[30%]" />
            <p>Sign Up with Facebook</p>
          </button>
          <button className="w-full h-[54px] justify-cstart  flex items-center text-grey rounded-xl border border-[#D8D8D8]">
            <BsTwitter className="ml-5 text-xl mr-[30%]" />
            <p> Sign Up with Twitter</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SocialButton;
