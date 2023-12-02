"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import BaseInput from "@components/BaseInput"; // Importing BaseInput from the library
import { FormInputs } from "../lib/types";
import * as Yup from "yup";
import { useYupResolver } from "@hooks/useYupResolver";
import Link from "next/link";
import useLogin from "../hooks/useLogin";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required("This field is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .max(128, "Password must be at most 128 characters long.")
    .required("Password is required."),
});

function LoginForm() {
  const resolver = useYupResolver(loginValidationSchema);
  const { login, isLoading } = useLogin();
  const [agreement, setAgreement] = useState(false);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreement(e.target.checked);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ resolver, mode: "onChange" });
  const onSubmit: SubmitHandler<FormInputs> = (data) => login(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"px-5 pt-5 "}>
      <div className="flex flex-col gap-4">
        <BaseInput
          type="email"
          {...register("email")}
          errorMessage={errors.email ? errors.email.message : ""}
          id={"email"}
          placeholder={"Enter email"}
          label={"Email"}
        />
        <BaseInput
          type="password"
          errorMessage={errors.password ? errors.password.message : ""}
          {...register("password")}
          id={"password"}
          placeholder={"Enter Password"}
          label={"Password"}
        />
        <div className="flex justify-between items-center">
          <label className="flex items-center text-textBlack">
            <input
              className="h-4 w-4  bg-[#F5F6F7] appearance-none rounded-full checked:border-4 checked:border-teal mr-2"
              type="checkbox"
              name="agreement"
              checked={agreement}
              onChange={handleCheckboxChange}
            />
            <span className="text-[#6A7280]">Remember me</span>
          </label>
          <Link href={"/auth/recover-password"} className="text-teal">
            Recover password
          </Link>
        </div>
      </div>

      <button type={"submit"} className={`mt-5 w-full bg-teal rounded-lg justify-center font-bold h-[54px] text-white`}>
        {isLoading ? "Sign In" : "Loading"}
      </button>
    </form>
  );
}

export default LoginForm;
