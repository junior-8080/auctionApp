import React from "react";

type Props = {
  label: string;
  id: string;
  placeholder: string;
  type: "email" | "password";
  errorMessage?: string;
};

function BaseInput({ label, id, placeholder, type, errorMessage }: Props) {
  return (
    <div className={"mt-5"}>
      <div className="relative">
        <input
          className="block px-2.5 py-5 text-md rounded border border-gray-300 w-full text-gray-900 bg-transparent appearance-none focus:outline-2 focus:outline-primary-500 focus:ring-0 focus:border-primary-500 peer"
          id={id}
          name="email"
          placeholder={placeholder}
          type={type}
        />
        <label
          className=" w-[80%] absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1/3 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
      <p className={"text-xs text-red-400"}>{errorMessage}</p>
    </div>
  );
}

export default BaseInput;