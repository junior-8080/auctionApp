import React from "react";
import FormWrapper from "@auth/components/FormWrapper";
import { PiLock } from "react-icons/pi";

function RecoverPassword() {
  return (
    <FormWrapper title={"Recover Password"}>
      <div className={'className="flex flex-col space-y-3"'}>
        <div className="flex items-center my-10 h-[210px]  justify-center">
          <p className="flex items-center justify-center bg-[#57B3AC82] w-[203px] h-[203px] rounded-full">
            <PiLock className="text-[100px] text-white" />
          </p>
        </div>
      </div>
    </FormWrapper>
  );
}

export default RecoverPassword;
