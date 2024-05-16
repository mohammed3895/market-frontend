import React from "react";
import FormLabel from "../FormLabel";
import { Button } from "@/components/ui/button";
import Google from "@/public/assets/google.svg";
import AuthSwitch from "./authSwitch";
import Divider from "./Divider";
import Image from "next/image";
import Logo from "@/components/header/Logo";

const SignUpForm = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <form className="w-full h-full flex flex-col gap-2 p-0 sm:p-12 lg:p-16 items-center justify-center bg-white max-w-[500px]">
        <div className="flex flex-col items-start justify-start gap-2 mb-8 w-full">
          <Logo />
          <h3 className="text-primary text-xl lg:text-2xl font-medium">
            Create New Account
          </h3>
        </div>
        <div className="w-full flex items-center justify-between gap-3">
          <FormLabel
            htmlFor="firstname"
            id="firstname"
            title="firstname"
            labelname="firstname"
            type="text"
            placeholderText="John"
          />
          <FormLabel
            htmlFor="lastname"
            id="lastname"
            title="lastname"
            labelname="lastname"
            type="text"
            placeholderText="Doe"
          />
        </div>
        <FormLabel
          htmlFor="email"
          id="email"
          title="email"
          labelname="email"
          type="email"
          placeholderText="Example@mail.com"
        />
        <div className="w-full flex flex-col items-center justify-between gap-6">
          <FormLabel
            htmlFor="password"
            id="password"
            title="password"
            labelname="password"
            type="password"
            placeholderText="*********"
          />
          <FormLabel
            htmlFor="confirmpassword"
            id="confirmpassword"
            title="confirm password"
            labelname="onfirmpassword"
            type="password"
            placeholderText="*********"
          />
        </div>
        <Button className="w-full mt-2 text-background transition-opacity ease-in">
          Sign in
        </Button>
        <AuthSwitch
          text="Already have Account ?"
          href="/auth/sign-in"
          link="Signin"
        />
        <Divider content="OR" />
        <Button variant="ghost" className="text-sm font-medium text-stone-800">
          <Image
            src={Google}
            alt="google"
            width={20}
            height={20}
            className="mr-4"
          />
          Continue with Google
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
