import React from "react";
import { BsGoogle, BsTwitter } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";

function SocialButton() {
  return (
    <div>
      {" "}
      <div className="flex flex-col px-5 mb-5">
        <div className="text-center mb-2 gap-5 bg-red items-center text-grey py-4">
          {/* <hr className="border-none h-[1px]  w-2/4  bg-[#D8D8D8]" /> Or {" "}
          <hr className="border-none h-[1px]  w-2/4  bg-[#D8D8D8]" /> */}
          ---Or---
        </div>
        <div className="flex flex-col gap-2">
          <button className="w-full py-2 justify-start  flex items-center text-grey rounded-xl border border-[#D8D8D8]">
            <BsGoogle className="ml-5 text-xl mr-2" />
            <p>Sign Up with Google</p>
          </button>
          <button className="w-full py-2 flex items-center text-grey rounded-xl border border-[#D8D8D8]">
            <BiLogoFacebook className="ml-5 text-xl mr-2" />
            <p>Sign Up with Facebook</p>
          </button>
          <button className="w-full py-2 justify-cstart  flex items-center text-grey rounded-xl border border-[#D8D8D8]">
            <BsTwitter className="ml-5 text-xl mr-2" />
            <p> Sign Up with Twitter</p>
          </button>
        </div>
        <div className="text-center py-2">
          <Link href={"/auth/signup"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default SocialButton;
