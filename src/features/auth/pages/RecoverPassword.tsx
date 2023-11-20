"use client";
import BaseInput from "@/components/BaseInput";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
};
const RecoverPassword = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <BaseInput
            id={"email"}
            label="Email"
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Enter your email"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-400"
          >
            Recover
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
