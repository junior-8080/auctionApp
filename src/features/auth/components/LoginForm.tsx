import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import BaseInput from "@components/BaseInput"; // Importing BaseInput from the library
import { FormInputs } from "./lib/FormInputType";

function LoginForm() {
  const { register, handleSubmit } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"px-10 py-10"}>
      <div className="flex flex-col gap-y-5">
        <BaseInput
          type="email"
          {...register('email')}
          id={"email"}
          placeholder={"Enter email"}
          label={"Email"}        
        />
        <BaseInput
          type="password"
          {...register('password')}
          id={"password"}
          placeholder={"Enter Password"}
          label={"password"}
        />
      </div>

      <button
        className={`mt-5 w-full bg-teal rounded-lg justify-center font-bold h-[54px]`}
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
