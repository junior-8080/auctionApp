"use client";
import React, { useState } from "react";
import { BsFillCheckCircleFill, BsGoogle, BsTwitter } from "react-icons/bs";
import {
  BiArrowBack,
  BiCheck,
  BiLogoFacebook,
  BiSolidUser,
} from "react-icons/bi";
import { IoClose, IoCloseCircle } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import useFormState from "@/hooks/useFormState";
import { PiLock } from "react-icons/pi";
import { useParams } from "next/navigation";
import { AuthFormData } from "@/constants/types";
import { INITIAL_STATES } from "@/constants/data";
import SocialButton from "@auth/components/SocialButton";

const Auth = () => {
  const [formData, setFormData] = useState<AuthFormData>(INITIAL_STATES.AUTH);

  const params = useParams();
  const method = (params.method as string) || "";

  const {
    state,
    toggleSignIn,
    toggleSignUp,
    toggleRecover,
    handleSubmit,
    handleBack,
  } = useFormState(method);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
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
    <div className="flex flex-col bg-image bg-no-repeat bg-cover bg-center h-[902px] w-full relative items-center justify-center">
      <div className="bg-teal w-full h-[902px] absolute opacity-70 " />

      <form className="flex flex-col relative w-[557px]  z-50 bg-white rounded-2xl border-teal">
        <div className="flex items-center justify-center border-0 border-b-[1px] border-b-[#D8D8D8] h-[72px] p-5 text-textBlack">
          {state.signUpPage === 2 && !state.completed && (
            <BiArrowBack onClick={handleBack} className="text-[22px]" />
          )}
          <p className="font-bold text-2xl flex-1 text-center">
            {state.recover
              ? "Recover Password"
              : state.signUp
                ? "Sign Up"
                : "Sign In"}
          </p>
          <IoClose className="text-[22px]" />
        </div>

        <div className="flex flex-col p-5">
          <div className="flex flex-col space-y-3">
            {state.recover && (
              <div className="flex items-center my-10 h-[210px]  justify-center">
                <p className="flex items-center justify-center bg-[#57B3AC82] w-[203px] h-[203px] rounded-full">
                  {" "}
                  <PiLock className="text-[100px] text-white" />
                </p>
              </div>
            )}
            {state.completed && (
              <div className="flex flex-col items-center  h-[210px]  justify-center">
                <p className="flex items-center justify-center bg-[#57B3AC82] w-[73px] h-[73px] rounded-full">
                  <BiCheck className="text-[40px] text-white" />
                </p>
                <p className="text-center text-textBlack font-bold text-[38px]">
                  Thank you!
                </p>
                <p className="flex items-center justify-center text-sm flex-col text-grey">
                  <span>We sent an email to catherine.shaw@gmail.com</span>
                  <span>
                    Click confirmation link in the email to verify your account
                  </span>
                </p>
              </div>
            )}
            {!state.completed && (
              <div className="flex items-center h-[72px] px-5 rounded-xl relative border border-gray-300">
                <div className="flex flex-1">
                  <label
                    htmlFor="email"
                    className={`absolute text-grey transition-transform ${
                      focusedField === "email" || !!formData.email.length
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
                    focusedField === "email" || !!formData.email.length
                      ? "text-textBlack"
                      : " text-grey"
                  }`}
                />
              </div>
            )}

            {state.signUp && state.signUpPage === 2 && (
              <div className="flex gap-4 items-center">
                <div className="flex items-center h-[72px] px-[14px] rounded-xl relative border border-gray-300">
                  <div className="flex flex-1">
                    <label
                      htmlFor="firstName"
                      className={`absolute text-grey transition-transform ${
                        focusedField === "firstName " ||
                        !!formData.firstName.length
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
                      focusedField === "firstName" ||
                      !!formData.firstName.length
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
                        focusedField === "lastName" ||
                        !!formData.lastName.length
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
                      focusedField === "lastName" || !!formData.lastName.length
                        ? "text-textBlack"
                        : " text-grey"
                    }`}
                  />
                </div>
              </div>
            )}

            {(state.signUpPage === 2 || state.signIn) && !state.completed && (
              <div className="flex items-center h-[72px] px-5 rounded-xl relative border border-gray-300">
                <div className="flex flex-1">
                  <label
                    htmlFor="password"
                    className={`absolute text-grey transition-transform ${
                      focusedField === "password" || !!formData.password.length
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

                {!!formData.password.length ? (
                  <IoCloseCircle className={`text-2xl  text-[#FFBA02]`} />
                ) : (
                  <IoMdLock
                    className={`text-2xl ${
                      focusedField === "password" || !!formData.password.length
                        ? "text-textBlack"
                        : " text-grey"
                    }`}
                  />
                )}
              </div>
            )}

            {state.signUp && state.signUpPage === 2 && (
              <div className="flex items-center h-[72px] px-5 rounded-xl relative border border-gray-300">
                <div className="flex flex-1">
                  <label
                    htmlFor="confirmPassword"
                    className={`absolute text-grey transition-transform ${
                      focusedField === "confirmPassword" ||
                      !!formData.confirmPassword.length
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
                <BsFillCheckCircleFill
                  className={`text-2xl ${
                    focusedField === "confirmPassword" ||
                    !!formData.confirmPassword.length
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
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={(e) => handleChange(e)}
                />
                <span> Remember me</span>
              </p>
              <p onClick={toggleRecover} className="text-teal">
                Recover password
              </p>
            </div>
          ) : (
            <div
              className={`flex justify-between items-center mt-5 mb-5 ${
                state.completed || state.recover ? `hidden` : ""
              }`}
            >
              <p className="flex items-center text-textBlack">
                <input
                  className=" h-4 w-4 bg-[#F5F6F7] appearance-none rounded-full checked:border-4 checked:border-teal mr-2"
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={(e) => handleChange(e)}
                />
                <span> I agree with terms & conditions</span>
              </p>
            </div>
          )}
          <button
            onClick={(e) => handleSubmit(e)}
            className={` bg-teal rounded-lg justify-center font-bold h-[54px] ${
              state.recover ? "mt-5" : ""
            }`}
          >
            {state.recover
              ? "Recover"
              : state.signUp
                ? "Sign Up"
                : state.completed
                  ? "Open Email App & Confirm"
                  : "Sign In"}
          </button>
        </div>

        {(state.signIn || (state.signUpPage === 1 && state.signUp)) && (
          <SocialButton />
        )}

        {state.signUpPage != 2 && !state.recover && !state.completed && (
          <div className=" bottom-0 rounded-b-2xl w-full flex items-center gap-5 justify-center bg-[#F5F6F7] h-[68px] p-5 text-grey">
            {state.signUp && (
              <>
                {" "}
                <p>Do you already have an account?</p>
                <p className="cursor-pointer" onClick={toggleSignIn}>
                  Sign In
                </p>
              </>
            )}
            {state.signIn && (
              <>
                {" "}
                <p>You don't have an account?</p>
                <p className="cursor-pointer" onClick={toggleSignUp}>
                  Sign Up
                </p>
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default Auth;
