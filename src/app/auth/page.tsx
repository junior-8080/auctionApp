"use client";
import React, { useState } from "react";
import { BsGoogle, BsTwitter } from "react-icons/bs";
import { BiArrowBack, BiLogoFacebook, BiSolidUser } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  agreeWithTermsCond: boolean;
  rememberMe: boolean;
};

const Auth = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    agreeWithTermsCond: false,
    rememberMe: false,
  });

  const [state, setState] = useState({
    recover: false,
    signIn: false,
    signUp: true,
    signUpPage: 2,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [focusedField, setFocusedField] = useState("");

  const handleFocus = (fieldName: any) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField("");
  };
  return (
    <div className="flex flex-col bg-image bg-no-repeat bg-cover bg-center h-[902px] w-screen relative items-center justify-center">
      <div className="bg-teal w-screen h-[902px] absolute opacity-70 " />

      <form className="relative w-[557px] h-[718px] z-50 bg-white rounded-lg">
        <div className="flex items-center justify-center border border-b-[#D8D8D8] h-[72px] p-5 text-textBlack">
          {state.signUpPage === 2 && <BiArrowBack className="text-[22px]" />}
          <p className="font-bold text-2xl flex-1 text-center">
            {state.signIn && "Sign In"}
            {state.signUp && "Sign Up"}
            {state.recover && "Recover Password"}
          </p>
          <IoClose className="text-[22px]" />
        </div>

        <div className="flex flex-col mt-5 p-5">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center h-[72px] px-5 rounded-xl relative border border-gray-300">
              <div className="flex flex-1">
                <label
                  htmlFor="email"
                  className={`absolute text-grey transition-transform ${
                    focusedField === "email"
                      ? "transform -translate-y-4"
                      : "transform"
                  }`}
                >
                  Email
                </label>
                <input
                  id="email"
                  className="flex-1 px-2 py-1 text-grey focus:outline-none  outline-none"
                  type="email"
                  name="email"
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <MdEmail
                className={`text-2xl ${
                  focusedField === "email" ? "text-textBlack" : " text-grey"
                }`}
              />
            </div>

            {state.signUp && state.signUpPage === 2 && (
              <div className="flex gap-4 items-center">
                <div className="flex items-center h-[72px] px-[14px] rounded-xl relative border border-gray-300">
                  <div className="flex flex-1">
                    <label
                      htmlFor="firstName"
                      className={`absolute text-grey transition-transform ${
                        focusedField === "firstName"
                          ? "transform -translate-y-4"
                          : "transform"
                      }`}
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      className="flex-1 px-2 py-1 text-grey focus:outline-none  outline-none"
                      type="text"
                      name="firstName"
                      onFocus={() => handleFocus("firstName")}
                      onBlur={handleBlur}
                      value={formData.firstName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <BiSolidUser
                    className={`text-2xl ${
                      focusedField === "firstName"
                        ? "text-textBlack"
                        : " text-grey"
                    }`}
                  />
                </div>

                <div className="flex items-center h-[72px] px-[14px] rounded-xl relative border border-gray-300">
                  <div className="flex flex-1">
                    <label
                      htmlFor="lastName"
                      className={`absolute text-grey transition-transform ${
                        focusedField === "lastName"
                          ? "transform -translate-y-4"
                          : "transform"
                      }`}
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      className="flex-1 px-2 py-1 text-grey focus:outline-none  outline-none"
                      type="text"
                      name="lastName"
                      onFocus={() => handleFocus("lastName")}
                      onBlur={handleBlur}
                      value={formData.lastName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <BiSolidUser
                    className={`text-2xl ${
                      focusedField === "lastName"
                        ? "text-textBlack"
                        : " text-grey"
                    }`}
                  />
                </div>
              </div>
            )}

            {(state.signUpPage === 2 || state.signIn) && (
              <div className="flex items-center h-[72px] px-5 rounded-xl relative border border-gray-300">
                <div className="flex flex-1">
                  <label
                    htmlFor="password"
                    className={`absolute text-grey transition-transform ${
                      focusedField === "password"
                        ? "transform -translate-y-4"
                        : "transform"
                    }`}
                  >
                    {state.signIn ? "Your password" : "Password"}
                  </label>
                  <input
                    id="password"
                    className="flex-1 px-2 py-1 text-grey focus:outline-none  outline-none"
                    type="password"
                    name="password"
                    onFocus={() => handleFocus("password")}
                    onBlur={handleBlur}
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <IoMdLock
                  className={`text-2xl ${
                    focusedField === "password"
                      ? "text-textBlack"
                      : " text-grey"
                  }`}
                />
              </div>
            )}

            {state.signUp && state.signUpPage === 2 && (
              <div className="flex items-center h-[72px] px-5 rounded-xl relative border border-gray-300">
                <div className="flex flex-1">
                  <label
                    htmlFor="confirmPassword"
                    className={`absolute text-grey transition-transform ${
                      focusedField === "confirmPassword"
                        ? "transform -translate-y-4"
                        : "transform"
                    }`}
                  >
                    Confirm password
                  </label>
                  <input
                    id="confirmPassword"
                    className="flex-1 px-2 py-1 text-grey focus:outline-none  outline-none"
                    type="password"
                    name="confirmPassword"
                    onFocus={() => handleFocus("confirmPassword")}
                    onBlur={handleBlur}
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <IoMdLock
                  className={`text-2xl ${
                    focusedField === "confirmPassword"
                      ? "text-textBlack"
                      : " text-grey"
                  }`}
                />
              </div>
            )}
          </div>

          {state.signIn ? (
            <div className="flex justify-between items-center mt-5 mb-5">
              <p className="flex items-center text-textBlack">
                <input
                  className=" h-4 w-4 bg-[#F5F6F7] appearance-none rounded-full checked:border-4 checked:border-teal mr-2"
                  type="radio"
                  name="agreement"
                  // value={formData.rememberMe}
                  onChange={(e) => handleChange(e)}
                />
                <span> Remember me</span>
              </p>
              <p className="text-teal">Recover password</p>
            </div>
          ) : (
            <div className="flex justify-between items-center mt-5 mb-5">
              <p className="flex items-center text-textBlack">
                <input
                  className=" h-4 w-4 bg-[#F5F6F7] appearance-none rounded-full checked:border-4 checked:border-teal mr-2"
                  type="radio"
                  name="agreement"
                  // value={formData.rememberMe}
                  onChange={(e) => handleChange(e)}
                />
                <span> I agree with terms & conditions</span>
              </p>
            </div>
          )}
          <button className=" bg-teal justify-center font-bold h-[54px] flex items-center text-white text-lg rounded-xl ">
            {state.signIn && "Sign In"}
            {state.signUp && "Sign Up"}
            {state.recover && "Recover"}
          </button>
        </div>

        {(state.signIn || (state.signUpPage === 1 && state.signUp)) && (
          <div className="flex -mt-5 flex-col p-5">
            <p className="flex mb-5 gap-5 bg-red items-center text-grey">
              <hr className="border-none h-[1px]  w-2/4  bg-[#D8D8D8]" /> Or{" "}
              <hr className="border-none h-[1px]  w-2/4  bg-[#D8D8D8]" />
            </p>
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
        )}

        {state.signUpPage != 2 && (
          <div className="absolute bottom-0 w-full flex items-center gap-5 justify-center bg-[#F5F6F7] h-[68px] p-5 text-grey">
            {state.signUp && (
              <>
                {" "}
                <p>Do you already have an account?</p>
                <p>Sign In</p>
              </>
            )}
            {state.signIn && (
              <>
                {" "}
                <p>You don't have an account?</p>
                <p>Sign Up</p>
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default Auth;
