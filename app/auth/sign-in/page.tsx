import SignInForm from "@/components/forms/auth/SignInForm";
import Image from "next/image";
import Ikbal from "@/public/assets/Ikbal.svg";

const SigninPage = () => {
  return (
    <div className=" lg:p-12 w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-0">
        <SignInForm />
        <div className="hidden lg:flex flex-col items-center justify-center gap-8 p-8 w-full h-full m-0 bg-gradient-to-bl from-accent to-secondary rounded-2xl">
          <Image
            src={Ikbal}
            alt=""
            width={500}
            height={500}
            className=" drop-shadow-3xl shadow-slate-50"
          />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
