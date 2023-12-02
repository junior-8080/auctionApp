"use client";
import BaseInput from "@/components/BaseInput";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
// import './signUp.css';
import { useYupResolver } from "@hooks/useYupResolver";
import Link from "next/link";
import { useSignUp } from "../hooks/useSignUp";

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

const SignUpFormOne = () => {
  const resolver = useYupResolver(
    Yup.object().shape({
      email: Yup.string().required("Email is required"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
    })
  );
  const { isLoading, signup } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver, mode: "onChange" });
  const [agreement, setAgreement] = useState(false); // State for checkbox

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const payload = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
      confirm_password: data.confirmPassword,
    };
    signup(payload);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreement(e.target.checked);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <BaseInput
          label="Email"
          id="email"
          placeholder="Enter email"
          type="email"
          {...register("email")}
          errorMessage={errors.email ? errors.email.message : ""}
        />
        <div className="flex w-full gap-4">
          <div className="w-1/2">
            <BaseInput
              label="First Name"
              id="firstName"
              placeholder="Enter first name"
              type="text"
              {...register("firstName")}
              errorMessage={errors.firstName ? errors.firstName.message : ""}
            />
          </div>
          <div className="w-1/2">
            <BaseInput
              label="Last Name"
              id="lastName"
              placeholder="Enter last name"
              type="text"
              {...register("lastName")}
              errorMessage={errors.lastName ? errors.lastName.message : ""}
            />
          </div>
        </div>
        <BaseInput
          label="Password"
          id="password"
          placeholder="Enter password"
          type="password"
          {...register("password")}
          errorMessage={errors.password ? errors.password.message : ""}
        />
        <BaseInput
          label="Confirm Password"
          id="confirmPassword"
          placeholder="Confirm password"
          type="password"
          {...register("confirmPassword")}
          errorMessage={errors.confirmPassword ? errors.confirmPassword.message : ""}
        />
        <label className="flex items-center text-textBlack mt-4">
          <input
            className="h-4 w-4  bg-[#F5F6F7] appearance-none rounded-full checked:border-4 checked:border-teal mr-2"
            type="checkbox"
            name="agreement"
            checked={agreement}
            onChange={handleCheckboxChange}
          />
          <span className="text-[#6A7280]">I agree with terms & conditions</span>
        </label>
        <button type={"submit"} className="mt-5 w-full bg-teal rounded-lg justify-center font-bold py-2 my-2">
          Sign Up
        </button>
      </form>
      <div className="flex py-4  bg-[#F5F6F7] text-grey my-2">
        <p className="mr-2 px-2">Do you already have an account? </p>
        <Link href={"/auth/login"}>Sign In</Link>
      </div>
    </>
  );
};

export default SignUpFormOne;
