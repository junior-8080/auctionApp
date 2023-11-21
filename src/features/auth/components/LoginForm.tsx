"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import BaseInput from "@components/BaseInput"; // Importing BaseInput from the library
import { FormInputs } from "../lib/types";
import * as Yup from "yup";
import { useYupResolver } from "@hooks/useYupResolver";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required("This field is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .max(128, "Password must be at most 128 characters long.")
    .required("Password is required."),
});

function LoginForm() {
  const resolver = useYupResolver(loginValidationSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ resolver, mode: "onChange" });
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"px-10 py-10"}>
      <div className="flex flex-col gap-y-5">
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
          label={"password"}
        />
      </div>

      <button
        type={"submit"}
        className={`mt-5 w-full bg-teal rounded-lg justify-center font-bold h-[54px]`}
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
