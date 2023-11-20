import React from "react";
import BaseInput from "@components/BaseInput";

function LoginForm() {
  return (
    <form className={"px-10 py-10"}>
      <div className="flex flex-col gap-y-5">
        <BaseInput
          type={"email"}
          id={"email"}
          placeholder={"Enter email"}
          label={"Email"}
        />
        <BaseInput
          type={"password"}
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
