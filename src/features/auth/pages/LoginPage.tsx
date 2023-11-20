import React from "react";
import LoginForm from "@auth/components/LoginForm";
import SocialButton from "@auth/components/SocialButton";
import FormWrapper from "@auth/components/FormWrapper";

function LoginPage() {
  return (
    <FormWrapper title={"Sign in"}>
      <LoginForm />
      <SocialButton />
    </FormWrapper>
  );
}

export default LoginPage;
