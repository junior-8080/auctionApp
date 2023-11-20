import React from "react";
import FormWrapper from "@auth/components/FormWrapper";
import SignupFormOne from "@auth/components/SignupFormOne";

function SignupPage() {
  return (
    <FormWrapper title={"Sign Up"}>
      <SignupFormOne />
    </FormWrapper>
  );
}

export default SignupPage;
