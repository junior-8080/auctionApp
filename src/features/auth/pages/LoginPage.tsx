import React from "react";
import LoginForm from "@auth/components/LoginForm";
import SocialButton from "@auth/components/SocialButton";
import FormWrapper from "@auth/components/FormWrapper";
import Link from "next/link";

function LoginPage() {
  return (
    <FormWrapper title={"Sign in"}>
      <LoginForm />
      <SocialButton />
      <div className="flex py-4  bg-[#F5F6F7] text-grey my-2">
        <p className="mr-2 px-2">Don't have an account? </p>
        <Link href={"/auth/signup"}>Sign Up</Link>
      </div>
    </FormWrapper>
  );
}

export default LoginPage;
