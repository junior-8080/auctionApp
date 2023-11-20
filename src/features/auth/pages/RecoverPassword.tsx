"use client";
import BaseInput from "@/components/BaseInput";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormWrapper from "@auth/components/FormWrapper";

type FormValues = {
  email: string;
};
const RecoverPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <FormWrapper title={"Reset Password"}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <BaseInput
          id={"email"}
          label="Email"
          {...register("email", {
            required: "Email is required",
          })}
          errorMessage={errors.email ? errors.email.message : ""}
          type="email"
          placeholder="Enter your email"
        />

        <button
          type={"submit"}
          className={`mt-5 w-full bg-teal rounded-lg justify-center font-bold h-[54px]`}
        >
          Recover Password
        </button>
      </form>
    </FormWrapper>
  );
};

export default RecoverPassword;
