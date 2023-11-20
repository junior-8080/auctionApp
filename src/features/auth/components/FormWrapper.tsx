import React, { PropsWithChildren } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function FormWrapper(
  props: PropsWithChildren<{
    title: string;
    handleBack?: () => void;
    showArrowBack?: boolean;
  }>,
) {
  return (
    <div
      className={
        "flex flex-col relative w-[557px]  z-50 bg-white rounded-2xl border-teal"
      }
    >
      <div className="flex items-center justify-center border-0 border-b-[1px] border-b-[#D8D8D8] h-[72px] p-5 text-textBlack">
        {props.showArrowBack && (
          <BiArrowBack
            onClick={props.handleBack ? props.handleBack : undefined}
            className="text-[22px]"
          />
        )}
        <p className="font-bold text-2xl flex-1 text-center">{props.title}</p>
        <IoClose className="text-[22px]" />
      </div>
      <div className={"p-5"}>{props.children}</div>
    </div>
  );
}

export default FormWrapper;
